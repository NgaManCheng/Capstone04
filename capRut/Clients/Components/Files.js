import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';
import { ListItem, Card, Divider } from 'react-native-elements';
export default class Files extends Component {

    render() {
      const { navigate } = this.props.navigation;
      return (
        <SafeAreaView style={styles.container_signup_form}>
          <View style={styles.inputContainer}>
  
  
            <ScrollView>
              <Card title="Allergies" style={styles.card}>
                <Text>Children Allergies</Text>
                <Text>Date Uploaded: 9/10/2019</Text>
                <Image source={require('./allergies.png')} 
                 style={{width: 325, height: 500, resizeMode: 'contain'}} 
                />
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Text>Allergies Card</Text>
                <Text>Date Uploaded: 4/13/2020</Text>
                <Image source={require('./peanut.png')} 
                 style={{width: 325, height: 200, resizeMode: 'contain'}} 
                />
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Appointments" style={styles.card}>
                <Text>Appointment Reminder</Text>
                <Text>Date Uploaded: 4/2/2020</Text>
                <Text>Tag: Appointments</Text>
                <Image source={require('./appt.png')} 
                 style={{width: 325, height: 200, resizeMode: 'contain'}} 
                />
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Bills" style={styles.card}>
                <Text>Invoice</Text>
                <Text>Date Uploaded: 4/1/2020</Text>
                <Image source={require('./invoice.png')}
                 style={{width: 325, height: 500, resizeMode: 'contain'}} 
                />
                </Card>
                 <Divider style={{ backgroundColor: 'darkblue' }} />
                 <Card title="Doctor Notes" style={styles.card}>
                <Text>Doctor's Note</Text>
                <Text>Date Uploaded: 4/10/2020</Text>
                <Image source={require('./doctorNote.png')} 
                 style={{width: 325, height: 200, resizeMode: 'contain'}} 
                />
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Immunizations" style={styles.card}>
                <Text>Flu Shot 2020</Text>
                <Text>Date Uploaded: 2/5/2020</Text>
                <Image source={require('./flu.png')} 
                 style={{width: 327, height: 500, resizeMode: 'contain'}} 
                />
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Text>Meningitis Shot</Text>
                <Text>Date Uploaded: 1/31/2020</Text>
                <Image source={require('./men.png')} 
                 style={{width: 327, height: 500, resizeMode: 'contain'}} 
                />
              </Card>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  };
  