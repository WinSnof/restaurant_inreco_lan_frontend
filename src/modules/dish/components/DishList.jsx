import { Grid } from "@mui/material";
import { DishItem } from "src/modules/dish/components/DishItem.jsx";
import { mock_dish } from "src/modules/dish/mock/data.js";

export const DishList = () => {
  return (
    <Grid container spacing={2}>
      {mock_dish.map((i) => (
        <Grid item xs={4} key={i.id}>
          <DishItem
            id={i.id}
            title={i.title}
            price={i.price}
            image={i.image}
            dish_type={i.dish_type}
          />
        </Grid>
      ))}
    </Grid>
  );
};
