import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import styles from './Style';
import { firestore } from '../../fire';

export default class Info extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container_signup_form}>
        <View style={styles.inputContainer}>
          <Text style={styles.edit}>Add Info</Text>
          <Text> Age: </Text>
          <TextInput placeholder="age" style={styles.textInput} />
          <Text> Birthdate: </Text>
          <TextInput placeholder="birthdate" style={styles.textInput} />
          <Text> Gender: </Text>
          <TextInput placeholder="gender" style={styles.textInput} />

          <TouchableOpacity onPress={() => navigate('Homepage')}>
            <Text style={styles.buttonz}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
