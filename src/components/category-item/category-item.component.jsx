import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  const { imageId, id, title } = category;
  return (
    <div className="category-item" key={id}>
      <div
        className="category-item__bg-img"
        style={{
          backgroundImage: `url(https://i.ibb.co/${imageId}/${title}.png)`,
        }}
      />
      <div className="category-item__body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
