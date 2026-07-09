import {Image, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {goBack, navigate} from "../../../Navigator/NavigationService";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {MAIN_COLOR, ROUTES} from "../../../Components/Constant";
import React from "react";

function ActivityDetailScreen() {

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000030',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000030',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_share.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

            </View>
        </View>)
    }


    const ApplyBar = ({onPress}) => {

        return(<View style={{position: 'absolute',bottom:0,width:'100%',height:insets.bottom+appSize(56),backgroundColor:'#fff'}}>
            <View style={{backgroundColor:'#fff',height:appSize(56),width:'100%',alignItems:'center',justifyContent:'flex-end'}}>

                <TouchableOpacity onPress={onPress} style={{justifyContent:'center',alignItems:'center',backgroundColor:MAIN_COLOR,borderRadius:appSize(22),width:appSize(280),height:appSize(44)}}>
                    <Text style={{fontSize:appSize(17),color:'#ffffff'}}>立即报名</Text>
                </TouchableOpacity>

            </View>

        </View>)

    }



    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>
        <Nav />

        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>缺省数据...</Text>
        </View>

        <ApplyBar onPress={()=>{
            navigate(ROUTES.LIFE_ACT_APPLY)
        }} />
    </View>)
}

export default ActivityDetailScreen
