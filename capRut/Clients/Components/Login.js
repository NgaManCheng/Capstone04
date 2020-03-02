import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';
import styles from './Style';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container_signup_form}>
        <View style={styles.inputContainer}>
          <Text style={styles.titleLogin}>Log in</Text>
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
        </View>
      </SafeAreaView>
    );
  }
}
