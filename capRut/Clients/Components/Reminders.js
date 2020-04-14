import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./Style";
import { ListItem, Card, Divider } from 'react-native-elements';
export default class Reminders extends Component {

    render() {
      const { navigate } = this.props.navigation;
      return (
        <SafeAreaView style={styles.container_signup_form}>
          <View style={styles.inputContainer}>
  
  
            <ScrollView>
              <Card title="Your prescription for Tylenol will run out in 10 days." style={styles.card}>
                <Text>Call Dr.Cheng for a refill.</Text>
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="You have a doctors appointment in 30 days." style={styles.card}>
                <Text>Check your calendar.</Text>
                </Card>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  };
  