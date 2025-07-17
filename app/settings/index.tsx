import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <SafeAreaView>

    <View style={styles.container} >
        <Text style={styles.text}>Settings</Text>
    </View>
    <View>
      <Text style={styles.text}>Settings</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})