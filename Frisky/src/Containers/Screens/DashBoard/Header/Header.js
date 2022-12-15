import { Image, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { color } from '../../../../Utility/Constants'

export default function HSB() {
  return (
    <View style={styles.Over}>
      <StatusBar
        translucent
        backgroundColor={color.BLACK}
        barStyle="light-content"
      />
      <View style={styles.Center}>
        <Image
          style={styles.Icon}
          source={require('../../../../Image/LogoMenu.png')}
        />
        <Image
          style={styles.Icon1}
          source={require('../../../../Image/bell.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Over:{
    backgroundColor: '#171926',
  },
  Center: {
    marginTop: 50,
    margin: 10,
    height: 60,
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#171926',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: "space-between",
    color: color.RED,
    fontSize: 20,
  },
  AppName: {
    fontSize: 30,
    color: color.WHITE,
  },
  Icon: {
    height: 40,
    width: 40,
    paddingRight: 10,
  },
  Icon1: {
    height: 30,
    width: 30,
  }
})