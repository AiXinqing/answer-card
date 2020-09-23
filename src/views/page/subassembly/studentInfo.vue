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
    </el-col>
  </el-row>
</template>

<script>
import Student, { STUDENT_INFO, STUDENT_INFO_LABEL } from '@/models/student'
import { Row, Col } from 'element-ui'

export default {
  components: {
    elRow: Row,
    elCol: Col
  },
  props: {
    student: {
      type: Student,
      required: true
    }
  },
  computed: {
    infoList () {
      return Object.values(STUDENT_INFO).map(key => ({
        value: key,
        label: STUDENT_INFO_LABEL[key]
      }))
    },
    studentInfoArr () {
      return this.infoList.filter(info => this.student[info.value])
    }
  },
  methods: {
    editStudentInfoColumn () {
      console.log('打开编辑学生信息的模态框')
    }
  }
}
</script>

<style lang="less" scoped></style>
