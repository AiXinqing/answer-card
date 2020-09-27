<template>
  <div class="question-group-wrap">
    <div class="question-group-item answer">
      <span>从</span>
      <el-input v-model.number="data.start" size="mini"   onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span class="p-5"> 题到 </span>
      <el-input v-model.number="data.end" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span class="p-5"> 题 </span>
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

<style lang="less">
.question-group-wrap{
  .question-group-item{
    &.answer{
      .el-input{
        &.el-input--mini{
          width: 68px;
        }
      }
    }
  }
}
</style>
