import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/authScreens/HomeScreen';
import RootClientTabs from './Clieanttabs';


const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen  
            name='SignInWelcomeScreen'
             component={SigninWelcomeScreen}
             options={{headerShown: false , 
            
            ...TransitionPresets.RevealFromBottomAndroid 
        }}
             />
                     <Auth.Screen  
            name='SignInScreen'
             component={SignInScreen}
             options={{headerShown: false , 
            
            ...TransitionPresets.RevealFromBottomAndroid 
        }}
             />
            <Auth.Screen  
            name='RootClientTabs'
             component={RootClientTabs}
             options={{headerShown: false , 
            
                ...TransitionPresets.RevealFromBottomAndroid }}
             
                />
        </Auth.Navigator>
    )
}