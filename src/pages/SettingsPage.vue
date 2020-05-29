<template>
    <div class="row">
        <div class="col bg-light mt-2 rounded">
            <h1>Settings</h1>
            <p>Clear out all todo list items <button v-on:click="removeTodoItems()"><b-icon-trash></b-icon-trash></button> <span class="badge badge-danger" v-if="todosRemoved">Removed!</span></p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        removeTodoItems () {
            localStorage.todoItems = [];
            this.todosRemoved = true;
        }
    },
    data () {
        return {
           todosRemoved: false
        }
    }
}
</script>