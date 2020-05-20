<template>
    <div class="input-checkbox">
        <label
            :style="{ 'font-size': fontSize+'em' }"    
        >
            <input 
                type="checkbox"
                v-on:change="onChange($event)"
                v-model="checked"
            />
            <span 
                class="checkbox-square"
                v-on:click="$emit('click')"
            ></span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: Boolean,
        size: Number
    },
    methods: {
        onChange (event) {
            this.$emit ('input', event.target.checked)
        }
    },
    data () {
        return {
            checked: this.value,
            fontSize: (this.size) ? this.size : 1.0
        }
    }
}
</script>

<style scoped>
    .input-checkbox,
    .input-checkbox label {
        margin: 0;
        line-height: 0;
    }
    .input-checkbox label .checkbox-square {
        display: inline-block;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        width: 1.3em;
        height: 1.3em;
    }

    .input-checkbox label input[type="checkbox"] {
        display: none;
    }

    .input-checkbox label input[type="checkbox"]+.checkbox-square:before {
        content: ''
    }

    .input-checkbox label input[type="checkbox"]:checked+.checkbox-square:before {
        content: '\2713';
        color: #495057;
        font-weight: bold;
        position: absolute;
        top: 1.25rem;
        left: 0.4rem;
    }
</style>