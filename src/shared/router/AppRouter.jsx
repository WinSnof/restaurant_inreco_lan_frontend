import { Route, Routes } from "react-router-dom";
import { public_routes } from "src/shared/router/Routes.jsx";
import { MainNavigate } from "src/modules/navigate/MainNavigate";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainNavigate />}>
        {public_routes.map((i) => (
          <Route path={i.path} element={i.Element} key={i.path} />
        ))}
      </Route>
    </Routes>
  );
};
