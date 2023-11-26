import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { color_name } from '../../../src/util/Color'

const CartItem = ({ item }) => {

    const [qty, setqty] = useState(1)


    const handlAddqty = () => {
        if (qty === 10) {
            return Alert.alert(`You can't add more than 10`)
        }
        setqty(qty + 1)
    }

    const handlsubqty = () => {
        if (qty <= 1) {
            return
        }
        setqty(qty - 1)
    }



    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: item.imageUrl }} style={styles.cart_image} />
            </View>
            <View style={styles.text_container}>
                <Text>{item.name}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 10, }}>

                <TouchableOpacity style={styles.button} onPress={() => {
                    handlsubqty()
                }}>
                    <Text style={styles.plus}>{"-"}</Text>
                </TouchableOpacity>

                <View style={styles.counting}>
                    <Text >{qty}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    handlAddqty()
                }}>
                    <Text style={styles.plus}>{'+'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 5,
        elevation: 1
    },
    cart_image: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    button: {
        backgroundColor: color_name.gray,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plus: {
        color: color_name.Androidgreen,
        fontWeight: "900",
        fontSize: 20
    },
    counting: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f5f5f5"
    },
    text_container: {
        width: 200,
    }
})