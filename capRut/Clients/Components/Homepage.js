import React, { Component } from "react";
import { Text, View, Button, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { render } from "react-dom";
import { firestore, auth } from '../../fire';

import styles from "./Style";
import { AuthSession } from "expo";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

export default class Homepage extends Component {
    static navigationOptions = {
        title: 'Welcome',
        headerRight: <Button title='Sign Out' onPress={() => navigate('Home')} />,
        headerLeft: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const handlePress = () => false
        return (
            <View style={styles.container1}>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="account-circle" size={50} color="white" />
                    <Button
                        style={styles.button}
                        color="white"
                        title="My Profile"
                        onPress={() => navigate('Profile')}
                    />
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="format-list-checks" size={50} color="white" />
                    <Button
                        style={styles.button}
                        color="white"
                        title="Medications"
                        onPress={() => navigate('Medications', {
                            userId: auth.currentUser.uid
                        })}
                    />
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="camera" size={50} color="white" />
                    <Button
                        style={styles.button}
                        color="white"
                        title="Upload"
                        onPress={() => navigate('Upload')}
                    />
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons name="file-search-outline" size={50} color="white" />
                    <Button
                        style={styles.button}
                        color="white"
                        title="Files"
                        onPress={() => navigate('Files')}
                    />
                </View>

            </View>

        );
    }
}