import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import styles from './Style';
import { firestore } from '../../fire';


export default class AddImmForm extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Immunization',
            //   headerRight: <SignOut navigate={navigation.navigate} />
        };
    };
   

    render() {
        const { name, directions, provider } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={styles.container_signup_form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.edit} >Add Immunization</Text>
                    <TextInput
                        

                        placeholder="Immunization Name"
                        style={styles.textInput}
                        
                    />
                    <TextInput
                        placeholder="Date"
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Provider"
                        style={styles.textInput}
                    />

                    <Button
                        title="Add Immunization"
                        color="white"
                        onPress={() => {
                           
                               
                              navigate('Immunizations')  
                          
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
