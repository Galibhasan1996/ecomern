import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Header from '../../../component/Header/Header'
import Category from '../../../component/Category/Category'
import Banner from '../../../component/banner/Banner'
import Product from '../../../component/Product/Product'
import Footer from '../../../component/Footer/Footer'
import { color_name } from '../../util/Color'
import RandomCart from '../../../component/randomCart/RandomCart'

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={color_name.white} barStyle={'dark-content'} />
            {/* header */}
            <Header
                placeholder={"Search items ..."}
                rightIcon={require("../../image/search.png")}
            ></Header>
            {/* category */}
            <Category></Category>
            {/* banner */}
            <Banner></Banner>

            <ScrollView>
                <Product></Product>
                <RandomCart></RandomCart>

            </ScrollView>
            <Footer></Footer>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color_name.white
    }
})