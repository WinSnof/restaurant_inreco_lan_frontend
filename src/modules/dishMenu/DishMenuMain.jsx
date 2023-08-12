import { DishMenuList } from "src/modules/dishMenu/components/DishMenuList.jsx";
import { AddNewDishModal } from "src/modules/dishMenu/components/modal/AddNewDishModal";
import { MainContainer } from "src/shared/ui/MainContainer";
import {DishMenuTopBar} from "src/modules/dishMenu/components/DishMenuTopBar.jsx";
export const DishMenuMain = () => {
  return (
    <MainContainer>
      <DishMenuTopBar />
      <DishMenuList />
      <AddNewDishModal />
    </MainContainer>
  );
};
