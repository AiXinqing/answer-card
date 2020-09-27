<template>
  <div class="question-group-wrap">
    <div class="question-group-item choose">
      <span>几选几:</span>
      <el-input v-model.number="data.choices" size="mini"   onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span> 选 </span>
      <el-input v-model.number="data.select" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span> ;每题 </span>
      <el-input v-model.number="data.score" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span> 分;题号 </span>
      <el-input v-model.number="data.start" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span> 到</span>
      <el-input v-model.number="data.end" size="mini" disabled  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
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

<style lang="less" scoped>
  .question-group-wrap{
    margin-top: 20px;
    .question-group-item{
      &.choose{

        .el-input{
          &.el-input--mini{
            width: 68px;
          }
        }
      }
    }
  }
</style>
