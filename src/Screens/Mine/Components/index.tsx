import {appSize} from "../../../Components/GStyles";
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {navigate} from "../../../Navigator/NavigationService";
import {ROUTES} from "../../../Components/Constant";
import React from "react";
import TurboImage from "react-native-turbo-image";

export const TopToolsBar = ({onPress1,onPress2,onPress3}) => {

    return(<View style={{paddingHorizontal:appSize(24),width:'100%',gap:appSize(20),justifyContent:'flex-end',height:appSize(24),flexDirection:'row'}} >
        <TouchableOpacity onPress={onPress1}>
            <Image source={require('../../../Assets/Mine/topIcon1.png')} style={{height:appSize(20),width:appSize(20)}}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress2}>
            <Image source={require('../../../Assets/Mine/topIcon2.png')} style={{height:appSize(20),width:appSize(20)}}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress3}>
            <Image source={require('../../../Assets/Mine/topIcon3.png')} style={{height:appSize(20),width:appSize(20)}}/>
        </TouchableOpacity>
    </View>)

}

export const InfoCard = ({userInfo}) => {

    console.log(userInfo)

    return(<View style={{paddingHorizontal:appSize(16)}}>
        <View style={{marginTop:appSize(18),paddingVertical:appSize(16),borderTopLeftRadius:appSize(12),borderTopRightRadius:appSize(12),width:'100%',height:appSize(158),backgroundColor:'#fff'}}>

            <TouchableOpacity style={{position:'absolute',top:appSize(-12),left:appSize(16)}}>
                <TurboImage source={{uri:userInfo?.avatar}} style={{borderWidth:2,borderColor:'#ffffff',width:appSize(76),height:appSize(76),borderRadius:appSize(38),backgroundColor:'#f7f7f7'}} />
            </TouchableOpacity>
            <View style={{paddingLeft:appSize(16+76+12)}}>

                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(10)}}>
                    <Text style={{color:'#1A1A1A',fontSize:appSize(18),fontWeight:'800'}}>{userInfo?.nickname}</Text>
                    <View style={{paddingLeft:appSize(18),flexDirection:'row',backgroundColor:'#FBEFFF',borderRadius:appSize(25),width:appSize(50),height:appSize(18)}}>
                        <Image source={require('../../../Assets/Mine/level/1.png')}
                               style={{position:'absolute',top:appSize(-4),left:appSize(-4),width:appSize(21),height:appSize(23)}} />
                        <Text style={{color:'#9F3CDD',fontSize:appSize(12),fontWeight:'800'}}>Lv.2</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:appSize(4),gap:appSize(4)}}>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>ID：{userInfo?.memberId}</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../Assets/Mine/copy.png')} style={{width:appSize(12),height:appSize(12)}} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:appSize(20),marginTop:appSize(22),gap:appSize(16)}}>
                <Text style={{color:'#333333',fontSize:appSize(12),fontWeight:'800'}}>我的成长值</Text>
                <Text style={{color:'#999999',fontSize:appSize(12)}}><Text style={{color:'#10B981',fontSize:appSize(12)}}>4567</Text>/6000</Text>
            </View>

            <View style={{width:'100%',height:appSize(10),marginTop:appSize(12),paddingHorizontal:appSize(16)}}>

                <View style={{width:'100%',height:appSize(4),borderRadius:appSize(4),backgroundColor:'#F7F7F7'}}>
                    <View style={{width:'50%',height:appSize(4),borderRadius:appSize(4),backgroundColor:'#10B981'}}>
                    </View>
                </View>

            </View>

            <View style={{width:'100%',marginTop:appSize(10),paddingHorizontal:appSize(16)}}>

                <Text style={{color:'#999999',fontSize:appSize(10)}}>差<Text style={{color:'#333333',fontSize:appSize(14)}}>1750</Text>成长值升至Lv.4</Text>
            </View>

        </View>
        <ImageBackground source={require('../../../Assets/Mine/midBg.png')} style={{flexDirection:'row',alignItems:'center',width:'100%',height:appSize(72)}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingLeft:appSize(32),paddingRight:appSize(24),backgroundColor:''}}>
                <View>
                    <Text style={{fontSize:appSize(16),fontWeight:'800',color:'#fff'}}>订阅权益</Text>
                    <Text style={{fontSize:appSize(14),color:'#fff',marginTop:appSize(6)}}>您还没有订阅计划</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center',borderRadius:appSize(20),width:appSize(40),height:appSize(40)}}>
                    <Image style={{width:appSize(12),height:appSize(12)}} source={require('../../../Assets/Mine/profileIcon.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>)
}

export const InfoUnLoginCard = ({loginPress,rightsPress}) => {

    return(<View style={{paddingHorizontal:appSize(16)}}>
        <TouchableOpacity onPress={loginPress} style={{marginTop:appSize(18),paddingVertical:appSize(16),borderTopLeftRadius:appSize(12),borderTopRightRadius:appSize(12),width:'100%',height:appSize(80),backgroundColor:'#fff'}}>

            <TouchableOpacity style={{position:'absolute',top:appSize(-12),left:appSize(16)}}>
                <Image source={require('../../../Assets/Common/defaultAvatar.png')} style={{borderWidth:2,borderColor:'#ffffff',width:appSize(76),height:appSize(76),borderRadius:appSize(38),backgroundColor:'#123'}} />
            </TouchableOpacity>
            <View style={{paddingLeft:appSize(16+76+12)}}>

                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(10)}}>
                    <Text style={{color:'#1A1A1A',fontSize:appSize(18),fontWeight:'800'}}>请登录/注册</Text>
                </View>

            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={rightsPress}>
            <ImageBackground source={require('../../../Assets/Mine/midBg.png')} style={{flexDirection:'row',alignItems:'center',width:'100%',height:appSize(72)}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingLeft:appSize(32),paddingRight:appSize(24),backgroundColor:''}}>
                    <View>
                        <Text style={{fontSize:appSize(16),fontWeight:'800',color:'#fff'}}>订阅权益</Text>
                        <Text style={{fontSize:appSize(14),color:'#fff',marginTop:appSize(6)}}>您还没有订阅计划</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center',borderRadius:appSize(20),width:appSize(40),height:appSize(40)}}>
                        <Image style={{width:appSize(12),height:appSize(12)}} source={require('../../../Assets/Mine/profileIcon.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    </View>)
}

export const GrowthCenterUnLoginCard = ({medals,missions,loginPress}) => {

    return( <View style={{paddingHorizontal:appSize(16)}}>
            <View style={{width:'100%',borderRadius:appSize(12),paddingHorizontal:appSize(16),paddingVertical:appSize(20),backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:appSize(44)}} />
                    <Text style={{color:'#1A1A1A',fontSize:appSize(16),fontWeight:'800'}}>成长中心</Text>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'flex-end',width:appSize(44),height:appSize(22)}} >
                        <Image source={require('../../../Assets/Mine/growicon.png')} style={{width:appSize(14),height:appSize(14)}}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={loginPress} style={{width:'100%',height:appSize(260),justifyContent:'center',alignItems:'center'}}>

                    <Image source={require('../../../Assets/Mine/growBg.png')} style={{width:appSize(295),height:appSize(170)}} />

                </TouchableOpacity>




            </View>
        </View>)

}

export const GrowthCenterCard = ({medals,missions}) => {

    return( <View style={{paddingHorizontal:appSize(16)}}>
            <View style={{width:'100%',borderRadius:appSize(12),paddingHorizontal:appSize(16),paddingVertical:appSize(20),backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:appSize(44)}} />
                    <Text style={{color:'#1A1A1A',fontSize:appSize(16),fontWeight:'800'}}>成长中心</Text>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'flex-end',width:appSize(44),height:appSize(22)}} >
                        <Image source={require('../../../Assets/Mine/growicon.png')} style={{width:appSize(14),height:appSize(14)}}/>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:appSize(24),flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:''}}>
                    <Text style={{color:'#1A1A1A',fontSize:appSize(16),fontWeight:'800'}}>个人勋章</Text>
                    <Text style={{color:'#999999',fontSize:appSize(16),fontWeight:'bold'}}>已获得：2</Text>
                </View>

                <View style={{marginTop:appSize(15),flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',backgroundColor:''}}>

                    {medals.map((value, index, array)=>{

                        return(<View key={index} style={{paddingVertical:appSize(6),justifyContent:'center',alignItems:'center'}}>
                            <View style={{width:appSize(72),height:appSize(72)}}>
                                <Image resizeMode={'contain'} style={{width:appSize(72),height:appSize(72)}} source={value.img} />
                            </View>
                            <Text style={{color:'#666666',fontSize:appSize(12),marginTop:appSize(6)}}>
                                {value.name}
                            </Text>
                        </View>)
                    })}

                </View>


                <Text style={{color:'#1A1A1A',marginTop:appSize(15),fontSize:appSize(16),fontWeight:'800'}}>成长任务</Text>

                <View style={{marginTop:appSize(15),backgroundColor:'',gap:appSize(12)}}>

                    {missions.map((value, index, array)=>{

                        return(<View key={index} style={{flexDirection:'row',alignItems:'center'}}>
                            <Image style={{height:appSize(40),width:appSize(40)}} source={value.icon} />
                            <View style={{flex:1,paddingLeft:appSize(10)}}>
                                <Text style={{color:'#1C1A17',fontWeight:'bold',fontSize:appSize(14)}}>{value.title}({value.propressNum}/{value.totalNum})</Text>
                                <Text style={{color:'#999999',fontSize:appSize(12)}}>成长值<Text style={{color:'#10B981',fontSize:appSize(12)}}>+{value.exp1Num}</Text></Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor:'#10B981',borderRadius:appSize(30),paddingVertical:appSize(6),paddingHorizontal:appSize(12)}}>
                                <Text style={{color:'#fff',fontSize:appSize(14)}}>{value.btnText}</Text>
                            </TouchableOpacity>
                        </View>)
                    })}

                </View>


            </View>
        </View>)

}

export const FunctionsCard = () => {

    return(<View style={{paddingHorizontal:appSize(16)}}>

        <View style={{width:'100%',borderRadius:appSize(12),paddingHorizontal:appSize(16),paddingVertical:appSize(20),backgroundColor:'#fff'}}>
        <Text style={{color:'#1A1A1A',fontSize:appSize(16),fontWeight:'800'}}>常用功能</Text>

        <View style={{marginTop:appSize(15),flexDirection:'row',alignItems:'center',backgroundColor:''}}>

            <TouchableOpacity onPress={()=>{
                // navigate(ROUTES.LIFE_TAB)
            }}  style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(10),flex:1}}>
                <Image source={require('../../../Assets/Mine/function/function_icon1.png')} style={{height:appSize(24),width:appSize(24)}}/>
                <Text style={{marginTop:appSize(10),fontWeight:'bold',fontSize:appSize(12),color:'#333'}}>我的课程</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                // navigate(ROUTES.LIFE_TAB)
            }}  style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(10),flex:1}}>
                <Image source={require('../../../Assets/Mine/function/function_icon2.png')} style={{height:appSize(24),width:appSize(24)}}/>
                <Text style={{marginTop:appSize(10),fontWeight:'bold',fontSize:appSize(12),color:'#333'}}>我的工作</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                navigate(ROUTES.FUNC_MY_ORDER)
            }}  style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(10),flex:1}}>
                <Image source={require('../../../Assets/Mine/function/function_icon3.png')} style={{height:appSize(24),width:appSize(24)}}/>
                <Text style={{marginTop:appSize(10),fontWeight:'bold',fontSize:appSize(12),color:'#333'}}>我的订单</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                // navigate(ROUTES.LIFE_TAB)
            }}  style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(10),flex:1}}>
                <Image source={require('../../../Assets/Mine/function/function_icon4.png')} style={{height:appSize(24),width:appSize(24)}}/>
                <Text style={{marginTop:appSize(10),fontWeight:'bold',fontSize:appSize(12),color:'#333'}}>我的福利</Text>
            </TouchableOpacity>

        </View>

        <View style={{marginTop:appSize(0),flexDirection:'row',alignItems:'center',backgroundColor:''}}>

            <TouchableOpacity onPress={()=>{
                // navigate(ROUTES.LIFE_TAB)
            }}  style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(10),flex:1}}>
                <Image source={require('../../../Assets/Mine/function/function_icon5.png')} style={{height:appSize(24),width:appSize(24)}}/>
                <Text style={{marginTop:appSize(10),fontWeight:'bold',fontSize:appSize(12),color:'#333'}}>我的AI</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                // navigate(ROUTES.LIFE_TAB)
            }}  style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(10),flex:1}}>
                <Image source={require('../../../Assets/Mine/function/function_icon6.png')} style={{height:appSize(24),width:appSize(24)}}/>
                <Text style={{marginTop:appSize(10),fontWeight:'bold',fontSize:appSize(12),color:'#333'}}>我的收藏</Text>
            </TouchableOpacity>

            <View style={{flex:1}}/>
            <View style={{flex:1}}/>

        </View>

    </View>
    </View>)
}


