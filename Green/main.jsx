const { createRoot } = ReactDOM;

function GreenBlock({ green, alpha }) {
  const rgba = `rgba(0, ${green}, 0, ${(alpha / 255).toFixed(3)})`;
  return (
    <div className="Diva" title={rgba} style={{ backgroundColor: rgba }}></div>
  );
}

function App() {
  const greens = Array.from({ length: 256 }, (_, i) => i);
  const alphas = Array.from({ length: 256 }, (_, i) => i);

  return (
    <>
      {alphas.map((alpha) =>
        greens.map((green) => (
          <GreenBlock key={`${green}-${alpha}`} green={green} alpha={alpha} />
        ))
      )}
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
