<template>
  <hj-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="'500px'"
    :before-close="handleClose"
    :show-close="false"
  >
    <div class="layout-setting-box">
      <el-row>
        <el-col :span="6">纸张大小</el-col>
        <el-col :span="18" class="layout-box">
          <div
            v-for="item in allowedSize"
            :key="item"
            :style="{
              color: size === item ? '#1ab394' : '#b4b4b4'
            }"
            class="layout-size"
            @click="updateSettings(item)"
          >
            <div :class="['paper-size',item]">{{ item }}</div>
            <div>{{ getSizeLabel(item) }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">答题卡布局</el-col>
        <el-col :span="18" class="layout-box">
          <div
            v-for="item in allowedColumns"
            :key="item"
            :style="{
              color: column === item ? '#1ab394' : '#b4b4b4'
            }"
            class="page-column"
            @click="upadteSetColumn(item)"
          >
            <div :class="['paper-size',item]"></div>
            <div>{{ item }}栏</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="dialog-footer createLayout" v-if="!editLayout">
      <hj-button type="confirm" class="confirm"  @click="handleDetermine">创建</hj-button>
    </div>
    <div class="dialog-footer " v-else>
      <hj-button type="cancel" class="cancel" @click="handleClose">取 消</hj-button>
      <hj-button type="confirm" class="confirm"  @click="handleDetermine">确 定</hj-button>
    </div>
  </hj-dialog>

</template>

<script>

import AnswerSheet, { SHEET_COLUMN, SHEET_SIZE_LABEL } from '@/models/answer-sheet'

import { Row, Col } from 'element-ui'
import hjDialog from '@/components/elementUi/dialog'
import hjButton from '@/components/elementUi/button'
export default {
  components: {
    hjDialog,
    hjButton,
    elRow: Row,
    elCol: Col
  },
  data () {
    return {
      dialogVisible: false,
      editLayout: false,
      allowedSize: AnswerSheet.AllowedSheetSize,
      sheet: null,
      size: AnswerSheet.AllowedSheetSize[0],
      column: 2
    }
  },
  computed: {
    title () {
      return !this.editLayout ? '创建答题卡' : '编辑答题卡'
    },
    allowedColumns () {
      return SHEET_COLUMN[this.size]
    }
  },
  mounted () {
    this.sheet = new AnswerSheet({
      settings: {
        size: this.size,
        column: this.column
      },
      studentInfos: []
    })
  },
  methods: {
    getSizeLabel (size) {
      return SHEET_SIZE_LABEL[size]
    },

    handleClose () {
      this.dialogVisible = false
    },
    handleOpen (edit = false) {
      if (edit) {
        this.editLayout = edit
      }
      this.dialogVisible = true
    },
    handleDetermine () {
      this.dialogVisible = false
    },
    updateSettings (size) {
      this.size = size
      const column = SHEET_COLUMN[size][Math.floor(Math.random() * SHEET_COLUMN[size].length)]
      this.column = column
      this.sheet.updateSettings({
        size,
        column
      })
    },
    upadteSetColumn (column) {
      this.column = column
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .el-col.el-col-6 {
    position: relative;
    top: 10px;
  }
  .layout-box{
    display: flex;
    flex-wrap: wrap
  }
  .layout-size,
  .page-column {
    width: 100px;
    text-align: center;
    margin-left: 20px;
  }
  .paper-size {
    display: inline-block;
    width: 50px;
    height: 40px;
    border: 2px solid;
    border-radius: 3px;
    line-height: 50px;
    cursor: pointer;
    text-align: center;
  }
  .paper-size.A4{
    width: 40px;
  }
  .el-row{
    margin: 20px 0;
  }
  .dialog-footer{
    border-top: 1px solid #f7f7f7;
  }
</style>
