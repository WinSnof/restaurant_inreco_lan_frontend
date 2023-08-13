import { ModalWindow } from "src/shared/ui/ModalWindow";
import { useDishStore } from "src/modules/dishes/store/index.js";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import {useAddDishes, useFetchDishTypes} from "src/modules/dishes/hooks/index.js";

export const AddDishModal = () => {
  const isOpen = useDishStore((s) => s.addModalOpen);
  const close = useDishStore((s) => s.setAddModalOpen);
  const { data: dishTypesList } = useFetchDishTypes()

  const { mutate: addNewDish } = useAddDishes()

  const [dish, setDish] = useState({
    title: "",
    price: 0,
    type_id: 0,
  });

  const handleAddNewDish = () => {
    addNewDish(dish);
  };

  return (
    <ModalWindow isOpen={isOpen}>
      <TextField
        id="dish_title"
        label="Название"
        variant="standard"
        value={dish.title}
        onChange={(e) => setDish({ ...dish, title: e.target.value })}
      />
      <TextField
        id="dish_price"
        label="Цена"
        variant="standard"
        value={dish.price}
        onChange={(e) => setDish({ ...dish, price: e.target.value })}
      />
      <Select
        value={dish.type_id}
        onChange={(e) => setDish({ ...dish, type_id: e.target.value })}
      >
        {dishTypesList?.map((i) => (
          <MenuItem key={i.title} value={i.id}>
            {i.title}
          </MenuItem>
        ))}
      </Select>
      <Button onClick={handleAddNewDish}>Add</Button>
      <Button onClick={close}>Close</Button>
    </ModalWindow>
  );
};
