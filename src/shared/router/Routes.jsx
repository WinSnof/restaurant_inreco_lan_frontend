import { DISH_PATH, MENU_PATH } from "src/shared/router/paths.js";
import { DishPage } from "src/shared/pages/DishPage";
import { MenuPage } from "src/shared/pages/MenuPage";

export const public_routes = [
  {
    path: DISH_PATH,
    Element: <DishPage />,
  },
  {
    path: MENU_PATH,
    Element: <MenuPage />,
  },
];
