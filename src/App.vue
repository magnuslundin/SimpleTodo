<template>
  <div id="app" class="container w-100 h-100 bg-dark">
    <todo v-if="initalized" class="no-gutters" />
    <welcome v-if="!initalized" />
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
  data: function () {
    return {
      initalized: true
    };
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
