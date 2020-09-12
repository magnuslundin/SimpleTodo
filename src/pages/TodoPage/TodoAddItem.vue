<template>
  <div class="row">
    <div class="col-12 mb-3 py-2 rounded-bottom bg-dark">
      <div class="input-group">
        <input
          class="form-control rounded width100"
          type="text"
          placeholder="What do you want to do?"
          v-model="newItemTitle"
          v-on:keyup="interpretKeyStroke($event)"
        />
        <span class="input-group-btn">
          <button
            class="btn btn-light ml-1"
            v-on:click="addItem()"
            :disabled="newItemTitle.length < 3"
          >
            <b-icon-plus></b-icon-plus>
          </button>
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
      this.$emit('itemAdded', this.newItemTitle)
      this.newItemTitle = ''
    },
    interpretKeyStroke (e) {
      if (e.keyCode === 13) {
        this.addItem()
      }
    }
  },
  data: function () {
    return {
      newItemTitle: ''
    }
  }
}
</script>
