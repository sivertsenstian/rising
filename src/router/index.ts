import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import BuildOrdersIndexView from "@/views/BuildOrders/BuildOrdersIndexView.vue";
import NewBuildOrderView from "@/views/BuildOrders/NewBuildOrderView.vue";
import ShowBuildOrderView from "@/views/BuildOrders/ShowBuildOrderView.vue";
import EditBuildOrderView from "@/views/BuildOrders/EditBuildOrderView.vue";
import MapsView from "@/views/MapsView.vue";
import DoctrinesView from "@/views/DoctrinesView.vue";
import ChangelogView from "@/views/ChangelogView.vue";
import ChangelogAdminView from "@/views/ChangelogAdminView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/buildorders",
    },
    {
      path: "/buildorders",
      children: [
        { path: "", name: "Build Orders", component: BuildOrdersIndexView },
        {
          path: "new",
          name: "Create New Build Order",
          component: NewBuildOrderView,
        },
        {
          path: ":id/edit",
          name: "Edit Build Order",
          component: EditBuildOrderView,
        },
        {
          path: ":id",
          name: "Build Order",
          component: ShowBuildOrderView,
        },
      ],
    },
    {
      path: "/changelog",
      children: [
        { path: "", name: "Changelog", component: ChangelogView },
        {
          path: "admin",
          name: "Changelog Admin",
          component: ChangelogAdminView,
        },
      ],
    },
    {
      path: "/doctrines",
      name: "Doctrines",
      component: DoctrinesView,
    },
    {
      path: "/maps",
      name: "Ladder Maps",
      component: MapsView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const base = "Ape Science - Tempest Rising Research Facility";
  if (typeof to.name === "string") {
    document.title = `${base} // ${to.name}`;
  } else {
    document.title = base;
  }

  next();
});

export default router;
