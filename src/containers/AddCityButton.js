import React,{useState,useContext} from "react";
import {WeatherContext} from '../context/WeatherContext';
const myKey ='8e03ef854788dde38bde26ecaf4db9c5'
const url = 'http://api.weatherstack.com/current?access_key=8e03ef854788dde38bde26ecaf4db9c5&query='



const AddCityButton = () => {
  const {addNewCity} =useContext(WeatherContext);
const [ name, setName] =useState('');
const handleInput =(e)=>{
setName(e.target.value)
}
const submitCity=()=>{
  let regex =/^\s+$/;
  if(regex.test(name)<=0 && name){
    fetch(`${url}${name}`)
  .then(response => response.json())
  .then(json => addNewCity(name,json.current.temperature))
    
  }

  setName('')
}


    return (
      <div className="add-city-form">
        <input value={name} onChange={handleInput} className="input" />
        <button onClick={submitCity}type='button'className="input" >Add</button>
      </div>
    );
  };

  export default AddCityButton;
