import { Box, IconButton } from "@mui/material";
import { AddCircleOutlined, ArrowBack } from "@mui/icons-material";
import { useDishStore } from "src/modules/dishMenu/store/index.js";
import { useNavigate } from "react-router-dom";

export const DishMenuTopBar = () => {
  const setAddDishModalOpen = useDishStore((s) => s.setAddModalOpen);
  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate("/menu");
  };
  return (
    <>
      <Box display="flex" alignItems="center" mt={2}>
        <IconButton title="Вернуться к меню" onClick={handleNavigateToMenu}>
          <ArrowBack />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" mb={2}>
        <IconButton title="Добавить блюдо в меню" onClick={setAddDishModalOpen}>
          <AddCircleOutlined color="inherit" />
        </IconButton>
      </Box>
    </>
  );
};
