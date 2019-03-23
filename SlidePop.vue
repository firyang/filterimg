<template>
  <div>
    <button>显示</button>
    <silde-pop :op="btns" ref="slide-pop"/>
  </div>
</template>

<script>
let SlidePop = {
  template: `<div class="slide-pop" :style="{height: popHeight}">
                  <ul :style="{ height: ulHeight + 'px' }">
                    <li v-for="(tem, idx) in op">{{ tem.label }}</li>
                    <li @click="toggle(false)">取消</li>
                  </ul>
                </div>`,
  props: {
    op: {
      type: Array,
      default: () => {
        return [
          // { label: "同意", value: 1 },
          // { label: "不同意", value: 0 },
          // { label: "同意", value: 1 },
          // { label: "不同意", value: 0 }
        ];
      }
    }
  },
  data() {
    return {
      ulHeight: 0,
      popHeight: 0
    };
  },
  methods: {
    toggle(isOpen) {
      if ((this.ulHeight === 0 && !isOpen) || (this.ulHeight !== 0 && isOpen))
        return;
      let count = this.op.length + 1;
      this.ulHeight = isOpen ? count * 46 + 12 : 0;
      this.popHeight = isOpen ? "100%" : 0;
      document.documentElement.style.overflowY = isOpen ? "hidden" : "scroll";
    }
  }
};

export default {
  components: {
    SlidePop: SlidePop
  },
  data: () => ({
    btns: [
      { label: "规格面板状态", value: 1 },
      { label: "第一属性名ID", value: 0 },
      { label: "商品信息", value: 1 },
      { label: "第一属性值ID", value: 0 },
      { label: "商品规格", value: 0 },
      { label: "商品信息", value: 1 },
      { label: "商品数量", value: 0 }
    ]
  }),
  methods: {
    showBtns() {
      this.$refs["slide-pop"].toggle(true);
    }
  }
};
</script>

<style lang="less" scoped>
.slide-pop {
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  /deep/ul {
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    background: #dddddd;
    transition: height 0.3s;
    li {
      height: 46px;
      line-height: 46px;
      font-size: 16px;
      background: #ffffff;
      box-sizing: border-box;
      &:not(:last-child):not(:first-child) {
        border-top: 1px solid #dddddd;
      }
      &:last-child {
        margin-top: 12px;
      }
    }
  }
}
</style>
