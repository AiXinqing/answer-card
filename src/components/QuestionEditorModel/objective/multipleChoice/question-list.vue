<template>
  <div
    class="grouping-detail-info"
  >
    <div class="question-number">{{data.serialNumber}}</div>
    <div class="question-info">
      <el-input v-model.number="data.halfScore" size="mini" @blur="updateSubquestion" />
      <span>分,少选得</span>
      <el-input v-model.number="data.score" size="mini" @blur="updateSubquestion" :max="data.score" />
      <span>分</span>
      <el-input
        v-model.number="data.optionLength"
        size="mini"
        @blur="updateSubquestion"
      />
      <span>个选项</span>
    </div>
  </div>
</template>

<script>
import ObjectiveQuestion from '@/models/question/objective'
export default {
  props: {
    groupsQuestion: {
      type: Object,
      default: () => {}
    },
    question: {
      type: ObjectiveQuestion,
      required: true
    }
  },
  data () {
    return {
      data: {}
    }
  },
  watch: {
    groupsQuestion: {
      immediate: true,
      handler (question) {
        this.data = this.groupsQuestion
      }
    }
  },
  methods: {
    updateSubquestion () {
      const { subquestions } = this.question
      subquestions.singleChoice.updateSubquestion(this.data)
    }
  }
}
</script>
