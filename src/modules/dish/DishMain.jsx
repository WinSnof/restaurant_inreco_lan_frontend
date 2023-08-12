import { DishList } from "src/modules/dish/components/DishList";
import { AddNewDishModal } from "src/modules/dish/components/modal/AddNewDishModal";
import { MainContainer } from "src/shared/ui/MainContainer";
import { DishTopMenu } from "src/modules/dish/components/DishTopMenu";
export const DishMain = () => {
  return (
    <MainContainer>
      <DishTopMenu />
      <DishList />
      <AddNewDishModal />
    </MainContainer>
  );
};
