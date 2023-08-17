import { CircularProgress, Grid } from "@mui/material";
import { DishMenuItem } from "src/modules/dishMenu/components/DishMenuItem.jsx";
import { DataWrapper } from "src/shared/ui/DataWrapper";
import { useFetchDishes } from "src/modules/dishes/hooks/index.js";
import { DishItem } from "src/modules/dishes/components/DishItem";

export const DishesList = () => {
  const { data: dishList, isLoading } = useFetchDishes();

  if (isLoading) {
    return <CircularProgress />;
  }

  const noImage =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  if (dishList) {
    return (
      <Grid container spacing={2}>
        <DataWrapper isLoading={isLoading} data={dishList}>
          {dishList.map((i) => (
            <Grid item xs={4} key={i.id}>
              <DishItem
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
  }
  return <></>;
};
