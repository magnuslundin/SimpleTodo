<template>
    <div class="row">
        <div class="col-12 bg-light rounded shadow py-2 mt-2">
            <div class="form-inline">
                <div class="ml-2">
                    <input 
                        class="form-control"
                        type="checkbox" 
                        v-model="todoItem.completed"  
                    />
                </div>
                <div class="ml-2">
                    <input 
                        class="form-control col-md-12" 
                        type="text" 
                        v-show="false" 
                        v-model="todoItem.title" 
                        readonly 
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: ['todoItem']
}
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>