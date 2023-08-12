import {Box, IconButton} from "@mui/material";
import {MenuList} from "src/modules/menu/components/MenuList.jsx";
import {MainContainer} from "src/shared/ui/MainContainer";
import {AddCircleOutlined} from "@mui/icons-material";

export const MenuMain = () => {
  return (
    <MainContainer>
      <Box display="flex" my={3} justifyContent="center" gap={3}>
        <IconButton title='Добавить новое меню'>
          <AddCircleOutlined color='inherit'/>
        </IconButton>
      </Box>
      <MenuList/>
    </MainContainer>
  );
};
