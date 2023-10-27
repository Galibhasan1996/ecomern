import { StyleSheet, View, Image, TouchableOpacity, TextInput, } from 'react-native'
import React from 'react'
import { color_name } from '../../src/util/Color'

const Header = ({ placeholder, rightIcon, onClickRightIcon, value, onChangeText, onFocus, onPressIn }) => {
    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.main_input}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onPressIn={onPressIn}
                />
                <TouchableOpacity onPress={() => {
                    onClickRightIcon()
                }}>
                    {
                        rightIcon && <Image style={styles.input_search_icon} source={rightIcon} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: color_name.Androidgreen,
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: 0,
    },
    input_container: {
        width: '90%',
        backgroundColor: color_name.white,
        height: "60%",
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