import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../component/Header/Header'
import Category from '../../../component/Category/Category'
import Banner from '../../../component/banner/Banner'
import Product from '../../../component/Product/Product'
import Footer from '../../../component/Footer/Footer'
import { color_name } from '../../util/Color'

const Home = () => {
    return (
        <View style={styles.container}>

            <Header
                placeholder={"Search items ..."}
                rightIcon={require("../../image/search.png")}
            ></Header>
            <Category></Category>
            <Banner></Banner>
            <ScrollView>
                <Product></Product>
                <Text>hello</Text>
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