import { StyleSheet, View, Image, Alert, ScrollView, Text, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import CommonInput from '../../../component/input/CommonInput'
import { color_name } from '../../util/Color'
import Button from '../../../component/button/Button'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { server } from '../../reduxToolkit/store/Store'



const Signup = ({ navigation }) => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const dobRef = useRef(null);
    const passwordRef = useRef(null);
    const conpasswordRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const countryRef = useRef(null);
    const phoneRef = useRef(null);
    const roleRef = useRef(null);
    const answerRef = useRef(null);

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
    const [city, setcity] = useState('')
    const [country, setcountry] = useState('')
    const [phone, setphone] = useState('')
    const [role, setrole] = useState('')
    const [answer, setanswer] = useState('')

    const [FocusName, setFocusName] = useState(false)
    const [FocusEmail, setFocusEmail] = useState(false)
    const [FocusDob, setFocusDob] = useState(false)
    const [FocusPassword, setFocusPassword] = useState(false)
    const [FocusConPassword, setFocusConPassword] = useState(false)
    const [FocusAddress, setFocusAddress] = useState(false)
    const [Focuscity, setFocuscity] = useState(false)
    const [Focuscountry, setFocuscountry] = useState(false)
    const [Focusphone, setFocusphone] = useState(false)
    const [Focusrole, setFocusrole] = useState(false)
    const [Focusanswer, setFocusanswer] = useState(false)

    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [secureTextEntry1, setSecureTextEntry1] = useState(true)
    const [inputHeaderText, setinputHeaderText] = useState(false)



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
        if (!city) {
            Alert.alert('enter city')
            return
        }
        if (!country) {
            Alert.alert('enter country')
            return
        }
        if (!phone) {
            Alert.alert('enter phone')
            return
        }
        if (!role) {
            Alert.alert('enter role')
            return
        }
        if (!answer) {
            Alert.alert('enter answer')
            return
        }
        else {

            fetch(`${server}/user/register`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name: name, email: email, dob: dob, password: Password, address: address, city: city, country: country, phone: phone, role: role, answer: answer, })
            })
                .then((res) => res.json())
                .then(async (data) => {
                    if (data.error) {
                        Alert.alert(data.error)
                    }
                    else if (data.message === 'Registration successful please log in') {
                        clearAllInput()
                        Alert.alert(data.message)
                        navigation.navigate('Login')

                    }
                })
                .catch((err) => {
                    console.log(err);
                })

        }
    }

    const clearAllInput = () => {
        setname('')
        setemail('')
        setdob('')
        setPassword('')
        setConPassword('')
        setaddress('')
        setcity('')
        setcountry('')
        setphone('')
        setrole('')
        setanswer('')
    }



    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../image/user.png')} style={styles.logo_image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CommonInput
                    inputHeaderName={'Name'}
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
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
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
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
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
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
                    }}
                    rref={dobRef}
                    keyboardType={'phone-pad'}
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
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
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
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
                    }}
                    secureTextEntry={secureTextEntry1}
                    autoComplete={'password'}
                    rref={conpasswordRef}
                />


                <CommonInput
                    inputHeaderName={"Address"}
                    placeholder={"Enter Your Address..."}
                    leftIcon={FocusAddress == true ? require("../../image/addressfill.png") : require("../../image/address.png")}
                    autoComplete={"address-line2"}
                    onChangeText={(t) => { setaddress(t) }}
                    value={address}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusPassword(false);
                        setFocusConPassword(false);
                        setFocusAddress(true);
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
                    }}
                    multiline={true}
                    rref={addressRef}
                />

                <CommonInput
                    inputHeaderName={"City"}
                    placeholder={"Enter Your City..."}
                    leftIcon={Focuscity == true ? require("../../image/cityfill.png") : require("../../image/city.png")}
                    // autoComplete={"name"}
                    onChangeText={(t) => { setcity(t) }}
                    value={city}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                        setFocuscity(true)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
                    }}
                    rref={cityRef}
                />

                <CommonInput
                    inputHeaderName={"Country"}
                    placeholder={"Enter Your Country..."}
                    leftIcon={Focuscountry == true ? require("../../image/statefill.png") : require("../../image/state.png")}
                    // autoComplete={"country"}
                    onChangeText={(t) => { setcountry(t) }}
                    value={country}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                        setFocuscity(false)
                        setFocuscountry(true)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(false)
                    }}
                    rref={countryRef}
                />

                <CommonInput
                    inputHeaderName={"Mobile"}
                    placeholder={"Enter Your Mobile..."}
                    leftIcon={Focusphone == true ? require("../../image/mobiletint.png") : require("../../image/mobile.png")}
                    autoComplete={"tel"}
                    onChangeText={(t) => { setphone(t) }}
                    value={phone}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(true)
                        setFocusrole(false)
                        setFocusanswer(false)
                    }}
                    rref={phoneRef}
                    keyboardType={'phone-pad'}
                />

                <CommonInput
                    inputHeaderName={"Role"}
                    placeholder={"Enter Your Role..."}
                    leftIcon={Focusrole == true ? require("../../image/rolefilltint.png") : require("../../image/role.png")}
                    // autoComplete={"name"}
                    onChangeText={(t) => { setrole(t) }}
                    value={role}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(true)
                        setFocusanswer(false)
                    }}
                    rref={roleRef}
                />

                <CommonInput
                    inputHeaderName={"Answer"}
                    placeholder={"Enter Your Answer..."}
                    leftIcon={Focusanswer == true ? require("../../image/answerfill.png") : require("../../image/answerline.png")}
                    // autoComplete={"name"}
                    onChangeText={(t) => { setanswer(t) }}
                    value={answer}
                    onFocus={() => {
                        setFocusName(false);
                        setFocusEmail(false);
                        setFocusDob(false);
                        setFocusConPassword(false);
                        setFocusPassword(false);
                        setFocusAddress(false);
                        setFocuscity(false)
                        setFocuscountry(false)
                        setFocusphone(false)
                        setFocusrole(false)
                        setFocusanswer(true)
                    }}
                    rref={answerRef}
                />

            </ScrollView>
            <Button
                backgroundColor={color_name.white}
                title={"Register"}
                titleColor={color_name.Androidgreen}
                custom_height={40}
                onclick={() => {
                    SignupHandle()
                }}
            />

            <View style={styles.navigation_login}>
                <Text>Already Have An Account! </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Login")
                }}>
                    <Text style={styles.navigation_text}>Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Signup

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


