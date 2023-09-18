import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/pages/Login';
import Signup from '../app/pages/Signup';
import BotNav from '../app/pages/BottomNav';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="BotNav" component={BotNav} options={{ headerShown: false }}/>
      </Stack.Navigator>

    </NavigationContainer>

  );  
};

export default AuthStack; 
