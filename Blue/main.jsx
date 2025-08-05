const { createRoot } = ReactDOM;

function BlueBlock({ blue, alpha }) {
  const rgba = `rgba(0, 0, ${blue}, ${(alpha / 255).toFixed(3)})`;
  return (
    <div className="Diva" title={rgba} style={{ backgroundColor: rgba }}></div>
  );
}

function App() {
  const blues = Array.from({ length: 256 }, (_, i) => i);
  const alphas = Array.from({ length: 256 }, (_, i) => i);

  return (
    <>
      {alphas.map((alpha) =>
        blues.map((blue) => (
          <BlueBlock key={`${blue}-${alpha}`} blue={blue} alpha={alpha} />
        ))
      )}
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
