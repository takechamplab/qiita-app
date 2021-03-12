<template>
  <div class="item" @click="onClickItem">
    <div class="title">{{ item.title }}</div>
    <div class="tags">{{ tag }}</div>
    <div class="body">{{ item.body }}</div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  computed: {
    tag() {
      return this.$props.item.tags.map(t => t.name).join(", ");
    }
  },
  methods: {
    onClickItem() {
      this.$store.commit("setItem", this.$props.item);
      this.$router.push(`/items/${this.$props.item.id}`);
    }
  }
};
</script>

<style scoped>
.item {
  width: 100%;
  padding: 5px;
  border-bottom: solid 1px gray;
  cursor: pointer;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.body {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tags {
  color: gray;
}
</style>
