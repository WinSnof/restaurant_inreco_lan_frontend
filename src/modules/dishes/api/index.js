import { $host } from "src/shared/api/index.js";

export const getAllDishes = async () => {
  return await $host.get("dishes").then((r) => r.data);
};

export const getAllDishTypes = async () => {
  return await $host.get("dish-types").then((r) => r.data);
};

export const addDish = async (dish) => {
  return await $host.post("dishes", dish).then((r) => r.data);
};

export const deleteDish = async (id) => {
  return await $host.delete(`dishes/${id}`)
}
