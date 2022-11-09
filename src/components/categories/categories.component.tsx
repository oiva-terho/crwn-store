import { Container } from './categories.styles';
import { CategoryItem } from '../category-item/category-item.component';
import { Key } from 'react';

export type CategoryItemData = {
  id: Key;
  title: string;
  imageId: string;
};

const categories: CategoryItemData[] = [
  {
    id: 1,
    title: 'hats',
    imageId: 'cvpntL1'
  },
  {
    id: 2,
    title: 'jackets',
    imageId: 'px2tCc3'
  },
  {
    id: 3,
    title: 'sneakers',
    imageId: '0jqHpnp'
  },
  {
    id: 4,
    title: 'womens',
    imageId: 'GCCdy8t'
  },
  {
    id: 5,
    title: 'mens',
    imageId: 'R70vBrQ'
  }
];

export const Categories = () => (
  <Container>
    {categories.map(category => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </Container>
);
