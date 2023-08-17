import { DishMenuList } from "src/modules/dishMenu/components/DishMenuList.jsx";
import { MainContainer } from "src/shared/ui/MainContainer";
import { DishMenuTopBar } from "src/modules/dishMenu/components/DishMenuTopBar.jsx";
import { AddDishToMenuModal } from "src/modules/dishMenu/components/modal/AddDishToMenuModal";

export const DishMenuMain = () => {
  return (
    <MainContainer>
      <DishMenuTopBar />
      <DishMenuList />
      {/*<AddNewDishModal />*/}
      <AddDishToMenuModal />
    </MainContainer>
  );
};
