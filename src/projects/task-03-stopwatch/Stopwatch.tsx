import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { colors, commonStyles } from '../../theme';

export default function Stopwatch() {

  const [running, setRunning] = useState(true)

  const [timer, setTimer] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (running) {
      interval = setInterval(() => {
        setTimer((pre) => pre + 1)
      }, 1000);
    } else if (!running && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };

  }, [running])


  let minutes = Math.floor(timer / 60)
  let seconds = timer % 60

  let time = minutes + " : " + seconds

  console.log('minutes :', minutes)
  console.log('seconds :', seconds)

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {time} </Text>

      <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', width: '100%', marginTop: 100 }}>

        {!running ?
          <Button title='START' color={'red'} onPress={() => { setRunning(true) }} />
          :
          <Button title='PAUSE' color={'orange'} onPress={() => { setRunning(false) }} />
        }

        <Button title='RESET' onPress={() => { setTimer(0) }} />


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  placeholder: {
    fontSize: 18,
    color: colors.text.tertiary,
    textAlign: 'center',
  },
});
