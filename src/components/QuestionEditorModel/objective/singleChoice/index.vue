<template>
  <div class="el-tab-panes">
    <!-- 题组信息 -->
    <div class="question-group-wrap">
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
    </div>

    <!-- 分段小题 -->
    <div
      class="add-question-group"
      @click="addGroups"
    >+ 分段添加小题</div>

    <!-- 小题详情 -->
    <div class="question-groups-detail">
      <group-list
        v-for="subQuestion in questionList"
        :key="subQuestion.uuid"
        :groups-question="subQuestion"
        :question="question"
      />
    </div>
  </div>
</template>

<script>
import ObjectiveQuestion from '@/models/question/objective'
import AnswerSheet from '@/models/answer-sheet'
import SingleChoiceGroup from './group-item'
import groupList from './question-list'

export default {
  components: {
    SingleChoiceGroup,
    groupList
  },
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
    },
    questionList: {
      type: Array,
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
        },
      error: ''
    }
  },
  watch: {
    error () {
      this.$emit('check-fail', this.error)
    }
  },
  methods: {
    addSingleChoiceGroup (group) {
      this.error = ''
      this.draftGroup = null
      this.question.subquestions.singleChoice.addGroup(group)
    },

    updateSingleChoiceGroup (group) {
      this.error = ''
      this.question.subquestions.singleChoice.updateGroup(group)
    },

    addGroups () {

    }
  }
}
</script>
