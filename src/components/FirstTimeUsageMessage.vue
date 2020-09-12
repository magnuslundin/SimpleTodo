<template>
  <div class="row justify-content-center align-items-center h-100">
    <div class="col-12 col-md-10 col-lg-8">
      <div class="jumbotron py-4 dark">
        <h1>todo.</h1>
        <p class="lead">This simple Todo-list will save your tasks locally in your browser, accessible from anywhere.</p>
        <p>Utilizes Vue.js and Bootstrap.</p>
        <button
            class="btn btn-dark btn-lg"
            v-on:click="$emit('accepted')"
        >Start using Todo</button>
        <p class="mt-2 small font-italic">By continuing are you approving the use of cookies for this application.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .jumbotron.dark {
    background-color: rgb(77, 77, 77);
    color: #fff;
  }
</style>
