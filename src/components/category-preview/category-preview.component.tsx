import { FC } from 'react';
import { CategoryItem } from '../../store/categories/category.types';
import { ProductCard } from '../product-card/product-card.component';

import { Container, Title, Preview } from './category-preview.styles';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

export const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <Container>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </Container>
  );
};
