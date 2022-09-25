import { ProductCard } from '../product-card/product-card.component';
import { useNavigate } from 'react-router-dom';

import './category-preview.styles.scss';

export const CategoryPreview = ({title, products}) => {
  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className='category-preview'>
      <h2>
        <span 
          className='category-preview__title' 
          onClick={goToCategoryHandler}
        >{title.toUpperCase()}</span>
      </h2>
      <div className='category-preview__preview'>
        {
        products
          .filter((_, idx) => idx < 4)
          .map(product => 
            <ProductCard key={product.id} product={product} />
            )
        }
      </div>
    </div>
  )
};