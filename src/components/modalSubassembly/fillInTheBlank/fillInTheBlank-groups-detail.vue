<template>
  <div class="question-groups-detail">
    <div class="grouping-detail-info">
      <div class="question-number">1</div>
      <div class="question-info">
        <el-input v-model.number="data.score" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
        <span>分</span>
        <el-input v-model.number="data.select" size="mini"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"/>
        <span>个选项</span>
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
