import { Header } from "src/modules/navigate/components/Header";
import { Content } from "src/modules/navigate/components/Content";
import { Footer } from "src/modules/navigate/components/Footer";
import { CssBaseline } from "@mui/material";

export const MainNavigate = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </>
  );
};
