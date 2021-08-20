import * as React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import CalculatorScreen from './screens/calcutorScreen';
import PeriodicTableScreen from './screens/periodicTable';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
   return(
     <AppContainer/>
   )  
  }
}



const TabNavigator= createBottomTabNavigator({
  CalculatorScreen: {screen:CalculatorScreen},
  PeriodicTableScreen:{screen:PeriodicTableScreen},
},
{
 defaultNavigationOptions:({navigation})=>({
   tabBarIcon:()=>{
     const routeName= navigation.state.routeName;
     if(routeName==="CalculatorScreen"){
       return(
         <Image
          source={require("./assets/calculatorIcon.png")}
          style={{width:30,height:30}}
         /> 
       )

     }else if(routeName==="PeriodicTableScreen"){
      return(
        <Image
         source={require("./assets/periodicTableIcon.png")}
         style={{width:30,height:30}}
        /> 
      )
     }

   }
 }) 
})


const AppContainer=createAppContainer(TabNavigator)
