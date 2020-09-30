<template>
  <div class="question_card">
    <div class="question-title">
      <span class="question-serialNumber">{{serialNumber}}. </span>
      <span class="question-title">{{question.title}}</span>
      <span class="question-score">(10)分</span>
    </div>
    <div class="question-content">
      <div class="question-editor">
        <span  class="btn_addSub_name">每组题数</span>
        <span class="btn_addSub" >-</span>
        <span class="btn_addSub_info">{{question.groupSize}}</span>
        <span class="btn_addSub">+</span>
        <span class="layui-btn layui-btn-xs">编辑</span>
        <span class="layui-btn layui-btn-xs">删除</span>
      </div>
      <div class="question-choice">
        <div class="question-choice-list">
          <div class="question-choice-item">
            <span class=""></span>
          </div>
        </div>
      </div>
    </div>
    <!-- {{questionList}} -->
  </div>
</template>

<script>
import { QUESTION_NUMBERS } from '@/models/question'
export default {
  props: {
    question: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    questionList () {
      console.log(this.question)
      return this.question
    },

    serialNumber () {
      return QUESTION_NUMBERS[this.question.serialNumber] || 'yi'
    }
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/questionModal.less';

</style>
