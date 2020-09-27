<template>
  <div class="question-group-wrap">
    <div class="question-group-item">
      <span>从</span>
      <el-input v-model.number="data.start" size="mini"    onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>题到</span>
      <el-input v-model.number="data.end" size="mini"   onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>题,每空</span>
      <el-input v-model.number="data.score" size="mini"   onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>分,每题</span>
      <el-input v-model.number="data.space" size="mini"   onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>空</span>
      <i class="el-icon-delete" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: { }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
