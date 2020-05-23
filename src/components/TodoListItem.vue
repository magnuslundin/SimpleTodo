<template>
    <div class="row">
        <div 
            class="col-12 bg-light rounded shadow py-2 mt-2 todo-list-item"
        >
            <div class="input-group">
                <span class="input-group-addon">
                    <input-checkbox
                        v-model="todoItem.completed"
                        :size="1.8"
                        v-on:input="onChange ()"
                        v-on:click="showExtendedDetails=false"
                    >
                    </input-checkbox>
                </span>
                <div class="input-group-addon col ">
                    <input 
                        class="form-control" 
                        type="text" 
                        v-model="todoItem.title"
                        v-on:change="onChange ()"
                        :class="{'shadow-none bg-transparent border-0': !showExtendedDetails}"
                        :readonly="!showExtendedDetails"
                    />
                    <div class="mt-3" v-if="showExtendedDetails">
                        <div class="col px-0">
                            <textarea 
                                class="form-control"
                                v-model="todoItem.description"
                                v-on:change="onChange ()"
                                placeholder="Describe in detail what you are about to do"
                            ></textarea>
                        </div>
                        <div class="col px-0 mt-3">
                            <span class="small text-muted"><strong>Created</strong> {{ this.todoItem.added }}</span>
                        </div>
                    </div>
                </div>
                <!-- Edit button -->
                <span class="input-group-button ml-2" v-if="!todoItem.completed">
                    <button 
                        class="btn btn-default shadow-none"
                        type="button" 
                        aria-label="Left Align"
                        v-on:click="showExtendedDetails=!showExtendedDetails"
                    >
                        <b-icon-pencil-square></b-icon-pencil-square>
                    </button>
                </span>
                <!-- Delete button -->
                <span class="input-group-button" v-if="todoItem.completed">
                    <button 
                        class="btn btn-danger"
                        v-on:click="$emit('deleteItem', todoItem.id)"
                    >
                        <b-icon-trash></b-icon-trash>
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import InputCheckbox from './InputCheckbox';

export default {
    name: 'TodoListItem',
    components: {
        InputCheckbox
    },
    methods: {
        onChange () {
            console.log ('Changed');
            this.$emit('changed');
        }
    },
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