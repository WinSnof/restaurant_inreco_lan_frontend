import { CircularProgress, Grid } from "@mui/material";
import { DishMenuItem } from "src/modules/dishMenu/components/DishMenuItem.jsx";
import { useFetchMenuDishes } from "src/modules/dishMenu/hooks/index.js";
import { DataWrapper } from "src/shared/ui/DataWrapper";
import { useParams } from "react-router-dom";

export const DishMenuList = () => {
  const { id } = useParams();

  const { data: menuDishesList, isLoading } = useFetchMenuDishes(id);

  const noImage =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      <DataWrapper data={menuDishesList} isLoading={isLoading}>
        {menuDishesList.map((i) => (
          <Grid item xs={4} key={i.title}>
            <DishMenuItem
              id={i.id}
              title={i.title}
              price={i.price}
              image={noImage}
              dish_type={i.type}
            />
          </Grid>
        ))}
      </DataWrapper>
    </Grid>
  );
};
