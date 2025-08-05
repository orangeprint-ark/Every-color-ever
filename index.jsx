const { createRoot } = ReactDOM;

console.log("Hello mom!");

function Divp(props) {
  return (
    <a href={props.i}>
      <button className="Button-of-wrath" style={props.bg}>
        {props.x}
      </button>
    </a>
  );
}

function App() {
  return (
    <div id="warning-box">
      <Divp i="./Red" x="Red" bg={{ backgroundColor: "red" }} />
      <Divp i="./Green" x="Green" bg={{ backgroundColor: "green" }} />
      <Divp i="./Blue" x="Blue" bg={{ backgroundColor: "blue" }} />
      <h1>This is a GPU heavy application, so yeah , don't burn your device</h1>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
