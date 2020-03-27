import React, { Component } from "react";
import {SafeAreaView, Text, TextInput, View, Button } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from "./Style";
import { firestore, auth } from '../../fire';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: "Welcome"
  };


  render() {
    const { navigate } = this.props.navigation;
    const { email, password } = this.state;
    return (
      <SafeAreaView style ={styles.container_signup_form}>
        <View style={styles.container}>
          <MaterialCommunityIcons name = "medical-bag" size={80} color="white" />
          <Text style={styles.title}>MediHealth</Text>
          <Text style={styles.title}>Tracker</Text>
          <TextInput
            value={email}
            placeholder="email"
            style={styles.textInput}
            onChangeText={value => this.setState({ email: value })}
          />
          <TextInput
            secureTextEntry={true}
            value={password}
            placeholder="password"
            style={styles.textInput}
            onChangeText={value => this.setState({ password: value })}
          />
          <Button
            onPress={() => {
              auth
                .signInWithEmailAndPassword(email, password)
                // .then(user => {
                //   navigate('Groups', {
                //     userId: auth.currentUser.uid
                //   });
                // })
                .catch(function(error) {
                  var errorMessage = error.message;
                  alert(errorMessage);
                });
            }} 
            title="Log In"
            color="white"
          />
          <Button
            style={styles.button}
            color="white"
            title="Dont have an account yet? Sign up "
            onPress={() => navigate("Signup")}
          />
          <Button
            style={styles.button}
            color="white"
            title="Homepage"
            onPress={() => navigate("Homepage")}
          />
        </View>
      </SafeAreaView>
    );
  }
}