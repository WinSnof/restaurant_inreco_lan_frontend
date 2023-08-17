import {CircularProgress, Grid} from "@mui/material";
import { MenuItem } from "src/modules/menu/components/MenuItem.jsx";
import {DataWrapper} from "src/shared/ui/DataWrapper";
import {useFetchMenuList} from "src/modules/menu/hooks/index.js";

export const MenuList = () => {
  const {data: menuList, isLoading} = useFetchMenuList()

  const noImage =
      "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  if(isLoading) {
    return <CircularProgress/>
  }

  return (
    <Grid container spacing={2}>
      <DataWrapper isLoading={isLoading} data={menuList}>
        {menuList.map((i) => (
            <Grid item xs={4} key={i.id}>
              <MenuItem
                  id={i.id}
                  title={i.title}
                  image={noImage}
                  startTime={i.startTime}
                  endTime={i.endTime}
              />
            </Grid>
        ))}
      </DataWrapper>
    </Grid>
  );
};
