import {DISH_MENU_PATH, DISHES_PATH, MENU_PATH} from "src/shared/router/paths.js";
import { DishMenuPage } from "src/shared/pages/DishMenuPage.jsx";
import { MenuPage } from "src/shared/pages/MenuPage";
import { DishesPage } from "src/shared/pages/DishesPage";

export const public_routes = [
  {
    path: DISH_MENU_PATH,
    Element: <DishMenuPage />,
  },
  {
    path: MENU_PATH,
    Element: <MenuPage />,
  },
  {
    path: DISHES_PATH,
    Element: <DishesPage />,
  },
];
