import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function WeatherHomeScreen() {

    const [weatherData, setWeatherData] = useState<any>([])


   let api = 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=bd5e378503939ddaee76f12ad7a97608'



    const fetchWeather = async() => {
        try{
            const response  = await axios.get(api)
            setWeatherData(response.data)
            console.log(weatherData?.weather[0].description)
        } catch (err){
            console.log('error', err)
        }

    }


    useEffect(() => {
      fetchWeather()
    }, [])
    


  return (
    <View>
      <Text>WeatherHomeScreen</Text>
      <Text>{weatherData?.name}</Text>
      <Text>{weatherData?.weather[0]?.description}</Text>


    </View>
  )
}

const styles = StyleSheet.create({})