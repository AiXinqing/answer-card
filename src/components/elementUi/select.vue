/* eslint-disable vue/no-unused-components */
<template>
    <el-select
      v-model="selectVal"
      v-bind="$attrs"
      v-on="$listeners"
      popper-class="hj-select-dropdown"
    >
      <el-option v-for="item in items" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
</template>
<script>
export default {
  props: {
    items: {
      default () {
        return []
      },
      type: Array
    },
    error: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      selectVal: this.value
    }
  },
  watch: {
    value: {
      immediate: true,
      handler () {
        this.selectVal = this.value
      }
    }
  }
}
</script>

<style lang="less" >
.el-input--medium .el-input__inner {
  height: 28px !important;
  line-height: 28px !important;
  text-align: center;
}
</style>
