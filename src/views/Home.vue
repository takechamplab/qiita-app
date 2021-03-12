<template>
  <div class="home">
    <p>{{ "ストアには " + storeToken + " がセットされています" }}</p>
    <input class="input" type="text" v-model="token" />
    <button @click="setToken">トークンをセットする</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      token: ""
    };
  },
  computed: {
    storeToken() {
      return this.$store.state.token;
    },
    items() {
      return this.$store.state.items;
    }
  },
  methods: {
    setToken() {
      this.$store.commit("setToken", this.token);
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  margin-bottom: 10px;
}
</style>
