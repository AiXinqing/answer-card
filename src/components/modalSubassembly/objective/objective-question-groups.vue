<template>
  <div class="question-group-item">
    <span>从</span>
    <el-input v-model.number="data.startNumber" size="mini" @blur="addGroupsQuestion"/>
    <span>题到</span>
    <el-input v-model.number="data.endNumber" size="mini" @blur="addGroupsQuestion"/>
    <span>题,每题</span>
    <!-- 多选 -->
    <template
      v-if="questionType =='multipleChoice'"
    >
      <el-input v-model.number="data.score" size="mini" @blur="addGroupsQuestion"/>
      <span>分,少选得</span>
      <el-input v-model.number="data.halfScore" size="mini" @blur="addGroupsQuestion"/>
      <span>分,每题</span>
    </template>

    <template v-else>
      <el-input v-model.number="data.score" size="mini" @blur="addGroupsQuestion"/>
      <span>分,每题</span>
    </template>
    <el-input
      v-model.number="data.optionLength"
      size="mini"
      :disabled="questionType == 's' ? true:false"
      @blur="addGroupsQuestion"
    />
    <span>个选项</span>
    <i class="el-icon-delete" @click="removeGroup()"></i>
  </div>
</template>

<script>
import AnswerSheet from '@/models/answer-sheet'
import ObjectiveQuestion from '@/models/question/objective'
export default {
  props: {
    questionObj: {
      type: Object,
      default: () => {}
    },
    questionType: {
      type: String,
      required: true
    },
    sheet: {
      type: AnswerSheet,
      required: true
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
  computed: {
    errormessage () {
      const { endNumber, score, startNumber } = this.data

      return endNumber === 0 ? '结束题号必须大于0'
        : endNumber !== '' && startNumber === 0 ? '开始题号必须大于0'
          : endNumber !== '' && endNumber < startNumber ? '开始题号不能大于结束题号'
            : endNumber !== '' && score === null ? '分数不能为空' : ''
    }
  },
  watch: {
    questionObj: {
      immediate: true,
      handler (question) {
        this.data = this.questionObj
      }
    }
  },
  methods: {
    addGroupsQuestion () {
      const { subquestions } = this.question
      const { endNumber } = this.data
      const verification = this.sheet.isSubquestionSerialNumberVaild(endNumber)

      this.$emit('form-validation', this.errormessage)
      if (this.errormessage !== '') {
        return false
      }

      if (verification && endNumber !== '') {
        switch (this.questionType) {
          case 'multipleChoice':
            subquestions.multipleChoice.updateGroup(this.data)
            break
          default:
            subquestions.singleChoice.updateGroup(this.data)
        }
      }
    },
    removeGroup () {
      const { subquestions } = this.question
      switch (this.questionType) {
        case 'multipleChoice':
          subquestions.multipleChoice.removeGroup(this.data)
          break
        default:
          subquestions.singleChoice.removeGroup(this.data)
      }
    }
  }
}
</script>

<style lang="less">

</style>
