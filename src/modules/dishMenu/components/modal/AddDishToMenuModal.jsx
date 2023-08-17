import { ModalWindow } from "src/shared/ui/ModalWindow";
import { useDishMenuStore } from "src/modules/dishMenu/store/index.js";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useFetchDishes } from "src/modules/dishes/hooks/index.js";
import { useAddDishToMenu } from "src/modules/dishMenu/hooks/index.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const AddDishToMenuModal = () => {
  const isOpen = useDishMenuStore((s) => s.addModalOpen);
  const close = useDishMenuStore((s) => s.setAddModalOpen);

  const { id } = useParams();

  const [dishId, setDishId] = useState(0);

  const { data: dishList } = useFetchDishes();
  const { mutate: addDishToMenuFunc } = useAddDishToMenu();

  const handleAddDishToMenu = () => {
    addDishToMenuFunc({ menuId: id, dishId: dishId });
  };

  if (dishList) {
    return (
      <ModalWindow isOpen={isOpen}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={dishList}
          onChange={(e, v) => setDishId(v?.id)}
          getOptionLabel={(e) => e.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Блюда" />}
        />
        <Button onClick={handleAddDishToMenu}>Add</Button>
        <Button onClick={close}>CLose</Button>
      </ModalWindow>
    );
  }

  return <></>;
};
