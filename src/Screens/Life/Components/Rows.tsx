import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {appSize} from "../../../Components/GStyles";
import React from "react";
import {navigate} from "../../../Navigator/NavigationService";
import {ROUTES} from "../../../Components/Constant";

const TopMarker =()=>{

    return (<View style={{position: 'absolute',justifyContent:'center',alignItems:'center',borderTopLeftRadius:appSize(12),borderBottomRightRadius:appSize(12),height:appSize(20),width:appSize(52),backgroundColor:'#FFA059'}}>
        <Text style={{fontSize:appSize(10),color:'#ffffff'}}>夏日限定</Text>
    </View>)
}

export const Card = ({onPress}) => {

    return(<TouchableOpacity onPress={onPress} style={{width:appSize(177),height:appSize(166),backgroundColor:'#ffffff',borderRadius:appSize(12)}}>

        <ImageBackground imageStyle={{borderTopLeftRadius:appSize(12),borderTopRightRadius:appSize(12)}} source={require('../../../Assets/demo/demo5.png')} style={{height:appSize(98),width:appSize(177),backgroundColor:'#fff',borderTopLeftRadius:appSize(12),borderTopRightRadius:appSize(12)}} >
            <TopMarker />
        </ImageBackground>

        <View  style={{padding:appSize(8),flex:1,justifyContent:'space-between'}}>

            <Text numberOfLines={2} style={{color:'#000000',fontSize:appSize(12)}}>天津市第十六次全国人活动活动活动活动活动活动活动活动活动活动活动</Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>

                <Text style={{color:'#999999',fontSize:appSize(12)}}>2026/05/18</Text>

                <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',gap:appSize(2)}}>
                    <Image style={{width:appSize(11),height:appSize(11)}} source={require('../../../Assets/Life/localIcon.png')} />
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>杭州</Text>
                </View>
            </View>


        </View>

    </TouchableOpacity>)
}

export const ClassCard = ({onPress}) => {

    return(<TouchableOpacity onPress={onPress} style={{width:appSize(177),height:appSize(166),backgroundColor:'#ffffff',borderRadius:appSize(12)}}>

        <ImageBackground source={require('../../../Assets/demo/demo5.png')} style={{height:appSize(98),width:appSize(177),backgroundColor:'#fff',borderTopLeftRadius:appSize(12),borderTopRightRadius:appSize(12)}} >
            <TopMarker />

            <View style={{gap:appSize(4),borderRadius:appSize(20),bottom:appSize(6),right:appSize(6),position: 'absolute',paddingVertical:appSize(4),paddingHorizontal:appSize(6),flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#00000080'}}>
                <Image source={require('../../../Assets/Life/class/readIcon.png')} style={{width:appSize(9.5),height:appSize(7)}} />
                <Text style={{fontSize:appSize(9),color:'#fff'}}>1000+</Text>
            </View>
        </ImageBackground>



        <View  style={{padding:appSize(8),flex:1,justifyContent:'space-between'}}>

            <Text numberOfLines={2} style={{color:'#000000',fontSize:appSize(12)}}>天津市第十六次全国人活动活动活动活动活动活动活动活动活动活动活动</Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>

                <Text style={{color:'#FFA059',fontSize:appSize(12)}}>￥24</Text>

            </View>


        </View>

    </TouchableOpacity>)
}

export const LongCard = ({onPress}) => {

    var ActButtonsDom = <View style={{flexDirection:'row',justifyContent:'flex-end',gap:appSize(8)}}>
        <TouchableOpacity onPress={()=>{
            navigate(ROUTES.LIFE_ACT_SIGNIN)
        }} style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#999999',borderRadius:appSize(20),paddingHorizontal:appSize(12),paddingVertical:appSize(4)}}>
            <Text style={{color:'#999999',fontSize:appSize(12)}}>未开始</Text>
        </TouchableOpacity>
    </View>

    switch (1) {
        case 1:{
            ActButtonsDom = <View style={{flexDirection:'row',justifyContent:'flex-end',gap:appSize(8)}}>
                <TouchableOpacity onPress={()=>{
                    navigate(ROUTES.LIFE_ACT_SIGNIN)
                }}  style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#999999',borderRadius:appSize(20),paddingHorizontal:appSize(12),paddingVertical:appSize(4)}}>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>未开始</Text>
                </TouchableOpacity>
            </View>
            break;
        }
        case 2:{
            ActButtonsDom = <View style={{flexDirection:'row',justifyContent:'flex-end',gap:appSize(8)}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#10B981',borderRadius:appSize(20),paddingHorizontal:appSize(12),paddingVertical:appSize(4)}}>
                    <Text style={{color:'#10B981',fontSize:appSize(12)}}>扫码签到</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#999999',borderRadius:appSize(20),paddingHorizontal:appSize(12),paddingVertical:appSize(4)}}>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>定位完成</Text>
                </TouchableOpacity>
            </View>
            break;
        }
        case 3:{
            ActButtonsDom = <View style={{flexDirection:'row',justifyContent:'flex-end',gap:appSize(8)}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#999999',borderRadius:appSize(20),paddingHorizontal:appSize(12),paddingVertical:appSize(4)}}>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>已结束</Text>
                </TouchableOpacity>
            </View>
            break;
        }

    }

    var ActTextDom = <View style={{backgroundColor:'#00000050',borderRadius:appSize(20),position: 'absolute',bottom:appSize(8),right:appSize(8),paddingHorizontal:appSize(6),paddingVertical:appSize(4)}}>
        <Text style={{color:'#10B981',fontSize:appSize(10)}}>进行中</Text>
    </View>

    switch (1) {
        case 1: {
            ActTextDom = <View style={{backgroundColor:'#00000030',borderRadius:appSize(20),position: 'absolute',bottom:appSize(8),right:appSize(8),paddingHorizontal:appSize(6),paddingVertical:appSize(4)}}>
                <Text style={{color:'#ffffff',fontSize:appSize(10)}}>未开始</Text>
            </View>
            break;
        }
        case 2: {
            ActTextDom = <View style={{backgroundColor:'#00000030',borderRadius:appSize(20),position: 'absolute',bottom:appSize(8),right:appSize(8),paddingHorizontal:appSize(6),paddingVertical:appSize(4)}}>
                <Text style={{color:'#10B981',fontSize:appSize(10)}}>进行中</Text>
            </View>
            break;
        }
        case 3: {
            ActTextDom = <View style={{backgroundColor:'#00000030',borderColor:'#FF4040',borderWidth:1,borderRadius:appSize(20),position: 'absolute',bottom:appSize(8),right:appSize(8),paddingHorizontal:appSize(6),paddingVertical:appSize(4)}}>
                <Text style={{color:'#FF4040',fontSize:appSize(10)}}>已结束</Text>
            </View>
            break;
        }
    }




    return(<TouchableOpacity onPress={onPress} style={{flexDirection:'row',gap:appSize(8),width:'100%',height:appSize(112),borderRadius:appSize(12),padding:appSize(10),backgroundColor:'#ffffff'}}>

        <ImageBackground style={{width:appSize(146),height:appSize(92),borderRadius:appSize(12),backgroundColor:'#987'}}>
            <TopMarker />

            {ActTextDom}
        </ImageBackground>

        <View style={{flex:1,backgroundColor:'',justifyContent: 'space-between'}}>

            <View style={{gap:appSize(4)}}>
                <Text numberOfLines={2} style={{color:'#000000',fontSize:appSize(12)}}>活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动活动</Text>
                <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>

                    <Text style={{color:'#999999',fontSize:appSize(12)}}>2026/05/18</Text>

                    <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',gap:appSize(2)}}>
                        <Image style={{width:appSize(11),height:appSize(11)}} source={require('../../../Assets/Life/localIcon.png')} />
                        <Text style={{color:'#999999',fontSize:appSize(12)}}>杭州</Text>
                    </View>
                </View>
            </View>

            {ActButtonsDom}

        </View>

    </TouchableOpacity>)
}
