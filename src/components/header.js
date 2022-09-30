import { color, Icon } from '@rneui/base';
import React from 'react';
import {View , Text , StyleSheet, Dimensions} from 'react-native';
import {colors , parameters} from '../global/styles';


export default function Header({title , type, navigation}){
    return(
        <View style={styles.header} >
            <View style={{marginLeft: 20}}>
                <Icon 
                    name={type}
                    size={28}
                    color={colors.headerText}
                    onPress={()=>{
                     navigation.goBack()
                    }}
    
                />
            </View>

            <View>

            <Text style={styles.headerText}>{title}</Text>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
    headerText:{
        fontSize: 22,
        color: colors.headerText,
        fontWeight: "bold",
        marginLeft: 30
    }
})