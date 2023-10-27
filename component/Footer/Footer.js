import { StyleSheet, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Footer = () => {
    const route = useRoute()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home')
            }}>
                <Image source={route.name === "Home" ?
                    require('../../src/image/homefilltint.png')
                    :
                    require('../../src/image/home.png')}
                    style={styles.footer_image}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Notification')
            }}>
                <Image source={route.name === 'Notification' ?
                    require('../../src/image/bellfilltint.png')
                    :
                    require('../../src/image/bell.png')}
                    style={styles.footer_image}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate("Profile")
            }}>
                <Image source={route.name === 'Profile' ?
                    require('../../src/image/profilefilltint.png')
                    :
                    require('../../src/image/profile.png')}
                    style={styles.footer_image}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Add_Cart')
            }}>
                <Image source={route.name === "Add_Cart" ?
                    require('../../src/image/cartfill.png')
                    :
                    require('../../src/image/cart.png')}
                    style={styles.footer_image}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Logout')
            }}>
                <Image source={route.name === 'Logout' ? require('../../src/image/offfill.png') : require('../../src/image/off.png')}
                    style={styles.footer_image}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: 50,
        elevation: 10,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        position: "absolute",
        bottom: 0
    },
    footer_image: {
        width: 24,
        height: 24,
    },

})