import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import NavBack from "../../../Assets/Common/NavBack";
import {goBack} from "../../../Navigator/NavigationService";
import {MenuBarWithoutIconComp} from "./MenuBarComp";
import React, {useState} from "react";

export default function EmergencyAddScreen() {

    const connectArr = [
        '父亲',
        '母亲',
        '丈夫',
        '妻子',
        '儿子',
        '女儿',
        '其他'
    ]

    const [select,setSelect] = useState(0)

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',width:appSize(44),height:appSize(44)}}>
                    <Image source={require('../../../Assets/Common/nav_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                    {/*<NavBack />*/}
                </TouchableOpacity>
            </View>
        </View>)
    }

    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>
        <Nav />
        <View style={{paddingHorizontal:appSize(16),marginTop:appSize(12)}}>
            <View style={{backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                <Text style={{color:'#333333',fontSize:appSize(16),fontWeight:'800'}}>与我的关系</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',gap:appSize(8),marginTop:appSize(16)}}>
                    {connectArr.map((value, index, array)=>{
                        return(<TouchableOpacity onPress={()=>{
                            setSelect(index)
                        }} key={index} style={{borderRadius:appSize(20),backgroundColor:select==index?'#10B981':'#E5E5E5',paddingHorizontal:appSize(15),paddingVertical:appSize(6)}}>
                            <Text style={{color:select==index?'#ffffff':'#000000',fontSize:appSize(14)}}>{value}</Text>
                        </TouchableOpacity>)
                    })}
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',gap:appSize(16),marginTop:appSize(12),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>姓名</Text>
                <TextInput placeholder={'请输入姓名'} placeholderTextColor={'#CCCCCC'} style={{flex:1,height:appSize(44),backgroundColor:''}} />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',gap:appSize(8),marginTop:appSize(12),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>手机</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:appSize(5),width:'100%',height:appSize(44)}}>
                    <TextInput placeholder={'+86'} editable={false} style={{textAlign:'center',width:appSize(44),height:appSize(44),color:'#1A1A1A'}} />
                    <View style={{width:1,height:appSize(26),backgroundColor:'#CCCCCC'}} />
                    <TextInput placeholder={'请输入您的手机号'} placeholderTextColor={'#CCCCCC'} style={{marginLeft:appSize(8),flex:1,backgroundColor:''}} />
                </View>
            </View>
        </View>
    </View>)
}
