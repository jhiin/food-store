import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from '@rneui/themed';
import HomeScreen from '../screens/authScreens/HomeScreen';
import {colors} from '../global/styles';
import SearchScreen from '../screens/authScreens/SearchScreen';
import MyOrderScreen from '../screens/authScreens/MyOrdersScreen';
import MyAccountScreen from '../screens/authScreens/MyAccountScreen'




const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
         <ClientTabs.Screen
        name="MyOrderAccount"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="reorder" size={size} color={color} />
          ),
        }}
      />
         <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle"
             size={size} color={color} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
