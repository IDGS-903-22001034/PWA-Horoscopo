import "./App.css";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";

function App() {
  return (
    <>
      <div className="navbar shadow-sm" style={{ backgroundColor: "#000" }}>
        <div className="container-fluid">
          <h1 className="text-center text-white w-100 my-2 d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img
              src="https://img.freepik.com/vector-gratis/circulo-signos-zodiaco-astrologia_102902-2276.jpg?ga=GA1.1.1552816567.1751478748&semt=ais_hybrid&w=740&q=80"
              alt="icono horóscopo"
              style={{
                width: "134px",
                marginRight: "16px",
                borderRadius: "12px",
              }}
            />
            Horóscopo
          </h1>
        </div>
      </div>

      <br />

      <div className="container">
        <div className="row justify-content-center">
          <Formulario />
        </div>
      </div>
    </>
  );
}

export default App;
