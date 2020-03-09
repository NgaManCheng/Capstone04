import React, { Component } from 'react';
import { firestore, auth } from '../../fire';

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import styles from './Style';

// var user = firebase.auth().currentUser;

export default class SignUp extends Component {
  state = {
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    age: ''
  };

  render() {
    const { username, age, password, email, firstname, lastname } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container_signup_form}>
        <View style={styles.inputContainer}>
          <Text style= {styles.titleLogin}>Sign Up</Text>

          <TextInput
            value={firstname}
            placeholder="first name"
            style={styles.textInput}
            onChangeText={value => this.setState({ firstname: value })}
          />
          <TextInput
            value={lastname}
            placeholder="last name"
            style={styles.textInput}
            onChangeText={value => this.setState({ lastname: value })}
          />
          <TextInput
            value={username}
            placeholder="username"
            style={styles.textInput}
            onChangeText={value => this.setState({ username: value })}
          />

          <TextInput
            value={email}
            placeholder="email"
            style={styles.textInput}
            onChangeText={value => this.setState({ email: value })}
          />
          <TextInput
            value={password}
            placeholder="password"
            style={styles.textInput}
            onChangeText={value => this.setState({ password: value })}
          />
{/* 
          <TextInput
            value={age}
            placeholder="age"
            style={styles.textInput}
            onChangeText={value => this.setState({ age: value })}
          /> */}

          <Button
            onPress={() => {
              // console.log(auth.currentUser.doc.data())
              if (email && password && username && firstname && lastname) {
                firestore
                  .collection('publicUsers')
                  .where('username', '==', username)
                  .get()
                  .then(snapshot => {
                    // console.log(snapshot.docs.length);
                    if (!snapshot.empty) {
                      alert('Username already exists');
                      this.setState({ //just erases what was typed
                        username: ''
                      });
                    } else {
                      auth
                        .createUserWithEmailAndPassword(email, password)
                        .then(user => {
                          firestore
                            .collection('publicUsers')
                            .doc(auth.currentUser.uid)
                            .set({
                              username,
                              firstname,
                              lastname
                            });
                            navigate('AddMedForm', {
                              userId: auth.currentUser.uid
                            });
                        })
                        .catch(function(error) {
                          var errorMessage = error.message;
                          alert(errorMessage);
                        });
                    }
                  })
                  .catch(error => alert(error.message));
              }
            }}
            title="Add User"
            color="#841584"
          />
        </View>
      </SafeAreaView>
    );
  }
}
