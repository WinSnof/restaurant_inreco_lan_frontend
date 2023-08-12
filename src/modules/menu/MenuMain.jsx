import {Box, Button, Container} from "@mui/material";
import {MenuList} from "src/modules/menu/components/MenuList.jsx";

export const MenuMain = () => {
  return (
    <Container my={3} mx={3} sx={{mb:5}}>
      <Box display="flex" my={3} justifyContent="center">
        <Button color="success" variant="contained">
          Добавить меню
        </Button>
      </Box>
      <MenuList/>
    </Container>
  );
};
