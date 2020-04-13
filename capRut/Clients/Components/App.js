import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './Login';
import Home from './Home';
import SignUp from './Signup';
import Homepage from './Homepage';
import Medications from './Medications';
import AddMedForm from './AddMedForm';
import Profile from './Profile';
import Info from './Info';
import Files from './Files';
import Immunizations from './Immunizations';
import AddImmForm from './AddImmForm';

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
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Files" component={Files} />

        <Stack.Screen name="Immunizations" component={Immunizations} />
        <Stack.Screen name="AddImmForm" component={AddImmForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
