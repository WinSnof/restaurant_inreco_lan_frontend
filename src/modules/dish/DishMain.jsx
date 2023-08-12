import {Box, Button, Container, IconButton} from "@mui/material";
import { DishList } from "src/modules/dish/components/DishList";
import { useDishStore } from "src/modules/dish/store/index.js";
import { AddNewDishModal } from "src/modules/dish/components/modal/AddNewDishModal";
import {ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


export const DishMain = () => {
  const setAddDishModalOpen = useDishStore((s) => s.setAddModalOpen);
  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate('/menu')
  }


  return (
    <Container my={3} mx={3} sx={{mb:5}}>
      <IconButton title='Вернуться к меню' onClick={handleNavigateToMenu}>
        <ArrowBack/>
      </IconButton>
      <Box display="flex" my={3} justifyContent="center">
        <Button
          color="success"
          variant="contained"
          onClick={setAddDishModalOpen}
        >
          Добавить блюдо в меню
        </Button>
      </Box>
      <DishList />
      <AddNewDishModal />
    </Container>
  );
};
