import { StyleSheet, View, ActivityIndicator, Modal } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { color_name } from '../../src/util/Color';


const CustomModel = ({ visible }) => {
    return (
        <Modal transparent visible={visible}>
            <View style={styles.modal_background}>
                <View style={styles.spinner_model}>
                    <ActivityIndicator size={50} color={"black"}></ActivityIndicator>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModel

const styles = StyleSheet.create({

    modal_background: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        backgroundColor: ' rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinner_model: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        borderRadius: 100,
        backgroundColor: color_name.white,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})