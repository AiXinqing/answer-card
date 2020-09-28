<template>
  <div class="question-content-warp">
    <div class="layui-form">
      <div class="layui-form-item">
        <div class="label">每组题数:</div>
        <el-input v-model="question.groupSize" placeholder="请输入每组题数" />
      </div>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane
        v-for="(questionTab,index) in supported"
        :key="index"
        :label="questionTab.title"
        :quesiton-detail="questionTab"
      >

        <!-- 题组信息 -->
        <div class="question-group-wrap">
          <objective-question-groups
            ref="questionGroups"
            v-for="questionObj in questionTab.groups"
            :key="questionObj.uuid"
            :question-obj="questionObj"
            :question-type="questionTab.name"
            :sheet="sheet"
            :question="question"
          />
        </div>

        <!-- 分段小题 -->
        <div class="add-question-group">+ 分段添加小题</div>

        <!-- 小题详情 -->
        <div class="question-groups-detail">
          <grouping-question
            v-for="subQuestion in questionTab.subquestions"
            :key="subQuestion.uuid"
            :groups-question="subQuestion"
            :question-type="questionTab.name"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import objectiveQuestionGroups from './objective/objective-question-groups'
import groupingQuestion from './objective/grouping-question'
import ObjectiveQuestion from '@/models/question/objective'
import AnswerSheet from '@/models/answer-sheet'

export default {
  components: {
    objectiveQuestionGroups,
    groupingQuestion
  },
  props: {
    questionData: {
      type: ObjectiveQuestion,
      required: true
    },
    sheet: {
      type: AnswerSheet,
      required: true
    }
  },

  data () {
    return {
      question: new ObjectiveQuestion(this.questionData.toJSON()),
      draftGroup: null
    }
  },

  computed: {
    supported () {
      const { subquestions } = this.question
      const arr = []
      for (const i in subquestions) {
        arr.push({
          ...subquestions[i],
          name: i
        })
      }
      return arr
    }
  },

  watch: {
    questionData: {
      handler (question) {
        this.question = new ObjectiveQuestion(question.toJSON())
      }
    }
  },
  mounted () {
    this.initial()
  },
  methods: {
    initial () {
      const { subquestions } = this.question
      const questionObj = {
        startNumber: this.sheet.avaliableSubquestionSerialNumber,
        endNumber: null,
        score: null,
        optionLength: null
      }
      this.supported.forEach(question => {
        const Choice = question.name
        switch (Choice) {
          case 'multipleChoice':
            subquestions.multipleChoice.addGroup({
              ...questionObj,
              halfScore: null,
              uuid: Date.now() + 1
            })
            break
          default:
            subquestions.singleChoice.addGroup({
              ...questionObj,
              uuid: Date.now()
            })
        }
      })
    }
  }

}
</script>

<style lang="less">
  @import '~@/assets/css/publicColor.less';

  .el-tabs--border-card{
    box-shadow: 0 0px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);

    &>.el-tabs__header{

      .el-tabs__item{

        &.is-active{
          color:@main
        }

        &:not(.is-disabled):hover{
          color:@main
        }
      }
    }
  }
  .el-tabs__content{
    min-height:288px;
  }
  // 复选框
  .el-checkbox__inner{
    &:hover{
      border-color:@main
    }
  }
</style>
