import { textBox, ulList } from "./clima-page";

const apiKey = "1af1874b3ade00c4a0eff7608bd6f58c";

const getClima = async (ciudad) => {
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
  try {
    const resp = await fetch(urlApi);

    if (resp.ok) {
      const { main, name, sys, weather } = await resp.json();

      return { main, name, sys, weather };
    } else {

        
      ulList.innerHTML="<li>Ciudad no valida</li>"
      throw 'Ciudad no valida';
    }
  } catch (err) {
    throw err;
  }
};

export { getClima };
