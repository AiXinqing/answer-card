<template>
  <div class="page-content">
    <Head />
    <Layout />
    <div class="main-content">
      <page-container/>
      <basic-settings/>
    </div>
    <!-- <div v-if="sheet">
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

      <div
        v-for="item in allowedColumns"
        :key="item"
        :style="{
          color: column === item ? 'red' : 'green'
        }"
        class="page-column"
      >
        {{ item }}
      </div>

      <button @click="createSheet">创建纸张</button>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import AnswerSheet, { SHEET_COLUMN } from '@/models/answer-sheet'

import Head from './Head'
import Layout from './Layout'
import BasicSettings from './BasicSettings'
import PageContainer from './page/index'

export default {
  name: 'Home',
  components: {
    Head,
    Layout,
    BasicSettings,
    PageContainer
  },
  data () {
    return {
      allowedSize: AnswerSheet.AllowedSheetSize,
      sheet: null,
      size: AnswerSheet.AllowedSheetSize[0],
      column: 3
    }
  },

  computed: {
    allowedColumns () {
      return SHEET_COLUMN[this.size]
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

<style lang="less">
@import '~@/assets/css/variables.less';
@import '~@/assets/css/publicColor.less';
.page-content{
  height: 100%;
  width: 100%;
}
.main-content{
  height: calc(100% - 50px);
  position: absolute;
  top: 50px;
  width: 100%;
  .basic-set-content{
    width: 320px;
    float: right;
    border-left: 1px solid @shadow;
    height: 100%;
    background: @white;
  }
}
</style>
