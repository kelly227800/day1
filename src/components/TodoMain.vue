<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{'completed':item.done}" v-for="item in todoList" :key='item.id'>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{item.name}}</label>
        <button class="destroy" @click="deleteFn(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  computed: {
    ...mapState('todolist',['todoList'])
  },
  methods: {
    ...mapMutations('todolist',['deleteTask']),
    deleteFn(id){
      this.deleteTask(id)
    }
  }
}
</script>
