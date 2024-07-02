import React from "react";
import { routeNames } from "../utils/routeNames";

const Home = React.lazy(() => import("./pages/Site/Home/Home"));

export const siteRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC<any>>;
}[] = [
  {
    path: routeNames.home,
    Component: Home,
  },
];

const Login = React.lazy(() => import("./pages/Auth/Login/Login"));
const SignUp = React.lazy(() => import("./pages/Auth/Signup/Signup"));

export const authRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC<any>>;
}[] = [
  {
    path: routeNames.login,
    Component: Login,
  },
  {
    path: routeNames.signUp,
    Component: SignUp,
  },
];
