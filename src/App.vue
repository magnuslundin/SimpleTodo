<template>
  <div id="app" class="container w-100 h-100">
    <todo 
      v-if="initialized"
      v-bind:todoItems="todoItems"
      v-on:removeTodoItem="removeTodoItem($event)"
      v-on:itemChanged="storeTodoItemData()"
    />
    <welcome 
      v-if="!initialized" 
      v-on:accepted="initialize()"
    />
  </div>
</template>

<script>
import Todo from './components/Todo';
import Welcome from './components/Welcome';

export default {
  name: 'App',
  components: {
    Todo,
    Welcome
  },
  mounted () {
    if (!localStorage.initialized) {
      return;
    }
    this.initialized = localStorage.initialized;
    this.loadTodoItemData ();
  },
  watch: {
    todoItems () {
      this.storeTodoItemData ();
    }
  },
  methods: {
    initialize () {
      this.todoItems = []
      localStorage.todoItems = JSON.stringify(this.todoItems);
      localStorage.initialized = this.initialized = 1;
    },
    removeTodoItem (id) {
      this.todoItems = this.todoItems.filter(item => item.id !== id);
    },
    storeTodoItemData () {
      localStorage.todoItems = JSON.stringify(this.todoItems);
    },
    loadTodoItemData () {
      this.todoItems = JSON.parse(localStorage.todoItems);
      // True/false is interpreted as strings by JSON.parse
      this.todoItems.map (item => item.completed = (item.completed === true) ? true : false);
    }
  },
  data () {
    return {
      initialized: 0,
      todoItems: []
    };
  }
};
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }
  html body {
    background-color: #333;
  }
</style>
