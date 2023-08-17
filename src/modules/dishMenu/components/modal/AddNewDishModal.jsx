import { ModalWindow } from "src/shared/ui/ModalWindow";
import { useDishMenuStore } from "src/modules/dishMenu/store/index.js";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { UploadImage } from "src/shared/ui/UploadImage";
import { useState } from "react";

export const AddNewDishModal = () => {
  const isOpen = useDishMenuStore((s) => s.addModalOpen);
  const setIsOpen = useDishMenuStore((s) => s.setAddModalOpen);
  const [dish, setDish] = useState({
    title: "",
    price: 0,
    image: null,
    dish_type_id: 0,
  });

  const handleAddNewDish = () => {};

  return (
    <ModalWindow isOpen={isOpen}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5">Добавить новое блюдо</Typography>
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
        <UploadImage />
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={dish.dish_type_id}
          onChange={(e) => setDish({ ...dish, dish_type_id: e.target.value })}
          label="Age"
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>Итальянская</MenuItem>
          <MenuItem value={2}>Французская</MenuItem>
          <MenuItem value={3}>Русская</MenuItem>
        </Select>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Button onClick={handleAddNewDish}>Добавить</Button>
          <Button onClick={setIsOpen}>Close</Button>
        </Box>
      </Box>
    </ModalWindow>
  );
};
