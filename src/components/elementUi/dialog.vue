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

<style>

</style>
