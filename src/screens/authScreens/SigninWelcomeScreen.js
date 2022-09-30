import React,{useState, useRef} from 'react';
import {View , Text , StyleSheet,Dimensions,TextInput, Image } from 'react-native';
import Swiper from 'react-native-swiper'

import {colors , parameters , title} from '../../global/styles';


import {Icon } from 'react-native-vector-icons';
import { Button , SocialIcon } from '@rneui/themed';


export default function SigninWelcomeScreen({navigation}){
    return(
        <View style={{flex: 3}}>
                <View style={{ flex: 3,justifyContent: 'flex-start', alignItems: 'center' ,  paddingTop: 20}}>
                <Text style={{fontSize: 26, color:colors.buttons,fontWeight: 'bold' ,}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize: 26, color:colors.buttons,fontWeight: 'bold' ,}}>IN YOUR AREA </Text>
                </View>
                <View style={{flex:4,justifyContent: 'center', }}>
                        <Swiper autoplay={true}>
                            <View style={styles.slide1}>
                                    <Image  
                                        source={require('../../../assets/1.jpg')}
                                        style={{width: '100%', height: '100%'}}                                    
                                    />

                            </View>
                            <View style={styles.slide2}>
                                    <Image  
                                        source={require('../../../assets/2.jpg')}
                                        style={{width: '100%', height: '100%'}}                                    
                                    />

                            </View>
                            <View style={styles.slide3}>
                                    <Image  
                                        source={require('../../../assets/3.jpg')}
                                        style={{width: '100%', height: '100%'}}                                    
                                    />

                            </View>
                            <View style={styles.slide1}>
                                    <Image  
                                        source={require('../../../assets/4.jpg')}
                                        style={{width: '100%', height: '100%'}}                                    
                                    />

                            </View>
                        </Swiper>
                </View>
                <View style={{flex:4 ,marginBottom: 20, justifyContent: 'flex-end'}}>
                <View style={{marginHorizontal: 20, marginTop: 30}}>
                 <Button  
                 title='Sign In'
                    buttonStyle ={parameters.styledButton}
                     titleStyle={parameters.buttonTitle}
                     onPress={()=>navigation.navigate('SignInScreen')}
                   />
         </View>
                     <View style={{marginHorizontal: 20, marginTop: 30}}>
                        <Button  
                            title="Create an account"
                            buttonStyle={styles.createButton}
                            titleStyle={styles.createButtonTitle}
                        />
         </View>
         

                </View>

                   
        </View>
    )
}


const styles = StyleSheet.create({
   slide1:{
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '9DCC6EB'
   },

   slide2: {
   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '97CAE5'
   
  },
  slide3: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: '#92BB9D'
  },
  createButton:{
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
   
},
createButtonTitle:{
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
   

}
})