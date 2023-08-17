import { Box, Typography } from "@mui/material";
import {Link} from "react-router-dom";

export const NotFound = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
		flexDirection='column'
    >
      <Typography variant="h1">404 NOT FOUND.</Typography>
      <Link to='/menu'>To menu</Link>
    </Box>
  );
};
