<template>
  <div class="page-container">
    <div
      :style="pageSize"
      class="page_number_content"
    >
      <answer-sheet-info
        @open-student-info-dialog="openStudentInfoDialog"
      />

      <objective-question
        v-for="(question,index) in questions"
        :key="index + Date.now()"
        :question="question"
      />

    </div>
    <student-info-editor-modal
      ref="studentInfoEditorModal"
      :student="sheet.student"
    />
  </div>
</template>

<script>
import AnswerSheet, { PAGE_SIZE } from '@/models/answer-sheet'
import AnswerSheetInfo from '../answerSheet/answerSheetInfo'
import studentInfoEditorModal from '@/components/student-info-editor-modal'
import objectiveQuestion from './objective'

export default {
  components: {
    AnswerSheetInfo,
    studentInfoEditorModal,
    objectiveQuestion
  },

  props: {
    sheet: {
      type: AnswerSheet,
      required: true
    }
  },

  provide () {
    return {
      sheet: this.sheet
    }
  },

  computed: {
    pageSize () {
      return {
        width: `${this.sheet.sheetSize}px`,
        height: `${PAGE_SIZE}px`
      }
    },

    questions () {
      return this.sheet.questions
    }
  },

  methods: {
    openStudentInfoDialog () {
      this.$refs.studentInfoEditorModal.open()
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .page-container{
    position: relative;
    padding-top: 30px;
    width: calc(100% - 330px);
    height: calc(100% - 20px);
    overflow: auto;
    float: left;

    .page_number_content{
      border: 1px solid @font-333;
      overflow: hidden;
      background: @white;
      border-radius: 3px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 20px;
      .question_card{
        position: relative;
        width: calc(100% - 38px);
        margin-left: 19px;
        margin-top: 20px;
      }
    }
  }
</style>
