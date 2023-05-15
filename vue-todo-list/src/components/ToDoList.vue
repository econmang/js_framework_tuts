<script>
  export default {
    data() {
      return {
        newToDo: "",
        todos: [],
      };
    },
    methods: {
      addToDo() {
        this.todos.push({
          text: this.newToDo,
          done: false,
        });
        this.newToDo = "";
      },
    },
  };
</script>

<template>
  <h1>ToDoList:</h1>
  <form @submit.prevent="addToDo">
    <input v-model="newToDo" type="text" />
  </form>
  <div class="todoList">
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        <input type="checkbox" v-model="todo.done" />
        <span v-if="!todo.done">{{ todo.text }}</span>
        <span v-else class="markDone">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
  .markDone {
    text-decoration: line-through;
  }

  .todoList {
    margin: 0 auto;
    width: 500px;
    text-align: left;
  }

  ul {
    padding-left: 0;
    margin-left: 0;
    align-items: left;
  }
</style>
