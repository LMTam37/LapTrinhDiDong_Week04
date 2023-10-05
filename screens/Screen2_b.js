import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen2_b = () => {
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <Image source={require('../assets/usb.png')} style={styles.productImage} />
                <Text style={styles.productName}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View style={styles.feedBackContainer}>
                <Text style={styles.feedBackText}>Cực kỳ hài lòng</Text>
                <View style={styles.feadBackStarContainer}>
                    <Image style={styles.feadBackStar} source={require('../assets/Star.png')} />
                    <Image style={styles.feadBackStar} source={require('../assets/Star.png')} />
                    <Image style={styles.feadBackStar} source={require('../assets/Star.png')} />
                    <Image style={styles.feadBackStar} source={require('../assets/Star.png')} />
                    <Image style={styles.feadBackStar} source={require('../assets/Star.png')} />
                </View>
                <View style={styles.addImageContainer}>
                    <Image style={styles.cameraImage} source={require('../assets/camera.png')} />
                    <Text style={styles.addImageText}>Thêm hình ảnh</Text>
                </View>
                <View style={styles.feedBackInputContainer}>
                    <TextInput
                        style={styles.feedBackInput}
                        multiline={true}
                        numberOfLines={10}
                        placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
                        placeholderTextColor={'#C4C4C4'}>
                    </TextInput>
                    <Text style={styles.meetLink}>https://meet.google.com/nsj-ojwi-xpp</Text>
                </View>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>GỬI</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
        alignItems: 'center'
    }, productContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // justifyContent: 'space-between'
    }, productImage: {
        width: 70,
        height: 70
    }, productName: {
        fontSize: 16,
        fontWeight: '700'
    }, feedBackContainer: {
        width: '100%',
        flex: 4,
        justifyContent: 'space-around',
        alignItems: 'center'
    }, feedBackText: {
        fontSize: 18,
        fontWeight: '700'
    }, feadBackStarContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignContent: 'space-between'
    }, feadBackStar: {
        width: 39,
        height: 39,
        marginHorizontal: 10
    }, addImageContainer: {
        width: '100%',
        padding: 25,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#1511EB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }, cameraImage: {
        width: 39,
        height: 32
    }, addImageText: {
        fontSize: 18,
        fontWeight: '700'
    }, feedBackInputContainer: {
        width: '100%'
    }, feedBackInput: {
        width: '100%',
        padding: 15,
        fontSize: 18,
        fontWeight: '700',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#C4C4C4',
    }, meetLink: {
        fontSize: 12,
        fontWeight: '700',
        position: 'absolute',
        bottom: 0,
        right: 0,
    }, sendButton: {
        width: '100%',
        height: 41,
        backgroundColor: '#0D5DB6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }, sendButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    }
})
export default Screen2_b