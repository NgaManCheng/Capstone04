import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';
import { ListItem, Card, Divider, colors } from 'react-native-elements';
export default class Insurance extends Component {

    render() {
      const { navigate } = this.props.navigation;
      return (
        <SafeAreaView style={styles.container_signup_form}>
          <View style={styles.inputContainer}>
  
  
            <ScrollView>
              <Card title="Current Insurance" style={styles.card}>
                <Text style={{fontSize: 20, fontWeight: "500", alignSelf: "center"}}>Horizon NJ Health</Text>
                <Divider style={{ backgroundColor: 'darkblue', height: 5}} />
                <Text>Group #:      HGR1331</Text>
                <Text>Member ID:    7650345</Text>
                <Text>Effective:    07/01/2019</Text>
                <Text>Deductible:   $50 per Benefit Year</Text>
                <Text>Member Services:      1-800-242-1222</Text>
                
                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Dental Insurance" style={styles.card}>
                <Text style={{fontSize: 20, fontWeight: "500", alignSelf: "center"}}>Delta Dental</Text>
                <Divider style={{ backgroundColor: 'darkblue', height: 5}} />
                <Text>Group Policy #:       364684377 8327291974</Text>
                <Text>Member No:        1234561</Text>
                <Text>Effective:        07/01/2018</Text>
                <Text>Membership Plan:      Plan A</Text>
                <Text>Member Services:      1-800-242-1222</Text>

                <Text></Text>

                </Card>
                <Divider style={{ backgroundColor: 'darkblue' }} />
                <Card title="Past Insurance" style={styles.card}>
                <Text style={{fontSize: 20, fontWeight: "500", alignSelf: "center"}}>Colonial Life</Text>
                <Divider style={{ backgroundColor: 'darkblue', height: 5}} />
                <Text>Group #:      YRG2431</Text>
                <Text>Member ID:    5673033</Text>
                <Text>Issue Date:   06/13/2018</Text>
                <Text>Effective:    07/01/2018</Text>
                <Text>Member Services:      1-800-532-1111</Text>
               
              </Card>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
  };