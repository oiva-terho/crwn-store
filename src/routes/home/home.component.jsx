import { Outlet } from "react-router-dom";
import { Categories } from "../../components/categories/categories.component";

export const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageId: "cvpntL1",
    },
    {
      id: 2,
      title: "jackets",
      imageId: "px2tCc3",
    },
    {
      id: 3,
      title: "sneakers",
      imageId: "0jqHpnp",
    },
    {
      id: 4,
      title: "womens",
      imageId: "GCCdy8t",
    },
    {
      id: 5,
      title: "mens",
      imageId: "R70vBrQ",
    },
  ];
  return (
    <div>
      <Outlet />
      <Categories categories={categories} />
    </div>
  );
};
