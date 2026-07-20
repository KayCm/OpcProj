import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../Components/GStyles";
import {goBack, navigate} from "../../Navigator/NavigationService";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import React, {useEffect, useState} from "react";
import { SizedWebView } from 'react-native-sized-webview';
import { WebView } from 'react-native-webview';
import {ROUTES} from "../../Components/Constant";
import {R_POST} from "../../Services/NetRequestService";

export default function StartupDetailScreen(props) {

    const insets =  useSafeAreaInsets()

    const {jobsId} = props?.route?.params

    const [webViewHeight, setWebViewHeight] = useState(0);

    const [detail,setDetail] = useState(null)
    const [requiredList,setRequiredList] = useState([])

    useEffect(()=>{

        getDetail()

    },[])

    const getDetail = () => {

        let url = '/mobile/jobs/detail'

        let params = {
            "userId": 9,
            "projectJobsId": jobsId
        }

        R_POST(url,params).then(res=>{

            console.log('res:',res)

            setDetail(res?.data)

            getRequiredList()

        }).catch(err=>{
            console.log('err',err)
        })

    }

    const getRequiredList = () => {
        // /mobile/jobs/requiredInfo

        let url = '/mobile/jobs/requiredInfo'

        let params = {
            "userId": 9,
            "projectJobsId": jobsId,
            "userLevel": 0,
        }

        R_POST(url,params).then(res=>{

            console.log('getRequiredList:',res)
            setRequiredList(res?.data)

        }).catch(err=>{
            console.log('err',err)
        })


    }

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',width:appSize(44),height:appSize(44)}}>
                    <Image source={require('../../Assets/Common/nav_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                    {/*<NavBack />*/}
                </TouchableOpacity>
                <Text style={{color:'#1A1A1A',fontSize:appSize(17),fontWeight:'800'}}>项目详情</Text>
                <View style={{width:appSize(44),height:appSize(44)}}/>
            </View>
        </View>)
    }

    return(<View style={{flex:1,backgroundColor:""}}>
        <Nav />
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{width:'100%',paddingHorizontal:appSize(16),paddingTop:appSize(12),paddingBottom:appSize(12)}}>
                <ImageBackground imageStyle={{borderRadius:appSize(12)}} style={{width:'100%',height:appSize(204)}} source={require('../../Assets/demo/demo4.png')} >

                </ImageBackground>

                <Text style={{color:'#333333',fontSize:appSize(18),lineHeight:appSize(24),fontWeight:'800',marginTop:appSize(18)}}>
                    {detail?.jobTitle}
                </Text>

                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(4)}} >
                    <Image style={{height:appSize(16),width:appSize(16),borderRadius:appSize(8),backgroundColor:'#333'}}  />
                    <Text style={{color:'#999999',fontSize:appSize(14)}}>{detail?.jobCompanyName}</Text>
                    <View style={{padding:appSize(4),borderRadius:appSize(4),backgroundColor:'#10B9811A'}}>
                        <Text style={{color:'#10B981',fontSize:appSize(12)}}>招募中</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',flexWrap:'wrap',gap:appSize(6),marginTop:appSize(10)}}>

                    {/*{detail?.jobTags.map((v,i,a)=>{*/}

                    {/*    return(<View key={i} style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*        <Text style={{color:'#666666',fontSize:appSize(12)}}>Ai电商</Text>*/}
                    {/*    </View>)*/}

                    {/*})}*/}


                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>短视频带货</Text>*/}
                    {/*</View>*/}

                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>Ai电商</Text>*/}
                    {/*</View>*/}

                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>短视频带货</Text>*/}
                    {/*</View>*/}

                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>Ai电商</Text>*/}
                    {/*</View>*/}

                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>短视频带货</Text>*/}
                    {/*</View>*/}

                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>Ai电商</Text>*/}
                    {/*</View>*/}

                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>短视频带货</Text>*/}
                    {/*</View>*/}

                    {/*<View style={{borderRadius:appSize(4),paddingHorizontal:appSize(8),paddingVertical:appSize(6),backgroundColor:'#0000000D'}}>*/}
                    {/*    <Text style={{color:'#666666',fontSize:appSize(12)}}>Ai电商</Text>*/}
                    {/*</View>*/}
                </View>

                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:appSize(16),height:appSize(75),width:'100%',backgroundColor:'#ffffff',marginTop:appSize(16),borderRadius:appSize(12)}} >

                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:''}}>
                        <View style={{flexDirection:'row',alignItems:'center',gap:appSize(2)}}>
                            <Image source={require('../../Assets/Startup/detail_icon_1.png')} style={{marginTop:appSize(2),width:appSize(12),height:appSize(12)}} />
                            <Text style={{fontSize:appSize(12),color:'#666666'}}>预期收益</Text>
                        </View>
                        <Text style={{color:'#FFA059',fontSize:appSize(14),marginTop:appSize(6)}}>12312+</Text>
                    </View>

                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:''}}>
                        <View style={{flexDirection:'row',alignItems:'center',gap:appSize(2)}}>
                            <Image source={require('../../Assets/Startup/detail_icon_2.png')} style={{marginTop:appSize(2),width:appSize(12),height:appSize(12)}} />
                            <Text style={{fontSize:appSize(12),color:'#666666'}}>招募人数</Text>
                        </View>
                        <Text style={{color:'#333333',fontSize:appSize(14),marginTop:appSize(6)}}>11</Text>
                    </View>

                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center',gap:appSize(2)}}>
                            <Image source={require('../../Assets/Startup/detail_icon_3.png')} style={{marginTop:appSize(2),width:appSize(12),height:appSize(12)}} />
                            <Text style={{fontSize:appSize(12),color:'#666666'}}>截止时间</Text>
                        </View>
                        <Text style={{color:'#333333',fontSize:appSize(14),marginTop:appSize(6)}}>2026-12-30</Text>
                    </View>

                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center',gap:appSize(2)}}>
                            <Image source={require('../../Assets/Startup/detail_icon_4.png')} style={{width:appSize(12),height:appSize(12)}} />
                            <Text style={{fontSize:appSize(12),color:'#666666'}}>付款方式</Text>
                        </View>
                        <Text style={{color:'#333333',fontSize:appSize(14),marginTop:appSize(6)}}>企业打款</Text>
                    </View>

                </View>

                <View style={{paddingHorizontal:appSize(16),paddingVertical:appSize(16),minHeight:appSize(100),width:'100%',backgroundColor:'#ffffff',marginTop:appSize(12),borderRadius:appSize(12)}} >
                    <Text style={{color:'#333333',fontSize:appSize(16)}}>参与条件</Text>


                    {requiredList?.map((value, index, array)=>{

                        return(<View key={index} style={{marginTop:appSize(12),flex:1,justifyContent:'space-between',flexDirection:'row',alignItems:'center',height:appSize(33)}}>
                            <View style={{flexDirection:'row',alignItems:'center',gap:appSize(6),borderRadius:appSize(8),backgroundColor:'#F7F7F7',paddingHorizontal:appSize(12),justifyContent:'center',height:appSize(33)}}>
                                <Image source={value?.isRequired?require('../../Assets/Startup/select_on.png'):require('../../Assets/Startup/select_off.png')} style={{height:appSize(18),width:appSize(18)}} />
                                <Text style={{color:'#333333',fontSize:appSize(14)}}>完成AI剪辑课程</Text>
                            </View>


                            {/*<TouchableOpacity onPress={()=>{*/}
                            {/*    navigate(ROUTES.CLASS_DETAIL,{courseId:value?.courseId})*/}
                            {/*    // getDetail()*/}
                            {/*}} style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(20),borderWidth:1,borderColor:'#10B981',height:appSize(33),paddingHorizontal:appSize(12)}}>*/}
                            {/*    <Text style={{color:'#10B981',fontSize:appSize(12)}}>去订阅</Text>*/}
                            {/*</TouchableOpacity>*/}

                            {value?.isRequired && <TouchableOpacity onPress={()=>{
                                navigate(ROUTES.CLASS_DETAIL,{courseId:value?.courseId})
                                // getDetail()
                            }} style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(20),borderWidth:1,borderColor:'#10B981',height:appSize(33),paddingHorizontal:appSize(12)}}>
                                <Text style={{color:'#10B981',fontSize:appSize(12)}}>去订阅</Text>
                            </TouchableOpacity>}


                        </View>)
                    })}





                    {/*<View style={{marginTop:appSize(12),flex:1,justifyContent:'space-between',flexDirection:'row',alignItems:'center',height:appSize(33)}}>*/}
                    {/*    <View style={{flexDirection:'row',alignItems:'center',gap:appSize(6),borderRadius:appSize(8),backgroundColor:'#F7F7F7',paddingHorizontal:appSize(12),justifyContent:'center',height:appSize(33)}}>*/}
                    {/*        <Image source={require('../../Assets/Startup/select_on.png')} style={{height:appSize(18),width:appSize(18)}} />*/}
                    {/*        <Text style={{color:'#333333',fontSize:appSize(14)}}>完成AI剪辑课程</Text>*/}
                    {/*    </View>*/}
                    {/*    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(20),borderWidth:1,borderColor:'#10B981',height:appSize(33),paddingHorizontal:appSize(12)}}>*/}
                    {/*        <Text style={{color:'#10B981',fontSize:appSize(12)}}>去订阅</Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}

                </View>

                <View style={{paddingHorizontal:appSize(16),paddingVertical:appSize(16),justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:'100%',backgroundColor:'#ffffff',marginTop:appSize(12),borderRadius:appSize(12)}} >
                    <Text style={{color:'#333333',fontSize:appSize(16)}}>参与模式</Text>
                    <Text style={{color:'#333333',fontSize:appSize(14)}}>线上</Text>
                </View>


                {/*<View style={{paddingHorizontal:appSize(16),paddingVertical:appSize(16),alignItems:'flex-end',width:'100%',backgroundColor:'#ffffff',marginTop:appSize(12),borderRadius:appSize(12)}} >*/}
                {/*    <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:'100%'}}>*/}
                {/*        <Text style={{color:'#333333',fontSize:appSize(16)}}>参与条件</Text>*/}
                {/*        <Text style={{color:'#333333',fontSize:appSize(14)}}>线上</Text>*/}
                {/*    </View>*/}
                {/*    <Text style={{color:'#999999',fontSize:appSize(14),marginTop:appSize(12)}}>杭州市西湖区XXXX中心1001展厅</Text>*/}
                {/*</View>*/}


                <View style={{paddingHorizontal:appSize(16),paddingVertical:appSize(16),width:'100%',backgroundColor:'#ffffff',marginTop:appSize(12),borderRadius:appSize(12)}} >
                    <Text style={{color:'#333333',fontSize:appSize(16)}}>项目描述{webViewHeight}</Text>

                    {/*<WebView*/}
                    {/*    style={{ height: webViewHeight }} // 动态设置高度[reference:14]*/}
                    {/*    // source={{ html: htmlContent }}*/}
                    {/*    source={{*/}
                    {/*        html:  `*/}
                    {/*          <!DOCTYPE html>*/}
                    {/*          <html>*/}
                    {/*            <body>*/}
                    {/*              <p>12312313213123123</p>*/}
                    {/*              <script>*/}
                    {/*                window.onload = function() {*/}
                    {/*                  // 将高度设置在 document.title 中[reference:21]*/}
                    {/*                  document.title = document.body.clientHeight;*/}
                    {/*                  window.location.hash = 1; // 触发导航状态变化*/}
                    {/*                };*/}
                    {/*              </script>*/}
                    {/*            </body>*/}
                    {/*          </html>*/}
                    {/*`*/}
                    {/*    }}*/}
                    {/*    onNavigationStateChange={(navState) => {*/}
                    {/*        const height = parseInt(navState.title, 10);*/}
                    {/*        if (height) {*/}
                    {/*            setWebViewHeight(height + 20); // 可适当加一点内边距[reference:22]*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    scrollEnabled={false}*/}
                    {/*/>*/}

                </View>

                <View style={{paddingHorizontal:appSize(16),paddingVertical:appSize(16),width:'100%',backgroundColor:'#ffffff',marginTop:appSize(12),borderRadius:appSize(12)}} >

                    <Text style={{color:'#333333',fontSize:appSize(16)}}>签约协议</Text>
                    <Text style={{color:'#666666',fontSize:appSize(14),marginTop:appSize(12)}}>点击链接完成协议签署:http//ndsdfuwsehgd.com</Text>

                </View>


                </View>
        </ScrollView>

        <View style={{width:'100%',height:appSize(56)+insets.bottom,backgroundColor:'#ffffff'}} >

            <View style={{paddingHorizontal:appSize(16),flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:appSize(56),backgroundColor:''}} >

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'#10B981',fontSize:appSize(16)}}>招募中</Text>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>已加入16人</Text>
                </View>

                <TouchableOpacity style={{width:appSize(172),height:appSize(44),justifyContent:'center',alignItems:'center',backgroundColor:'#10B981',borderRadius:appSize(22)}}>
                    <Text style={{color:'#ffffff',fontSize:appSize(17)}}>立即加入</Text>
                </TouchableOpacity>


            </View>

        </View>

    </View>)
}
