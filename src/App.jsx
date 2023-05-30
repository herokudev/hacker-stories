import Header from "./Header";
import Search from "./Search";
import ListObjects from "./ListObjects";

const stories = [
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

function App() {
  return (
    <div>
      <Header />
      <Search />
      <hr />
      <ListObjects renderData={stories} />
    </div>
  );
}

export default App;
