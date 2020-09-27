<template>
  <hj-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="'620px'"
    :before-close="cancel"
  >
    <div class="question-edit-wrap">
      <!-- 题型参数 -->
      <div class="layui-form">
        <div class="layui-form-item">
          <div class="label">大题题号:</div>
          <hj-select
            :items="options"
            size="mini"
            v-model="questionIndex"
          ></hj-select>
        </div>
        <div
          class="layui-form-item long"
          v-if="question"
        >
          <div class="label">题目:</div>
          <el-input v-model="question.title" placeholder="请输入内容" />
        </div>
      </div>
      <!-- <div class="layui-form">
        <div class="layui-form-item">
          <div class="label">每组题数:</div>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>
      </div> -->
      <!-- 客观题tabs -->
      <objective-question-tabs ref="objectiveTabs"/>
      <!-- 插入操作 -->
      <!-- <div class="insert-wrap">
        <el-checkbox v-model="insert">插入添加题目</el-checkbox>
        <div class="insert-select">
          <span>插入到第</span>
          <hj-select
            :items="insertOptions"
            size="mini"
            :value="1"
            @change="hanldeSelect"
          ></hj-select>
          <span>大题后</span>
        </div>
        <el-checkbox v-model="postpone">大题号自动顺延</el-checkbox>
      </div> -->
    </div>
    <div class="dialog-footer ">
      <hj-button type="cancel"  class="cancel"  @click="cancel">取 消</hj-button>
      <hj-button type="cancel"  class="confirm"  @click="handleDetermine">确 定</hj-button>
    </div>
  </hj-dialog>
</template>

<script>
import AnswerSheet from '@/models/answer-sheet'
import { QUESTION_NUMBERS } from '@/models/question'
import hjDialog from '@/components/elementUi/dialog'
import hjSelect from '@/components/elementUi/select'
import hjButton from '@/components/elementUi/button'
import objectiveQuestionTabs from './modalSubassembly/objective-question-tabs'

export default {
  components: {
    hjSelect,
    hjDialog,
    hjButton,
    objectiveQuestionTabs
  },
  props: {
    sheet: {
      type: AnswerSheet,
      required: true
    }
  },
  data () {
    return {
      question: null,
      dialogVisible: false,
      options: QUESTION_NUMBERS.map((label, value) => ({
        label,
        value
      })),
      insertOptions: [
        {
          value: 1,
          label: '一.选择题'
        }
      ],
      insert: true,
      postpone: false
    }
  },
  computed: {
    title () {
      return this.isNewQuestion ? '新增客观题' : '编辑题目'
    },

    isNewQuestion () {
      if (!this.question) return true
      return !this.sheet.questions[this.question.serialNumber]
    },

    questionIndex: {
      get () {
        return (this.question && this.question.serialNumber) || 0
      },
      set (number) {
        if (this.sheet.questions[number]) {
          console.warn(`大题号${number}已经存在`)
        } else {
          this.question.serialNumber = number
        }
      }
    }
  },
  methods: {
    cancel () {
      this.close()
    },
    close () {
      this.dialogVisible = false
    },
    open (question) {
      this.question = question
      this.dialogVisible = true
    },
    handleDetermine () {
      this.sheet.addQuestion(this.question)
      this.close()
    }
  }
}
</script>

<style lang="less" >
  @import '~@/assets/css/publicColor.less';
  .layui-form{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .layui-form-item{
      width: 50%;
      display: flex;
      align-items:center;

      .el-input__inner{
        height: 30px;
      }
      .label{
        width: 80px;
      }

      & >.el-input{
        width: calc(100% - 130px)
      }
      .el-select{
        width: calc(100% - 130px)
      }
      &.long{
        .el-input{
          width: calc(100% - 60px)
        }
      }
    }

    &:nth-child(n+2){
      margin-top: 20px;
    }
  }
  // 插入操作样式
  .insert-wrap{
    display:flex;
    align-items:center;
    margin-top:10px;

    .insert-select{
      width:260px;

      .el-select{
        margin:0 5px;
        width: 130px;
      }
    }
  }
</style>
