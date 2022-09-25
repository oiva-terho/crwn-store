import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductCard } from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

import { Container, Title } from './category.styles';

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return(
    <>
      <Title>{category.toUpperCase()}</Title>
      <Container>
        {products && products.map(product => 
          <ProductCard key={product.id} product={product} />
        )}
      </Container>
    </>

  )
};