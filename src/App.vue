<template>
  <div id="app" class="container w-100 h-100">
    <navigation 
      v-if="initialized"
    />
    <router-view
      v-if="initialized"
    ></router-view>
    <welcome 
      v-if="!initialized" 
      v-on:accepted="initialize()"
    />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';

export default {
  name: 'App',
  components: {
    Navigation,
    Welcome
  },
  mounted () {
    if (!localStorage.initialized) {
        return;
    }
    this.initialized = localStorage.initialized;
  },
  methods: {
    initialize () {
      localStorage.initialized = this.initialized = 1;
      localStorage.todoItems = [];
    }
  },
  data () {
    return {
      initialized: 0,
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
