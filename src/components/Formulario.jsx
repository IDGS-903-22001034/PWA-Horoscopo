import React, { useState } from "react";
import Resultado from "./Resultado";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [resultado, setResultado] = useState("");

  const horoscopo = [
    {
      horoscopo: "Aries",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-aries-de-hoy-martes-23-de-septiembre-IYNLCDBRTJEBLBHTLPGMQMQNC4.png?auth=60f46b3f24326a6d6282105ddd84e29442b24afe5704ed6811d0bbefce164cd2&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Son personas independientes y casi sienten obsesión por conseguir lo que desean en la vida, precisamente por eso pueden parecer ambiciosas y frívolas en exceso. Es muy fácil que se sientan ofendidas, y cuando esto sucede, resulta extremadamente difícil hacer las paces con ellas.",
    },
    {
      horoscopo: "Tauro",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-tauro-de-hoy-martes-23-de-septiembre-MWQ4R75PAVHIRCR37JEKHQ2PAU.png?auth=2c049e4b965f386faa5e2cfdb072e11520cf666eaf2d4339792134208d687aeb&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Los Tauro son personas sensuales que idolatran la belleza, la fidelidad y el cuidado; no obstante, el punto negativo es que tienden a la posesión. Su carácter romántico hace que disfrute sintiendo el amor de su pareja el sexo para Tauro es en última instancia la manifestación de la entrega que siente por la persona que ama.",
    },
    {
      horoscopo: "Géminis",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-geminis-de-hoy-martes-23-de-7INK7P2TFVEFXJJOZANC4HJHJU.png?auth=c7df86f3d7e741def68575107fb9babeb526d7cc5a13c400124b7db1ba74e773&width=880&height=586&quality=70&smart=true",
      descripcion:
        "También tienen fuerza y vitalidad, además son seres inteligentes, con facultad de expresarse de modo eficaz para deleitar, conmover o persuadir (según convenga) a quienes prestan oídos a sus palabras. Asimismo, son cariñosos y disfrutan como nadie con lo extraordinario y la novedad: cuanta más variedad en su vida, mejor que mejor.",
    },
    {
      horoscopo: "Cáncer",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-cancer-de-hoy-martes-23-de-YZ7HCMJTLJF3BDVEPQQXBFK24E.png?auth=85749b151fb461e353613fe8cc922ea3fe8c4e8c0d1a36df4687ef661849b4f5&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Cuando se trata de amor, en sus relaciones Cáncer es también una mezcla de contradicción; si mantiene una relación estable, ama de verdad, sinceramente, aunque en su yo interno eso no significa que no pueda mantener relaciones sexuales con otras personas. Además, se caracteriza por una ternura, emoción e imaginación que le convierten en un amante muy, muy especial.",
    },
    {
      horoscopo: "Leo",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-leo-de-hoy-martes-23-de-septiembre-WU7L6XLT3NA75D4UCK7DZGZ224.png?auth=680b627165f0b6186408a71e6b01786974c5db637d8ff62cec6673db6d85f22a&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Los Leones son entusiastas, creativos y muchas veces comprensivos con las circunstancias de los demás; adoran los lujos y la aventura; correr riesgos les motiva. También se caracterizan por tener un elevado concepto de todo, especialmente, de sí mismos, por eso huyen de la vulgaridad.",
    },
    {
      horoscopo: "Virgo",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-virgo-de-hoy-martes-23-de-septiembre-CUOMSGHOE5GEBJ4RFLHRBNXZAY.png?auth=dcbde422104d43687b00d0c0e7d8574c83c0ad2e50b688ac10a559873bbf5468&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Como es el perfeccionista del zodíaco, de vez en cuando cae en obsesiones de todo tipo: desde la obsesión por el orden, pasando por la limpieza, hasta llegar incluso a la obsesión por los detalles. Su sentido de la responsabilidad está muy desarrollado, por eso odia la improvisación y la frivolidad, además, para desarrollarse plenamente necesita sentirse seguro.",
    },
    {
      horoscopo: "Libra",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-libra-de-hoy-martes-23-de-septiembre-ZQUM6PDKW5E5NFJ3EOOCDYDUTA.png?auth=6c14a39ef2812e9b0664677d205769ce6187c6a5cd63048b72616e2db794f297&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Libra, como signo de aire que es, necesita tener estímulos intelectuales constantes, usar el razonamiento y mantener una comunicación fluida e interesante en las relaciones que mantiene, sean de la clase que sea.",
    },
    {
      horoscopo: "Escorpio",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-escorpio-de-hoy-martes-23-de-MP7OWDW2J5EORM3SMVFJV3BHFI.png?auth=3436d776d339fa92e5496b4a7b2e1d6cd6fdb53ff3044e1380466d616f73005d&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Un Escorpión es inmensamente enérgico y su carácter puede dar lugar a grandes ventajas o no menos grandes peligros para los demás. De hecho, sus puntos negativos son la agresión, los celos y el resentimiento. No soporta la deslealtad y tampoco perdona una ofensa; es más, seguramente busque venganza... y es muy mal enemigo, así que cuidadito con hacerle daño.",
    },
    {
      horoscopo: "Sagitario",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-sagitario-de-hoy-martes-23-de-6B2JEVQSGRHILAJES2ILUULVX4.png?auth=a5c1c40b7e242f16af3ad4fc714e13bf89e34b37fd946af8ce9e3d7c7c33578f&width=880&height=586&quality=70&smart=true",
      descripcion:
        "El signo de Sagitario desarrolla unos ideales y principios que son las pautas que constituyen su forma de caminar por el mundo, precisamente por eso, es muy posible que la religión como búsqueda de la verdad sea algo intrínseco de su energía y a lo que tienda a lo largo de su vida.",
    },
    {
      horoscopo: "Capricornio",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-capricornio-de-hoy-martes-23-de-4JFTMER3Q5FANKMD7LEQ5UCZP4.png?auth=87087884ce61e3e94e4e9cb80fd4c9285398429427a81b124e509e2e9c96c568&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Los Capricornio son personas muy trabajadoras, responsables y con una gran capacidad de organización. Suelen ser muy ambiciosos y tienen un enfoque práctico de la vida, lo que les permite alcanzar sus metas con determinación y perseverancia.",
    },
    {
      horoscopo: "Acuario",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-acuario-de-hoy-martes-23-de-IFTEWWBZQVHUNOH7XQQYGB4MXY.png?auth=41e37bbd5a96f52152eed8df817dfa039a9a609fb274d5c94b99129fd130e606&width=880&height=586&quality=70&smart=true",
      descripcion:
        "Las personas nacidas Acuario hacen gala de de una sinceridad e idealismo a prueba de bombas. Amantes de todo lo original, tienen montones de ideas nuevas agolpadas en sus mentes, lo que pasa es que cuando van a poner en marcha una de ellas, sale otra, y cuando van a poner esa en marcha, sale otra, y otra son pura creatividad.",
    },
    {
      horoscopo: "Piscis",
      img: "https://www.lanacion.com.ar/resizer/v2/horoscopo-de-piscis-de-hoy-martes-23-de-O6JX6NBIM5BMFHJQCU4U36COMQ.png?auth=363ad051e62e841c0b1307f29d6cf78d738bac6f5b5c4b712e22a3d7bb83ba51&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Los Piscis tienden a vivir de una manera emocional más que racional, de forma instintiva e intuitiva más que de forma lógica. Les cuesta mucho transmitir lo que perciben, no saben expresarlo con palabras sino con acciones... Una clave para los Piscis es cómo contactan con su sensibilidad.",
    },
  ];

  const calcularSigno = (fechaNac) => {
    const fecha = new Date(fechaNac);
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
      return "Aries";
    } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
      return "Tauro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      return "Géminis";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      return "Cáncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      return "Leo";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      return "Virgo";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      return "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      return "Escorpio";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      return "Sagitario";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      return "Capricornio";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      return "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      return "Piscis";
    }

    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const signoNombre = calcularSigno(fechaNac);
    const signoObj = horoscopo.find((h) => h.horoscopo === signoNombre);
    setResultado(signoObj);
  };
  return (
    <>
      <div className="col-md-6">
        <div className="card shadow-lg border-0 mb-4">
          <div className="card-body p-4">
            <h2 className="text-center mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2919/2919803.png"
                alt="icono horóscopo"
                style={{ width: "32px", marginRight: "8px" }}
              />
              Consulta tu Horóscopo
            </h2>
            <p className="text-muted text-center">
              Ingresa tu nombre y fecha de nacimiento para descubrir tu signo
              zodiacal
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha de nacimiento:</label>
                <input
                  type="date"
                  className="form-control"
                  value={fechaNac}
                  onChange={(e) => setFechaNac(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-dark w-100">Consultar</button>
            </form>
          </div>
        </div>
      </div>
      {resultado && (
        <Resultado
          nombre={nombre}
          horoscopo={resultado.horoscopo}
          img={resultado.img}
          descripcion={resultado.descripcion}
        />
      )}
    </>
  );
}

export default Formulario;
