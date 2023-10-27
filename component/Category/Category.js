import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, } from 'react-native'
import React from 'react'
import { CategoryData } from '../../src/util/data/CategoryData'
import { color_name } from '../../src/util/Color'

const Category = () => {
    return (
        <View style={styles.container}>
            <FlatList data={CategoryData} showsVerticalScrollIndicator horizontal renderItem={({ item }) => {
                return (
                    <View key={item._id} style={styles.Category_container}>
                        <TouchableOpacity>
                            <Image source={item.icon} style={styles.Category_image} />
                        </TouchableOpacity>
                        <Text style={styles.Category_text}>{item.name}</Text>
                    </View>
                )
            }} />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    Category_image: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    Category_container: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    container: {
        backgroundColor: color_name.white,
        width: '100%',
        elevation: 2,
        paddingHorizontal: 10,
        marginTop: 70,
    },
    Category_text: {
        fontWeight: "500",
        color: color_name.black
    }
})