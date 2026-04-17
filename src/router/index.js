import { createRouter, createWebHistory } from "vue-router";
import { isAllowedRole, isPublicRoute, mockUserState } from "./routerLogic";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      requiresAuth: false,
      allowedRoles: [],
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
    meta: {
      requiresAuth: false,
      allowedRoles: [],
    },
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/ProductsView.vue"),
    meta: {
      requiresAuth: false,
      allowedRoles: [],
    },
  },
  {
    path: "/products/:id(\\d+)",
    name: "ProductDetails",
    component: () => import("../views/ProductDetailsView.vue"),
    props: true,
    meta: {
      requiresAuth: false,
      allowedRoles: [],
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from);

  if (isPublicRoute(to)) {
    next();
    return;
  }

  if (mockUserState.isAuthenticated && isAllowedRole(to)) {
    next();
  } else {
    next({ name: "Home" });
  }
});

export default router;
