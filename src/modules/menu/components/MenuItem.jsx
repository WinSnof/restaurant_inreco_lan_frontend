import {Box, Button, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {MainButtonBox} from "src/shared/ui/MainButtonBox.jsx";
import {useNavigate} from "react-router-dom";

export const MenuItem = ({ id, title, image, startTime, endTime }) => {

  const naviate = useNavigate();

  const handleDeleteMenu = () => {
    console.log(id);
  };

  const handleOpenMenu = () => {
    naviate(`/menu/${id}`)
  }

  return (
    <Box>
      <Typography variant="h6" my={2} display="flex" justifyContent="center">
        {title}
      </Typography>
      <Box display="flex" justifyContent="center">
        <img alt={title} src={image} height="200" />
      </Box>
      <Typography display="flex" justifyContent="center" my={2}>
        Доступно с {startTime} - {endTime}
      </Typography>
      <MainButtonBox>
        <Button variant='outlined' color='success' onClick={handleOpenMenu}>Посмотреть</Button>
        <Button variant='outlined' color='error' onClick={handleDeleteMenu}>Удалить</Button>
      </MainButtonBox>
    </Box>
  );
};

MenuItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};
