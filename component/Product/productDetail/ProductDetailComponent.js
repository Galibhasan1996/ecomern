import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { color_name } from '../../../src/util/Color'
import Button from '../../button/Button'
import { useNavigation } from '@react-navigation/native'
import { productData } from '../../../src/util/data/productData/ProductData'



const ProductDetailComponent = () => {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList data={productData} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => {
                return (
                    <View style={styles.list_container} key={item._id}>
                        <Image source={{ uri: item.imageUrl }} style={styles.product_image} />
                        <Text style={styles.product_name}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <View style={styles.button_container}>
                            <Button
                                backgroundColor={color_name.black}
                                title={'Detail'}
                                titleColor={color_name.white}
                                onclick={() => { navigation.navigate('ProductDetail', { item: item }) }}
                                custom_width={100}
                            />
                            <Button
                                backgroundColor={color_name.Androidgreen}
                                title={'Add to cart'}
                                titleColor={color_name.white}
                                onclick={() => { console.warn(item._id); }}
                                custom_width={100}
                            />
                        </View>
                    </View>
                )
            }} />
        </View>

    )
}

export default ProductDetailComponent

const styles = StyleSheet.create({
    list_container: {
        width: 150,
        marginVertical: 10,
        marginHorizontal: 5,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    product_image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    product_name: {
        color: color_name.black
    },
    button_container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    }

})