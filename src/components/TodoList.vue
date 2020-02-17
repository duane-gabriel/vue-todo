<template>
  <div class="todo-list">
    <div v-if="todos && todos.length">
      <todo-item
        v-for="todo of todos"
        :key="todo._id"
        :title="todo.title"
        :_id="todo._id"
        :description="todo.description"
      />
    </div>
    <div v-else class="no-todos">Nenhum tarefa para mostrar :(</div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  flex: 1;
}
.no-todos {
  padding: 20px;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
}
</style>