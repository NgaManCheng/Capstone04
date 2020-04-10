import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';
import { ListItem, Card, Divider } from 'react-native-elements';

export default class Medications extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container_signup_form}>
        <View style={styles.inputContainer}>


          <ScrollView>
            <Card title="MEDICATIONS" style={styles.card}>
              <Text>Tynenol</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Cheng</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
              <Divider style={{ backgroundColor: 'darkblue' }} />
              <Text>Advil</Text>
              <Text>Directions: Two pills every Monday and Thursday</Text>
              <Text>Provider: Dr.Haque</Text>
            </Card>

            < Button
              style={styles.button}
              color="white"
              title="Add Medication"
              onPress={() => navigate('AddMedForm')}
            />

          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};

