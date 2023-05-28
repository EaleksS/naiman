import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { ThankYou } from "../ThankYou/ThankYou";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "/thankyou", Component: ThankYou, key: "thankyou_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
