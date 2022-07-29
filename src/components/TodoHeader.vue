<template>
  <header class="header">
    <h1 :style="{color: colorValue}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      v-model="taskName"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addFn"
    />
  </header>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  data() {
    return {
      taskName: ''
    }
  },
  computed: {
    ...mapState('change',['colorValue'])
  },
  methods: {
    ...mapMutations('todolist',['addTask']),
    addFn() {
      this.addTask(this.taskName)
      this.taskName = ''
    }
  }


}
</script>
