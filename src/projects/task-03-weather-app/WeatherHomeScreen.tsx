import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { colors, commonStyles } from '../../theme'

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
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              fetchWeather(searchText)
              Keyboard.dismiss()
            }}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Error Message */}
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        {/* Loading */}
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors.accent.primary} />
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
    backgroundColor: colors.background.primary,
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
    padding: 12,
    borderRadius: 10,
    borderColor: colors.input.border,
    borderWidth: 1,
    backgroundColor: colors.input.background,
    color: colors.input.text,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: colors.button.primary.background,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  searchButtonText: {
    color: colors.button.primary.text,
    fontSize: 16,
    fontWeight: '600',
  },
  loaderContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.text.secondary,
  },
  errorText: {
    color: colors.accent.error,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.background.card,
    padding: 20,
    marginTop : 50,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors.shadow.dark,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.accent.primary,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    color: colors.text.secondary,
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
    color: colors.text.tertiary,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
})
