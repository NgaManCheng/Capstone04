import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';
import styles from "./Style";
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';

export default class Medications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      medications: []
    };
  }

  async getUserName() {
    try {
      const user = await firestore
        .collection('publicUsers')
        .doc(this.props.navigation.getParam('userId', 'NO-ID')) //no-id is default value
        .get();

      return user.data().username;
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    const username = await this.getUserName();
    this.setState({ username: username, groups: [] });
    this.unsubscribe = firestore
      .collection('medications')
      .where('groupId', '==', this.props.navigation.getParam('groupId'))

      .onSnapshot(docs => {
        this.setState({ groups: [] });
        docs.forEach(doc => {
          this.setState({
            groups: [...this.state.groups, { id: doc.id, data: doc.data() }]
          });
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { directions, name, provider } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container_signup_form}>
        <View style={styles.inputContainer}>
          <Text style={styles.titleLogin}>Medications</Text>

          <Button
            onPress={() => {
              navigate('AddMedForm')
            }}
            title="Add New Medication"
            color="#841584"
          />

        </View>
      </SafeAreaView>
    );
  }
};

