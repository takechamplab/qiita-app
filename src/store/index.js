import Vue from "vue";
import Vuex from "vuex";
import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: "https://qiita.com/api/v2"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    items: [],
    item: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setItems(state, items) {
      state.items = items;
    },
    setItem(state, item) {
      state.item = item;
    }
  },
  actions: {
    async postItem({ state }, params) {
      if (!state.token) return;

      await axios.post("/items", params, {
        headers: { Authorization: `Bearer ${state.token}` }
      });
    },
    async getItems({ state, commit }) {
      if (!state.token) return;

      const response = await axios.get("/authenticated_user/items", {
        headers: { Authorization: `Bearer ${state.token}` }
      });
      commit("setItems", response.data);
    },
    async patchItem({ state }, { itemId, params }) {
      if (!state.token) return;

      await axios.patch(`/items/${itemId}`, params, {
        headers: { Authorization: `Bearer ${state.token}` }
      });
    },
    async deleteItem({ state }, itemId) {
      if (!state.token) return;

      await axios.delete(`/items/${itemId}`, {
        headers: { Authorization: `Bearer ${state.token}` }
      });
    }
  },
  modules: {}
});
