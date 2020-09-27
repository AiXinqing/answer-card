<template>
  <div class="question-content-warp">
    <div class="layui-form">
      <div class="layui-form-item">
        <div class="label">小题题号:</div>
        <el-input v-model="data.topic" placeholder="请输入小题题号" />
        <div class="unit">题</div>
      </div>
    </div>
    <div class="layui-form">
      <div class="layui-form-item">
        <div class="label">分数:</div>
        <el-input v-model="data.score" placeholder="请输入分数" />
        <div class="unit">分</div>
      </div>
    </div>
    <div class="layui-form">
      <div class="layui-form-item">
        <div class="label">作文行数:</div>
        <el-input v-model="data.row" placeholder="请输入作文行数" />
        <div class="unit">行</div>
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

<style lang="less" scoped>
  .unit{
    margin-left: 10px
  }
</style>
