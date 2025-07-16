import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

export default function DarkMode() {
    const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.whiteText}>DarkMode</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
 whiteText: {
    color: '#fff',
  },
  darkText:{
    color: '#000',
  }
})  
