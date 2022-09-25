import { Container, BgImg, Body } from "./category-item.styles";

export const CategoryItem = ({ category }) => {
  const { imageId, id, title } = category;
  return (
    <Container key={id}>
      <BgImg
        style={{
          backgroundImage: `url(https://i.ibb.co/${imageId}/${title}.png)`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </Container>
  );
};
