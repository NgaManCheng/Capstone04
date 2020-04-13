import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';
import { ListItem, Card, Divider } from 'react-native-elements';
export default class Calendar extends Component {

    render() {
      const { navigate } = this.props.navigation;
      return (
        <SafeAreaView style={styles.container_signup_form}>
          <View style={styles.inputContainer}>
                <Image source={require('./calscreen.png')} 
                 style={{width: 400, height: 700, resizeMode: 'contain'}} 
                />
          </View>
        </SafeAreaView>
      );
    }
  };
  