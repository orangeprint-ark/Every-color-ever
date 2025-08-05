const { createRoot } = ReactDOM;

function RedBlock({ red, alpha }) {
  const rgba = `rgba(${red}, 0, 0, ${(alpha / 255).toFixed(3)})`;
  return (
    <div className="Diva" title={rgba} style={{ backgroundColor: rgba }}></div>
  );
}

function App() {
  const reds = Array.from({ length: 256 }, (_, i) => i);
  const alphas = Array.from({ length: 256 }, (_, i) => i);

  return (
    <>
      {alphas.map((alpha) =>
        reds.map((red) => (
          <RedBlock key={`${red}-${alpha}`} red={red} alpha={alpha} />
        ))
      )}
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
