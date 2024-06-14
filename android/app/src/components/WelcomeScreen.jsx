import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import WelcomeImage from '../assets/Welcome.jpg'; // Adjust the path accordingly
import {Button} from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={WelcomeImage} style={styles.image} />
      <Text style={styles.title}>Discover Your Dream Job here</Text>
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study
        major
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.loginBtn}
          onPress={() => {
            console.log('Navigating to Login screen');
            navigation.navigate('Login');
          }}>
          <Text style={styles.btnText}>Login</Text>
        </Button>

        <Button
          style={styles.registerBtn}
          onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.btnTextRegister}>Register</Text>
        </Button>
      </View>
      <View style={styles.square} />
      <View style={styles.squareT} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    width : '100%',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 0,
  },
  title: {
    fontSize: 35, // Adjust font size as needed
    width: '70%',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1F41BB',
    marginTop: 60,
    zIndex: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
    paddingHorizontal: 10,
    color: 'black',
    zIndex: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    paddingHorizontal: 20, 
    position: 'relative',
    zIndex: 5,
  },
  loginBtn: {
    backgroundColor: '#1F41BB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
  },
  registerBtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '50%',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnTextRegister: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderColor: '#F1F4FF',
    borderWidth: 2,
    position: 'absolute',
    bottom: -30,
    right: 10,
    transform: [{rotate: '10deg'}],
  },
  squareT: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderColor: '#F1F4FF',
    borderWidth: 2,
    position: 'absolute',
    bottom: -100,
    left: -100,
    transform: [{rotate: '140deg'}],
  },
});

export default WelcomeScreen;
