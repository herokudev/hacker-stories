const welcome = { title: "Stories", greeting: "My Hacker" };

function createMsg() {
  return `${welcome.greeting} ${welcome.title}`;
}

const Header = () => {
  return <h1>{createMsg()}</h1>;
};
export default Header;
