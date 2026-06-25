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

export default function LefePart() {

    const pagerRef = useRef(null)

    const [menuSelect,setMenuSelect] = useState(0)


    const TopMarker =()=>{

        return (<View style={{position: 'absolute',justifyContent:'center',alignItems:'center',borderTopLeftRadius:appSize(12),borderBottomRightRadius:appSize(12),height:appSize(20),width:appSize(52),backgroundColor:'#FFA059'}}>
            <Text style={{fontSize:appSize(10),color:'#ffffff'}}>夏日限定</Text>
        </View>)
    }

    const Card = () => {

        return(<View style={{width:appSize(177),height:appSize(166),backgroundColor:'#ffffff',borderRadius:appSize(12)}}>

            <Image style={{height:appSize(98),width:appSize(177),backgroundColor:'#123',borderTopLeftRadius:appSize(12),borderTopRightRadius:appSize(12)}} />

            <TopMarker />

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

        </View>)
    }

    const LongBar = ({onPress}) => {

        var ActButtonsDom = <View style={{flexDirection:'row',justifyContent:'flex-end',gap:appSize(8)}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#999999',borderRadius:appSize(20),paddingHorizontal:appSize(12),paddingVertical:appSize(4)}}>
                <Text style={{color:'#999999',fontSize:appSize(12)}}>未开始</Text>
            </TouchableOpacity>
        </View>

        switch (1) {
            case 1:{
                ActButtonsDom = <View style={{flexDirection:'row',justifyContent:'flex-end',gap:appSize(8)}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#999999',borderRadius:appSize(20),paddingHorizontal:appSize(12),paddingVertical:appSize(4)}}>
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
                    navigate(ROUTES.LIFE_ACT_SIGNIN)
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
