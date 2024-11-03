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
    path: '/blog/:id', // Ensure this path matches how you're linking to the details page
    component: 'Blog/PostDetails', // Adjust based on your file structure
  },
  {
    path: "/contact",
    exact: true,
    component: "Contact",
  },
];

export default routes;
