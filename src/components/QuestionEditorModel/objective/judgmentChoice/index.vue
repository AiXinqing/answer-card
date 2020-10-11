<template>
  <div class="el-tab-panes">
    <!-- 题组信息 -->
    <div class="question-group-wrap">
      <JudgmentChoiceGroup
        ref="questionGroups"
        v-for="group in question.subquestions.judgmentChoice.groups"
        :key="group.uuid"
        :group="group"
        :question="question"
        @check-fail="error = $event"
        @group-valid="updateGroup"
        @remove="removeGroup"
      />
      <JudgmentChoiceGroup
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
        v-for="choice in question.subquestions.judgmentChoice.subquestions"
        :key="choice.serialNumber"
        :question="choice"
      />
    </div>
  </div>
</template>

<script>
import ObjectiveQuestion from '@/models/question/objective'
import JudgmentChoiceGroup from './group-item'
import questionItem from './question-item'
import switchChoice from '@/models/question/choice/switch-choice'

export default {
  components: {
    JudgmentChoiceGroup,
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

  created () {
    if (!this.question.subquestions.judgmentChoice.groups.length) {
      this.addDraftGroup()
    }
  },

  watch: {
    error () {
      this.$emit('check-fail', this.error)
    }
  },

  methods: {
    resetDraftGroup () {
      if (this.draftGroup) {
        this.draftGroup = {
          ...this.draftGroup,
          startNumber: this.question.avaliableSubquestionSerialNumber
        }
      }
    },

    addGroup (group) {
      this.error = ''
      this.draftGroup = null
      this.question.subquestions.judgmentChoice.addGroup({
        ...group,
        uuid: Date.now()
      })
    },

    updateGroup (group) {
      this.error = ''
      this.question.subquestions.judgmentChoice.updateGroup(group)
    },

    removeGroup (group) {
      this.error = ''
      if (group.uuid) {
        this.question.subquestions.judgmentChoice.removeGroup(group)
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
          startNumber: this.question.avaliableSubquestionSerialNumber,
          endNumber: null,
          score: null,
          optionLength: switchChoice.MaxOptionLength
        }
      }
    }
  }
}
</script>
