const ListObjects = (props) => {
  const list = Object.values(props.renderData);
  console.log(props);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListObjects;
