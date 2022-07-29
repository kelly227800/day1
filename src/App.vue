<template>
  <div>
    <!-- 基础的按钮用法 -------------------------------------------------------->
      <h3>基础用法</h3>
      <p>基础的按钮用法。</p>
      <div>
        <my-button>默认按钮</my-button>
        <my-button type="primary">主要按钮</my-button>
        <my-button type="success">成功按钮</my-button>
        <my-button type="warning">警告按钮</my-button>
        <my-button type="danger">危险按钮</my-button>
      </div>
    <!-- 朴素按钮 -->
      <h4>朴素按钮</h4>
      <div>
        <my-button plain>朴素按钮</my-button>
        <my-button type="primary" plain>主要按钮</my-button>
        <my-button type="success" plain>成功按钮</my-button>
        <my-button type="warning" plain>警告按钮</my-button>
        <my-button type="danger" plain>危险按钮</my-button>
      </div>

    <!-- 圆角按钮 -->
      <h4>圆角按钮</h4>
      <div>
        <my-button round>圆角按钮</my-button>
        <my-button type="primary" round>主要按钮</my-button>
        <my-button type="success" round>成功按钮</my-button>
        <my-button type="warning" round>警告按钮</my-button>
        <my-button type="danger" round>危险按钮</my-button>
      </div>
    <!-- 基础的按钮用法 ------------------------------------------------------->

    <!-- 没有边框和背景色的按钮 ---------------------------------------------->
      <h3>文字按钮</h3>
      <p>没有边框和背景色的按钮。</p>
      <my-button type="text">文字按钮</my-button>
    <!-- 没有边框和背景色的按钮 ---------------------------------------------->

      <!-- 不同尺寸 ----------------------------------------------------------->
      <h3>不同尺寸</h3>
      <p>提供除了默认值以外的四种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
      <div>
        <my-button>默认按钮</my-button>
        <my-button size="large">大型按钮</my-button>
        <my-button size="medium">中等按钮</my-button>
        <my-button size="small">小型按钮</my-button>
        <my-button size="mini">迷你按钮</my-button>
      </div>
      <div>
        <my-button round>默认按钮</my-button>
        <my-button size="large" round>大型按钮</my-button>
        <my-button size="medium" round>中等按钮</my-button>
        <my-button size="small" round>小型按钮</my-button>
        <my-button size="mini" round>迷你按钮</my-button>
      </div>
      <!-- 不同尺寸 ----------------------------------------------------------->
      
  </div>
</template>

<script>
import MyButton from '@/components/Button/Button.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyButton,
  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>

