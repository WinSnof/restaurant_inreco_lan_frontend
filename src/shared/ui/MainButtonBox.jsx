import { Box } from "@mui/material";

export const MainButtonBox = ({ children }) => {
  return (
    <Box display="flex" my={3} justifyContent="center" gap={3}>
      {children}
    </Box>
  );
};
