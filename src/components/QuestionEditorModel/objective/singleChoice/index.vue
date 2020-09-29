<template>
  <div class="el-tab-panes">
    <!-- 题组信息 -->
    <!-- <div class="question-group-wrap">
      <SingleChoiceGroup
        ref="questionGroups"
        v-for="group in question.subquestions.singleChoice.groups"
        :key="group.uuid"
        :group="group"
        :question="question"
        @check-fail="error = $event"
        @group-valid="updateSingleChoiceGroup"
      />
      <SingleChoiceGroup
        v-if="draftGroup"
        ref="questionGroups"
        :group="draftGroup"
        :question="question"
        @check-fail="error = $event"
        @group-valid="addSingleChoiceGroup"
      />
    </div> -->

    <!-- 分段小题 -->
    <!-- <div
      class="add-question-group"
      @click="addGroups(questionTab.name)"
    >+ 分段添加小题</div> -->

    <!-- 小题详情 -->
    <!-- <div class="question-groups-detail">
      <grouping-question
        v-for="subQuestion in questionTab.subquestions"
        :key="subQuestion.uuid"
        :groups-question="subQuestion"
        :question-type="questionTab.name"
        :question="question"
      />
    </div> -->
  </div>
</template>

<script>
import ObjectiveQuestion from '@/models/question/objective'
import AnswerSheet from '@/models/answer-sheet'
export default {
  props: {
    questionData: {
      type: ObjectiveQuestion,
      required: true
    },
    question: {
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
      draftGroup: this.questionData.subquestions.singleChoice.groups.length
        ? null : {
          uuid: Date.now(),
          startNumber: this.sheet.avaliableSubquestionSerialNumber,
          endNumber: null,
          score: null,
          optionLength: 4
        }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
