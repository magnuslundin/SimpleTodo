<template>
  <div id="app" class="container w-100 h-100">
    <todo 
      v-if="initialized"
      v-bind:todoItems="todoItems"
      v-on:removeTodoItem="removeTodoItem($event)"
      v-on:itemChanged="storeItemData()"
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
    this.loadItemData ();
  },
  watch: {
    todoItems () {
      this.storeItemData ();
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
    storeItemData () {
      localStorage.todoItems = JSON.stringify(this.todoItems);
    },
    loadItemData () {
      this.todoItems = JSON.parse(localStorage.todoItems);
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
