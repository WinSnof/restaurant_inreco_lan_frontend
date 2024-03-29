import {CircularProgress, Typography} from "@mui/material";

export const DataWrapper = ({ isLoading, data, children }) => {
  return (
    <>
      {isLoading && CircularProgress}
      {(!data || data?.length === 0) && (
        <Typography variant="h5" my={5} display="flex" flex={1} justifyContent="center" alignContent='center'>
          Тут пусто :(
        </Typography>
      )}
      {children}
    </>
  );
};
