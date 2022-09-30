import React from 'react';
import {View , Text ,  StyleSheet} from 'react-native';
import {Icon , withBadge} from '@rneui/base'


import {colors , parameters} from  '../global/styles';


export default function HomeHeader(){

    const BadgeIcon = withBadge(0)(Icon)

    return(
        <View style={styles.header}>
                <View style={{ alignItems: 'center', marginLeft:15, justifyContent: 'center', marginLeft: 15}}>
                    <Icon  
                        name='menu'
                        size={32}
                        color={colors.Cardbackground}                    />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: colors.Cardbackground, fontSize:25,fontWeight: 'bold'}}>XpressFood</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 15}}>
                        <BadgeIcon  
                        
                        name="shopping-cart"
                        size={35}
                        color={colors.Cardbackground}
                        />
                </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent: 'space-between'
    }
})