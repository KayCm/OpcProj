import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation";
import {navigate} from "../../Navigator/NavigationService";
import {ROUTES} from "../../Components/Constant";
import {appSize} from "../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {
    FunctionsCard,
    GrowthCenterCard,
    GrowthCenterUnLoginCard,
    InfoCard,
    InfoUnLoginCard,
    TopToolsBar
} from "./Components";

const medals = [
    {name:'AI电商达人',img:require('../../Assets/Mine/medal/medal_icon1.png')},
    {name:'具身机械大师',img:require('../../Assets/Mine/medal/medal_icon2.png')},
    {name:'',img:require('../../Assets/Mine/medal/medal_iconBg.png')},
    {name:'',img:require('../../Assets/Mine/medal/medal_iconBg.png')},
]

const missions = [
    {icon: require('../../Assets/Mine/missions/missions_icon1.png'),title:'阅读5篇文章',desc:'',btnText:'去阅读',propressNum:0,totalNum:5,exp1Num:1,exp2Num:2},
    {icon: require('../../Assets/Mine/missions/missions_icon2.png'),title:'观看学习课程',desc:'',btnText:'去学习',propressNum:0,totalNum:5,exp1Num:1,exp2Num:2},
    {icon: require('../../Assets/Mine/missions/missions_icon3.png'),title:'参加一次活动',desc:'',btnText:'去参加',propressNum:0,totalNum:5,exp1Num:1,exp2Num:2},
]

export default function MineIndexScreen() {

    const insets =  useSafeAreaInsets()

    return(<View style={{flex:1,backgroundColor:"",paddingTop:0}}>
        <Image source={require('../../Assets/Mine/prosonBg.png')} style={{left:appSize(-70),position:'absolute',width:'120%',height:appSize(400)}} />
        <ScrollView>
            <View style={{paddingBottom:appSize(110)}}>
                {/*<View source={{}} style={{paddingTop:insets.top+appSize(10)}} >*/}
                <View style={{height:insets.top+appSize(10)}} />
                <TopToolsBar onPress1={()=>{}} onPress2={()=>{}} onPress3={()=>{
                        navigate(ROUTES.PROFILE_SRC)
                    }} />
                {/*<InfoCard />*/}
                <InfoUnLoginCard />
                <View style={{height:appSize(12)}} />
                {/*<GrowthCenterCard medals={medals} missions={missions} />*/}
                <GrowthCenterUnLoginCard medals={medals} missions={missions} />
                <View style={{height:appSize(12)}} />
                <FunctionsCard />
            </View>
        </ScrollView>
    </View>)
}
