<template>
  <div class="basic-set-content">
    <div class="basis-title">
      <span>设置答题卡基础信息</span>
    </div>
    <div class="basis_checkbox">
      <el-checkbox v-model="checked">分区答题卡</el-checkbox>
    </div>
    <div class="basis_checkbox basic_btn" style="padding-left:5px">
      <hj-button @click="questionDialog">客观题</hj-button>
    </div>
    <div class="basis_checkbox basic_btn save-btn">
      <hj-button type="primary">预览</hj-button>
      <hj-button type="primary">保存</hj-button>
      <hj-button type="primary">下载</hj-button>
    </div>
    <question-editor-modal
      v-if="sheet"
      ref="hehe"
      :sheet="sheet"
    />
  </div>
</template>

<script>
import AnswerSheet from '@/models/answer-sheet'
import ObjectiveQuestion from '@/models/question/objective'
import hjButton from '@/components/elementUi/button'
import questionEditorModal from '@/components/QuestionEditorModel/'

export default {
  components: {
    hjButton,
    questionEditorModal
  },

  props: {
    sheet: {
      type: AnswerSheet,
      defualt: new AnswerSheet()
    }
  },

  provide () {
    return {
      sheet: this.sheet
    }
  },

  data () {
    return {
      checked: false
    }
  },

  methods: {
    questionDialog () {
      this.$refs.hehe.open(new ObjectiveQuestion({
        serialNumber: this.sheet.avaliableQuestionSerialNumber,
        subquestions: {
          singleChoice: {
            groups: [],
            subquestions: []
          },
          multipleChoice: {
            groups: [],
            subquestions: []
          },
          judgmentChoice: {
            groups: [],
            subquestions: []
          }
        }
      }, this.sheet))
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .basis-title {
    border-left: none;
    border-right: none;
    background-color: @bf-f7;
    height: 40px;
    line-height: 40px;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    padding: 0 30px;
    border-bottom: 1px solid @bs-e3;
  }
  .basis_checkbox {
    padding: 20px 0;
    border-bottom: 1px solid @shadow;
    display: flex;
    flex-wrap: wrap;
    padding-left: 15px;
    button.el-button.el-button--default{
      width: 90px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
  .el-button--medium {
    padding: 0 0;
    width: 90px;
    padding: 0;
    height: 38px;
    line-height: 36px;
  }
</style>
