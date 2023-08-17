import { Box, Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useDeleteDishFromMenu } from "src/modules/dishMenu/hooks/index.js";
import { useParams } from "react-router-dom";

export const DishMenuItem = ({ id, title, price, image, dish_type }) => {
  const { mutate: deleteFromMenu } = useDeleteDishFromMenu();
  const { id: menuId } = useParams();
  const handleDelete = () => {
    console.log({ menuId: Number(menuId), dishId: id });
    deleteFromMenu({ menuId: Number(menuId), dishId: id });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="center" my={2}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <img src={image} alt={title} height="200" />
      </Box>
      <Stack textAlign="center" my={2}>
        <Typography>Цена: {price} р.</Typography>
        <Typography>Кухня: {dish_type}</Typography>
      </Stack>
      <Box display="flex" justifyContent="center">
        <Button color="error" onClick={handleDelete} variant="outlined">
          Удалить
        </Button>
      </Box>
    </Box>
  );
};

DishMenuItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  dish_type: PropTypes.string,
};
