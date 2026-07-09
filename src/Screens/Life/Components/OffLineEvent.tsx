import {ImageBackground, TouchableOpacity, View, Text, Image} from "react-native";
import {appSize} from "../../../Components/GStyles";
import React, {useRef, useState} from "react";
import PagerView from "react-native-pager-view";
import {navigate} from "../../../Navigator/NavigationService";
import {ROUTES} from "../../../Components/Constant";



const menuBgs = [
    {name:'最新活动',bg:require('../../../Assets/Life/menuBg1.png')},
    {name:'我的活动',bg:require('../../../Assets/Life/menuBg2.png')},
    {name:'往期活动',bg:require('../../../Assets/Life/menuBg3.png')},
]

export default function OffLineEvent() {

    const pagerRef = useRef(null)

    const [menuSelect,setMenuSelect] = useState(0)




    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>

        <ImageBackground source={menuBgs[menuSelect]?.bg} style={{height:appSize(52),width:appSize(393)}} >

            <View style={{flexDirection:'row',height:appSize(36),width:'100%'}}>
                {menuBgs.map((value, index, array)=>{

                    if (index == 1){
                        return(<TouchableOpacity onPress={()=>{
                            setMenuSelect(index)
                        }} key={index} style={{flex:1,gap:appSize(4),flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                            <Text style={{color:'#353535',fontSize:appSize(14)}}>{value?.name}</Text>
                            <View style={{backgroundColor:'#FF4040',borderRadius:appSize(16),width:appSize(16),height:appSize(16),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:appSize(10),fontWeight:'800',color:'#ffffff'}}>1</Text>
                            </View>
                            {menuSelect == index && <Image source={require('../../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                        </TouchableOpacity>)
                    }

                    return(<TouchableOpacity onPress={()=>{
                        setMenuSelect(index)
                    }} key={index} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                        <Text style={{color:'#353535',fontSize:appSize(14)}}>{value?.name}</Text>
                        {menuSelect == index && <Image source={require('../../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                    </TouchableOpacity>)
                })}
            </View>
        </ImageBackground>

        <PagerView
            ref={pagerRef}
            onPageSelected={e => {
                const position = e.nativeEvent.position;
                //menuRef.current?.switchToTab(position);
            }}
            style={{ flex: 1, backgroundColor: '' }}>

            <View style={{flex:1,backgroundColor:'#F7F7F7',width:'100%',paddingHorizontal:appSize(16),gap:appSize(20)}}>
                <Card />

                <LongBar onPress={()=>{
                    navigate(ROUTES.CLASS_DETAIL)
                }} />
            </View>

            <View style={{flex:1,backgroundColor:'#F7F7F7',width:'100%'}}>
                <Card />
            </View>

            <View style={{flex:1,backgroundColor:'#F7F7F7',width:'100%'}}>
                <Card />
            </View>


        </PagerView>




    </View>)
}
