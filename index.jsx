const { createRoot } = ReactDOM;
console.log("Hello mom!");

function App() {
  return (
    <div id="warning-box">
      <div className="red">
        <div className="redsquare">
          
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
