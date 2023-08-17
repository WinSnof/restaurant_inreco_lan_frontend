import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDishToMenu, deleteDishFromMenu,
  fetchMenuDishes,
} from "src/modules/dishMenu/api/index.js";

export const useFetchMenuDishes = (id) => {
  return useQuery({
    queryKey: ["menu-dishes", id],
    queryFn: ({ queryKey }) => fetchMenuDishes(queryKey),
    staleTime: Infinity,
  });
};

export const useAddDishToMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addDishToMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["menu-dishes"],
      }).then(() => console.log('success'))
    },
  });
};

export const useDeleteDishFromMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDishFromMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["menu-dishes"],
      }).then(() => console.log('success'))
    },
  });
}
