<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <todo-create @formSubmitted="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";
import store from "@/store/index";
export default {
  name: "app",
  components: { TodoList, TodoCreate },
  data() {
    return {
      isOpenModal: false,
      // todos: store.state.todos
      todos: store.dispatch("initStore")
    };
  },
  created() {
    this.todos = store.dispatch("initStore");
  },
  methods: {
    createTodo(todo) {
      store.dispatch("createTodo", todo);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-error {
  color: #ff1212;
}
.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-container {
    margin: 0 auto;
    width: 400px;
    min-height: 200px;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
  }
  &-create-btn-container {
    margin: 10px;
  }
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
  border: none;

  &.is-primary {
    background-color: #47ca47;
  }
  &.is-warning {
    background-color: #ffa753;
  }
  &.is-danger {
    background-color: #ff5a5a;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
