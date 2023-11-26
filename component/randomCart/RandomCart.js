import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";



const RandomCart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inside_container}>
                <Text>RandomCart</Text>
            </View>
            <View style={styles.inside_container}>
                <Text>RandomCart</Text>
            </View>

        </View>
    )
}

export default RandomCart

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        width: responsiveWidth(97),
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: responsiveHeight(8)
    },
    inside_container: {
        width: responsiveWidth(40),
        height: responsiveHeight(20),
        backgroundColor: 'green',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})