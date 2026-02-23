import QRCode from "react-qr-code";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Perfume Cardoso</h1>
      <QRCode value="https://seulink.com" />
    </div>
  );
}

export default App;
