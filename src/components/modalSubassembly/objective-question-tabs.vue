<template>
  <div class="objective-tabs-warp">
    <el-tabs type="border-card">
      <el-tab-pane
        v-for="(tabPane,index) in tabPaneData"
        :key="index"
        :label="tabPane"
      >
      <!-- 题组信息 -->
      <objective-question-groups ref="questionGroups"/>
      <!-- 分段小题 -->
      <div class="add-question-group">+ 分段添加小题</div>
      <!-- 小题详情 -->
      <div class="question-groups-detail"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import objectiveQuestionGroups from './objective-question-groups'
export default {
  components: {
    objectiveQuestionGroups
  },
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

    //题型-题组
    .add-question-group{
      color: @main;
      cursor: pointer;
      width: 100px;
    }

    .question-groups-detail{
      width: 100%;
      height: 200px;
      overflow: auto;
      border: 1px solid @font-888;
      margin-top: 15px;
    }
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
