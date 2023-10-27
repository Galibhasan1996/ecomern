import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'

const PriceTable = ({ price, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.price_table}>
                <View>
                    <Text>{title}</Text>
                </View>
                <View>
                    <Text>{price}</Text>
                </View>
            </View>
        </View>
    )
}

export default PriceTable

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 20
    },
    price_table: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})