import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './android/app/src/components/WelcomeScreen'; // Ajustez le chemin si nécessaire
import LoginScreen from './android/app/src/components/LoginScreen'; // Ajustez le chemin si nécessaire
import CreateAccountScreen from './android/app/src/components/CreateAccountScreen'; // Ajustez le chemin si nécessaire

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
