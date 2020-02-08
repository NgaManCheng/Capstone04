import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import styles from "./Style";

export default class Home extends Component {
  static navigationOptions = {
    title: "Welcome"
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MediHealth Tracker</Text>
        <Button
          style={styles.button}
          color="blue"
          title="Log In"
          onPress={() => navigate("Login")}
        />
        <Button
          style={styles.button}
          color="blue"
          title="Sign Up"
          onPress={() => navigate("Signup")}
        />
      </View>
    );
  }
}