import React ,{createContext,useState}from 'react'
export const  WeatherContext = createContext()

function WeatherContextProvider({children}) {
const [cities , addCities] = useState([])

const addNewCity=(cityName,cityTemp)=>{
  addCities([...cities,{cityName:cityName,cityTemp:cityTemp}])
}

  return (
    <WeatherContext.Provider value={{cities,addNewCity:addNewCity}}>
        {children}
    </WeatherContext.Provider>
    
  )
}

export default WeatherContextProvider
