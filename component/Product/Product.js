import { StyleSheet, View, } from 'react-native'
import React from 'react'
import ProductDetailComponent from './productDetail/ProductDetailComponent'

const Product = () => {
    return (
        <View style={styles.container}>
            <ProductDetailComponent></ProductDetailComponent>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }
})