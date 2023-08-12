import { Route, Routes } from "react-router-dom";
import { public_routes } from "src/shared/router/Routes.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      {public_routes.map((i) => (
        <Route path={i.path} element={i.Element} key={i.path} />
      ))}
    </Routes>
  );
};
