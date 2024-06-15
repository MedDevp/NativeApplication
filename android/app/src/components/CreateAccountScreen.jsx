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

const CreateAccountScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    console.log('Creating account with:', name, email, password);
  };

  const handleLoginRedirect = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Create an account so you can explore all the existing jobs
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <Button
        mode="contained"
        onPress={handleCreateAccount}
        style={styles.button}>
        Sign up
      </Button>
      <TouchableOpacity onPress={handleLoginRedirect}>
        <Text style={styles.text}>Already have an account? Log in</Text>
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
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#000000',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '',
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
    fontWeight : 'bold',
    margin : 40,

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

export default CreateAccountScreen;
