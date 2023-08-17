import { $host } from "src/shared/api/index.js";

const FETCH_DISHES = "dishes";
const CREATE_OR_UPDATE_DISHES = "dishes";
const FETCH_DISH_TYPES = "dish-types";

export const getAllDishes = async () => {
  return await $host.get(FETCH_DISHES).then((r) => r.data);
};

export const getAllDishTypes = async () => {
  return await $host.get(FETCH_DISH_TYPES).then((r) => r.data);
};

export const addDish = async (dish) => {
  return await $host.post(CREATE_OR_UPDATE_DISHES, dish).then((r) => r.data);
};

export const deleteDish = async (id) => {
  return await $host.delete(`dishes/${id}`)
}
