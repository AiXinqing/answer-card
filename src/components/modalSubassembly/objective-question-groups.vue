<template>
  <div class="question-group-wrap">
    <div class="question-group-item">
      <span>从</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>题到</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>题,每题</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
      <span>分,每题</span>
      <el-input v-model.number="input" size="mini"   onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>个选项</span>
      <i class="el-icon-delete" ></i>
    </div>
    <div class="question-group-item">
      <span>从</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>题到</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>题,每题</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>分,少选</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>得分,每题</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>个选项</span>
      <i class="el-icon-delete"></i>
    </div>
    <div class="question-group-item">
      <span>从</span>
      <el-input v-model.number="input"  size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>题到</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>题,每题</span>
      <el-input v-model.number="input" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
      <span>分,每题</span>
      <el-input v-model.number="input" disabled size="mini"  />
      <span>个选项</span>
      <i class="el-icon-delete"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/publicColor.less';
  .question-group-wrap{

    .question-group-item{
      display: flex;
      align-items:center;
      margin-bottom: 20px;
      position: relative;

      >.el-input--mini{
        width:46px;
        margin:0 5px;
        font-size:14px;
      }

      .el-input__inner{
        padding:0 0;
        text-align: center;
      }

      .el-icon-delete{
        position: absolute;
        right: 0;
        font-size: 16px;
        margin-top: 1px;
      }
    }

  }
</style>
