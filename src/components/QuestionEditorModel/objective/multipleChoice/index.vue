<template>
  <div class="el-tab-panes">
    <!-- 题组信息 -->
    <div class="question-group-wrap">
      <multipleChoiceGroup
        ref="questionGroups"
        v-for="group in question.subquestions.multipleChoice.groups"
        :key="group.uuid"
        :group="group"
        :question="question"
        @check-fail="error = $event"
        @group-valid="updateGroup"
        @remove="removeGroup"
      />
      <multipleChoiceGroup
        v-if="draftGroup"
        ref="questionGroups"
        :group="draftGroup"
        :question="question"
        @check-fail="error = $event"
        @group-valid="addGroup"
        @remove="removeGroup"
      />
    </div>

    <!-- 分段小题 -->
    <div
      class="add-question-group"
      @click="addDraftGroup"
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
import multipleChoiceGroup from './group-item'
import groupList from './question-list'

export default {
  components: {
    multipleChoiceGroup,
    groupList
  },
  props: {
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
      draftGroup: null,
      error: ''
    }
  },

  computed: {
    avaliableSubquestionSerialNumber () {
      let number = this.sheet.avaliableSubquestionSerialNumber
      while (
        !this.sheet.isSubquestionSerialNumberVaild(number) ||
        !this.question.isSerialNumberValid(number)
      ) {
        number += 1
      }
      return number
    }
  },

  created () {
    if (!this.question.subquestions.multipleChoice.groups.length) {
      this.addDraftGroup()
    }
  },

  watch: {
    error () {
      this.$emit('check-fail', this.error)
    }
  },
  methods: {
    addGroup (group) {
      this.error = ''
      this.draftGroup = null
      this.question.subquestions.multipleChoice.addGroup({
        ...group,
        uuid: Date.now()
      })
    },

    updateGroup (group) {
      this.error = ''
      this.question.subquestions.multipleChoice.updateGroup(group)
    },

    removeGroup (group) {
      this.error = ''
      if (group.uuid) {
        this.question.subquestions.multipleChoice.removeGroup(group)
      } else {
        this.draftGroup = null
      }
    },

    addDraftGroup () {
      if (this.draftGroup) {
        this.$message({
          message: '已有分段,请添加完小题后,再添加',
          type: 'warning'
        })
      } else {
        this.draftGroup = {
          startNumber: this.avaliableSubquestionSerialNumber,
          endNumber: null,
          score: null,
          halfScore: null,
          optionLength: 4
        }
      }
    }
  }
}
</script>
