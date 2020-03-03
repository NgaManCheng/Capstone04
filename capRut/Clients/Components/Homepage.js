import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { render } from "react-dom";
import { firestore, auth } from '../../fire';

import styles from "./Style";


export default class Homepage extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        const { navigate } = this.props.navigation;
        const handlePress = () => false
        return (
            <View style={styles.container}>
              <Button
                style={styles.button}
                color="white"
                title="My Profile"
                onPress={() => navigate("Profile")}
              />
              <Button
                style={styles.button}
                color="white"
                title="Medications"
                onPress={() => navigate("Medications")}
              />
              <Button
                style={styles.button}
                color="white"
                title="Upload File"
                onPress={() => navigate("Upload")}
              />
              <Button
                style={styles.button}
                color="white"
                title="My Files"
                onPress={() => navigate("Files")}
              />
            </View>
          );
    }
}