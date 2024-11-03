// src/router/config.ts
const routes = [
  {
    path: "/",
    exact: true,
    component: "Home", // Adjust the component names as necessary
  },
  {
    path: "/about",
    exact: true,
    component: "About",
  },
  {
    path: "/blog",
    exact: true,
    component: "Blog", // The main Blog page with a list of posts
  },
  {
    path: "/blog/:postId",
    exact: true,
    component: "Blog/PostDetails", // The detail view for a single post
  },
  {
    path: "/contact",
    exact: true,
    component: "Contact",
  },
];

export default routes;
