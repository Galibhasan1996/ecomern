import { StyleSheet, Text, View, Dimensions, } from 'react-native'
import React from 'react'
import { color_name } from '../../../util/Color'
const { height, width } = Dimensions.get('screen')

const OrderItem = ({ order }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item_container}>
                <View style={styles.order_id_container}>
                    <Text>{`Order ID : ${order._id}`}</Text>
                    <Text>{`Date ${order.date}`}</Text>
                </View>
                <View style={styles.all_product_detail}>
                    <Text>{`Product Name : ${order.ProductInfo.name}`}</Text>
                    <Text>{`Product Price : ${order.ProductInfo.price}`}</Text>
                    <Text>{`Product Quantity : ${order.ProductInfo.qty}`}</Text>
                    <Text>{`Total Amount : ${order.totolAmount + " $"}`}</Text>
                </View>
                <View style={styles.order_status}>
                    <Text style={styles.order_status_text}>{`Order Status : ${order.paymentMode}`}</Text>
                </View>
            </View>

        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10
    },
    order_id_container: {
        width: width,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    all_product_detail: {
        width: width,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    order_status: {
        width: width,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    item_container: {
        backgroundColor: "#f8f8f8",
        marginTop: 15,
    },
    order_status_text: {
        fontWeight: "900",
        color: color_name.black
    }
})