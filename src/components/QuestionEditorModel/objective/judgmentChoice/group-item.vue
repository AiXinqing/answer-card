<template>
  <div class="single-choice-group question-group-item">
    <span>从</span>
    <el-input v-model.number="data.startNumber" size="mini" @blur="fireGroupChange"/>
    <span>题到</span>
    <el-input v-model.number="data.endNumber" size="mini" @blur="fireGroupChange"/>
    <span>题,每题</span>
    <el-input v-model.number="data.score" size="mini" @blur="fireGroupChange"/>
    <span>分,每题</span>
    <el-input
      v-model.number="data.optionLength"
      size="mini"
      disabled
    />
    <span>个选项</span>
    <i class="el-icon-delete" @click="$emit('remove', group)"></i>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true
    },

    question: {
      type: Object,
      required: true
    }
  },

  inject: ['sheet'],

  data () {
    return {
      data: {
        ...this.group
      },
      errorMessage: ''
    }
  },

  computed: {
    errorPrompt () {
      const { endNumber, score, startNumber } = this.data
      return endNumber <= 0 ? '结束题号必须大于0'
        : endNumber && startNumber === 0 ? '开始题号必须大于0'
          : endNumber && endNumber < startNumber ? '开始题号不能大于结束题号'
            : endNumber && !score ? '分数不能为空' : ''
    }
  },

  watch: {
    group () {
      this.data = {
        ...this.group
      }
    }
  },

  methods: {
    checkGroupValid () {
      this.errorMessage = this.errorPrompt
      if (this.errorMessage) return false

      const { startNumber, endNumber } = this.data
      const serialNumbers = Array.from({ length: endNumber - startNumber + 1 })
        .map((_, index) => index + startNumber)
      return serialNumbers.every(number => {
        if (this.group.uuid && (this.group.startNumber <= number && this.group.endNumber >= number)) return true
        const valid = this.sheet.isSubquestionSerialNumberVaild(number) &&
          !this.question.serialNumberSet.has(number)
        if (!valid) {
          this.errorMessage = `第${number}题已经存在，请勿重复添加`
        }
        return valid
      })
    },

    fireGroupChange () {
      this.checkGroupValid()

      if (this.errorMessage) {
        this.$emit('check-fail', this.errorMessage)
      } else {
        this.$emit('group-valid', { ...this.data })
      }
    }
  }
}
</script>
