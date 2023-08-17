import { Box, IconButton } from "@mui/material";
import { MenuList } from "src/modules/menu/components/MenuList.jsx";
import { MainContainer } from "src/shared/ui/MainContainer";
import { AddCircleOutlined } from "@mui/icons-material";
import { useMenuStore } from "src/modules/menu/store/index.js";
import { AddMenuModal } from "src/modules/menu/components/modal/AddMenuModal";

export const MenuMain = () => {
  const setAddMenuModalOpen = useMenuStore((s) => s.setAddModalOpen);

  return (
    <MainContainer>
      <Box display="flex" my={3} justifyContent="center" gap={3}>
        <IconButton title="Добавить новое меню" onClick={setAddMenuModalOpen}>
          <AddCircleOutlined color="inherit" />
        </IconButton>
      </Box>
      <MenuList />
      <AddMenuModal />
    </MainContainer>
  );
};
