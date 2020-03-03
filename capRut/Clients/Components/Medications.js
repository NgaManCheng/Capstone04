import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';

export default class Medications extends Component {
 state ={
     directions: '',
     name: '',
     provider: ''
 };
 
 static navigationOptions = {
    title: 'Welcome'
  };

 render(){
    const {directions, name, provider} = this.state;
    const {navigate}= this.props.navigation;
    return(
        <SafeAreaView style={styles.container_signup_form}>
        <View style={styles.inputContainer}>
          <Text style= {styles.titleLogin}>Medications</Text>

          <Button
            onPress={() => {
              
            }}
            title="Add New Medication"
            color="#841584"
          />
          <Button
            onPress={() => {
              
            }}
            title="View Medications"
            color="#841584"
          />
        </View>
      </SafeAreaView>
    );
}
};

