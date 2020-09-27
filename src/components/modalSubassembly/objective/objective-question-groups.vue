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
    <!-- <div class="question-group-item">
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
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    quesitonDetail: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less">

</style>
