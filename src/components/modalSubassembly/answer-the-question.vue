<template>
  <div class="question-content-warp">
    <!-- 题组 -->
    <answer-groups/>
    <!-- 分段渲染 -->
    <answer-groups-detail/>
    <div class="additional-conditions">
      <el-checkbox v-model="ShowScore">小题显示分数</el-checkbox>
      <el-checkbox v-model="HorizontalLine">生成解答题横线</el-checkbox>
    </div>
  </div>
</template>

<script>
import answerGroups from './answer/answer-groups'
import answerGroupsDetail from './answer/answer-groups-detail'
export default {
  components: {
    answerGroups,
    answerGroupsDetail
  },
  data () {
    return {
      ShowScore: false,
      HorizontalLine: false
    }
  }
}
</script>

<style lang="less">
  .additional-conditions{
    display: flex;
    margin: 10px 0;
  }
</style>
