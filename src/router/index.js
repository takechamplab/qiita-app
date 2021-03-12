import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PostItem from "../views/PostItem.vue";
import Items from "../views/Items.vue";
import ItemDetail from "../views/ItemDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/items/post",
    name: "PostItem",
    component: PostItem
  },
  {
    path: "/items",
    name: "Items",
    component: Items
  },
  {
    path: "/items/:id",
    name: "ItemDetail",
    component: ItemDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
