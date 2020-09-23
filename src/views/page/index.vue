<template>
  <div class="page-container">
    <div class="page_number_content"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .page-container{
    position: relative;
    padding-top: 30px;
    width: calc(100% - 330px);
    height: calc(100% - 20px);
    overflow: auto;
    float: left;
    .page_number_content{
      width: 783px;
      height: 1165px;
      border: 1px solid @font-333;
      overflow: hidden;
      background: @white;
      border-radius: 3px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 20px;
    }
  }
</style>
