import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './app/src/views/screens/SignInScreen';


const Stack = createStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{header:()=>null}}>
      <Stack.Screen name="Home" component={SignInScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;