<template>
  <div class="objective-tabs-warp">
    <el-tabs type="border-card">
      <el-tab-pane
        v-for="(tabPane,index) in tabPaneData"
        :key="index"
        :label="tabPane"
      >

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabPaneData: ['单选框', '多选框', '判断']
    }
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/publicColor.less';
  .objective-tabs-warp{
    margin-top:20px;
  }
  .el-tabs--border-card{
    box-shadow: 0 0px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);

    &>.el-tabs__header{

      .el-tabs__item{

        &.is-active{
          color:@main
        }

        &:not(.is-disabled):hover{
          color:@main
        }
      }
    }
  }
  .el-tabs__content{
    min-height:288px;
  }
  // 复选框
  .el-checkbox__inner{
    &:hover{
      border-color:@main
    }
  }
</style>
