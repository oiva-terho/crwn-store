import { Outlet } from "react-router-dom";
import { Categories } from "../../components/categories/categories.component";

export const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
};
