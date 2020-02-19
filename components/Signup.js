import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

import Logo from './Logo.js'

export const Signup = props => {

    const { navigate } = props.navigation

    const goToLoginPage = () => {
        navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.inputBox1}> </Text>   
            <Logo/>
            <View style={styles.container1}>
                
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="First Name"
                    placeholderTextColor="#ffffff"
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Last name"
                    placeholderTextColor="#ffffff"
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Telefon"
                    placeholderTextColor="#ffffff"
                 />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                />
                <Button title="Signup" />


            </View>
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Already have an account?</Text>
                <Button onPress={goToLoginPage} style={styles.signupButton} title="Login" />
            </View>
            </View>
        );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7f0000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container1: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 26
    },
    signupText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: '#b71c1c',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 6
    },
    inputBox1: {
        width: 300,
        height: 50,
        backgroundColor: '#7f0000',
    }
});
