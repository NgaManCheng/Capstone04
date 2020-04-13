import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
          />
          <Text style={styles.name}>Holly Smith</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            {/* <Text style={styles.name}>Rameen</Text> */}
            {/* <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
               */}
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Age: 22</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Birthday: 2/19/98</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Gender: Female</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.text}>Email: hes@rutgers.edu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#325C74',
    height: 200,
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },

  body: {
    marginTop: 50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 0,
    marginTop: Dimensions.get('window').height/ 20,
  },
  name: {
    fontSize: 58,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    top: 50,
  },
  info: {
    fontSize: 16,
    color: 'darkblue',
    marginTop: 10,
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
    width: 280,
    borderRadius: 30,
    backgroundColor: '#325C74',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
