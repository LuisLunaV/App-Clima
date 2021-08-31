//formula para cpnvertir a grados: parseFloat(main.temp-kelvin,10).toFixed(2)
//kelvin a centigrados = K - 273.15= C
// °= &#x2103
//link para los iconos:http://openweathermap.org/img/wn/10d@2x.png

import { getClima } from "./http-privaider";

const icono = "http://openweathermap.org/img/wn";
const ulList = document.querySelector(".ul-list");
const button = document.querySelector("#button-addon1");
const textBox = document.querySelector("#textBox");
const kelvin = 273.15;

const crearHmlt = ({ main, name, sys, weather }) => {
  const html = `<li>
    <p class="fs-5">Tiempo actual</p>
    <p class="fs-4">19:30</p>
    <img src='${icono}/${weather[0].icon}@2x.png'/>
    <p class="fs-1">${parseFloat(main.temp - kelvin, 10).toFixed(2)}&#x2103</p>
    <p class="fs-4">${sys.country}</p>
    <p class="fs-4">${name}</p>
    </li>
    `;

  const div = document.createElement("div");
  div.innerHTML = html;
  ulList.append(div.firstElementChild);

  return div.firstElementChild;
};
const buscarCiudad = () => {
  button.addEventListener("click", async () => {
    const li = document.querySelector("li");

    if (!textBox.value == "") {
      if (ulList.removeChild(li)) {
        crearHmlt(await getClima(textBox.value));
      } else {
        console.log("no hay nodos");
      }
    } else {
      ulList.innerHTML = "<li>Ingresa el nombre de tu ciudad</li>";
    }
  });
};

const init = () => {
  buscarCiudad();
};

export { init, ulList };
