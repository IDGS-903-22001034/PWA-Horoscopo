import "./App.css";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";

function App() {
  return (
    <>
      <div className="navbar shadow-sm" style={{ backgroundColor: "#000" }}>
        <div className="container-fluid">
          <h1 className="text-center text-white w-100 my-2">Horóscopo</h1>
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
