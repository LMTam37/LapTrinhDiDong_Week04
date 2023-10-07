import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomCheckbox from '../components/customCheckbox';


const Screen2_c = () => {
    const [includePasswordLength, setIncludePasswordLength] = useState('');
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');

    function validateInputs() {
        if (isNaN(includePasswordLength) || includePasswordLength <= 0) {
            alert('Please enter a valid password length (greater than zero)');
            return false;
        }

        if (!(includeLowerCase || includeUpperCase || includeNumbers || includeSpecialSymbols)) {
            alert('Please check at least one option');
            return false;
        }

        return true;
    }

    function generatePassword() {
        if (validateInputs()) {

            let characterSet = '';

            if (includeLowerCase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
            if (includeUpperCase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (includeNumbers) characterSet += '0123456789';
            if (includeSpecialSymbols) characterSet += '!@#$%^&*()_+[]{}|;:,.<>?';

            let password = '';
            for (let i = 0; i < includePasswordLength; i++) {
                const randomIndex = Math.floor(Math.random() * characterSet.length);
                password += characterSet[randomIndex];
            }

            setGeneratedPassword(password);
        }
    }



    return (
        <ImageBackground
            source={require('../assets/background.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.passwordGeneratorText}>
                    PASSWORD{"\n"}GENERATOR
                </Text>
                <TextInput value={generatedPassword} style={styles.passwordOutput} />

                <View style={styles.checkboxRow}>
                    <Text style={styles.checkboxContent}>Password length</Text>
                    <TextInput keyboardType='numeric' value={includePasswordLength} onChangeText={setIncludePasswordLength} style={styles.inputPasswordLength} />
                </View>
                <View style={styles.checkboxRow}>
                    <Text style={styles.checkboxContent}>Include lower case letters</Text>
                    <CustomCheckbox
                        checked={includeLowerCase}
                        callback={() => setIncludeLowerCase(prevState => !prevState)} />
                </View>
                <View style={styles.checkboxRow}>
                    <Text style={styles.checkboxContent}>Include upcase letters</Text>
                    <CustomCheckbox
                        checked={includeUpperCase}
                        callback={() => setIncludeUpperCase(prevState => !prevState)} />
                </View>
                <View style={styles.checkboxRow}>
                    <Text style={styles.checkboxContent}>Include number</Text>
                    <CustomCheckbox
                        checked={includeNumbers}
                        callback={() => setIncludeNumbers(prevState => !prevState)} />
                </View>

                <View style={styles.checkboxRow}>
                    <Text style={styles.checkboxContent}>Include special symbol</Text>
                    <CustomCheckbox
                        checked={includeSpecialSymbols}
                        callback={() => setIncludeSpecialSymbols(prevState => !prevState)} />
                </View>

                <TouchableOpacity style={styles.generatePasswordButton} onPress={() => generatePassword()}>
                    <Text style={styles.generatePasswordButtonText}>GENERATE PASSWORD</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        padding: 19
    }, container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#23235B'
    }, passwordGeneratorText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center'
    },
    passwordOutput: {
        width: 297,
        height: 55,
        fontSize: 25,
        color: '#fff',
        backgroundColor: '#151537',
        padding: 5
    },
    checkboxRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkboxContent: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff'
    }, inputPasswordLength: {
        width: 118,
        height: 33,
        fontSize: 18,
        backgroundColor: '#fff',
        padding: 5
    },
    generatePasswordButton: {
        width: 269,
        height: 55,
        backgroundColor: '#3B3B98',
        justifyContent: 'center',
        alignItems: 'center'
    },
    generatePasswordButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 700
    },
})
export default Screen2_c