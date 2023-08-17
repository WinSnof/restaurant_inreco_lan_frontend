import { $host } from "src/shared/api/index.js";

const FETCH_MENU_DISHES = "menu-list/{menu_id}/dishes";
const DELETE_DISH_FROM_MENU = "/api/v1/menu-list/{menu_id}/dishes/{dish_id}";
const ADD_DISH_TO_MENU = "/api/v1/menu-list/{menu_id}/dishes/{dish_id}";

export const fetchMenuDishes = async (id) => {
  return $host.get(`menu-list/${id[1]}/dishes`).then((r) => r.data);
};

export const addDishToMenu = async (model) => {
  return await $host
    .post(`menu-list/${model.menuId}/dishes/${model.dishId}`)
    .then((r) => r.data);
};

export const deleteDishFromMenu = async (model) => {
  return await $host
    .delete(`menu-list/${model.menuId}/dishes/${model.dishId}`)
    .then((r) => r.data);
};
