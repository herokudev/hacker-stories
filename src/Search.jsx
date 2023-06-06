import { useState } from "react";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  console.log("Search Component render");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}
