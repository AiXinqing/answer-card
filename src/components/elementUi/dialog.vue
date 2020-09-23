<template>
  <div class="hj-dialog">
    <el-dialog
      v-bind="$attrs"
      v-on="$listeners"
      :title="title"
      :close-on-click-modal="closeOnClickModal"
    >
      <slot></slot>
    </el-dialog>
  </div>
</template>

<script>
import { Dialog } from 'element-ui'
export default {
  name: 'hjDialog',
  components: {
    elDialog: Dialog
  },
  props: {
    title: { type: String },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    dialogDrag: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="less">
  @import '~@/assets/css/publicColor.less';
  .el-dialog__header {
    text-align: center;
    padding: 10px 0;
    background-color: #f8f8f8;
  }

  .el-dialog__headerbtn {
    top: 10px;
    right: 12px;
  }
  .el-dialog__title {
    color: #333;
  }
  .el-dialog__headerbtn .el-dialog__close {
    /* color: white; */
    font-size: 23px;
  }
  .public-dialog .el-button {
    padding: 8px 15px;
  }
  .el-dialog__body {
    text-align: left;
    padding: 10px 20px 15px;
  }

  .dialog-footer {
    text-align: right;
    padding-top: 20px;
    .el-button{
      font-size: 14px;
      border: none;
    }
  }
  .dialog-footer > div {
    display: inline-block;
  }
  .dialog-footer > div:nth-of-type(1) {
    margin-right: 15px;
  }

  .el-button.cancel{
    margin-right: 15px;
    background-color: #f1f1f1;
    color:@font-666
  }
  .el-button.confirm{
    background-color: @main;
    color: @white
  }
</style>
