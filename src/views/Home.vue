<template>
  <div class="page-content">
    <Head />
    <Layout />
    <div class="main-content">
      <page-container/>
      <basic-settings/>
    </div>
  </div>
</template>

<script>

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
    }
  },
  computed: {

  },
  methods: {
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
