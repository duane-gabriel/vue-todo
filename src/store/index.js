import Vue from 'vue'

const INITIALDATA = {
  todos: [
    {
      _id: "1",
      title: "Caminhar com o cão",
      description: "Na floresta perto do Zoológico"
    },
    {
      _id: "2",
      title: "Comprar pão",
      description: "Bem quetinho"
    },
    {
      _id: "3",
      title: "Aprender programação",
      description: "Amanhã seria melhor"
    }
  ]
};

const store = {
  state: {
    todos: []
  },
  actions: {
    initStore(state) {
      const todos = localStorage.getItem("my_todos");
      if (!todos) {
        Vue.set(state, 'todos', INITIALDATA.todos);
      } else {

        Vue.set(state, 'todos', JSON.parse(todos));
      }

      return state.todos;
    },
    createTodo(state, todo) {
      todo._id = Math.random().toString(36).substr(2, 7);
      state.todos.push(todo);
      localStorage.setItem("my_todos", JSON.stringify(state.todos));
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex((t) => {
        return todo._id === t._id;
      });
      Vue.set(state.todos, index, todo);
      localStorage.setItem("my_todos", JSON.stringify(state.todos));

    },
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex(t => {
        return t._id === todoId
      });

      state.todos.splice(index, 1);
      localStorage.setItem("my_todos", JSON.stringify(state.todos));

    }
  }
};

store.dispatch = function (action, payload) {
  if (!this.actions[action]) {
    throw new Error(`A função ${action} não consta na store.`);
  }

  return this.actions[action](this.state, payload);
}

export default store;