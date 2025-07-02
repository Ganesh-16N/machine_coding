import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Keyboard,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function WeatherHomeScreen() {
  const [weatherData, setWeatherData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const fetchWeather = async (city: string = 'mumbai') => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`
      )
      setWeatherData(response?.data)
      setErrorMessage('')
    } catch (err: any) {
      console.log('error', err?.response?.data?.message)
      setErrorMessage(err?.response?.data?.message || 'Something went wrong')
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Enter city name"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text)
              setErrorMessage('')
            }}
            style={styles.input}
          />
          <Button
            title="Search"
            onPress={() => {
              fetchWeather(searchText)
              Keyboard.dismiss()
            }}
          />
        </View>

        {/* Error Message */}
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        {/* Loading */}
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#2196f3" />
            <Text style={styles.loadingText}>Loading Weather...</Text>
          </View>
        ) : weatherData ? (
          <View style={styles.card}>
            <Text style={styles.cityName}>{weatherData?.name}</Text>
            <Text style={styles.temperature}>
              {Math.round(weatherData?.main?.temp)}°C
            </Text>
            <Text style={styles.description}>
              {weatherData?.weather[0]?.description}
            </Text>

            <View style={styles.row}>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Humidity</Text>
                <Text style={styles.value}>
                  {weatherData?.main?.humidity}%
                </Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Wind</Text>
                <Text style={styles.value}>
                  {weatherData?.wind?.speed} m/s
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Min Temp</Text>
                <Text style={styles.value}>
                  {Math.round(weatherData?.main?.temp_min)}°C
                </Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Max Temp</Text>
                <Text style={styles.value}>
                  {Math.round(weatherData?.main?.temp_max)}°C
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Sunrise</Text>
                <Text style={styles.value}>
                  {formatTime(weatherData?.sys?.sunrise)}
                </Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Sunset</Text>
                <Text style={styles.value}>
                  {formatTime(weatherData?.sys?.sunset)}
                </Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  innerContainer: {
    padding: 16,
    paddingTop: 70,
    flex: 1,
    justifyContent: 'flex-start',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop : 50,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    gap: 10,
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196f3',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#777',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
})
