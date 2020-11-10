<template>
  <div class="container mx-auto flex justify-center py-10 p-2">
    <div class="w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-teal-400 to-blue-300 flex flex-col rounded-lg p-6">
      <div class="text-xl font-bold mb-5">Redeem Mlbb Diamonds</div>

      <form>
        <div class="flex flex-col my-6">
          <label for="player_id" class="mb-2 font-bold">Game Id <span class="text-red-500">*</span></label>
          <input v-model="game_id" type="text" id="player_id" class="p-2 text-sm focus:outline-none rounded">
          <span v-if="errors.game_id" class="text-xs text-red-500 py-1">{{ errors.game_id }}</span>
        </div>

        <div class="flex flex-col my-6">
          <label for="server_id" class="mb-2 font-bold">Server Id <span class="text-red-500">*</span></label>
          <input v-model="server_id" type="text" id="server_id" class="p-2 text-sm focus:outline-none rounded">
          <span v-if="errors.server_id" class="text-xs text-red-500 py-1">{{ errors.server_id }}</span>
        </div>

        <div class="flex flex-col my-6" v-if="!token">
          <label for="code" class="mb-2 font-bold">Redeem Code <span class="text-red-500">*</span></label>
          <input v-model="code" type="text" id="code" class="p-2 text-sm focus:outline-none rounded">
          <span v-if="errors.code" class="text-xs text-red-500 py-1">{{ errors.code }}</span>
        </div>

        <div class="flex my-6 justify-center items-center">
          <button @click.prevent="redeem" class="bg-red-300 p-2 w-full rounded uppercase focus:outline-none"
                  :disabled="Object.keys(errors).length != 0">Redeem
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mlbb.vue",

  data() {
    return {
      game_id: '',
      server_id: '',
      code: '',
      token: false,
      errors: {}
    }
  },

  created() {
    if (this.$route.query.code) {
      this.code = this.$route.query.code
      this.token = true
    }
  },

  watch: {
    game_id() {
      if (this.game_id.length > 0) {
        delete this.errors.game_id
      } else {
        this.errors.game_id = 'Game id is required'
      }
    },
    server_id() {
      if (this.server_id.length > 0) {
        delete this.errors.server_id
      } else {
        this.errors.server_id = 'Server id is required'
      }
    },
    code() {
      if (this.code.length > 0) {
        delete this.errors.code
      } else {
        this.errors.code = 'Game id is required'
      }
    }
  },

  methods: {
    redeem() {
      this.validateForm()
      if(this.checkForm()) {
        alert('passed')
      }
    },

    validateForm() {
      if (!this.game_id) {
        this.errors.game_id = 'Game id is required'
      }
      if (!this.server_id) {
        this.errors.server_id = 'Server id is required'
      }
      if (!this.code) {
        this.errors.code = 'Redeem code is required'
      }
    },

    checkForm() {
      return Object.keys(this.errors).length === 0
    }
  }
}
</script>

<style scoped>

</style>