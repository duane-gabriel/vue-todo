<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">{{title}}</div>
      <div class="todo-item-content-description">{{description}}</div>
      <button class="app-button is-warning" @click="editMode = true">Editar</button>
      <button class="app-button is-danger" @click="deleteTodo">Deletar</button>
    </div>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Título</label>
        <br />
        <input type="text" v-model="todo.title" class="form-input" />
      </div>
      <div class="form-control">
        <label class="label">Descrição</label>
        <br />
        <textarea class="form-input" v-model="todo.description" cols="30" rows="3"></textarea>
      </div>
      <button class="app-button is-warning" @click.prevent="editTodo">Atualizar</button>
      <button type="button" class="app-button is-danger" @click="editMode = false">Cancelar</button>
    </form>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    _id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      todo: {
        _id: this._id,
        title: this.title,
        description: this.description
      }
    };
  },
  methods: {
    editTodo() {
      store.dispatch("updateTodo", { ...this.todo });
      this.editMode = false;
    },
    deleteTodo() {
      store.dispatch("deleteTodo", this.todo._id);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-control {
  .label {
    font-size: 18px;
  }
  .form-input {
    padding: 10px;
  }
}
.app-button {
  font-size: 15px;
  &.is-warning {
    margin-right: 5px;
    margin-top: 5px;
  }
}
.todo {
  &-item {
    background-color: gray;
    min-height: 70px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-size: 23px;
    &-content {
      margin-top: 10px;
      &-title {
        font-weight: bold;
      }
      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>