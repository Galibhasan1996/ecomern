import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }
})