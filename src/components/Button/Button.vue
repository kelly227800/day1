<template>
  <button
    @click="handleClick"
    :class="btnClassObj"
  >
  <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClassObj() {
      return {
        // 按钮类型
        "primaryBtn": this.type === "primary",
        "successBtn": this.type === "success",
        "warningBtn": this.type === "warning",
        "dangerBtn": this.type === "danger",
        "textBtn": this.type === "text",
        // 按钮大小
        "largeBtn": this.size === "large",
        "mediumBtn": this.size === "medium",
        "smallBtn": this.size === "small",
        "miniBtn": this.size === "mini",
        // 朴素按钮
        "plainBtn": this.plain === true,
        // 圆角按钮
        "roundBtn": this.round === true,
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style scoped>
button {
  display: inline-block;
  margin: 10px;
  width: 90px;
  height: 45px;
  font-size: 12px;
  position: relative;
  border: 1px solid #474747;
  color: #474747;
  cursor: pointer;
}
/* 给按钮添加一点点击动效 */
button:active::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 5%);
}
/* 主要按钮 */
.primaryBtn {
  background: #409eff;
  border: 1px solid #409eff;
  color: #ffffff;
}
/* 成功按钮 */
.successBtn {
  background: #2ecc71;
  border: 1px solid #2ecc71;
  color: #ffffff;
}
/* 警告按钮 */
.warningBtn {
  background: #f39c12;
  border: 1px solid #f39c12;
  color: #ffffff;
}
/* 危险按钮 */
.dangerBtn {
  background: #eb2f06;
  border: 1px solid #eb2f06;
  color: #ffffff;
}
/* 文字按钮 */
.textBtn {
  width: unset;
  height: unset;
  background: unset;
  border: none;
  color: #409eff;
}
button.textBtn:active::after {
  background: unset;

}
/* 朴素按钮 */
button.plainBtn {
  background: #fff;
  border: 1px solid #474747;
  color: #474747;
}
.primaryBtn.plainBtn {
  background: #fff;
  border: 1px solid #409eff;
  color: #409eff;
}
.successBtn.plainBtn {
  background: #fff;
  border: 1px solid #2ecc71;
  color: #2ecc71;
}
.warningBtn.plainBtn {
  background: #fff;
  border: 1px solid #f39c12;
  color: #f39c12;
}
.dangerBtn.plainBtn {
  background: #fff;
  border: 1px solid #eb2f06;
  color: #eb2f06;
}
/* 圆角按钮 */
.roundBtn {
  border-radius: 10px;
}
/* 大按钮 */
.largeBtn {
  width: 120px;
  height: 60px;
  font-size: 16px;
}
/* 中等按钮 */
.mediumBtn {
  width: 100px;
  height: 50px;
  font-size: 14px;
}
/* 小型按钮 */
.smallBtn {
  width: 80px;
  height: 40px;
  font-size: 12px;
}
/* 迷你按钮 */
.miniBtn {
  width: 70px;
  height: 35px;
  font-size: 10px;
}
</style>

