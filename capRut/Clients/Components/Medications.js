import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';
import { ListItem, Card, Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default class Medications extends Component {
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container_signup_form}>
      {/* <View style={styles.container_signup_form}> */}

          <ScrollView>
            <Card title="MEDICATIONS" style={styles.card}>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Tynenol</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Cheng</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Advil</Text>
                <Text>Directions: Two pills every Monday and Thursday</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>

              
            </Card>

            < Button
              style={styles.button}
              color="white"
              title="Add Medication"
              onPress={() => navigate('AddMedForm')}
            />

          </ScrollView>
        {/* </View> */}
      </SafeAreaView>
    );
  }
};

