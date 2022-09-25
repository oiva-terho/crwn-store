import { Container } from "./categories.styles";
import { CategoryItem } from "../category-item/category-item.component";

export const Categories = ({ categories }) => (
  <Container>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </Container>
);
