import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMenu, deleteMenu, fetchMenuList } from "src/modules/menu/api/index.js";

export const useFetchMenuList = () => {
  return useQuery({
    queryFn: () => fetchMenuList(),
    queryKey: ["menu-list"],
  });
};

export const useAddMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (menu) => createMenu(menu),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["menu-list"] }),
  });
};

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteMenu(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["menu-list"] }),
  });
};
