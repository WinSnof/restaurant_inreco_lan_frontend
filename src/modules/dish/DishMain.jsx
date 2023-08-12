import { Button, IconButton} from "@mui/material";
import { DishList } from "src/modules/dish/components/DishList";
import { useDishStore } from "src/modules/dish/store/index.js";
import { AddNewDishModal } from "src/modules/dish/components/modal/AddNewDishModal";
import {ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {MainContainer} from "src/shared/ui/MainContainer";
import {MainButtonBox} from "src/shared/ui/MainButtonBox";


export const DishMain = () => {
  const setAddDishModalOpen = useDishStore((s) => s.setAddModalOpen);
  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate('/menu')
  }

  return (
    <MainContainer>
      <IconButton title='Вернуться к меню' onClick={handleNavigateToMenu}>
        <ArrowBack/>
      </IconButton>
      <MainButtonBox>
        <Button
          color="success"
          variant="contained"
          onClick={setAddDishModalOpen}
        >
          Добавить блюдо в меню
        </Button>
      </MainButtonBox>
      <DishList />
      <AddNewDishModal />
    </MainContainer>
  );
};
