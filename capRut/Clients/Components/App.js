import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './Login';
import Home from './Home';
import SignUp from './Signup';
import Homepage from './Homepage';
import Medications from './Medications'
import AddMedForm from './AddMedForm'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Medications" component={Medications} />
        <Stack.Screen name="AddMedForm" component={AddMedForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
