<template>
  <div class="layout-content">
    <div class="total-score">
      <span>当前总分:</span>
      <span class="score_style">0</span>
      <span>分</span>
    </div>
    <div class="layout-setting">
      <div class="layout-top">
        <span>布局</span>
        <span class="layout-edit">修改</span>
      </div>
      <div class="layout-bottom">
        <div>A3/B4/8K纸</div>
        <div>两栏</div>
        <!-- <div>线上阅卷</div> -->
      </div>
    </div>
    <setting-modal/>
  </div>
</template>

<script>
import settingModal from '@/components/setting-modal'
export default {
  components: {
    settingModal
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .layout-content{
    position: fixed;
    top: 90px;
    left: 10px;
  }
  .total-score{
    font-size: 14px;
    .score_style{
      font-size: 18px;
      font-weight: 500;
      margin: 0 5px;
      color: @main
    }
  }
  .layout-setting{
    border: 1px solid @main;
    min-width: 93px;
    background: @white;
    margin-top: 10px;
    font-size: 14px;
    .layout-top{
      background-color: @font-f7f8;
      padding: 5px 8px;
    }
    .layout-edit {
      color: @mainFont !important;
      cursor: pointer;
      float: right;
    }
    .layout-bottom {
      background-color: @white;
      padding: 10px 8px;
      line-height: 22px;
    }
  }
</style>
