const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const ListObjects = () => {
  return (
    <div>
      {list.map((item) => (
        <ul>
          {item.title + " / "}
          <a href={item.url} target="_blank">
            {item.url}
          </a>
          <li>Author: {item.author}</li>
          <li>Commnets: {item.num_comments}</li>
          <li>Points: {item.points}</li>
        </ul>
      ))}
    </div>
  );
};
export default ListObjects;
