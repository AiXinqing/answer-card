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
            :key="item.value"
            :style="{
              color: size === item.value ? '#1ab394' : '#b4b4b4'
            }"
            class="layout-size"
            @click="size = item.value"
          >
            <div :class="['paper-size',item.value]">{{ item.value }}</div>
            <div>{{ item.label }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">答题卡布局</el-col>
        <el-col :span="18" class="layout-box">
          <div
            v-for="item in allowedColumns"
            :key="item.value"
            :style="{
              color: column === item.value ? '#1ab394' : '#b4b4b4'
            }"
            class="page-column"
            @click="column = item.value"
          >
            <div :class="['paper-size',item.value]"></div>
            <div>{{ item.label }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="dialog-footer ">
      <hj-button
        v-if="sheet"
        type="cancel"
        class="cancel"
        @click="handleClose"
      >取 消</hj-button>
      <hj-button
        type="confirm"
        class="confirm"
        @click="handleDetermine"
      >{{ suretext }}</hj-button>
    </div>
  </hj-dialog>

</template>

<script>

import AnswerSheet, { SHEET_SIZE_LABEL } from '@/models/answer-sheet'

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
      sheet: new AnswerSheet()
    }
  },
  computed: {
    title () {
      return this.sheet ? '编辑答题卡' : '创建答题卡'
    },
    suretext () {
      return this.sheet ? '确 定' : '创 建'
    },
    size: {
      get () {
        return this.sheet.settings.size
      },
      set (size) {
        this.sheet.updateSettings({
          size,
          column: this.sheet.settings.column
        })
      }
    },
    column: {
      get () {
        return this.sheet.settings.column
      },
      set (column) {
        this.sheet.updateSettings({
          size: this.sheet.settings.size,
          column
        })
      }
    },
    allowedSize () {
      return AnswerSheet.AllowedSheetSize.map(size => ({
        value: size,
        label: SHEET_SIZE_LABEL[size]
      }))
    },
    allowedColumns () {
      return this.sheet.allowedColumns.map(column => ({
        value: column,
        label: `${column}栏`
      }))
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    },
    open (sheet) {
      this.dialogVisible = true
      if (sheet) this.sheet = new AnswerSheet(sheet.toJSON())
    },
    handleDetermine () {
      this.dialogVisible = false
      this.$emit('update-settings', {
        size: this.size,
        column: this.column
      })
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
