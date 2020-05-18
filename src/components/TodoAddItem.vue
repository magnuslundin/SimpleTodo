<template>
    <div class="row">
        <div class="col-12 mb-3 py-2 rounded-bottom bg-dark">
            <div class="form-inline">
                <input 
                    v-model="newItemTitle"
                    class="form-control col-lg-11"
                    type="text" 
                    placeholder="What do you want to do?"
                />
                <button 
                    class="btn btn-light ml-2"
                    v-on:click="addItem ()"
                    :disabled="newItemTitle.length < 3"
                >Add</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoAddItem',
    methods: {
        addItem () {
            this.$emit('itemAdded', this.newItemTitle);
            this.newItemTitle = '';
        }
    },
    data: function () {
        return {
            newItemTitle: ''
        }
    }
}
</script>