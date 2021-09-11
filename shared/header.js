import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {
  
  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={{overflow: 'hidden', paddingBottom: 3}}>
      <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
        <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
        <View style={styles.headerTitle}>
          <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
          <Text style={styles.headerText}>GameZone</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    elevation: 3,
    shadowColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})