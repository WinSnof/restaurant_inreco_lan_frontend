import { AppBar, Box, Button, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate('/menu')
  }

  const handleNavigateToDishes = () => {
    navigate('/dishes')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
          <Box display='flex' gap={3} my={2}>
            <Box position='left'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Restaurant App
              </Typography>
            </Box>
            <Button color="inherit" onClick={handleNavigateToMenu}>Меню</Button>
            <Button color="inherit" onClick={handleNavigateToDishes}>Блюда</Button>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};
