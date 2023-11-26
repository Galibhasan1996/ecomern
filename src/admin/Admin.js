import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { color_name } from '../util/Color'
import { manageData } from '../util/data/ManageData/ManageData'

const Admin = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.dashboard}>
                <Text style={styles.text_dashborad}>Dashboard</Text>
            </TouchableOpacity>
            {
                manageData.map((data) => {
                    return (
                        <View key={data._id} style={styles.all}>
                            <Image source={data.icon} style={styles.image} />
                            <TouchableOpacity>
                                <Text style={styles.All_text}>{data.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }

        </View>
    )
}

export default Admin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    dashboard: {
        width: '95%',
        height: 40,
        backgroundColor: color_name.black,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 20
    },
    text_dashborad: {
        color: color_name.white,
        fontWeight: "500",
    },
    image: {
        width: 24,
        height: 24,
    },
    all: {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '95%',
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 1,
    },
    All_text: {
        paddingLeft: 10,
        fontWeight: "500",
        color: color_name.black
    }
})