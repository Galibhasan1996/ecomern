import { StyleSheet, Text, View, ScrollView, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import Footer from '../../../component/Footer/Footer'
import { cartData } from '../../util/data/cartData/CartData'
import { color_name } from '../../util/Color'
import PriceTable from '../../../component/cart/PriceTable'
import CartItem from '../../../component/cart/cartItem/CartItem'
import Button from '../../../component/button/Button'

const { width, height } = Dimensions.get('window')
const Add_Cart = ({ navigation }) => {
    const [cartItem, setcartItem] = useState(cartData)
    return (
        <View style={styles.container}>
            <Text style={styles.cart_Item_List}>
                {
                    cartItem?.length > 0 ?
                        `You Have ${cartItem?.length} item left in your cart`
                        :
                        "OOPs your cart is empty !"
                }
            </Text>

            {
                cartItem.length > 0 && (
                    <View>
                        <ScrollView style={{ height: 300, }}>
                            {
                                cartItem?.map((item) => {
                                    return (
                                        <CartItem item={item} key={item._id} />
                                    )
                                })
                            }
                        </ScrollView>
                        <View>
                            <PriceTable title={"Price"} price={'235'} />
                            <PriceTable title={"tex"} price={'5'} />
                            <PriceTable title={"Shipping"} price={'25'} />
                            <View style={styles.subtotal}>
                                <PriceTable title={"Grand Total"} price={'265'} />
                            </View>
                        </View>

                        <View style={styles.button_contaier}>
                            <Button
                                backgroundColor={color_name.black}
                                title={'Check Out'}
                                titleColor={color_name.white}
                                custom_width={200}
                                custom_height={30}
                                onclick={() => { navigation.navigate('CheckOut') }}
                            />
                        </View>

                    </View>
                )
            }
            <Footer></Footer>
        </View>
    )
}

export default Add_Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    cart_Item_List: {
        color: color_name.Androidgreen,
        fontWeight: "900",
        alignSelf: 'center',
        marginTop: 10,
    },
    subtotal: {
        color: color_name.white,
        borderWidth: 2,
        borderColor: "#f5f5f5",
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        paddingVertical: 5,
    },
    button_contaier: {
        alignSelf: 'center',
        marginTop: 10,
    }
})