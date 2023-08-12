import { Grid } from "@mui/material";
import { MenuItem } from "src/modules/menu/components/MenuItem.jsx";
import {mock_menu} from "src/modules/menu/mock/data.js";

export const MenuList = () => {
  return (
    <Grid container spacing={2}>
      {mock_menu.map((i) => (
        <Grid item xs={4} key={i.id}>
          <MenuItem id={i.id} title={i.title} image={i.image} startTime={i.start_time} endTime={i.end_time}/>
        </Grid>
      ))}
    </Grid>
  );
};
