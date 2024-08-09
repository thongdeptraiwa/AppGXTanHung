import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//stack 
import Home from '../components/user/Home';
import QR from '../components/user/QR';
import Camera from '../components/user/Camera';
const oStack = {
  Home: { name: 'Home', component: Home },
  QR: { name: 'QR', component: QR },
  Camera: { name: 'Camera', component: Camera },
}
const StackHome = createNativeStackNavigator();
const UserNavigation = () => {
  return (
    <StackHome.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      {
        Object.keys(oStack).map((item, index) => {
          return <StackHome.Screen
            key={index}
            name={oStack[item].name}
            component={oStack[item].component} />
        })
      }
      {/* <StackHome.Screen name="Home" component={Home} />
      <StackHome.Screen name="QR" component={QR} /> */}
    </StackHome.Navigator>
  )
}

export { oStack }
export default UserNavigation