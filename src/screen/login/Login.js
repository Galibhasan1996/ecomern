import { StyleSheet, View, Image, Alert, Text, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import CommonInput from '../../../component/input/CommonInput'
import { color_name } from '../../util/Color'
import Button from '../../../component/button/Button'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reduxToolkit/action/UserAction'
import { server } from '../../reduxToolkit/store/Store'



const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, message, error } = useSelector(state => state.user)


    const [email, setemail] = useState('')
    const [Password, setPassword] = useState('')

    const [FocusEmail, setFocusEmail] = useState(false)
    const [FocusPassword, setFocusPassword] = useState(false)

    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const nameRef = useRef(null);
    const passwordRef = useRef(null);


    const nameHandle = (value) => {
        if (value.current) {
            value.current.focus();
        }
    }

    const LoginHandle = () => {
        if (!email) {
            Alert.alert('Enter Email')
            nameHandle(nameRef);
            return
        }
        else if (!Password) {
            Alert.alert('Enter Password')
            nameHandle(passwordRef)
            return
        }
        else {
            // clearAllInput()

            // dispatch(login(email, Password))
            fetch(`${server}/user/login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ email: email, password: Password })
            })
                .then((res) => { return res.json() })
                .then(async (data) => {
                    if (data.error) {
                        Alert.alert(data.error)
                    }
                    else if (data.message === "Login successfully") {
                        navigation.navigate('Home')

                    }
                })
                .catch((err) => {
                    console.log(`show error here ${err}`);
                })


        }
    }

    // useEffect(() => {
    //     if (error) {
    //         Alert.alert(error)
    //         dispatch({ type: 'clearError' })
    //     }
    //     if (message) {
    //         Alert.alert(message)
    //         dispatch({ type: 'clearMessage' })
    //         navigation.navigate('Home')
    //     }
    // }, [error, message, dispatch])


    const clearAllInput = () => {
        setemail('')
        setPassword('')
    }



    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../image/user.png')} style={styles.logo_image} />
            </View>
            <CommonInput
                inputHeaderName={"Email"}
                placeholder={"Enter Your Email"}
                leftIcon={FocusEmail == true ? require("../../image/emailtint.png") : require("../../image/email.png")}
                autoComplete={"email"}
                onChangeText={(t) => { setemail(t) }}
                value={email}
                onFocus={() => {
                    setFocusEmail(true);
                    setFocusPassword(false);
                }}
                rref={nameRef}
            />

            <CommonInput
                inputHeaderName={"Password"}
                placeholder={"Enter Your Password"}
                leftIcon={FocusPassword == true ? require("../../image/passtint.png") : require("../../image/pass.png")}
                rightIcon={secureTextEntry == true ? require("../../image/show.png") : require("../../image/hide.png")}
                onChangeText={(t) => { setPassword(t) }}
                value={Password}
                rightIconClick={() => {
                    setSecureTextEntry(!secureTextEntry);
                }}
                onFocus={() => {
                    setFocusEmail(false);
                    setFocusPassword(true);
                }}
                secureTextEntry={secureTextEntry}
                rref={passwordRef}
            />

            <View style={styles.forgot_Password_container}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Forgot')
                }}>
                    <Text style={styles.forgot_Password_text}>Forgot</Text>
                </TouchableOpacity>
            </View>

            <Button
                backgroundColor={color_name.white}
                title={"Login"}
                titleColor={color_name.Androidgreen}
                custom_height={responsiveHeight(5)}
                custom_width={responsiveWidth(95)}
                onclick={() => {
                    LoginHandle()
                }}
            />

            <View style={styles.dotnt_have_account_container}>
                <View>
                    <Text>{`Don't Have Account !  `}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Signup')
                    }}>
                        <Text style={styles.create_account_}>{`Create`}</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default Login

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
    forgot_Password_container: {
        marginVertical: 10,
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    forgot_Password_text: {
        color: color_name.Androidgreen,
        fontWeight: "900"
    },
    dotnt_have_account_container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    create_account_: {
        fontWeight: "900",
        color: color_name.Androidgreen
    }
})