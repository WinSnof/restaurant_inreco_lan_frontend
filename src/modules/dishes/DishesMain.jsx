import { Box, IconButton } from "@mui/material";
import { AddCircleOutlined } from "@mui/icons-material";
import { MainContainer } from "src/shared/ui/MainContainer";
import { DishesList } from "src/modules/dishes/components/DishesList";
import { AddDishModal } from "src/modules/dishes/components/modal/AddDishModal";
import { useDishStore } from "src/modules/dishes/store/index.js";

export const DishesMain = () => {
  const setAddDishModalOpen = useDishStore((s) => s.setAddModalOpen);

  return (
    <MainContainer>
      <AddDishModal />
      <Box
        display="flex"
        my={3}
        justifyContent="center"
        gap={3}
      >
        <IconButton title="Добавить новое меню" onClick={setAddDishModalOpen}>
          <AddCircleOutlined color="inherit" />
        </IconButton>
      </Box>
      <DishesList />
    </MainContainer>
  );
};
