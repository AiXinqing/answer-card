<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  @import '~@/assets/css/publicColor.less';
  div#app {
    height: 100%;
    overflow: hidden;
  }
    // 公共样式
  .el-select {
    .el-input{
      &.is-focus{
        .el-input__inner{
            color: @main;
            border-color:@main;
        }
      }
    }
  }

  .el-input__inner{
      &:focus{
        border-color: @main
      }
    }
  .el-select-dropdown__item.selected{
    color: @main
  }
</style>
