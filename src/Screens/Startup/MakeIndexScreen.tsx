import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {appSize} from "../../Components/GStyles";
import LinearGradient from "react-native-linear-gradient";
import {BlurView, LiquidGlassView} from '@sbaiahmed1/react-native-blur';
import DataList from "../../Components/DataList";
import {renderRow} from "../Home/Components/Rows";

export default function StartupIndexScreen() {


    const insets =  useSafeAreaInsets()

    const [orderBy,setOrderBy] = useState(0)

    const StartupIndexHeader = () => {

        return(<View style={{width:'100%',alignItems:'center',backgroundColor:''}}>

            <ImageBackground source={require('../../Assets/Startup/bg.png')} style={{position:'absolute',backgroundColor:'red',width:'100%',height:appSize(220)}} >

            </ImageBackground>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:insets.top,height:appSize(44),width:'100%',paddingHorizontal:appSize(16),backgroundColor:'#12312300'}} >

                <TouchableOpacity style={{height:appSize(44),width:appSize(44),justifyContent:'center'}}>
                    <Image style={{height:appSize(14),width:appSize(14)}} source={require('../../Assets/Startup/backIcon.png')} />
                </TouchableOpacity>



                <Text style={{fontSize:appSize(18),color:'#ffffff'}}>创业就业</Text>


                <TouchableOpacity style={{height:appSize(44),width:appSize(44),alignItems:'flex-end',justifyContent:'center'}}>
                    <Image style={{height:appSize(30),width:appSize(30)}} source={require('../../Assets/Startup/classIcon.png')} />

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

    const renderRow = ({item,index}) => {


        return(<View style={{width:'100%',paddingHorizontal:appSize(16),paddingVertical:appSize(6)}}>



            <TouchableOpacity style={{width:'100%',height:appSize(305),padding:appSize(12),borderRadius:appSize(12),backgroundColor:'#ffffff'}}>

                <ImageBackground source={require('../../Assets/demo/demo4.png')} style={{borderRadius:appSize(12),overflow:'hidden',width:'100%',height:appSize(190)}} >

                </ImageBackground>

                <View style={{flexDirection:'row',gap:appSize(4)}} >
                    <Text numberOfLines={1}>发的沙发上的</Text>
                    <View style={{padding:appSize(4),borderRadius:appSize(4),backgroundColor:'#10B9811A'}}>
                        <Text style={{color:'#10B981',fontSize:appSize(12)}}>招募中</Text>
                    </View>
                </View>


            </TouchableOpacity>


        </View>)

        // return(<View style={{marginTop:appSize(100),flexDirection:'row',gap:appSize(16),paddingHorizontal:appSize(16),height:appSize(28),width:'100%'}} >
        //
        //     <TouchableOpacity onPress={()=>{
        //         setOrderBy(1)
        //     }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
        //         <Text style={{fontSize:orderBy==0?appSize(20):appSize(16),color:orderBy==0?'#FFFFFF':'#ffffff'}}>行业资讯</Text>
        //         <View style={{backgroundColor:orderBy==0?'#FFFFFF':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
        //     </TouchableOpacity>
        //
        //     <TouchableOpacity onPress={()=>{
        //         setOrderBy(1)
        //     }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
        //         <Text style={{fontSize:orderBy==1?appSize(20):appSize(16),color:orderBy==1?'#FFFFFF':'#ffffff'}}>行业资讯</Text>
        //         <View style={{backgroundColor:orderBy==1?'#FFFFFF':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
        //     </TouchableOpacity>
        //
        //     <TouchableOpacity onPress={()=>{
        //         setOrderBy(2)
        //     }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
        //         <Text style={{fontSize:orderBy==2?appSize(20):appSize(16),color:orderBy==2?'#FFFFFF':'#ffffff'}}>我的订阅</Text>
        //         <View style={{backgroundColor:orderBy==2?'#FFFFFF':'',borderRadius:appSize(10),width:appSize(30),height:appSize(3)}} />
        //     </TouchableOpacity>
        // </View>)

    }


    return(<View style={{flex:1,backgroundColor:"",paddingTop:0}}>


        {StartupIndexHeader()}


        <DataList
            key={1}
            renderRow={renderRow}
            url={'/open-api/mobile/home/material/normal/list'}
            params={{}}
            queryKey={'normal-list'}
        />


        {/*{renderRow()}*/}

    </View>)
}
