<template>
  <div class="basic-set-content">
    <div class="basis-title">
      <span>设置答题卡基础信息</span>
    </div>
    <div class="basis_checkbox">
      <el-checkbox v-model="checked">分区答题卡</el-checkbox>
    </div>
    <div class="basis_checkbox basic_btn" style="padding-left:5px">
      <hj-button @click="questionDialog">客观题</hj-button>
      <hj-button @click="fillInTheBlank">填空题</hj-button>
      <hj-button @click="answerQuestion">解答题</hj-button>
      <hj-button @click="optionalQuestion">选做题</hj-button>
      <hj-button @click="compositionEnglish">作文(英)</hj-button>
      <hj-button @click="compositionLanguage">作文(语)</hj-button>
      <hj-button @click="NonRresponseArea">非作答</hj-button>
    </div>
    <div class="basis_checkbox basic_btn save-btn">
      <hj-button type="primary" @click="previewLinkFunc">预览</hj-button>
      <hj-button type="primary">保存</hj-button>
      <hj-button type="primary">下载</hj-button>
    </div>
  </div>
</template>

<script>
import hjButton from '@/components/elementUi/button'
export default {
  components: {
    hjButton
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    questionDialog () {
      this.$refs.publicDialog.opened('questionDialogs')
    },
    fillInTheBlank () {
      this.$refs.publicDialog.opened('fillInTheBlanks')
    },
    answerQuestion () {
      this.$refs.publicDialog.opened('answerQuestion')
    },
    optionalQuestion () {
      this.$refs.publicDialog.opened('optionalQuestion')
    },
    compositionEnglish () {
      this.$refs.publicDialog.opened('compositionEnglish')
    },
    compositionLanguage () {
      this.$refs.publicDialog.opened('compositionLanguage')
    },
    NonRresponseArea () {
      this.$refs.publicDialog.opened('NonRresponseArea')
    },
    previewLinkFunc () {
      // 跳转至预览页面
      this.$router.push({
        name: 'preview',
        params: {
          layout: this.pageLayout,
          size: this.page_size,
          content: this.pageData
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .basis-title {
    border-left: none;
    border-right: none;
    background-color: @bf-f7;
    height: 40px;
    line-height: 40px;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    padding: 0 30px;
    border-bottom: 1px solid @bs-e3;
  }
  .basis_checkbox {
    padding: 20px 0;
    border-bottom: 1px solid @shadow;
    display: flex;
    flex-wrap: wrap;
    padding-left: 15px;
    button.el-button.el-button--default{
      width: 90px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
  .el-button--medium {
    padding: 0 0;
    width: 90px;
    padding: 0;
    height: 38px;
    line-height: 36px;
  }
</style>
