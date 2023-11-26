import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { color_name } from '../../util/Color'
import Button from '../../../component/button/Button'
import Footer from '../../../component/Footer/Footer'

const CheckOut = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Header_text}>Payment Options</Text>
            <Text style={styles.Amount_text}>Total Amount : 100$</Text>

            <View style={styles.mini_container}>
                <Text style={styles.payment_text}>Select your payment mode</Text>
                <View style={styles.button_container}>
                    <Button
                        backgroundColor={color_name.black}
                        titleColor={color_name.white}
                        title={'Cash on Delivery'}
                        onclick={() => { Alert.alert('your order has been placed') }}
                        custom_height={35}
                        custom_width={300}
                    />

                    <Button
                        backgroundColor={color_name.black}
                        titleColor={color_name.white}
                        title={'Online (CREDIT) || (DEBIT CARD)'}
                        onclick={() => { navigation.navigate('Payment') }}
                        custom_height={35}
                        custom_width={300}
                    />
                </View>

            </View>
            <Footer />

        </View>
    )
}

export default CheckOut

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header_text: {
        fontSize: 25,
        color: color_name.black,
        fontWeight: "900"
    },
    Amount_text: {
        color: color_name.Ashgray,
        marginBottom: 10
    },
    mini_container: {
        width: '90%',
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    button_container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    payment_text: {
        paddingVertical: 5
    }
})