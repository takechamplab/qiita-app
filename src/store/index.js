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
    items: []
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
    async postItems(_, params) {
      await axios.post("/items", params);
    },
    async getItems({ commit }) {
      const response = await axios.get("/authenticated_user/items");
      commit("setItems", response.data);
    },
    async getItem({ commit }, itemId) {
      const response = await axios.get(`/items/${itemId}`);
      commit("setItem", response.data);
    },
    async patchItem(_, { itemId, params }) {
      await axios.patch(`/authenticated_user/items/${itemId}`, params);
    },
    async deleteItem(_, itemId) {
      await axios.delete(`/authenticated_user/items/${itemId}`);
    }
  },
  modules: {}
});
