import React, {memo, useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Alert,Image, ImageBackground, TextInput} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {goBack} from "../../Navigator/NavigationService";
import LinearGradient from 'react-native-linear-gradient';
import GStyles, {appSize, TRUE_ONE_LINE, WINDOW_HEIGHT, WINDOW_WIDTH} from "../../Components/GStyles";
import {LOGIN_BG_NORMORL, LOGIN_BG_SPECIAL} from "../../Components/Constant";
import Toast from 'react-native-root-toast';
import {LoginViewModel} from "./LoginViewModel";
import {useSelector} from "react-redux";


export default function LoginScreen() {

    const inset = useSafeAreaInsets()

    const [loginEmail,setLoginEmail] = useState(null)

    const {loginAct,loginPassword,setLoginPassword,loginModel,setLoginModel} = LoginViewModel()

    const [agree,setAgree] = useState(false)




    return (
      <LinearGradient
          colors={LOGIN_BG_NORMORL}
          start={{ x: 0.5, y: 0 }}
          locations={[0, 0.38, 1]}
          end={{ x: 0, y: 1 }}
          style={{ margin: 0, width: '100%', height: WINDOW_HEIGHT,alignItems:'center' }}>


        <View style={{ paddingTop: inset.top, paddingHorizontal: appSize(24),flex:1}}>

          <View style={{width:WINDOW_WIDTH-appSize(48),alignItems:'flex-end'}}>

            <TouchableOpacity
                onPress={()=>{
                  goBack();
                }}
                style={{
                  height: appSize(44),
                  flexDirection:'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}><Text style={{ fontSize: appSize(16), color: '#1A1A1A',fontWeight:'800' }}>注册</Text>
              <Image style={{marginTop:appSize(2.15),height:appSize(14),width:appSize(14)}} source={require('../../Assets/Common/Arrow.png')} />
            </TouchableOpacity>

          </View>


          <View style={{ width: '100%', backgroundColor: '',marginBottom:appSize(24) }}>
            <Text style={{fontSize:appSize(22),color:'#1A1A1A',fontWeight:'800'}}>OPC成长平台</Text>
            <Text style={{marginTop:appSize(12),fontSize:appSize(14),color:'#000'}}>助力成长，共同进步</Text>
          </View>


          <View style={{width:appSize(345),height:appSize(470)}}>

            <ImageBackground style={{width:appSize(345),height:appSize(470)}}
                             resizeMode={'contain'}
                             source={require('../../Assets/userManager/bg.png')}>
              <ImageBackground style={{width:appSize(345),height:appSize(470)}}
                               resizeMode={'contain'}
                               source={loginModel=='phone'?require('../../Assets/userManager/login_phone_bg.png'):require('../../Assets/userManager/login_mail_bg.png')}>

                <View style={[GStyles.row,{width:'100%',height:appSize(60),backgroundColor:''}]}>
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

                {loginModel=='phone'?(<View style={{flex:1}}>
                  <View style={{flex:1,paddingTop:appSize(32),paddingHorizontal:appSize(24)}}>

                    <Text style={{color:'#000000',fontSize:appSize(14)}}>手机号码</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:appSize(10),marginTop:appSize(10),borderRadius:appSize(5),width:'100%',backgroundColor:'#f7f7f7'}}>
                      <TextInput placeholder={'+86'} editable={false} style={{paddingVertical: 0,textAlignVertical: 'center',fontSize:appSize(14),textAlign:'center',width:appSize(44),height:appSize(44),color:'#1A1A1A'}} />
                      <View style={{width:1,height:appSize(26),backgroundColor:'#999999'}} />
                      <TextInput placeholder={'请输入您的手机号'} placeholderTextColor={'#CCCCCC'} style={{paddingVertical: 0,textAlignVertical: 'center',fontSize:appSize(14),marginLeft:appSize(4),flex:1,height:appSize(44),backgroundColor:''}} />
                    </View>
                    <Text style={{marginTop:appSize(8),fontSize: appSize(11), color: '#FF4040' }}>请您检查手机号码是否正确</Text>

                    <Text style={{marginTop:appSize(20),color:'#000000',fontSize:appSize(14)}}>验证码</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:appSize(10),marginTop:appSize(10),borderRadius:appSize(5),width:'100%',height:appSize(44),backgroundColor:'#f7f7f7'}}>
                      <TextInput placeholder={'请输入验证码'} placeholderTextColor={'#CCCCCC'}  style={{flex:1,backgroundColor:''}} />

                      <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#10B981'}}>获取验证码</Text>
                      </View>

                    </View>

                    <TouchableOpacity onPress={()=>{


                      loginAct()

                      // Toast.show('请您确认用户协议和隐私政策', {
                      //   duration: Toast.durations.LONG,
                      //   position: Toast.positions.CENTER,
                      //   shadow: true,
                      //   animation: true,
                      //   hideOnPress: true,
                      //   delay: 0,
                      //   onShow: () => {
                      //     // calls on toast\`s appear animation start
                      //   },
                      //   onShown: () => {
                      //     // calls on toast\`s appear animation end.
                      //   },
                      //   onHide: () => {
                      //     // calls on toast\`s hide animation start.
                      //   },
                      //   onHidden: () => {
                      //     // calls on toast\`s hide animation end.
                      //   }
                      // });

                    }} style={{justifyContent:'center',alignItems:'center',marginTop:appSize(35),backgroundColor:'#10B981',width:'100%',height:appSize(44),borderRadius:appSize(22)}}>
                      <Text style={{color:'#fff',fontSize:appSize(18),fontWeight:'600'}}>立即登录</Text>
                    </TouchableOpacity>
                  </View>
                </View>):(<View style={{flex:1}}>

                  <View style={{flex:1,paddingTop:appSize(32),paddingHorizontal:appSize(24)}}>

                    <Text style={{color:'#000000',fontSize:appSize(14)}}>邮箱账号</Text>
                    <View style={{paddingHorizontal:appSize(10),marginTop:appSize(10),borderRadius:appSize(5),width:'100%',height:appSize(44),backgroundColor:'#f7f7f7'}}>

                      <TextInput value={loginEmail}
                                 onChangeText={setLoginEmail}
                                 placeholder={'请输入登录邮箱'}
                                 placeholderTextColor={'#CCCCCC'}
                                 style={{flex:1,backgroundColor:''}} />
                    </View>

                    <Text style={{marginTop:appSize(30),color:'#000000',fontSize:appSize(14)}}>密码</Text>
                    <View style={{paddingHorizontal:appSize(10),marginTop:appSize(10),borderRadius:appSize(5),width:'100%',height:appSize(44),backgroundColor:'#f7f7f7'}}>
                      <TextInput value={loginPassword}
                                 onChangeText={setLoginPassword}
                                 placeholder={'请输入登录密码'}
                                 placeholderTextColor={'#CCCCCC'}
                                 style={{flex:1,backgroundColor:''}} />
                    </View>
                    <TouchableOpacity onPress={()=>{
                        loginAct()
                    }} style={{justifyContent:'center',alignItems:'center',marginTop:appSize(35),backgroundColor:'#10B981',width:'100%',height:appSize(44),borderRadius:appSize(22)}}>
                      <Text style={{color:'#fff',fontSize:appSize(18),fontWeight:'600'}}>立即登录</Text>
                    </TouchableOpacity>
                  </View>
                </View>)}




              </ImageBackground>
            </ImageBackground>


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



      </LinearGradient>)
}
