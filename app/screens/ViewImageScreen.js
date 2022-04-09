import React from 'react'
import { Image, StyleSheet, View } from 'react-native'


function ViewImageScreen() {
  return (
      <View style={styles.contain}>
      <View style={styles.containIcon}></View>
      <View style={styles.closeIcon}></View>

    <Image resizeMode="contain" style={styles.img} source={require("../assets/chair.jpg")} />
      </View>
  )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    containIcon: {
        width: 50,
        height: 50,
        backgroundColor: "lightgreen",
        position: "absolute",
        top: 30,
        left: 30
    },  
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "lightblue",
        position: "absolute",
        top: 30,
        right: 30
    },  
    img: {
        width: "100%",
        height: "100%"
    }
})
export default ViewImageScreen