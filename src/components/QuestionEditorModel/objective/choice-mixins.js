import ObjectiveQuestion from '@/models/question/objective'
import ChoiceQuestion from '@/models/question/choice_question'

export const IndexMixins = {
  inject: ['sheet'],

  props: {
    question: {
      type: ObjectiveQuestion,
      required: true
    },
    choice: {
      type: ChoiceQuestion,
      required: true
    }
  },

  data () {
    return {
      error: '',
      draftGroup: null
    }
  },

  created () {
    if (!this.choice.groups.length) {
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
      this.choice.addGroup({
        ...group,
        uuid: Date.now()
      })
    },

    updateGroup (group) {
      this.error = ''
      this.choice.updateGroup(group)
    },

    removeGroup (group) {
      this.error = ''
      if (group.uuid) {
        this.choice.removeGroup(group)
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
        this.draftGroup = this.gennerateDraftGroup()
      }
    },

    gennerateDraftGroup () {
      return {}
    }
  }
}

export const GroupMixins = {

}
