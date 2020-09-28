<template>
  <div class="question-group-wrap">
    <div
      class="question-group-item"
      v-for="question in data"
      :key="question.uuid"
    >
      <span>从</span>
      <el-input v-model.number="question.startNumber" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>题到</span>
      <el-input v-model.number="question.endNumber" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>题,每题</span>
      <!-- 多选 -->
      <template
        v-if="questionType =='MultipleChoiceQuestion'"
      >
        <el-input v-model.number="question.score" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
        <span>分,少选得</span>
        <el-input v-model.number="question.halfScore" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
        <span>分,每题</span>
      </template>

      <template v-else>
        <el-input v-model.number="question.score" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
        <span>分,每题</span>
      </template>
      <el-input
        v-model.number="question.optionLength"
        size="mini"
        onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"
        :disabled="questionType == 's' ? true:false"
      />
      <span>个选项</span>
      <i class="el-icon-delete" ></i>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    groupsQuestion: {
      type: Array,
      default: () => []
    },
    questionType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: {}
    }
  },
  watch: {
    groupsQuestion: {
      immediate: true,
      handler (question) {
        this.data = this.groupsQuestion
      }
    }
  }
}
</script>

<style lang="less">

</style>
