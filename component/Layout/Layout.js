import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect, Children } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ Children }) => {
    return (
        <>
            <Header></Header>
            <View>{Children}</View>
            <Footer></Footer>

        </>



    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})