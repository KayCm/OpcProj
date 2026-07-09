import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {appSize} from "../../../Components/GStyles";
import React, {useState} from "react";

const classMenuTags = [
    {name:'推荐课程',bg:require('../../../Assets/Life/menuBg1.png')},
    {name:'我的课程',bg:require('../../../Assets/Life/menuBg2.png')},
]

export default function OnLineClass() {


    const [classMenuSelect,setClassMenuSelect] = useState(0)

    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>

        <ImageBackground source={classMenuTags[classMenuSelect]?.bg} style={{height:appSize(52),width:appSize(393)}} >
            <View style={{flexDirection:'row',height:appSize(36),width:'100%'}}>
                {classMenuTags.map((value, index, array)=>{

                    if (index == 1){
                        return(<TouchableOpacity onPress={()=>{
                            setClassMenuSelect(index)
                        }} key={index} style={{flex:1,gap:appSize(4),flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                            <Text style={{color:'#353535',fontSize:appSize(14)}}>{value?.name}</Text>
                            <View style={{backgroundColor:'#FF4040',borderRadius:appSize(16),width:appSize(16),height:appSize(16),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:appSize(10),fontWeight:'800',color:'#ffffff'}}>1</Text>
                            </View>
                            {classMenuSelect == index && <Image source={require('../../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                        </TouchableOpacity>)
                    }

                    return(<TouchableOpacity onPress={()=>{
                        setClassMenuSelect(index)
                    }} key={index} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                        <Text style={{color:'#353535',fontSize:appSize(14)}}>{value?.name}</Text>
                        {classMenuSelect == index && <Image source={require('../../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                    </TouchableOpacity>)
                })}
            </View>
        </ImageBackground>

    </View>)
}
