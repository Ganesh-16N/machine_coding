import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, commonStyles } from '../../theme'

export default function Counter() {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>

      <View style={styles.count}>
        <Text style={styles.countText}>
          {count}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}><Text style={styles.buttonText}>Decrement -1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}><Text style={styles.buttonText}>Increment +1</Text></TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    padding: 20,
  },
  count: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  countText: {
    fontWeight: '500',
    fontSize: 50,
    color: colors.text.primary,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: colors.button.primary.background,
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 120,
  },
  buttonText: {
    color: colors.button.primary.text,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  }

})