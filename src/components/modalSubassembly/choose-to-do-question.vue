<template>
  <div class="question-content-warp">
    <!-- 题组 -->
    <choose-grouping/>
    <!-- 分段渲染 -->
    <choose-group-detail/>
    <div class="additional-conditions">
      <el-checkbox v-model="ShowScore">小题显示分数</el-checkbox>
    </div>
  </div>
</template>

<script>
import chooseGrouping from './choose/choose-grouping'
import chooseGroupDetail from './choose/choose-groups-detail'
export default {
  components: {
    chooseGrouping,
    chooseGroupDetail
  },
  data () {
    return {
      ShowScore: false
    }
  }
}
</script>

<style lang="less" scoped>
  .additional-conditions{
    display: flex;
    margin: 10px 0;
  }
</style>
