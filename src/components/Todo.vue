<template>
    <div>
        <todo-add-item 
            v-on:itemAdded="addTodoItem($event)"
        />
        <todo-list-item
            v-for="item in todoItems"
            v-on:deleteItem="removeTodoItem($event)"
            v-on:changed="$emit('itemChanged', item.id)"
            :key="item.id"
            :todoItem="item"
        />
    </div>
</template>

<script>
import TodoListItem from './TodoListItem';
import TodoAddItem from './TodoAddItem';
import moment from 'moment';

export default {
    name: 'Todo',
    components: {
        TodoListItem,
        TodoAddItem
    },
    props: {
        todoItems: Array
    },
    methods: {
        addTodoItem: function (newItemTitle) {
            this.todoItems.push({
                id: ++this.itemIdCounter,
                title: newItemTitle,
                description: '',
                completed: false,
                added: moment().format('YYYY-MM-DD')
            });
        },
        removeTodoItem: function (id) {
            this.$emit('removeTodoItem', id);
        }
    },
    data: function () {
        var itemIdCounterStart = (this.todoItems.length>0) ?
                                                        Math.max (...this.todoItems.map (item => item.id)) :
                                                        0;
        return {
            itemIdCounter: itemIdCounterStart
        }
    }
}
</script>