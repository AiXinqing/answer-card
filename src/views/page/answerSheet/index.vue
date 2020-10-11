<template>
  <div class="page-container">
    <div
      :style="pageSize"
      class="page_number_content"
    >
      <answer-sheet-info
        @open-student-info-dialog="openStudentInfoDialog"
      />
      <div class="questions">
        <question-item
          v-for="question in questions"
          :key="question.id"
          :question="question"
          @height-resize="handleResize($event, question)"
        />
      </div>
    </div>
    <student-info-editor-modal
      ref="studentInfoEditorModal"
      :student="sheet.student"
    />
  </div>
</template>

<script>
import AnswerSheet, { PAGE_SIZE } from '@/models/answer-sheet'
import AnswerSheetInfo from './answerSheetInfo'
import studentInfoEditorModal from '@/components/student-info-editor-modal'
import QuestionItem from './question-item'

export default {
  components: {
    AnswerSheetInfo,
    studentInfoEditorModal,
    QuestionItem
  },

  props: {
    sheet: {
      type: AnswerSheet,
      required: true
    }
  },

  data () {
    return {
      questions: [
        {
          id: 1,
          height: 200
        },
        {
          id: 2,
          height: 300
        },
        {
          id: 3,
          height: 300
        }
      ]
    }
  },

  computed: {
    pageSize () {
      return {
        width: `${this.sheet.sheetSize}px`,
        height: `${PAGE_SIZE}px`
      }
    }
  },

  provide () {
    return {
      sheet: this.sheet
    }
  },

  methods: {
    openStudentInfoDialog () {
      this.$refs.studentInfoEditorModal.open()
    },

    handleResize (height, question) {
      question.height = height
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
