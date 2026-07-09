import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {appSize} from "../../../Components/GStyles";
import {BlurView} from "@sbaiahmed1/react-native-blur";
import React from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {navigate} from "../../../Navigator/NavigationService";
import {ROUTES} from "../../../Components/Constant";

export const StartupIndexHeader = () => {

    const insets =  useSafeAreaInsets()

    return(<View style={{width:'100%',alignItems:'center',backgroundColor:''}}>

        <ImageBackground source={require('../../../Assets/Startup/bg.png')} style={{position:'absolute',backgroundColor:'red',width:'100%',height:appSize(220)}} >

        </ImageBackground>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:insets.top,height:appSize(44),width:'100%',paddingHorizontal:appSize(16),backgroundColor:'#12312300'}} >

            <TouchableOpacity style={{height:appSize(44),width:appSize(44),justifyContent:'center'}}>
                <Image style={{height:appSize(14),width:appSize(14)}} source={require('../../../Assets/Startup/backIcon.png')} />
            </TouchableOpacity>



            <Text style={{fontSize:appSize(18),color:'#ffffff'}}>创业就业</Text>


            <TouchableOpacity onPress={()=>{
                navigate(ROUTES.OPPORTUNITY_LIST)
            }} style={{height:appSize(44),width:appSize(44),alignItems:'flex-end',justifyContent:'center'}}>
                <Image style={{height:appSize(30),width:appSize(30)}} source={require('../../../Assets/Startup/classIcon.png')} />

                <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:appSize(6),right:0,borderRadius:appSize(7),height:appSize(14),width:appSize(14),backgroundColor:'red'}}>
                    <Text style={{fontSize:appSize(9),color:'#ffffff'}}>12</Text>
                </View>
            </TouchableOpacity>

        </View>

        <View style={{paddingHorizontal:appSize(16),marginTop:appSize(16)}}>
            <View style={{borderRadius:appSize(16),width:'100%',height:appSize(182),backgroundColor:'#10B98130'}}>
                <BlurView
                    blurAmount={70}
                    blurType="light"
                    style={{padding:appSize(16),borderRadius:appSize(16),width:'100%',height:appSize(182),backgroundColor:''}}>
                    <Text style={{color:'#fff',fontSize:appSize(12)}}>我的财富</Text>
                    <Text style={{color:'#fff',fontSize:appSize(28),marginTop:appSize(8)}}>¥2,856.50</Text>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:appSize(16),width:'100%'}}>

                        <View style={{backgroundColor:'#ffffff66',borderRadius:appSize(16)}}>
                            <BlurView
                                blurAmount={50}
                                blurType="light"
                                style={{padding:appSize(16),justifyContent:'center',alignItems:'center',borderRadius:appSize(16),width:appSize(162),height:appSize(64),backgroundColor:''}}>
                                <Text style={{color:'#333333',fontSize:appSize(20)}}>3</Text>
                                <Text style={{color:'#666666',fontSize:appSize(12)}}>加入项目</Text>
                            </BlurView>
                        </View>

                        <View style={{backgroundColor:'#ffffff66',borderRadius:appSize(16)}}>
                            <BlurView
                                blurAmount={50}
                                blurType="light"
                                style={{padding:appSize(16),justifyContent:'center',alignItems:'center',borderRadius:appSize(16),width:appSize(162),height:appSize(64),backgroundColor:''}}>
                                <Text style={{color:'#333333',fontSize:appSize(20)}}>¥ 820.00</Text>
                                <Text style={{color:'#666666',fontSize:appSize(12)}}>本月收入</Text>
                            </BlurView>
                        </View>


                    </View>

                </BlurView>
            </View>
        </View>


        {/*<Image source={require('../../Assets/demo/demo3.png')} style={{marginTop:appSize(200),borderRadius:appSize(16),width:appSize(361),height:appSize(202),backgroundColor:''}} />*/}

    </View>)
}
