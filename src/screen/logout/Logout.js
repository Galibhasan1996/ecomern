import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Footer from '../../../component/Footer/Footer'

const Logout = () => {
    return (
        <View style={styles.container}>
            <Text>Logout</Text>
            <Footer />
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})