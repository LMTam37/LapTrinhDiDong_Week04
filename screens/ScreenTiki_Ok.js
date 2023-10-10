import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React, { useReducer } from 'react'

const ScreenTiki_Ok = () => {
    const quantityReducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
        }
    }
    const [currentQuantity, dispatch] = useReducer(quantityReducer, 1)

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    }
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.productInformationContainer}>
                    <Image style={styles.leftProductInformation} source={require('../assets/book.png')}></Image>
                    <View style={styles.rightProductInformation}>
                        <Text style={styles.productName}>Nguyên hàm tích phân và ứng dụng{'\n'}Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.productPrice}>141.800 đ</Text>
                        <Text style={styles.productPriceAfterDiscount}>141.800 đ</Text>
                        <View style={styles.productOrderQuantity}>
                            <View style={styles.quantitySelect}>
                                <TouchableOpacity style={styles.upButton} onPress={handleDecrement}>
                                    <Image source={require('../assets/btnminus.png')} style={{
                                        width: 14.222,
                                        height: 16
                                    }} />
                                </TouchableOpacity>

                                <Text style={styles.currentQuantity}>{currentQuantity}</Text>

                                <TouchableOpacity style={styles.downButton} onPress={handleIncrement}>
                                    <Image source={require('../assets/btnadd.png')} style={{
                                        width: 14.222,
                                        height: 16
                                    }} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.buyLaterText}>Mua sau</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.storedVoucher}>
                    <Text style={styles.storedVoucherText}>Mã giảm giá đã lưu</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewStoredVoucherText}>Xem tại đây</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.discountContainer}>
                    <View style={styles.selectDiscountContainer}>
                        <TouchableOpacity style={styles.selectDiscount}>
                            <View style={styles.yellow_block}></View>
                            <Text style={styles.selectDiscountText}>Mã giảm giá</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.applyDiscount}>
                            <Text style={styles.applyDiscountText}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.middleSection}>
                <View style={styles.applyVoucher}>
                    <Text style={styles.askForVoucherText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <TouchableOpacity>
                        <Text style={styles.inputDiscountText}>Nhập tại đây?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.provisionalTotalPrice}>
                    <Text style={styles.provisonalText}>Tạm tính</Text>
                    <Text style={styles.provisonalPrice}>141.800 đ</Text>
                </View>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.totalPriceContainer}>
                    <Text style={styles.totalPriceText}>Thành tiền</Text>
                    <Text style={styles.totalPrice}>141.800 đ</Text>
                </View>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4'
    }, topSection: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 12,
        justifyContent: 'space-evenly',
        flex: 3
    }, productInformationContainer: {
        flexDirection: 'row',
        width: '100%'
    }, leftProductInformation: {
        width: 104,
        height: 127,
    }, rightProductInformation: {
        marginLeft: 25,
        justifyContent: 'space-around'
    }, productName: {
        fontSize: 12,
        fontWeight: 700,

    }, productPrice: {
        color: '#EE0D0D',
        fontSize: 18,
        fontWeight: '700'
    }, productPriceAfterDiscount: {
        color: '#808080',
        fontSize: 12,
        fontWeight: '700',
    }, productOrderQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, quantitySelect: {
        flexDirection: 'row'

    }, currentQuantity: {
        width: 40,
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
        paddingHorizontal: 11
    }, buyLaterText: {
        color: '#134FEC',
        fontSize: 12,
        fontWeight: 700
    }, discountContainer: {

    }, storedVoucher: {
        flexDirection: 'row',

    },
    storedVoucherText: {
        color: '#011627',
        fontSize: 12,
        fontWeight: '700'
    },
    viewStoredVoucherText: {
        color: '#134FEC',
        fontSize: 12,
        fontWeight: '700',
        marginLeft: 17
    }, selectDiscountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, selectDiscount: {
        width: 208,
        height: 45,
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 13,
        borderColor: '#808080',
        flexDirection: 'row',
        alignItems: 'center',
    }, yellow_block: {
        width: 32,
        height: 16,
        backgroundColor: '#F2DD1B',
        marginRight: 9
    }, selectDiscountText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#011627'
    }, applyDiscount: {
        width: 99,
        height: 45,
        borderRadius: 2,
        backgroundColor: '#0A5EB7',
        justifyContent: 'center',
        alignItems: 'center'
    }, applyDiscountText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 700,
    }, middleSection: {
        width: '100%',
        flex: 3
    }, inputDiscountText: {
        color: '#134FEC',
        fontSize: 12,
        fontWeight: 700
    }, applyVoucher: {
        width: '100%',
        height: 51,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        marginVertical: 14
    }, askForVoucherText: {
        color: '#011627',
        fontSize: 12,
        fontWeight: 700,
        marginRight: 5
    }, provisionalTotalPrice: {
        width: '100%',
        height: 51,
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }, provisonalText: {
        color: '#011627',
        fontSize: 18,
        fontWeight: 700
    },
    provisonalPrice: {
        color: '#EE0D0D',
        fontSize: 18,
        fontWeight: 700,
    }, bottomSection: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }, totalPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }, totalPriceText: {
        color: '#808080',
        fontSize: 18,
        fontWeight: 700,
    }, totalPrice: {
        color: '#EE0D0D',
        fontSize: 20,
        fontWeight: 700,
    }, orderButton: {
        width: 331,
        height: 45,
        borderRadius: 2,
        backgroundColor: '#E53935',
        justifyContent: 'center',
        alignItems: 'center'
    }, orderButtonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 700,
    }
})

export default ScreenTiki_Ok