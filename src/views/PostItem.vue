<template>
  <div class="add-note">
    <input
      class="title"
      type="text"
      placeholder="タイトルを入力"
      v-model="title"
    />
    <textarea
      class="body"
      cols="30"
      rows="10"
      placeholder="本文を入力"
      v-model="body"
    ></textarea>
    <div class="tags">
      <input
        class="tag"
        v-for="(tag, i) in tags"
        :key="i + tag"
        type="text"
        placeholder="タグを入力"
        v-model="tag.name"
      />
      <button class="button" @click="addTag">タグ追加</button>
    </div>
    <div class="private">
      <input type="checkbox" id="isPrivate" v-model="isPrivate" />
      <label for="isPrivate">限定共有</label>
    </div>
    <button class="button" @click="save">保存</button>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  data() {
    return {
      title: "",
      body: "",
      isPrivate: true,
      tags: []
    };
  },
  methods: {
    addTag() {
      this.tags.push({
        name: ""
      });
    },
    save() {
      const payload = {
        title: this.title,
        body: this.body,
        private: this.isPrivate,
        tags: this.tags
      };
      this.$store.dispatch("postItem", payload);

      // 一覧に移動
      this.$router.push("/items");
    }
  }
};
</script>

<style scoped>
.add-note {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-bottom: 10px;
}
.body {
  margin-bottom: 10px;
}
.tags {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tag {
  margin-bottom: 10px;
}
.private {
  margin-bottom: 10px;
}
.button {
  margin-bottom: 10px;
}
</style>
