<template>
  <hj-dialog
    class="newAdd-content"
    title="编辑试卷标题"
    :visible.sync="dialogVisible"
    :width="'500px'"
    :before-close="cancel"
    :show-close="false"
  >
    <el-checkbox-group
      class="item-style"
      v-model="studentInfo"
    >
      <el-checkbox
        v-for="info in studentInfos"
        :key="info.value"
        :label="info.value"
      >{{ info.label }}</el-checkbox>
    </el-checkbox-group>
    <div class="dialog-footer ">
      <hj-button type="cancel"  class="cancel"  @click="cancel">取 消</hj-button>
      <hj-button type="cancel"  class="confirm"  @click="handleDetermine">确 定</hj-button>
    </div>
  </hj-dialog>
</template>

<script>
import hjDialog from '@/components/elementUi/dialog'
import hjButton from '@/components/elementUi/button'

import Student, { STUDENT_INFO_LABEL } from '@/models/student' // Student,
export default {
  components: {
    hjDialog,
    hjButton
  },
  props: {
    student: {
      type: Student,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      studentInfo: this.student.toJSON()
    }
  },
  computed: {
    studentInfos () {
      return Object.keys(STUDENT_INFO_LABEL).map(key => ({
        value: key,
        label: STUDENT_INFO_LABEL[key]
      }))
    }
  },

  methods: {
    cancel () {
      this.studentInfo = this.student.toJSON()
      this.close()
    },
    close () {
      this.dialogVisible = false
    },
    open () {
      this.dialogVisible = true
    },
    handleDetermine () {
      this.student.updateInfos(this.studentInfo)
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
  .item-style {
    padding: 10px 0;
  }
</style>
