import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, onclick, titleColor, backgroundColor, custom_height, custom_width }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor, width: custom_width, height: custom_height }]} onPress={() => {
            onclick()
        }}>
            <Text style={[styles.title_, { color: titleColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 5
    },
    title_: {
        fontSize: 15,
        fontWeight: "500",
    }
})