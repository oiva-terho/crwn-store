import './category-item.styles.scss';

export const CategoryItem = ({ category }) => {
    const { imageUrl, id, title } = category;
    return (
        <div className='category-item' key={id}>
            <div className='category-item__bg-img' style={{
            backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='category-item__body'>
            <h2>{title}</h2>
            <p>Shop now</p>
            </div> 
        </div>      
    )
};