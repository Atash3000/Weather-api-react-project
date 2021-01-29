import React ,{useContext}from "react";
import{ WeatherContext} from '../context/WeatherContext';

const CityList = () => {
      const {cities} =useContext(WeatherContext)
    return (
      <table className="city-list">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city=>{
            const {cityName,cityTemp} =city
            return(
              <tr >
              <td>{cityName}</td>
              <td>{cityTemp} Celcius</td>
            </tr>
            )
          })}
            
        </tbody>
      </table>
    );
  };

  export default CityList;
