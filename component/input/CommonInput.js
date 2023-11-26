import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { color_name } from '../../src/util/Color'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const CommonInput = ({ placeholder, keyboardType, leftIcon, rightIcon, rightIconClick, onChangeText, onFocus, secureTextEntry, inputHeaderName, multiline, value, onPressIn, autoComplete, autoFocus, rref, }) => {
    return (
        <View >
            <Text style={styles.header_text}>{inputHeaderName}</Text>

            <View style={styles.container}>
                {
                    leftIcon && <Image source={leftIcon} style={styles.leftIcon_} />
                }
                <TextInput
                    style={styles.main_input}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    secureTextEntry={secureTextEntry}
                    multiline={multiline}
                    value={value}
                    onPressIn={onPressIn}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    ref={rref}
                    
                />

                {

                    rightIcon &&
                    <TouchableOpacity onPress={() => {
                        rightIconClick()
                    }}>
                        <Image source={rightIcon} style={styles.rightIcon_} />
                    </TouchableOpacity>

                }
            </View>
        </View>
    )
}

export default CommonInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: color_name.white,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        width: responsiveWidth(95),
    },
    main_input: {
        paddingHorizontal: 10,
        borderRadius: 10,
        width: responsiveWidth(77),
    },
    rightIcon_: {
        width: responsiveWidth(6),
        height: responsiveHeight(6),
        resizeMode: "contain"
    },
    leftIcon_: {
        width: responsiveWidth(6),
        height: responsiveHeight(6),
        marginLeft: 10,
        resizeMode: "contain"
    },
    header_text: {
        fontWeight: "900",
        color: color_name.black,
        marginVertical: 5
    }
})