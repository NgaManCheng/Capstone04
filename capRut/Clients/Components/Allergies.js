import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./Style";
import { ListItem, Card, Divider } from 'react-native-elements';
export default class Allergies extends Component {

    render() {
      const { navigate } = this.props.navigation;
      return (
        <SafeAreaView style={styles.container_signup_form}>
          <View style={styles.inputContainer}>
  
  
            <ScrollView>
              <Card title="Gluten" style={styles.card}>
                <Text>Reaction: hives, rash, stomach ache </Text>
                <Text>Directions: Use EPI Pen</Text>
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Nuts" style={styles.card}>
                <Text>Reaction: hives,throat swelling, difficulty breathing</Text>
                <Text>Directions: Use EPI Pen, then call 911</Text>
                </Card>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  };
  