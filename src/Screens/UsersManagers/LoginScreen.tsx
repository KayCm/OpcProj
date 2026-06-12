import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {goBack} from "../../Navigator/NavigationService";
import LinearGradient from 'react-native-linear-gradient';
import GStyles, {appSize, WINDOW_HEIGHT, WINDOW_WIDTH} from "../../Components/GStyles";
import {LOGIN_BG_NORMORL, LOGIN_BG_SPECIAL} from "../../Components/Constant";

export default function LoginScreen() {

    const inset = useSafeAreaInsets()

    return (<LinearGradient colors={LOGIN_BG_SPECIAL} start={{ x: 0.5, y: 0 }}
                            locations={[0,0.38,1]}
                            end={{ x: 0.5, y: 1 }} style={[GStyles.pa, {paddingTop:inset.top,paddingHorizontal:appSize(24),width:WINDOW_WIDTH, height:WINDOW_HEIGHT }]}>

            <TouchableOpacity style={{width:'100%',height:appSize(44),alignItems:'flex-end',justifyContent:'center'}} >
                <Text style={{fontSize:appSize(16),color:'#333333'}}>注册</Text>
            </TouchableOpacity>

            <View style={{width:'100%',height:appSize(105),backgroundColor:''}}>

            </View>


        <View style={[GStyles.row,GStyles.jc,{width:'100%'}]}>

            <Text style={{color:'#999999'}}>我已阅读并同意<Text style={{color:'#333333'}} onPress={()=>{
                Alert.alert('用户协议')
            }}>《用户协议》</Text>和<Text style={{color:'#333333'}} onPress={()=>{
                Alert.alert('隐私政策')
            }}>《隐私政策》</Text></Text>

        </View>




        </LinearGradient>)
}
