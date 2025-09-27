import React from "react";
import PropTypes from "prop-types";

const Resultado = ({ nombre, horoscopo, img, descripcion }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="card shadow-lg border-0 mb-4">
          <div className="card-body p-4">
            <h2>Resultado</h2>
            <h3>
              Hola {nombre} Tu signo es : {horoscopo}
            </h3>
            <img
              alt={`Imagen de ${horoscopo}`}
              src={img}
              style={{ width: "250px", borderRadius: "20px" }}
            />
            <p>
              <b>Tu fortuna y descripción es: </b> {descripcion}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

//Definiendo los prototypes de Card
Resultado.propTypes = {
  horoscopo: PropTypes.string,
  img: PropTypes.string,
  descripcion: PropTypes.string,
  nombre: PropTypes.string,
};

export default Resultado;
