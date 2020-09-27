<template>
  <div class="question-groups-detail">
    <div class="grouping-detail-info">
      <div class="question-number">1</div>
      <div class="question-info">
        <el-input v-model.number="data.score" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
        <span>分</span>
        <el-input v-model.number="data.select" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
        <span>个选项</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
