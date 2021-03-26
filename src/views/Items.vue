<template>
  <div class="items">
    <Item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Item from "../components/Item";

export default {
  name: "Home",
  components: {
    Item
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  mounted() {
    this.$store.dispatch("getItems");
  }
};
</script>

<style scoped>
.items {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.items > div:first-child {
  border-top: solid 1px gray;
}
</style>
