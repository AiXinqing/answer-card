<template>
  <el-row class="TestTitle">
    <el-col
      v-for="(info, i) in studentInfoArr"
      :key="info.value"
      :span="4"
      class="title-item"
    >
      <span>{{ info.label }}</span>
      <span v-if="i === (studentInfoArr.length - 1)">
        <span
          class="titke-edit"
          @click="editStudentInfoColumn"
          >编辑</span
        >
      </span>
      <span v-else />
    </el-col>
  </el-row>
</template>

<script>
import Student, { STUDENT_INFO_LABEL } from '@/models/student'

export default {
  props: {
    student: {
      type: Student,
      required: true
    }
  },
  computed: {
    studentInfoArr () {
      return this.student.toJSON().map(key => ({
        value: key,
        label: STUDENT_INFO_LABEL[key]
      }))
    }
  },
  methods: {
    editStudentInfoColumn () {
      this.$emit('open-student-info-dialog')
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .title-item {
    height: 40px;
    line-height: 50px;
    min-width: 148px;
    position: relative;
    top: 8px;
    span {
      display: inline-block;
      font-size: 18px;
    }
    > span:last-child {
      width: 87px;
      position: relative;
      margin-left: 10px;
      margin-right: 15px;
      top: 3px;
      border-bottom: 2px solid @font-888;
    }
    span.titke-edit {
      position: absolute;
      top: -26px;
      right: 0;
      font-size: 12px !important;
      height: 20px;
      line-height: 20px;
      padding: 0 6px;
      border-radius: 3px;
      color: @white;
      cursor: pointer;
      background-color: @main;
    }
  }
</style>
