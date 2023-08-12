import {Box, Button} from "@mui/material";
import {MenuList} from "src/modules/menu/components/MenuList.jsx";
import {MainContainer} from "src/shared/ui/MainContainer";

export const MenuMain = () => {
  return (
    <MainContainer>
      <Box display="flex" my={3} justifyContent="center" gap={3}>
        <Button color="success" variant="contained">
          Добавить меню
        </Button>
        <Button color="success" variant="contained">
          Добавить блюдо
        </Button>
      </Box>
      <MenuList/>
    </MainContainer>
  );
};
