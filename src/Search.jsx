export default function Search() {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };
  const handleBlur = (event) => {
    console.log("This is a blur event");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}
