import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';

export default class Emergency extends Component {
  render() {
    return (

      <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }}
        />

        <View style={styles.body}>
            <Text style={styles.name}>Holly Smith </Text>
            
          <View style={styles.bodyContent}>
            
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Age: 22</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Blood Type: A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Allergies: Gluten, Nuts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Organ Donor?: Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Emergency Contact Number: 222-444-5555</Text>
            </TouchableOpacity>
            
          </View>

        </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#325C74',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: '#325C74',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 45,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
  },
  body: {
    marginTop: 80,
   
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    paddingBottom: 10,
  },

  info: {
    fontSize: 16,
    color: 'darkblue',
    marginTop: 10,
    alignSelf: 'center',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#325C74',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
