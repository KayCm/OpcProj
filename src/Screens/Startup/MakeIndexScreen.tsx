import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {appSize} from "../../Components/GStyles";
import LinearGradient from "react-native-linear-gradient";
import {BlurView, LiquidGlassView} from '@sbaiahmed1/react-native-blur';
import DataList from "../../Components/DataList";
import {renderRow} from "../Home/Components/Rows";
import {navigate} from "../../Navigator/NavigationService";
import {ROUTES} from "../../Components/Constant";
import {StartupIndexHeader} from "./Components";
import {R_POST} from "../../Services/NetRequestService";
import {formatDate} from "../../Components/Tools";

export default function StartupIndexScreen() {


    const insets =  useSafeAreaInsets()

    const [orderBy,setOrderBy] = useState(0)


    const renderRow = ({item,index}) => {

        console.log(item)

        return(<View style={{width:'100%',paddingHorizontal:appSize(16),paddingVertical:appSize(6)}}>


            <View style={styles.shadowContainer}>
                <View style={{width:'100%',height:appSize(305),padding:appSize(12),borderRadius:appSize(12),backgroundColor:'#ffffff'}}>

                    <ImageBackground source={require('../../Assets/demo/demo4.png')} imageStyle={{borderRadius:appSize(12)}} style={{backgroundColor:'',borderRadius:appSize(12),width:'100%',height:appSize(190)}} >


                        {/*<BlurView*/}
                        {/*    blurAmount={10}*/}
                        {/*    blurType="light"*/}
                        {/*    style={{position:'absolute',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:appSize(12),gap:appSize(10),borderTopLeftRadius:appSize(12),borderBottomRightRadius:appSize(12),bottom:0,right:1,height:appSize(32),backgroundColor:''}}>*/}

                        {/*    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>*/}
                        {/*        <Image source={require('../../Assets/Startup/icon1.png')} style={{height:appSize(18),width:appSize(18)}} />*/}
                        {/*        <Text style={{color:'#fff',fontSize:appSize(12)}}>100</Text>*/}
                        {/*    </View>*/}

                        {/*    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>*/}
                        {/*        <Image source={require('../../Assets/Startup/icon2.png')} style={{height:appSize(18),width:appSize(18)}} />*/}
                        {/*        <Text style={{color:'#fff',fontSize:appSize(12)}}>100</Text>*/}
                        {/*    </View>*/}

                        {/*    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>*/}
                        {/*        <Image source={require('../../Assets/Startup/icon3.png')} style={{height:appSize(18),width:appSize(18)}} />*/}
                        {/*        <Text style={{color:'#fff',fontSize:appSize(12)}}>100</Text>*/}
                        {/*    </View>*/}


                        {/*</BlurView>*/}

                    </ImageBackground>

                    <View style={{flexDirection:'row',justifyContent:'space-between',gap:appSize(4),marginTop:appSize(10)}} >
                        <View style={{flexDirection:'row',alignItems:'center',gap:appSize(4)}} >
                            <Text numberOfLines={1}>{item?.jobTitle}</Text>
                            <View style={{padding:appSize(4),borderRadius:appSize(4),backgroundColor:'#10B9811A'}}>
                                <Text style={{color:'#10B981',fontSize:appSize(12)}}>招募中</Text>
                            </View>
                        </View>

                        <Text style={{color:'#FFA059'}}>¥{item?.jobSalary}起</Text>
                    </View>


                    <View style={{flexDirection:'row',alignItems:'center',marginTop:appSize(4)}}>
                        <Text style={{color:'#999999',fontSize:appSize(12)}}>{item?.jobCompanyName}</Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:appSize(4),marginTop:appSize(8)}} >
                        <View>
                            <View style={{flexDirection:'row',gap:appSize(4),paddingVertical:appSize(4),paddingHorizontal:appSize(8),backgroundColor:'#F7F7F7',borderRadius:appSize(4),alignItems:'center'}} >
                                <Image style={{width:appSize(15),height:appSize(15)}} source={require('../../Assets/Startup/hugeicon.png')} />
                                <Text style={{color:'#666666',fontSize:appSize(12)}}>项目人数：{item?.jobRecruitsNumber} 人 | 截止 {formatDate(item?.jobApplicationDeadline)}</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={()=>{
                            navigate(ROUTES.STARTUP_DETAIL,{jobsId:item?.id})
                        }}  style={{borderColor:'#10B981',borderRadius:appSize(20),borderWidth:1,paddingHorizontal:appSize(12),paddingVertical:appSize(4),justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#10B981'}}>参与项目</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>



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


        <StartupIndexHeader />

        {/*<TouchableOpacity onPress={()=>{*/}
        {/*    dddd()*/}
        {/*}}>*/}
        {/*    <Text>123123123</Text>*/}
        {/*</TouchableOpacity>*/}

        <DataList
            key={1}
            renderRow={renderRow}
            url={'/mobile/jobs/list'}
            params={{}}
            queryKey={'normal-list111'}
            style={{marginTop:appSize(10)}}
        />


        {/*{renderRow()}*/}

    </View>)
}


const styles = StyleSheet.create({
    shadowContainer: {
        backgroundColor: '#00000000',
        borderRadius: appSize(16),
        // 使用 boxShadow 属性
        boxShadow: [
            {
                offsetX: 0,          // 水平偏移
                offsetY: 4,          // 垂直偏移
                blurRadius: 8,       // 模糊半径
                spreadDistance: 0,   // 扩散距离
                color: 'rgba(0, 0, 0, 0.15)', // 阴影颜色
            },
        ],
    },
});


