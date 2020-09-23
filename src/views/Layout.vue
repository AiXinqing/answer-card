<template>
  <div class="layout-content">
    <div class="box">
      <div class="total-score">
        <span>当前总分:</span>
        <span class="score_style">0</span>
        <span>分</span>
      </div>
      <div class="layout-setting">
        <div class="layout-top">
          <span>布局</span>
          <span class="layout-edit" @click="updateSetting">修改</span>
        </div>
        <div class="layout-bottom">
          <div>A3/B4/8K纸</div>
          <div>两栏</div>
          <!-- <div>线上阅卷</div> -->
        </div>
      </div>
    </div>
    <setting-modal ref="settingModal" />
  </div>
</template>

<script>
import AnswerSheet from '@/models/answer-sheet'
// dialog
import settingModal from '@/components/setting-modal'

export default {
  components: {
    settingModal
  },

  props: {
    sheet: {
      type: AnswerSheet,
      default: null
    }
  },
  mounted () {
    this.$refs.settingModal.handleOpen()
  },
  methods: {
    updateSetting () {
      this.$confirm(
        `<div class="Prompt_info">
          <i class="el-icon-question"></i>修改后将会清空所有手动修改的内容，确定修改吗？
        </div>`,
        '提示',
        {
          dangerouslyUseHTMLString: true
        }
      ).then(() => {
        console.log('1')
      }).catch(() => {
        console.log('0')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/publicColor.less';
  .layout-content{
    .box{
      position: fixed;
      top: 90px;
      left: 10px;
      z-index: 99;
    }
  }
  .total-score{
    font-size: 14px;
    .score_style{
      font-size: 18px;
      font-weight: 500;
      margin: 0 5px;
      color: @main
    }
  }
  .layout-setting{
    border: 1px solid @main;
    min-width: 93px;
    background: @white;
    margin-top: 10px;
    font-size: 14px;
    .layout-top{
      background-color: @font-f7f8;
      padding: 5px 8px;
    }
    .layout-edit {
      color: @mainFont !important;
      cursor: pointer;
      float: right;
    }
    .layout-bottom {
      background-color: @white;
      padding: 10px 8px;
      line-height: 22px;
    }
  }
  .Prompt_info {
    height: 50px;
    font-size: 14px;
    padding-top: 20px;
    i {
      font-size: 24px;
      color: @warning;
      position: relative;
      top: 3px;
      margin-right: 5px;
    }
  }
</style>
