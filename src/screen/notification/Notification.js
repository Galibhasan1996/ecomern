import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Footer from '../../../component/Footer/Footer'

const Notification = () => {
    return (
        <View style={styles.container}>
            <Text>{`Your don't have any notification`}</Text>
            <Footer></Footer>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
})