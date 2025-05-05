import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0)

  return (
    <View>

      <View style={styles.count}>
        <Text style={styles.countText}>
          {count}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}><Text style={styles.buttonText}>Decreament -1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}><Text style={styles.buttonText}>Increament +1</Text></TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  count: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  countText: {
    fontWeight: '500',
    fontSize: 50
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: 'purple',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }

})