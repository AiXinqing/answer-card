<template>
  <div class="question-content-warp">
    <div class="layui-form">
      <div class="layui-form-item">
        <div class="label">每组题数:</div>
        <el-input v-model="question.groupSize" placeholder="请输入每组题数" />
      </div>
    </div>
    <!-- 禁止切换tabs -->
    <div class="no-switching-tabs" v-if="noSwitchingTabs" />
    <el-tabs type="border-card">
      <el-tab-pane
        v-for="(questionTab,index) in supported"
        :key="index"
        :label="questionTab.title"
        :quesiton-detail="questionTab"
      >
        <component
          :is="questionTab.name"
          :key="questionTab.title"
          :question="question"
          :sheet="sheet"
          @check-fail="error = $event"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import ObjectiveQuestion from '@/models/question/objective'
import AnswerSheet from '@/models/answer-sheet'
import singleChoice from './singleChoice'
import multipleChoice from './multipleChoice'
import judgmentChoice from './judgmentChoice'

export default {
  components: {
    singleChoice,
    multipleChoice,
    judgmentChoice
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
      error: '',
      disabled: true
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
    },
    noSwitchingTabs () {
      return Boolean(this.error)
    }
  },

  watch: {
    questionData: {
      handler (question) {
        this.question = new ObjectiveQuestion(question.toJSON())
      }
    },

    error () {
      this.$emit('form-validation', this.error)
    },

    supported () {
      const index = this.supported.findIndex(question => question.groups.length > 0)
      if (index > -1) {
        this.disabled = false
      } else { this.disabled = true }
      this.$emit('confirm-button', this.disabled)
    }
  }

}
</script>

<style lang="less">
  @import '~@/assets/css/publicColor.less';
  .question-content-warp{
    position: relative;

    .no-switching-tabs{
      position: absolute;
      height: 39px;
      background-color: transparent;
      margin-top: 0;
      width: 100%;
      z-index: 9999;
    }
  }

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
  .question-groups-detail{

    .grouping-detail-info{
      display: flex;
      align-items:center;
      height: 39px;
      line-height: 39px;
      border-bottom: 1px solid @font-888;
      font-size: 14px;
      position: relative;

      &:last-child{
        border-bottom: none;
      }

      .question-number{
        width: 120px;
        flex-shrink: 0;
        order:0;
        text-indent: 1em;
      }

      .question-info{
        flex-shrink: 1;
        align-self: flex-end;
        order:1;
        text-align: center;
        display: flex;
        justify-content:flex-end;
        position: absolute;
        right: 0;

        span{
          margin: 0 8px;
        }

        .el-input{
          &.el-input--mini{
            width: 60px;

            .el-input__inner{
              padding: 0 0;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
