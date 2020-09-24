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
      <el-checkbox
        v-for="(item, i) in studentInfo"
        :key="i"
        v-model="item.checked"
      >{{ item.value }}</el-checkbox>
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

import AnswerSheet from '@/models/answer-sheet'
import { STUDENT_INFO_LABEL } from '@/models/student' // Student,
export default {
  components: {
    hjDialog,
    hjButton
  },
  data () {
    return {
      dialogVisible: false,
      sheet: new AnswerSheet(),
      studentInfo: []
    }
  },
  computed: {
    studentInfos () {
      const info = this.sheet.student.toJSON()
      return Object.keys(STUDENT_INFO_LABEL).map(key => ({
        value: STUDENT_INFO_LABEL[key],
        label: key,
        checked: info.includes(key)
      }))
    }
  },
  watch: {
    studentInfos: {
      immediate: true,
      handler () {
        this.studentInfo = this.studentInfos
      }
    }
  },
  methods: {
    close () {
      this.dialogVisible = false
    },
    open (sheet) {
      this.sheet = sheet
      this.dialogVisible = true
    },
    handleDetermine () {
      const studentInfoChecked = this.studentInfo
        .filter(key => key.checked)
        .map(key => key.label)
      this.$emit('update-student-info', studentInfoChecked)
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
