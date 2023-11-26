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
import CheckOut from './src/screen/checkout/CheckOut'
import Payment from './src/screen/payment/Payment'
import Login from './src/screen/login/Login'
import Signup from './src/screen/signup/Signup'
import Forgot from './src/screen/forgot/Forgot'
import EditProfile from './src/screen/profile/EditProfile'
import My_Order from './src/screen/checkout/my order/My_Order'
import Admin from './src/admin/Admin'
import { Provider } from 'react-redux'
import Store from './src/reduxToolkit/store/Store'




const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
          <Stack.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
          <Stack.Screen name={"Profile"} component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name={"Category"} component={Category} options={{ headerShown: false }} />
          <Stack.Screen name={"Product"} component={Product} options={{ headerShown: false }} />
          <Stack.Screen name={"Notification"} component={Notification} options={{ headerShown: false }} />
          <Stack.Screen name={"ProductDetail"} component={ProductDetail} options={{ headerShown: false }} />
          <Stack.Screen name={"Layout"} component={Layout} options={{ headerShown: false }} />
          <Stack.Screen name={"Add_Cart"} component={Add_Cart} options={{ headerShown: false }} />
          <Stack.Screen name={"Logout"} component={Logout} options={{ headerShown: false }} />
          <Stack.Screen name={"CheckOut"} component={CheckOut} options={{ headerShown: false }} />
          <Stack.Screen name={"Payment"} component={Payment} options={{ headerShown: false }} />
          <Stack.Screen name={"Signup"} component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name={"Forgot"} component={Forgot} options={{ headerShown: false }} />
          <Stack.Screen name={"EditProfile"} component={EditProfile} options={{ headerShown: false }} />
          <Stack.Screen name={"My_Order"} component={My_Order} options={{ headerShown: false }} />
          <Stack.Screen name={"Admin"} component={Admin} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App

