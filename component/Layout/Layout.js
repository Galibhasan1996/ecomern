import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { productData } from '../../src/util/data/productData/ProductData'


const Layout = () => {
    return (
        <View style={styles.container}>
            <FlatList data={productData} numColumns={2} renderItem={({ item }) => {
                return (
                    <View style={styles.list_conatainer} key={item._id}>
                        <Text>{item.name}</Text>
                    </View>
                )
            }} />
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    list_conatainer: {
        width: '40%',
        height: 200,
        borderColor: 'red',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderRadius: 10,
        marginLeft: 25,
    }
})