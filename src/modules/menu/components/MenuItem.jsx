import {Box, Button, Typography} from "@mui/material";
import PropTypes from "prop-types";

export const MenuItem = ({ id, title, image, startTime, endTime }) => {
  const handleDeleteMenu = () => {
    console.log(id);
  };

  return (
    <Box>
      <Typography variant="h6" my={2} display="flex" justifyContent="center">
        {title}
      </Typography>
      <Box display="flex" justifyContent="center">
        <img alt={title} src={image} height="250px" />
      </Box>
      <Typography display="flex" justifyContent="center" my={2}>
        Доступно с {startTime} - {endTime}
      </Typography>
      <Box display='flex' justifyContent='center' gap={3}>
        <Button variant='outlined' color='success' onClick={handleDeleteMenu}>Посмотреть</Button>
        <Button variant='outlined' color='error' onClick={handleDeleteMenu}>Удалить</Button>
      </Box>
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
