import { ProductCard } from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

import './category-preview.styles.scss';

export const CategoryPreview = ({title, products}) => {

  return (
    <div className='category-preview'>
      <h2>
        <Link className='category-preview__title' to={title}>
          {title.toUpperCase()}
        </Link>
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