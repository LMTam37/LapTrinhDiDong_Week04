import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'



const Screen2_a = () => {
    return (
        <LinearGradient
            colors={['#FBCB00', '#BF9A00']}
            style={styles.container}>
            <View style={styles.loginHeader}>
                <Text style={styles.loginText}>LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputNameContainer}>
                    <Image source={require('../assets/avatar_user.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder='Name'></TextInput>
                </View>
                <View style={styles.inputPasswordContainer}>
                    <Image source={require('../assets/lock.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder='Password'></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }, loginHeader: {
        alignContent: 'flex-start',
        width: '100%'
    }, loginText: {
        marginLeft: -25,
        fontSize: 30,
        fontWeight: 'bold'
    }, inputContainer: {
        width: '100%',
        justifyContent: 'space-around'
    }, icon: {
        position: 'absolute',
        left: 10,
        width: 32,
        height: 32
    }, inputNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, inputPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, input: {
        width: '100%',
        height: 54,
        fontSize: 18,
        paddingRight: 10,
        paddingLeft: 60,
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#F2F2F2',
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
    }, loginButton: {
        height: 45,
        width: '100%',
        backgroundColor: '#060000',
        justifyContent: 'center',
        alignItems: 'center'
    }, loginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }, forgotPasswordButton: {

    }, forgotPasswordText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Screen2_a