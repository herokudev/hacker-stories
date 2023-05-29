const welcome = { title: "React", greeting: "Hey" };

function createMsg() {
  return `${welcome.greeting} ${welcome.title}`;
}

const Header = () => <h1>{createMsg()}</h1>;
