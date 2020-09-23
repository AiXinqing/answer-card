<template>
  <div class="page-content">
    <Head />
    <Layout
      :sheet="sheet"
      @create-sheet="createSheet"
    />
    <div class="main-content">
      <page-container
        v-if="sheet"
        :sheet="sheet"
      />
      <basic-settings
        :sheet="sheet"
      />
    </div>
  </div>
</template>

<script>
import AnswerSheet from '@/models/answer-sheet'
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
      sheet: null
    }
  },
  methods: {
    createSheet (attrs) {
      this.sheet = new AnswerSheet(attrs)
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
