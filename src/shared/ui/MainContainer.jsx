import { Container } from "@mui/material";

export const MainContainer = ({ children }) => {
  return (
    <Container my={3} mx={3} sx={{ mb: 5 }}>
      {children}
    </Container>
  );
};
