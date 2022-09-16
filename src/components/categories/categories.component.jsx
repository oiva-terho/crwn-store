import './categories.styles.scss';
import { CategoryItem } from '../category-item/category-item.component';

export const Categories = ({ categories }) => (
    <div className='categories'>
        {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
        ))}
    </div>
);