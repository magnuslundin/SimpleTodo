<template>
    <div>
        <todo-add-item 
            v-on:itemAdded="addTodoItem($event)"
        />
        <todo-list-item
            v-for="item in todoItems"
            v-on:deleteItem="removeTodoItem($event)"
            :key="item.id"
            :todoItem="item"
        />
    </div>
</template>

<script>
import TodoListItem from './TodoListItem';
import TodoAddItem from './TodoAddItem';

export default {
    components: {
        TodoListItem,
        TodoAddItem
    },
    methods: {
        addTodoItem: function (newItemTitle) {
            var date = new Date ();
            this.todoItems.push({
                id: ++this.itemIdCounter,
                title: newItemTitle,
                description: '',
                completed: false,
                added: date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()
            });
        },
        removeTodoItem: function (id) {
            this.todoItems = this.todoItems.filter (item => item.id !== id);
        }
    },
    data: function () {
        return {
            itemIdCounter: 2,
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
