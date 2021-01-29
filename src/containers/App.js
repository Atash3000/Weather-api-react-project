import React, {useState} from "react";
import WeatherContextProvider from '../context/WeatherContext';
import CityList from './CityList';
import AddCityButtons from './AddCityButton';
import TemperatureAverage from './TemperatureAverage';


function App() {
  
  return (
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
        <WeatherContextProvider>
          <CityList/>
          <AddCityButtons/>
          <TemperatureAverage/>
        </WeatherContextProvider>
        
      </div>
  );
}


export default App;
