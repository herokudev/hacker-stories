import Item from "./Item";

const ListObjects = ({ list }) => {
  console.log("ListObjects Component render");
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} {...item} />
      ))}
    </ul>
  );
};
export default ListObjects;
