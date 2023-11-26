import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import Footer from '../../../component/Footer/Footer'
import { settingList, userData } from '../../util/data/userData/UserData'
import { color_name } from '../../util/Color'

const Profile = ({ navigation }) => {


    const account_setting_navigation = (t) => {
        if (t._id == 1) {
            navigation.navigate('EditProfile', { _id: t._id })
        }
        if (t._id == 2) {
            navigation.navigate('My_Order')
        }
        if (t._id == 3) {
            navigation.navigate('Notification')
        }
        if (t._id == 4) {
            navigation.navigate('Admin')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image source={userData.profilepic} style={styles.userImage} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "900", color: color_name.black }}>{`Hi `}</Text>
                <Text style={styles.usrname}>{`${userData.name} 👋`}</Text>
            </View>

            <View>
                <Text>{` email : ${userData.email}`}</Text>
            </View>

            <View>
                <Text>{` contact : ${userData.contact}`}</Text>
            </View>
            <View style={styles.account_setting}>
                <View style={styles.account_setting_text_container}>
                    <Text style={styles.account_setting_text}>{"Account Setting"}</Text>
                </View>
                {
                    settingList.map((t) => {
                        return (
                            <View key={t._id} style={styles.all_list_container}>
                                <Image source={t.image} style={styles.edit_pic}></Image>
                                <TouchableOpacity onPress={() => {
                                    account_setting_navigation(t)
                                }}>
                                    <Text style={styles.list_text}>{t.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }


            </View>

            <Footer></Footer>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color_name.white,
        alignItems: 'center',
    },
    image_container: {
        width: 105,
        height: 105,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        elevation: 1,
        marginTop: 50
    },
    userImage: {
        width: 100,
        height: 100,
    },
    account_setting: {
        width: '90%',
        backgroundColor: "#f8f8f8",
        elevation: 1,
        borderRadius: 10,
        marginVertical: 10,
        paddingBottom: 20
    },
    account_setting_text_container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: color_name.Ashgray,
        borderBottomWidth: 0.5,
    },
    account_setting_text: {
        color: color_name.black,
        fontSize: 20,
        fontWeight: "900",
        paddingVertical: 10,
    },
    edit_pic: {
        width: 20,
        height: 20,
        marginHorizontal: 10
    },
    usrname: {
        color: color_name.Androidgreen,
        fontWeight: "900"
    },
    all_list_container: {
        // backgroundColor: "red",
        marginVertical: 5,
        height: 30,
        width: '95%',
        alignSelf: 'center',
        flexDirection: "row",
        alignItems: 'center',
        borderBottomColor: color_name.Ashgray,
        borderBottomWidth: 0.5
    },
    list_text: {
        color: color_name.black,
    }
})




