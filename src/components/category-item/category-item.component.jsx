import { useNavigate } from 'react-router-dom';

import { Container, BgImg, Body } from './category-item.styles';

export const CategoryItem = ({ category }) => {
  const { imageId, id, title } = category;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(`/shop/${title}`);

  return (
    <Container key={id} onClick={navigateHandler}>
      <BgImg imageId={imageId} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </Container>
  );
};
