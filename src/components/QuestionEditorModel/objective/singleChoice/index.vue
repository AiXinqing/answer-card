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
        @group-valid="updateGroup"
        @remove="removeGroup"
      />
      <SingleChoiceGroup
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
      <question-item
        v-for="choice in question.subquestions.singleChoice.subquestions"
        :key="choice.serialNumber"
        :question="choice"
      />
    </div>
  </div>
</template>

<script>
import ObjectiveQuestion from '@/models/question/objective'
import SingleChoiceGroup from './group-item'
import questionItem from './question-item'

export default {
  components: {
    SingleChoiceGroup,
    questionItem
  },

  inject: ['sheet'],

  props: {
    question: {
      type: ObjectiveQuestion,
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
    if (!this.question.subquestions.singleChoice.groups.length) {
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
      this.question.subquestions.singleChoice.addGroup({
        ...group,
        uuid: Date.now()
      })
    },

    updateGroup (group) {
      this.error = ''
      this.question.subquestions.singleChoice.updateGroup(group)
    },

    removeGroup (group) {
      this.error = ''
      if (group.uuid) {
        this.question.subquestions.singleChoice.removeGroup(group)
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
          optionLength: 4
        }
      }
    }
  }
}
</script>
