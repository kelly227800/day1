<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
  data() {
    return {
    }
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {},

  methods: {
    ...mapMutations('change',['changeColorValue']),
    changeColor() {
      this.changeColorValue()
    }
  },
}
</script>

<style scoped></style>
