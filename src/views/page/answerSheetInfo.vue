<template>
  <div class="question_card">
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入答题卡标题"
      v-model="sheet.title">
    </el-input>
    <student-info
      :student="sheet.student"
      @hanldeStudent="hanldeStudent"
    />
    <el-row class="precautions_box">
      <el-col
        :span="12"
        class="precautions_left"
        :style="{ width: titleWidthLeft + 'px' }"
      >
        <div class="precautions_title">注 意 事 项</div>
        <div :class="['precautions_content', { active: rectWidth == 480 }]">
          <div
            v-for="(lineUp,index) in precautionsLineUp"
            :key="index"
          >{{`${index+1}. ${lineUp}`}}</div>
        </div>
        <div v-if="!layoutColumn" class="precautions_mark">
          <svg xmlns="http://www.w3.org/2000/svg" >
            <template
              v-for="(svgInfo,a) in svgData"
            >
              <text :key="'text'+a"
                :x="svgInfo.parameter.text.x" y="30"
                :style="{fontSize: svgInfo.parameter.text.fontSize}"
              >{{svgInfo.name}}</text>
              <rect
                :key="'rect'+a"
                :x="svgInfo.parameter.rect.x"
                y="19"
                width="17"
                height="10"
                stroke="#000000"
                :fill="a === 0 ? '#000000' : 'none'"
                :style="{fillOpacity:a === 0 ? 1 : 0}"
              />
            </template>
          </svg>
        </div>
      </el-col>
      <el-col
        :span="sheet.sheetNumberLength"
        class="precautions_right"
        :style="{ width: titleWidthRight + 'px' }"
      >
        <div class="ticket_number">
          准考证号
          <span
            class="precautions_edit layui-btn layui-btn-xs"
            @click="editAdmissionNumber"
            >编辑</span
          >
        </div>
        <table class="table_box" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <th v-for="(column, i) in tables.column" :key="i" />
            </tr>
            <tr>
              <td v-for="(column, i) in tables.column" :key="i">
                <div
                  v-for="ColumnHeight in tables.ColumnHeight"
                  :key="ColumnHeight"
                  :style="{ minWidth: divWidth + 'px' }"
                >
                  [<span>{{ ColumnHeight }} </span>]
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  PRECAUTIONS_LINE_UP,
  PRECAUTIONS_SVG_INFO,
  PRECAUTIONS_TABLE
} from '@/models/precautions'

import AnswerSheet from '@/models/answer-sheet'
import { Row, Col, Input } from 'element-ui'
import studentInfo from './subassembly/studentInfo'

export default {
  components: {
    elInput: Input,
    elRow: Row,
    elCol: Col,
    studentInfo
  },
  props: {
    sheet: {
      type: AnswerSheet,
      required: true
    }
  },
  data () {
    return {
      textarea: '',
      titleWidthLeft: 521,
      titleWidthRight: 224,
      column: 2,
      size: ''
    }
  },
  computed: {
    layoutColumn () {
      return this.titleWidthLeft !== 521 ? 1 : 0
    },

    rectWidth () {
      return this.column === 3 && this.size === 'A3'
        ? 480
        : 745
    },

    precautionsLineUp () {
      return PRECAUTIONS_LINE_UP
    },

    svgData () {
      return PRECAUTIONS_SVG_INFO[0]
    },

    divWidth () {
      return this.titleWidthRight === 224
        ? 224 / this.titleRows - 1
        : this.Rows - 1
    },
    tables () {
      return PRECAUTIONS_TABLE
    }
  },
  methods: {
    editAdmissionNumber () {
      console.log('打开编辑准考证号长度的模态框，关闭的时候调用 this.sheet.setSheetNumberLength(new_length)')
    },

    hanldeStudent () {

    }
  }
}
</script>

<style lang="less" >
  @import '~@/assets/css/publicColor.less';
  .el-textarea__inner {
    padding: 0 0 !important;
    border-style: dashed !important;
    border-color: @font-888 !important;
    text-align: center;
    font-size: 22px;
    color: @font-333 !important;
  }
  .precautions_box {
    margin-top: 15px;
    .precautions_left {
      border: 1px solid @font-888;
      height: 258px;
    }
    .precautions_right {
      border: 1px solid @font-888;
      min-width: 223px;
      border-left: none;
      height: 258px;
    }
    .precautions_content {
      padding-left: 10px;
      min-height: 127px;
      border-bottom: 1px solid @font-333;
      font-size: 14px;
      &.active {
        div {
          padding: 1px 0;
        }
      }
    }
  }
  .precautions_left.columns .precautions_content {
    height: 141px;
    font-size: 12px;
    margin-top: 5px;
  }
  .precautions_title,
  .ticket_number {
    height: 38px;
    line-height: 38px;
    border-bottom: 2px solid @font-888;
    text-align: center;
    width: 100%;
  }
  .layui-btn-xs {
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    font-size: 12px;
    display: inline-block;
    background-color: @main;
    color: @white;
    white-space: nowrap;
    text-align: center;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
  .precautions_content div {
    padding: 7px 0;
    margin: 0 0;
  }
  .precautions_edit {
    position: absolute;
    right: 15px;
    top: 8px;
  }
  .precautions_mark {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
  }
  table tr td div:last-child {
    margin-bottom: 6px;
  }

  .table_box th {
    height: 28px;
  }

  .table_box div {
    font-size: 12px;
    text-align: center;
    padding-top: 4px;
    min-width: 27px;
    height: 16px;
  }

  .table_box div span {
    position: relative;
    top: 1px;
    left: 1.8px;
  }

  .table_box tr th {
    border-bottom: 2px solid @font-888;
  }

  .table_box td,
  .table_box th {
    border-left: 1px solid @font-333;
  }

  .table_box td:first-child,
  .table_box th:first-child {
    border-left: none;
  }
  .el-input--medium {
    font-size: 23px !important;
  }
  .el-textarea__inner {
    padding: 0 0 !important;
    border-style: dashed !important;
    border-color: @font-888 !important;
    height: 65px;
  }
  .table_box td:first-child {
    height: 186px;
  }
  .textVal-style {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    height: 65px;
    line-height: 65px;
  }
  .el-textarea__inner:focus{
    border-color: @main;
  }
</style>
