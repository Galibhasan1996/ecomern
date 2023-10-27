import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Button from '../../../button/Button'
import { color_name } from '../../../../src/util/Color'


const ProductDetail = () => {

    const routes = useRoute()
    const { item } = routes.params
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
            <Image source={{ uri: item.imageUrl }} style={styles.product_image} />
            <Text style={styles.product_name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <View style={{ flexDirection: "row", alignItems: 'center', }}>
                <Button
                    title={'Add to cart'}
                    backgroundColor={color_name.Androidgreen}
                    titleColor={color_name.white}
                    custom_width={150}
                    custom_height={30}
                ></Button>


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
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    product_image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 50,
    },
    product_name: {
        color: color_name.black,
        marginVertical: 5
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
    }
})