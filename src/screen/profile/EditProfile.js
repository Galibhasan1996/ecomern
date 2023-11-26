import { StyleSheet, View, Image, Alert, ScrollView, Text, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import CommonInput from '../../../component/input/CommonInput'
import { color_name } from '../../util/Color'
import Button from '../../../component/button/Button'



const EditProfile = ({ navigation }) => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const dobRef = useRef(null);
    const passwordRef = useRef(null);
    const conpasswordRef = useRef(null);
    const addressRef = useRef(null);

    const nameHandle = (value) => {
        if (value.current) {
            value.current.focus();
        }
    }

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [dob, setdob] = useState('')
    const [Password, setPassword] = useState('')
    const [ConPassword, setConPassword] = useState('')
    const [address, setaddress] = useState('')

    const [FocusName, setFocusName] = useState(false)
    const [FocusEmail, setFocusEmail] = useState(false)
    const [FocusDob, setFocusDob] = useState(false)
    const [FocusPassword, setFocusPassword] = useState(false)
    const [FocusConPassword, setFocusConPassword] = useState(false)
    const [FocusAddress, setFocusAddress] = useState(false)

    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [secureTextEntry1, setSecureTextEntry1] = useState(true)



    // console.log(name, email, Password, dob, ConPassword, address);


    const SignupHandle = () => {
        if (!name) {
            Alert.alert('Enter Name')
            nameHandle(nameRef)
            return
        }
        if (!email) {
            Alert.alert('Enter Email')
            nameHandle(emailRef)
            return
        }
        if (!dob) {
            Alert.alert('Enter DOB')
            nameHandle(dobRef)
            return
        }
        else if (!Password) {
            Alert.alert('Enter Password')
            nameHandle(passwordRef)
            return
        }
        if (!ConPassword) {
            Alert.alert('Enter Confirm Password')
            nameHandle(conpasswordRef)
            return
        }
        if (!address) {
            Alert.alert('Enter Address')
            nameHandle(addressRef)
            return
        }
        if (Password != ConPassword) {
            Alert.alert('Password not match')
            return
        }
        else {
            clearAllInput()
            navigation.navigate('Profile')
            Alert.alert('Success')
        }
    }

    const clearAllInput = () => {
        setname('')
        setemail('')
        setdob('')
        setPassword('')
        setConPassword('')
        setaddress('')
    }



    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../image/user.png')} style={styles.logo_image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CommonInput
                    inputHeaderName={"Name"}
                    placeholder={"Enter Your Name..."}
                    leftIcon={FocusName == true ? require("../../image/profilefilltint.png") : require("../../image/profile.png")}
                    autoComplete={"name"}
                    onChangeText={(t) => { setname(t) }}
                    value={name}
                    onFocus={() => {
                        setFocusName(true);
                        setFocusEmail(false);
                        setFocusDob(false)
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                    }}
                    rref={nameRef}
                />

                <CommonInput
                    inputHeaderName={"Email"}
                    placeholder={"Enter Your Email..."}
                    leftIcon={FocusEmail == true ? require("../../image/emailtint.png") : require("../../image/email.png")}
                    autoComplete={"email"}
                    onChangeText={(t) => { setemail(t) }}
                    value={email}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(true);
                        setFocusDob(false)
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                    }}
                    rref={emailRef}
                />

                <CommonInput
                    inputHeaderName={"DOB"}
                    placeholder={"Enter Your DOB..."}
                    leftIcon={FocusDob == true ? require("../../image/dobfill.png") : require("../../image/dobb.png")}
                    autoComplete={"birthdate-full"}
                    onChangeText={(t) => { setdob(t) }}
                    value={dob}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(true);
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                    }}
                    rref={dobRef}
                />

                <CommonInput
                    inputHeaderName={"Password"}
                    placeholder={"Enter Your Password..."}
                    leftIcon={FocusPassword == true ? require("../../image/passtint.png") : require("../../image/pass.png")}
                    rightIcon={secureTextEntry == true ? require("../../image/show.png") : require("../../image/hide.png")}
                    onChangeText={(t) => { setPassword(t) }}
                    value={Password}
                    rightIconClick={() => {
                        setSecureTextEntry(!secureTextEntry);
                    }}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusPassword(true);
                        setFocusConPassword(false);
                        setFocusAddress(false);
                    }}
                    secureTextEntry={secureTextEntry}
                    autoComplete={"password"}
                    rref={passwordRef}
                />

                <CommonInput
                    inputHeaderName={"Confirm Password"}
                    placeholder={"Enter Your Confirm Password..."}
                    leftIcon={FocusConPassword == true ? require("../../image/passtint.png") : require("../../image/pass.png")}
                    rightIcon={secureTextEntry1 == true ? require("../../image/show.png") : require("../../image/hide.png")}
                    onChangeText={(t) => { setConPassword(t) }}
                    value={ConPassword}
                    rightIconClick={() => {
                        setSecureTextEntry1(!secureTextEntry1);
                    }}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusPassword(false);
                        setFocusConPassword(true);
                        setFocusAddress(false);
                    }}
                    secureTextEntry={secureTextEntry1}
                    autoComplete={'password'}
                    rref={conpasswordRef}
                />


                <CommonInput
                    inputHeaderName={"Address"}
                    placeholder={"Enter Your Address..."}
                    leftIcon={FocusAddress == true ? require("../../image/addressfill.png") : require("../../image/address.png")}
                    autoComplete={"address-line1"}
                    onChangeText={(t) => { setaddress(t) }}
                    value={address}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusPassword(false);
                        setFocusConPassword(false);
                        setFocusAddress(true);
                    }}
                    multiline={true}
                    rref={addressRef}
                />

                <Button
                    backgroundColor={color_name.white}
                    title={"Update Profile"}
                    titleColor={color_name.Androidgreen}
                    custom_height={40}
                    onclick={() => {
                        SignupHandle()
                    }}
                />

            </ScrollView>

        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color_name.white,
        paddingHorizontal: 10
    },
    logo_image: {
        width: 100,
        height: 100,
    },
    logo_container: {
        width: 105,
        height: 105,
        borderRadius: 60,
        elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    navigation_login: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    navigation_text: {
        color: color_name.Androidgreen,
        fontWeight: "900"
    }
})





