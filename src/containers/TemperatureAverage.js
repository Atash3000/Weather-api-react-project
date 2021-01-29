import React ,{useContext}from 'react';
import {WeatherContext} from '../context/WeatherContext';

const TemperatureAverage = () => {
  
  const {cities} = useContext(WeatherContext)

    if (cities.length === 0) {
      return (
        <div>Add some cities to view their average temperatures.</div>
      );
    }
  
    let total = 0;
    for (const city of cities) {
      total += Number(city.cityTemp);
    }
    const avg = total / cities.length;
  console.log(total)
    return (
      <div>
        The average is <b>{avg.toFixed(0)}</b> degrees Celcius.
      </div>
    );
  };

  export default TemperatureAverage;
