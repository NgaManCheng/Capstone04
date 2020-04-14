import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./Style";
import { ListItem, Card, Divider } from 'react-native-elements';
export default class Doctors extends Component {

    render() {
      const { navigate } = this.props.navigation;
      return (
        <SafeAreaView style={styles.container_signup_form}>
          <View style={styles.inputContainer}>
  
  
            <ScrollView>
              <Card title="Oncologist" style={styles.card}>
                <Text>Dr.Mandy Cheng</Text>
                <Text>Office Location: Edison, NJ</Text>
                <Text>Office Number: 908-555-1234</Text>
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Family Doctor" style={styles.card}>
                <Text>Dr.Rameen Masood</Text>
                <Text>Office Location: New Brunswick, NJ</Text>
                <Text>Office Number: 908-555-2813</Text>
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Gynecologist" style={styles.card}>
                <Text>Dr.Purna Haque</Text>
                <Text>Office Location: Piscataway, NJ</Text>
                <Text>Office Number: 908-555-9087</Text>
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Dentist" style={styles.card}>
                <Text>Dr.Hana Godrich</Text>
                <Text>Office Location: North Brunswick, NJ</Text>
                <Text>Office Number: 908-555-6543</Text>
                </Card>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  };
  