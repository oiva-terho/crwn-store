import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryItemData } from '../categories/categories.component';
import { Container, BgImg, Body } from './category-item.styles';

type CategoryItemProps = {
  category: CategoryItemData;
};

export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
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
