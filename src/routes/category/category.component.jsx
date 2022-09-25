import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductCard } from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return(
    <>
      <h2 className='category__title'>{category.toUpperCase()}</h2>
      <div className='category'>
        {products && products.map(product => 
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </>

  )
};