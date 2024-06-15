// LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button } from 'react-native-paper';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    // Implement your login logic here
  };

  const handleSignUpRedirect = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>
        Welcome back, you’ve been missed!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.forgetContainer}>
        <TouchableOpacity>
          <Text style={styles.forget}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}>
        Log in
      </Button>
      <TouchableOpacity onPress={handleSignUpRedirect}>
        <Text style={styles.text}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.textCon}>Or continue with</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={google} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={facebook} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={apple} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1F41BB',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#000000',
    width: '60%',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#F1F4FF',
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#1F41BB',
    width: '100%',
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: '#494949',
    fontWeight: 'bold',
    margin: 40,
  },
  forgetContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forget: {
    color: '#1F41BB',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textCon: {
    marginTop: 10,
    fontSize: 14,
    color: '#1F41BB',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 10,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
});

export default LoginScreen;
