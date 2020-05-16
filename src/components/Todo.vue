<template>
    <div class="row">
        <todo-list-item
            v-for="item in todoItems"
            :key="item.id"
            :todoItem="item"
        />
    </div>
</template>

<script>
import TodoListItem from './TodoListItem';

export default {
    components: {
        TodoListItem
    },
    data: function () {
        return {
            todoItems: [
                {
                    id: 1,
                    title: 'This is my first todo',
                    description: 'This describes my todo',
                    completed: false,
                    added: '2020-05-16'
                },
                {
                    id: 2,
                    title: 'Pick out the trash',
                    description: '',
                    completed: false,
                    added: '2020-05-16'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
