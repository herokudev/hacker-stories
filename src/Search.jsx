export default function Search(props) {
  console.log("Search Component render");
  const { search, onSearch } = props;

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
  );
}
