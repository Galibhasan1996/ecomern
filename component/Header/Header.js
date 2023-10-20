import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { color_name } from '../../src/util/Color'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <TextInput placeholder={"Search Item"} style={styles.main_input}></TextInput>
                <Image style={styles.input_search_icon} source={require('../../src/image/search.png')} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: color_name.gray,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_container: {
        width: '90%',
        backgroundColor: color_name.white,
        height: "70%",
        flexDirection: "row",
        borderRadius: 5,
        alignItems: 'center',
    },
    main_input: {
        // backgroundColor: color_name.Aquamarine,
        paddingHorizontal: 10,
        width: '86%',
    },
    input_search_icon: {
        width: 24,
        height: 24,
        marginHorizontal: 10
    }
})