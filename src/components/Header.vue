<template>
  <div id="nav">
    <router-link to="/">ホーム</router-link> |
    <router-link to="/items/post">投稿</router-link> |
    <router-link to="/items">記事一覧</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
