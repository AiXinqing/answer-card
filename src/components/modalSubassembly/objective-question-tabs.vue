<template>
  <div class="question-content-warp">
    <div class="layui-form">
      <div class="layui-form-item">
        <div class="label">每组题数:</div>
        <el-input v-model="tabPaneData[0].groupSize" placeholder="请输入每组题数" />
      </div>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane
        v-for="(tabPane,index) in tabPaneData"
        :key="index"
        :label="tabPane.title"
        :quesiton-detail="tabPane"
      >

        <!-- 题组信息 -->
        <objective-question-groups ref="questionGroups"/>

        <!-- 分段小题 -->
        <div class="add-question-group">+ 分段添加小题</div>

        <!-- 小题详情 -->
        <grouping-question/>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import objectiveQuestionGroups from './objective/objective-question-groups'
import groupingQuestion from './objective/grouping-question'
import ObjectiveQuestion from '@/models/question/objective'
export default {
  components: {
    objectiveQuestionGroups,
    groupingQuestion
  },
  props: {
    questionData: {
      type: ObjectiveQuestion,
      required: true
    }
  },
  computed: {
    tabPaneData () {
      const arr = []
      const { subquestions } = this.questionData
      for (const i in subquestions) {
        arr.push(subquestions[i]) // 属性
      }
      return arr
    }
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/publicColor.less';
  .question-content-warp{

    //题型-题组
    .add-question-group{
      color: @main;
      cursor: pointer;
      width: 100px;
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
