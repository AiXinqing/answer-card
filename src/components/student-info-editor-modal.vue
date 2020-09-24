<template>
  <hj-dialog
    class="newAdd-content"
    title="编辑试卷标题"
    :visible.sync="dialogVisible"
    :width="'500px'"
    :before-close="close"
    :show-close="false"
  >
    <div class="item-style">
      <el-checkbox v-model="checked">分区答题卡</el-checkbox>
      <!-- <el-checkbox
        v-for="(item, i) in studentTitle"
        :key="i"
        v-model="item.checked"
        @change="changeCheckFunc"
      >{{ item.name }}</el-checkbox> -->
    </div>
    <div class="dialog-footer ">
      <hj-button type="cancel"  class="cancel"  @click="close">取 消</hj-button>
      <hj-button type="cancel"  class="confirm"  @click="handleDetermine">确 定</hj-button>
    </div>
  </hj-dialog>
</template>

<script>
import hjDialog from '@/components/elementUi/dialog'
import hjButton from '@/components/elementUi/button'
export default {
  components: {
    hjDialog,
    hjButton
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    close () {
      this.dialogVisible = false
    },
    handleDetermine () {

    }
  }
}
</script>

<style lang="less" scoped>
  .item-style {
    padding: 10px 0;
  }
</style>
