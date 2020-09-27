<template>
  <div class="question-content-warp">
    <div class="layui-form">
      <div class="layui-form-item">
        <div class="label">每组题数:</div>
        <el-input v-model="data.groupSize" placeholder="请输入每组题数" />
      </div>
    </div>

    <!-- 填空题题组 -->
    <fill-in-the-blank-groups/>

    <!-- 分段小题 -->
    <div class="add-question-group">+ 分段添加小题</div>

    <!-- 小题详情 -->

  </div>
</template>

<script>
import fillInTheBlankGroups from './objective/fillInTheBlank-groups'
export default {
  components: {
    fillInTheBlankGroups
  },
  data () {
    return {
      data: {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
