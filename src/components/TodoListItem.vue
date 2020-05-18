<template>
    <div class="row">
        <div 
            class="col-12 bg-light rounded shadow py-2 mt-2 todo-list-item"
            v-on:click="showExtendedDetails=!showExtendedDetails"
        >
            <div class="form-inline">
                <div class="ml-2">
                    <input 
                        class="form-control"
                        type="checkbox" 
                        v-model="todoItem.completed"  
                        v-on:change="$emit('changed')"
                    />
                </div>
                <div class="ml-2">
                    <input 
                        class="form-control col-md-12" 
                        type="text" 
                        v-show="false" 
                        v-model="todoItem.title"
                        v-on:change="$emit('changed')"
                    />
                    <span
                        :class="{ completed: todoItem.completed }"
                    >{{ todoItem.title }}</span>
                </div>
                <div 
                    class="ml-auto mr-2"
                    v-if="todoItem.completed"
                >
                    <button 
                        class="btn btn-danger"
                        v-on:click="$emit('deleteItem', todoItem.id)"
                    >Delete</button>
                </div>
            </div>
            <div 
                class="col-12"
                v-if="showExtendedDetails"
            >
                <div>{{ this.todoItem.description }}</div>
                <div>Added: {{ this.todoItem.added }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: ['todoItem'],
    data() {
        return {
            showExtendedDetails: false
        }
    }
}
</script>

<style scoped>
    span.completed {
        text-decoration: line-through;
    }
    div.todo-list-item {
        cursor:pointer;
    }
</style>