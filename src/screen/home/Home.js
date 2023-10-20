import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../../../component/Layout/Layout'

const Home = () => {
    return (
        <Layout>
            <View>
                <Text>Home</Text>
            </View>
        </Layout>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#03f4f9",
        alignItems: 'center',
        justifyContent: 'center',
    }
})