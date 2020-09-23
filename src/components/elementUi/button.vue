<template>
  <el-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
import { Button } from 'element-ui'
export default {
  name: 'hjButton',
  props: {},
  data () {
    return {}
  },
  methods: {},
  mounted () { },
  components: {
    elButton: Button
  }
}
</script>

<style lang="less">
@import '~@/assets/css/publicColor.less';
.el-button--primary {
  background-color: @main !important;
  border-color: @main !important;
}
.el-button:focus,
.el-button:hover {
  color: @main !important;
  border-color: @bc_hover !important;
  background-color: @mainHover !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: @main !important;
  border-color: @main !important;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: @main !important;
}
.el-button + .el-button {
  margin-left: 0;
}
button.el-button.el-button--default.el-button--medium {
  margin-top: 10px;
  margin-left: 10px;
}
.basis_checkbox.basic_btn.save-btn {
  .el-button + .el-button {
    margin-left: 10px;
  }
}
</style>
