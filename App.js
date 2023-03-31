import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Todo from './Screens/Todo';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }}/>
        <Stack.Screen name="Todo" component={Todo}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
