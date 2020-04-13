import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './Style';
import { firestore, auth } from '../../fire';
import { render } from 'react-dom';
import { ListItem, Card, Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default class Immunizations extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container_signup_form}>
        {/* <View style={styles.container_signup_form}> */}

        <ScrollView>
          <Card title="IMMUNIZATIONS" style={styles.card}>
            <TouchableOpacity>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Tynenol</Text>
                <Text>Date: 2/12/16</Text>
                <Text>Provider: Dr.Cheng</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>MMR</Text>
                <Text>Date: 2/12/16</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Measles</Text>
                <Text>Date: 2/12/16</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Mumps</Text>
                <Text>Date: 2/12/16</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Rubella</Text>
                <Text>Date: 2/12/16</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.containerM}>
                <Text style={styles.medtitle}>Varicell(Chicken Pox)</Text>
                <Text>Date: 2/12/16</Text>
                <Text>Provider: Dr.Haque</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.containerM}>
              <Text style={styles.medtitle}>Tetanus</Text>
              <Text>Date: 2/12/16</Text>
              <Text>Provider: Dr.Haque</Text>
            </View>
            <View style={styles.containerM}>
              <Text style={styles.medtitle}>Influenza</Text>
              <Text>Date: 2/12/16</Text>
              <Text>Provider: Dr.Haque</Text>
            </View>
          </Card>

          <TouchableOpacity onPress={() => navigate('AddImmForm')}>
            <Text style={styles.buttonz}>Add Immunization</Text>
          </TouchableOpacity>

          {/* Dimension size changes */}
          <Text style={styles.buttonz}></Text>
          <Text style={styles.medtitle}></Text>

        </ScrollView>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}
