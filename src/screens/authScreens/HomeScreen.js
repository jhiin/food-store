import React, {useState} from 'react';
import {View , Text , StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import { colors, parameters} from  '../../global/styles';
import  {Icon} from '@rneui/themed'
import {filterData, restaurantData} from '../../global/Data'
import FoodCard from '../../components/FoodCard';
import CountDown from 'react-native-countdown-component';



const SCREEN_WIDTH = Dimensions.get('window').width
export default function HomeScreen(){
    const [delivery , setDelivrey] = useState(true)
    const [indexCheck , setIndexCheck] = useState('0')
    return(
      

       
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView 
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={true}
            
            >
            <View style={{backgroundColor: colors.Cardbackground , paddingBottom: 5}}>
                 <View  style={{marginTop: 10 , flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <TouchableOpacity
                        onPress={()=>{
                            setDelivrey(true)
                        }}
                    >
                        <View style={{...styles.deliveryButton,backgroundColor : delivery? colors.buttons : colors.grey4}}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                                        onPress={()=>{
                                            setDelivrey(false)
                                        }}>
                        <View style={{...styles.deliveryButton,backgroundColor : delivery? colors.grey5 : colors.buttons}}>
                            <Text style={styles.deliveryText}>Pick up</Text>
                        </View>
                    </TouchableOpacity>

            </View>
            </View>
            <View style={styles.filterView}>
            <View style={styles.addressView}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
                <Icon    
                    name='location-on'
                    size={32}
                    color={colors.grey1}
                    />
                    <Text style={{marginLeft: 5}}>22 Beessie Street</Text>
                </View>

                <View style={styles.clockView}>
                <Icon    
                    name='timer'
                    size={32}
                    color={colors.grey1}
                    />
                    <Text style={{marginLeft: 5}}>Now</Text>
                </View>
                
            </View>
            <View>
                <Icon    
                    name='tune'
                    size={32}
                    color={colors.grey1}
                    />
            </View>
            </View> 
            <View style={styles.headerTextView}>
                <Text style={styles.headerText }> Categories</Text>
           
            </View>
            <View>
                <FlatList  
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filterData}
                keyExtractor={(item) =>item.id}
                extraData={indexCheck}
                renderItem={({item,index}) =>(
                    <Pressable 
                    onPress={()=>{
                        setIndexCheck(item.id)
                    }}
                    >
                        <View  style={indexCheck === item.id ?{...styles.smallCardSelected}:{...styles.smallCard} }>
                            <Image 
                             style={{height: 60, width: 60, borderRadius: 30}}
                                source={item.image}
                            />
                            <View>
                            <Text style={indexCheck === item.id? {...styles.smallCardTextSelected} : {...styles.smallCardText}}>{item.name}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
                
                />
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText }> Free Delivery now</Text>
                
            </View>

            <View >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{marginLeft:15,
                        fontSize:16,marginTop:10,marginRight:5}}>Options changing</Text>
                        <CountDown  
                        until={3600}
                        size={14}
                        digitTxtStyle={{color: colors.Cardbackground}}
                        timeToShow={['M' , 'S']}
                        timeLabels={{m: 'Min' , s: 'Sec'}}
                        
                        
                        />
                </View>
                <FlatList
                    style={{marginTop:10, marginBottom: 10}}
                    horizontal={true}
                    data ={restaurantData}
                    keyExtractor ={(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem = {({item})=>(
                        <View style={{marginRight: 5}}>
                                <FoodCard  
                                screenWidth={SCREEN_WIDTH*0.8}
                                images={item.images}
                                restaurantName={item.restaurantName}
                                farAway={item.farAway}
                                businessAddress={item.businessAddress}
                               averageReview={item.averageReview}
                               numberOfReview={item.numberOfReview}
                               />
                            </View>
                    )}
                
                />
            </View>

            <View style={styles.headerTextView}>
                <Text style={styles.headerText }>Promotions available</Text>
            </View>

            <View >
                <FlatList
                    style={{marginTop:10, marginBottom: 10}}
                    horizontal={true}
                    data ={restaurantData}
                    keyExtractor ={(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem = {({item})=>(
                        <View style={{marginRight: 5}}>
                                <FoodCard  
                                screenWidth={SCREEN_WIDTH*0.8}
                                images={item.images}
                                restaurantName={item.restaurantName}
                                farAway={item.farAway}
                                businessAddress={item.businessAddress}
                               averageReview={item.averageReview}
                               numberOfReview={item.numberOfReview}
                               />
                            </View>
                    )}
                
                />
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText }>Restautants in Your Area</Text>
            </View>
            <View style={{width: SCREEN_WIDTH, paddingTop:10}}>
                            {
                                restaurantData.map(item=>(
                                    <View key={item.id} style={{paddingBottom:20}}>
                                            <FoodCard 
                                            screenWidth={SCREEN_WIDTH*0.95}
                                            images={item.images}
                                            restaurantName={item.restaurantName}
                                            farAway={item.farAway}
                                            businessAddress={item.businessAddress}
                                            averageReview={item.averageReview}
                                            numberOfReview={item.numberOfReview}
                                            />

                                        </View>
                                ))
                            }
            </View>
            <View style={styles.floatButton}>
                        <TouchableOpacity>
                                <Icon  
                                    name='piace'
                                    size={32}
                                    color={colors.buttons}
                                />
                                <Text style={{color: colors.grey2}}>Map</Text>
                        </TouchableOpacity>
            </View>
            
            </ScrollView>
            </View>
       
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
     
    },
    deliveryButton:{
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
    },
    deliveryText:{
        marginLeft:5,
        fontSize: 16,
      
    },
    filterView:{
        flexDirection: 'row',
      justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginVertical: 10
    },
    clockView:{
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        backgroundColor:colors.Cardbackground,
        borderRadius:15,
        marginRight:20,
        marginHorizontal:5

    },
    addressView:{
        flexDirection: 'row',
        marginLeft: 20,
        backgroundColor: colors.grey5,
        borderRadius:15,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 20

    },
    headerText:{
        color: colors.grey1,
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    headerTextView:{
        backgroundColor: colors.grey5,
        paddingVertical: 3,
  },

  smallCard:{
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardSelected:{
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardTextSelected:{
    fontWeight: 'bold',
    color: colors.Cardbackground
  },
  smallCardText:{
    fontWeight: 'bold',
    color: colors.grey2
  },
  floatButton : {
    position: 'absolute',
    buttom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center'

  }


})