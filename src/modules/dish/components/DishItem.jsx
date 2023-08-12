import { Box, Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const DishItem = ({ id, title, price, image, dish_type }) => {
  const handleDelete = () => {
    console.log(id);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="center" my={2}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <img src={image} alt={title} height="250px" />
      </Box>
      <Stack textAlign="center" my={2}>
        <Typography>Цена: {price} р.</Typography>
        <Typography>Кухня: {dish_type}</Typography>
        <Button color="error" onClick={handleDelete} size="small">
          Удалить
        </Button>
      </Stack>
    </Box>
  );
};

DishItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  dish_type: PropTypes.string.isRequired,
};
