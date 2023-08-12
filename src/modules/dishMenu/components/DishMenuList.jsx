import { Grid } from "@mui/material";
import { DishMenuItem } from "src/modules/dishMenu/components/DishMenuItem.jsx";
import { mock_dish } from "src/modules/dishMenu/mock/data.js";

export const DishMenuList = () => {
  return (
    <Grid container spacing={2}>
      {mock_dish.map((i) => (
        <Grid item xs={4} key={i.id}>
          <DishMenuItem
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
