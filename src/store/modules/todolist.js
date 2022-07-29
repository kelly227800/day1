export default {
    namespaced: true,
    state: {
        todoList: [
            {
              name: '吃饭',
              done: false,
              id: 1,
            },
            {
              name: '睡觉',
              done: false,
              id: 2,
            },
            {
              name: '打豆豆',
              done: false,
              id: 3,
            },
          ]
    },
    mutations:{
        addTask(state,payload) {
            let newTask = {
                name: payload,
                done: false,
                id: state.todoList[state.todoList.length-1].id+1
            }
            state.todoList.push(newTask)
        },
        deleteTask(state,payload) {
            let index = state.todoList.findIndex((item)=> item.id===payload)
            // console.log(index)
            state.todoList.splice(index,1)
        }
    },
    actions:{},
    getters:{}
}