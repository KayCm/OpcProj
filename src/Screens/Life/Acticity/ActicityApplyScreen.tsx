import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {goBack} from "../../../Navigator/NavigationService";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import React, {useState} from "react";
import {MAIN_COLOR} from "../../../Components/Constant";
import {KeyboardGestureArea} from "react-native-keyboard-controller";

const Gens = [
    "保密","男","女"
]


function ActicityApplyScreen() {

    const insets =  useSafeAreaInsets()

    const [genSelect,setGenSelect] = useState(0)


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
                <Text style={{color:'#1A1A1A',fontSize:appSize(17),fontWeight:'800'}}>活动报名</Text>
                <View style={{width:appSize(44),height:appSize(44)}}/>
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

        <KeyboardGestureArea
            showOnSwipeUp
            interpolator={'linear'}
            offset={50}>

        <ScrollView>
            <View style={{paddingHorizontal:appSize(16)}}>

                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(16),marginTop:appSize(12),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                    <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}><Text style={{color:'#FF4040',fontSize:appSize(14),fontWeight:'600'}}>*</Text>姓名</Text>
                    <TextInput placeholder={'请输入姓名'} placeholderTextColor={'#CCCCCC'} style={{flex:1,height:appSize(44),backgroundColor:''}} />
                </View>

                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(8),marginTop:appSize(12),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                    <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}><Text style={{color:'#FF4040',fontSize:appSize(14),fontWeight:'600'}}>*</Text>手机</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:appSize(5),width:'100%',height:appSize(44)}}>
                        <TextInput placeholder={'+86'} editable={false} style={{textAlign:'center',width:appSize(44),height:appSize(44),color:'#1A1A1A'}} />
                        <View style={{width:1,height:appSize(26),backgroundColor:'#CCCCCC'}} />
                        <TextInput placeholder={'请输入您的手机号'} placeholderTextColor={'#CCCCCC'} style={{marginLeft:appSize(8),flex:1,backgroundColor:''}} />
                    </View>
                </View>

                <Text style={{marginTop:appSize(24),color:'#000000',fontSize:appSize(16),fontWeight:'600'}}>其他联系方式（选填）</Text>

                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(16),marginTop:appSize(8),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                    <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>微信</Text>
                    <TextInput placeholder={'请输入您的微信号'} placeholderTextColor={'#CCCCCC'} style={{flex:1,height:appSize(44),backgroundColor:''}} />
                </View>

                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(16),marginTop:appSize(12),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                    <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>邮箱</Text>
                    <TextInput placeholder={'请输入您的邮箱账号'} placeholderTextColor={'#CCCCCC'} style={{flex:1,height:appSize(44),backgroundColor:''}} />
                </View>

                <Text style={{marginTop:appSize(24),color:'#000000',fontSize:appSize(16),fontWeight:'600'}}><Text style={{color:'#FF4040',fontSize:appSize(14),fontWeight:'600'}}>*</Text>性别</Text>
                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(24),marginTop:appSize(8),width:'100%'}}>

                    {Gens.map((value, index, array)=>{

                        return(<TouchableOpacity onPress={()=>{
                            setGenSelect(index)
                        }} key={index} style={{height:appSize(64),width:appSize(64),backgroundColor:genSelect==index?MAIN_COLOR:'#fff',justifyContent:'center',alignItems:'center',borderRadius:appSize(8)}}>
                            <Text style={{color:genSelect==index?'#fff':'#333333',fontSize:appSize(14)}}>{value}</Text>
                        </TouchableOpacity>)
                    })}


                </View>




                <Text style={{marginTop:appSize(24),color:'#000000',fontSize:appSize(16),fontWeight:'600'}}>紧急联系人（选填）</Text>
                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(8),marginTop:appSize(12),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                    <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>手机</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:appSize(5),width:'100%',height:appSize(44)}}>
                        <TextInput placeholder={'+86'} editable={false} style={{textAlign:'center',width:appSize(44),height:appSize(44),color:'#1A1A1A'}} />
                        <View style={{width:1,height:appSize(26),backgroundColor:'#CCCCCC'}} />
                        <TextInput placeholder={'请输入您的手机号'} placeholderTextColor={'#CCCCCC'} style={{marginLeft:appSize(8),flex:1,backgroundColor:''}} />
                    </View>
                </View>

                <Text style={{marginTop:appSize(24),color:'#000000',fontSize:appSize(16),fontWeight:'600'}}>其他需求（选填）</Text>
                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(16),marginTop:appSize(8),height:appSize(50),backgroundColor:'#fff',width:'100%',borderRadius:appSize(8),paddingHorizontal:appSize(16),paddingVertical:appSize(12)}}>
                    <TextInput placeholder={'请输入您的需求'} placeholderTextColor={'#CCCCCC'} style={{flex:1,height:appSize(44),backgroundColor:''}} />
                </View>

            </View>
        </ScrollView>

        </KeyboardGestureArea>

        <ApplyBar />


    </View>)
}

export default ActicityApplyScreen
