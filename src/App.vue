<template>
  <div id="app" class="container w-100 h-100">
    <todo></todo>
  </div>
</template>

<script>
import Todo from './components/Todo';

export default {
  name: 'App',
  components: {
    Todo
  }
};
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    background-color: #333;
    color: #fff;
  }
</style>
