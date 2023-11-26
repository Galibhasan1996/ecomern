import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Footer from '../../../../component/Footer/Footer'
import { orderData } from '../../../util/data/orderData/OrderData'
import OrderItem from '../../logout/orderItem/OrderItem'
import { color_name } from '../../../util/Color'

const My_Order = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.My_Order_heading}>My Order</Text>
            {
                orderData.map((order) => {
                    return (
                        <OrderItem key={order._id} order={order} />
                    )
                })
            }
            <Footer />
        </View>
    )
}

export default My_Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    My_Order_heading: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: "900",
        color: color_name.black
    }
})