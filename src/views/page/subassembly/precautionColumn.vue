<template>
  <div class="precautions-column">
    <div class="column-title">注 意 事 项</div>
    <div class="precautions_content">
      注意事项列表
    </div>
    <div class="tugaifangshi">
      <div class="tugaifangshi-item">
        <span>正确填涂</span>
        <div class="rect rect-solid" />
      </div>
      <div class="tugaifangshi-item">
        <span>缺考标记</span>
        <div class="rect"></div>
      </div>
    </div>
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
  }
}
</script>

<style lang="less">
@import '~@/assets/css/publicColor.less';

.precautions-column {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .precautions_content {
    flex-grow: 1;
    max-height: 187px;
    overflow: hidden;;
  }

  .tugaifangshi {
    height: 48px;
    display: flex;
    align-items: center;
    border-top: 1px solid @font-888;

    .tugaifangshi-item {
      margin-left: 10px;
      min-width: 150px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .rect {
      width: 15px;
      height: 8px;
      margin-left: 30px;
      border: 1px solid @font-333;

      &.rect-solid {
        background-color: @font-333;
      }
    }
  }
}
</style>
