<template>
  <div
    class="sheet-number-column"
    :style="{
      'max-width': 26 * sheet.sheetNumberLength + 'px'
    }"
  >
    <div class="column-title">
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
          <th
            v-for="n in sheet.sheetNumberLength"
            :key="n"
            width="25px"
          />
        </tr>
        <tr>
          <td
            v-for="c in sheet.sheetNumberLength"
            :key="c"
            width="25px"
          >
            <div
              v-for="r in 10"
              :key="r"
              class="number-cell"
            >
              [<span>{{ r - 1 }}</span>]
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AnswerSheet from '@/models/answer-sheet'

export default {
  props: {
    sheet: {
      type: AnswerSheet,
      required: true
    }
  },

  methods: {
    editAdmissionNumber () {
      console.log('打开编辑准考证号长度的模态框，关闭的时候调用 this.sheet.setSheetNumberLength(new_length)')
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/css/publicColor.less';

.sheet-number-column {
  flex-shrink: 0;
  min-width: 224px;
  border-left: 1px solid @font-888;
}

.table_box {
  width: 100%;

  th {
    height: 28px;
    border-bottom: 2px solid @font-888;
  }

  td,
  th {
    border-left: 1px solid @font-333;
    text-align: center;

    &:first-child {
      border-left-color: transparent;
    }
  }

  .number-cell {
    display: flex;
    justify-content: center;
    font-size: 12px;
    text-align: center;
    padding-top: 4px;
    height: 16px;

    &:last-child {
      margin-bottom: 6px;
    }

    span {
      width: 9px;
    }
  }
}
</style>
