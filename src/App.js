import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';


function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4d52b5b750d5a63fb5093668768e7960&units=imperial`)
      .then(r => r.json())
      .then((recurso) => {
          if(recurso.main !== undefined){
            var bandera = false;
            cities.forEach(c => {
            if(c.id === recurso.id) {
              alert('La ciudad ya se encuentra en pantalla')
              bandera = true;
            }
          } )
          if (!bandera){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
            console.log(recurso);
          }
          } else {
            alert("Ciudad no encontrada");
          }
        });
      }

   return (
      <div className="App">
        <Nav onSearch={onSearch} />
        <Cards onClose={onClose} cities={cities} />
      </div>
    );
}


export default App;

