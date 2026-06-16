import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert,Image, ImageBackground, TextInput} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {goBack} from "../../Navigator/NavigationService";
import LinearGradient from 'react-native-linear-gradient';
import GStyles, {appSize, WINDOW_HEIGHT, WINDOW_WIDTH} from "../../Components/GStyles";
import {LOGIN_BG_NORMORL, LOGIN_BG_SPECIAL} from "../../Components/Constant";

export default function LoginScreen() {

    const inset = useSafeAreaInsets()

    const [loginModel,setLoginModel] = useState('phone')

    const [agree,setAgree] = useState(false)

    const LoginPhoneDetail = () => {

      return(<View style={{flex:1}}>
        <View style={{flex:1,paddingTop:appSize(50),paddingHorizontal:appSize(24)}}>

          <Text style={{color:'#000000',fontSize:appSize(14)}}>手机号码</Text>
          <View style={{paddingHorizontal:appSize(10),marginTop:appSize(10),borderRadius:appSize(5),width:'100%',height:appSize(44),backgroundColor:'#f7f7f7'}}>
            <TextInput placeholder={'请输入您的手机号'} style={{flex:1,backgroundColor:''}} />
          </View>

          <Text style={{marginTop:appSize(30),color:'#000000',fontSize:appSize(14)}}>验证码</Text>
          <View style={{marginTop:appSize(10),borderRadius:appSize(5),width:'100%',height:appSize(44),backgroundColor:'#f7f7f7'}}></View>

          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:appSize(35),backgroundColor:'#60A5FA',width:'100%',height:appSize(44),borderRadius:appSize(22)}}>
            <Text style={{color:'#fff',fontSize:appSize(18),fontWeight:'600'}}>立即登录</Text>
          </TouchableOpacity>
        </View>
      </View>)
    }

    const LoginMailDetail = () => {

    return(<View style={{flex:1}}>

      <View style={{flex:1,paddingTop:appSize(50),paddingHorizontal:appSize(24)}}>

        <Text style={{color:'#000000',fontSize:appSize(14)}}>邮箱账号</Text>
        <View style={{paddingHorizontal:appSize(10),marginTop:appSize(10),borderRadius:appSize(5),width:'100%',height:appSize(44),backgroundColor:'#f7f7f7'}}>
          <TextInput placeholder={'请输入您的邮箱账号'} style={{flex:1,backgroundColor:''}} />
        </View>

        <Text style={{marginTop:appSize(30),color:'#000000',fontSize:appSize(14)}}>密码</Text>
        <View style={{paddingHorizontal:appSize(10),marginTop:appSize(10),borderRadius:appSize(5),width:'100%',height:appSize(44),backgroundColor:'#f7f7f7'}}>
          <TextInput placeholder={'请输入登录密码'} style={{flex:1,backgroundColor:''}} />
        </View>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:appSize(35),backgroundColor:'#60A5FA',width:'100%',height:appSize(44),borderRadius:appSize(22)}}>
          <Text style={{color:'#fff',fontSize:appSize(18),fontWeight:'600'}}>立即登录</Text>
        </TouchableOpacity>
      </View>
    </View>)
  }



  return (
      <LinearGradient
        colors={LOGIN_BG_NORMORL}
        start={{ x: 0.5, y: 0 }}
        locations={[0, 0.38, 1]}
        end={{ x: 0.5, y: 1 }}
        style={{ margin: 0, width: '100%', height: WINDOW_HEIGHT }}
      >
        <View style={{ paddingTop: inset.top, paddingHorizontal: appSize(24),flex:1}}>

          <TouchableOpacity
            onPress={()=>{
              goBack();
            }}
            style={{
              width: '100%',
              height: appSize(44),
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: appSize(16), color: '#333333' }}>
              注册
            </Text>
          </TouchableOpacity>

          <View
            style={{ width: '100%', height: appSize(105), backgroundColor: '' }}
          ></View>


          <LinearGradient
              colors={['#E8F3FF', '#E8F3FF00']}
              style={{width:appSize(345),height:appSize(470),borderRadius:appSize(24)}}
          >
            <ImageBackground style={{width:appSize(345),height:appSize(470)}}
                             resizeMode={'contain'}
                             source={loginModel=='phone'?require('../../Assets/userManager/login_phone_bg.png'):require('../../Assets/userManager/login_mail_bg.png')}>

              <View style={[GStyles.row,{width:'100%',height:appSize(60),backgroundColor:'#12300000'}]}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={()=>{
                  setLoginModel('phone')
                }}>
                  <Text style={{color:'#000000',fontSize:appSize(16)}}>手机号登录</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={()=>{
                  setLoginModel('mail')
                }}>
                  <Text style={{color:'#000000',fontSize:appSize(16)}}>邮箱登录</Text>
                </TouchableOpacity>
              </View>

              {loginModel=='phone'?<LoginPhoneDetail />:<LoginMailDetail />}


            </ImageBackground>

          </LinearGradient>



          <View style={{width:'100%',alignItems:'center'}}>
            <Text>123111</Text>
          </View>



          <View style={[GStyles.row, GStyles.jc,GStyles.ac, { width: '100%',gap:appSize(4) }]}>

            <TouchableOpacity onPress={()=>{
              setAgree(!agree)
            }}>
              <Image style={{width:appSize(14),height:appSize(14)}} source={agree?require('../../Assets/userManager/agree.png'):require('../../Assets/userManager/unagree.png')}  />
            </TouchableOpacity>

            <Text style={{ color: '#999999',fontSize:appSize(13),marginTop:appSize(-1.5) }}>
              我已阅读并同意
              <Text
                style={{ color: '#333333' }}
                onPress={() => {
                  Alert.alert('用户协议');
                }}
              >
                《用户协议》
              </Text>
              和
              <Text
                style={{ color: '#333333' }}
                onPress={() => {
                  Alert.alert('隐私政策');
                }}
              >
                《隐私政策》
              </Text>
            </Text>
          </View>


        </View>
      </LinearGradient>
    );
}
