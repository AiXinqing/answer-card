<template>
  <div class="home">
    <div v-if="sheet">
      {{ sheet.toJSON() }}

      <button @click="updateSettings">
        修改纸张
      </button>
    </div>
    <div v-else>
      <div
        v-for="item in allowedSize"
        :key="item"
        :style="{
          color: size === item ? 'red' : 'blue'
        }"
        class="page-size"
      >
        {{ item }}
      </div>
      <button @click="createSheet">创建纸张</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AnswerSheet, { SHEET_COLUMN } from '@/models/answer-sheet'

export default {
  name: 'Home',

  data () {
    return {
      allowedSize: AnswerSheet.AllowedSheetSize,
      sheet: null,
      size: AnswerSheet.AllowedSheetSize[0]
    }
  },

  methods: {
    // 模拟更改布局
    updateSettings () {
      const size = this.size
      const column = SHEET_COLUMN[size][Math.floor(Math.random() * SHEET_COLUMN[size].length)]
      this.sheet.updateSettings({
        size,
        column
      })
      console.log(size, column)
    },

    // 模拟创建答题卡
    createSheet () {
      const column = 4
      this.sheet = new AnswerSheet({
        settings: {
          size: this.size,
          column
        },
        studentInfos: []
      })
    }
  }
}
</script>
