import React from 'react';
import {View , Text , StyleSheet , StatusBar} from 'react-native';
import Header from './src/components/header';
import {colors , parameters} from './src/global/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

import RootNavigator from './src/navigation/RootNavigation';

export default function App(){
 
  return(
    <View style={styles.container}>
      <StatusBar  
        barStyle='light-content'
        backgroundColor= {colors.statusbar}
      />
        <RootNavigator  />
    </View>
  )
}

const  styles = StyleSheet.create({
  container: {flex: 1}
})