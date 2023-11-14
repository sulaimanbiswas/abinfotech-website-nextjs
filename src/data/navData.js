export const commonNavData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const afterLoginNavData = [
  ...commonNavData,
  {
    link: "/dashboard",
    title: "Dashboard",
  },
];

export const beforeLoginNavData = [
  ...commonNavData,
  {
    link: "/signup",
    title: "Signup",
  },
  {
    link: "/login",
    title: "Login",
  },
];
