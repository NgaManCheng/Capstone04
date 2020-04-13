import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';
import { ListItem, Card, Divider } from 'react-native-elements';
export default class Upload extends Component {

    render() {
      const { navigate } = this.props.navigation;
      return (
        <SafeAreaView style={styles.container_signup_form}>
          <View style={styles.inputContainer}>
  
  
            <ScrollView>
              <Card title="Upload Files" style={styles.card}>
                <Text>Take a photo of your file here:</Text>
                <Image source={require('./camera.png')}
                 style={{width: 325, height: 400, resizeMode: 'contain'}} 
                />
                <Button
                        style={styles.button}
                        color="grey"
                        title="Take Photo"
                    />
              </Card>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  };
  