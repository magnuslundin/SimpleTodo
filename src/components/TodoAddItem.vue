<template>
    <div class="row">
        <div class="col-12 mb-3 py-2 rounded-bottom bg-dark">
            <div class="input-group">
                <input 
                    class="form-control rounded width100    "
                    type="text" 
                    placeholder="What do you want to do?"
                    v-model="newItemTitle"
                />
                <span class="input-group-btn">
                    <button 
                        class="btn btn-light ml-1"
                        v-on:click="addItem ()"
                        :disabled="newItemTitle.length < 3"
                    >Add</button>
                </span>
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