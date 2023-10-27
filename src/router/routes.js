const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //{ path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "sign-in",
        name: "Login",
        component: () => import("pages/SignIn/Index.vue"),
        alias: "",
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("pages/SignUp/Index.vue"),
      },
      {
        path: "main",
        name: "main",
        component: () => import("pages/Main/Index.vue"),
      },
      {
        path: "my-area",
        name: "my-area",
        component: () => import("pages/MyArea/Index.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("pages/Profile/Index.vue"),
      },
      {
        path: "new-post",
        name: "new-post",
        component: () => import("pages/NewPost/Index.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
