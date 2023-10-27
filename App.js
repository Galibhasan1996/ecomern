import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screen/home/Home'
import Profile from './src/screen/profile/Profile'
import Category from './component/Category/Category'
import Product from './component/Product/Product'
import Notification from './src/screen/notification/Notification'
import ProductDetail from './component/Product/productDetail/productDetail/ProductDetail'
import Layout from './component/Layout/Layout'
import Add_Cart from './src/screen/add to cart/Add_Cart'
import Logout from './src/screen/logout/Logout'



const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
        <Stack.Screen name={"Profile"} component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name={"Category"} component={Category} options={{ headerShown: false }} />
        <Stack.Screen name={"Product"} component={Product} options={{ headerShown: false }} />
        <Stack.Screen name={"Notification"} component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name={"ProductDetail"} component={ProductDetail} options={{ headerShown: false }} />
        <Stack.Screen name={"Layout"} component={Layout} options={{ headerShown: false }} />
        <Stack.Screen name={"Add_Cart"} component={Add_Cart} options={{ headerShown: false }} />
        <Stack.Screen name={"Logout"} component={Logout} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

