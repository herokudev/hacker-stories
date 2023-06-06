import Item from "./Item";

const ListObjects = (props) => {
  console.log("ListObjects Component render");
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};
export default ListObjects;
