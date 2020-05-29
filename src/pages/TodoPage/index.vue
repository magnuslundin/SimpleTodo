<template>
    <div>
        <todo-add-item 
            v-on:itemAdded="addTodoItem($event)"
        />
        <todo-list-item
            v-for="item in todoItems"
            v-on:deleteItem="removeTodoItem($event)"
            v-on:changed="storeTodoItemData()"
            v-on:completedToggle="reorderIdOnCompletedToggle ($event)"
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
    mounted () {
        if (!localStorage.initialized) {
            return;
        }
        this.loadTodoItemData ();
    },
    watch: {
        todoItems () {
            this.storeTodoItemData ();
        }
    },
    methods: {
        addTodoItem: function (newItemTitle) {
            this.todoItems.push({
                id: this.itemIdCounter+1,
                title: newItemTitle,
                description: '',
                completed: false,
                added: moment().format('YYYY-MM-DD')
            });
        },
        removeTodoItem (id) {
            this.todoItems = this.todoItems.filter(item => item.id !== id);
        },
        storeTodoItemData () {
            localStorage.todoItems = JSON.stringify(this.todoItems);
        },
        loadTodoItemData () {
            if (localStorage.todoItems.length===0) {
                this.todoItems = [];
                return;
            }
            this.todoItems = JSON.parse(localStorage.todoItems);
            // True/false is interpreted as strings by JSON.parse
            this.todoItems.map (item => item.completed = (item.completed === true) ? true : false);
        },
        reorderIdOnCompletedToggle (id) {
            const changedItem = this.todoItems.find(item => item.id===id);
            
            this.todoItems = this.todoItems.filter(item => item.id!==changedItem.id)
            if (changedItem.completed) {
                this.todoItems.push(changedItem);
            } else {
                this.todoItems.unshift(changedItem);
            }
        }
    },
    computed: {
        itemIdCounter: function () {
            if (!this.todoItems) {
                return 0;
            }
            return (this.todoItems.length>0) ?
                                            Math.max (...this.todoItems.map (item => item.id)) :
                                            0;
        }
    },
    data: function () {
        return {
            todoItems: []
        }
    }
}
</script>