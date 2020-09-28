<template>
  <div class="question-groups-detail">
    <div
      class="grouping-detail-info"
      v-for="question in data"
      :key="question.uuid"
    >
      <div class="question-number">1</div>
      <div class="question-info">
        <!-- 多选 -->
        <template v-if="questionType =='MultipleChoiceQuestion'">
          <el-input v-model.number="question.halfScore" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
          <span>分,少选得</span>
          <el-input v-model.number="question.score" size="mini"  :max="data.score" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" />
          <span>分</span>
        </template>

        <template v-else>
          <el-input v-model.number="question.score" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
          <span>分</span>
        </template>

        <el-input
          v-model.number="question.optionLength"
          size="mini"
          :disabled="questionType == 's' ? true:false"
          onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"
        />
        <span>个选项</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupsQuestion: {
      type: Array,
      default: () => []
    },
    questionType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: {}
    }
  },
  watch: {
    groupsQuestion: {
      immediate: true,
      handler (question) {
        this.data = this.groupsQuestion
      }
    }
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/publicColor.less';
  .question-groups-detail{

    .grouping-detail-info{
      display: flex;
      align-items:center;
      height: 39px;
      line-height: 39px;
      border-bottom: 1px solid @font-888;
      font-size: 14px;
      position: relative;

      &:last-child{
        border-bottom: none;
      }

      .question-number{
        width: 120px;
        flex-shrink: 0;
        order:0;
        text-indent: 1em;
      }

      .question-info{
        flex-shrink: 1;
        align-self: end;
        order:1;
        text-align: center;
        display: flex;
        justify-content:end;
        position: absolute;
        right: 0;

        span{
          margin: 0 8px;
        }

        .el-input{
          &.el-input--mini{
            width: 60px;

            .el-input__inner{
              padding: 0 0;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
