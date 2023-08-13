import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addDish, deleteDish, getAllDishes, getAllDishTypes} from "src/modules/dishes/api/index.js";

export const useFetchDishes = () => {
  return useQuery({
    queryKey: ["dishes"],
    queryFn: getAllDishes,
  });
};

export const useFetchDishTypes = () => {
  return useQuery({
    queryKey: ["dish-types"],
    queryFn: getAllDishTypes,
  });
};

export const useAddDishes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dish) => addDish(dish),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["dishes"] }),
  });
}

export const useDeleteDish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteDish(id),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["dishes"] }),
  });
};
