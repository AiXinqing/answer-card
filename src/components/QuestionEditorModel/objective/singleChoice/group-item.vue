<template>
  <div class="single-choice-group question-group-item">
    <span>从</span>
    <el-input v-model.number="data.startNumber" size="mini" @blur="checkGroupValid"/>
    <span>题到</span>
    <el-input v-model.number="data.endNumber" size="mini" @blur="checkGroupValid"/>
    <span>题,每题</span>
    <el-input v-model.number="data.score" size="mini" @blur="checkGroupValid"/>
    <span>分,每题</span>
    <el-input
      v-model.number="data.optionLength"
      size="mini"
      @blur="checkGroupValid"
    />
    <span>个选项</span>
    <i class="el-icon-delete" @click="$emit('remove', {group:group,formal:formal})"></i>
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
    },
    formal: {
      type: Boolean,
      default: true
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

  watch: {
    group () {
      this.data = {
        ...this.group
      }
    },

    errorMessage (message) {
      if (message) {
        this.$emit('check-fail', message)
      } else {
        this.$emit('group-valid', { ...this.data })
      }
    }
  },

  methods: {
    checkGroupValid () {
      this.errorMessage = ''
      const { startNumber, endNumber, score } = this.data
      if (startNumber <= 0) {
        this.errorMessage = '开始题号必须大于0'
        return
      }
      if (endNumber <= 0) {
        this.errorMessage = '结束题号必须大于0'
        return
      }
      if (startNumber > endNumber) {
        this.errorMessage = '开始题号不能大于结束题号'
        return
      }
      if (!score) {
        this.errorMessage = '分数不能为空'
        return
      }
      const serialNumbers = Array.from({ length: endNumber - startNumber + 1 })
        .map((_, index) => index + startNumber)
      return serialNumbers.every(number => {
        const valid = this.sheet.isSubquestionSerialNumberVaild(number) &&
          !this.question.serialNumberSet.has(number)
        if (!valid) {
          this.errorMessage = `第${number}题已经存在，请勿重复添加`
        }
        return valid
      })
    }
  }
}
</script>
