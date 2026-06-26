import {StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground} from "react-native";

import { BarcodeScanner, CameraView } from '@pushpendersingh/react-native-scanner';
import React, {useState} from "react";
import GStyles, {appSize} from "../../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {goBack} from "../../../Navigator/NavigationService";

function ActicitySignInScreen() {


    const [signType,setSignType] = useState(0)
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState('');

    const startScanning = async () => {
        try {
            setScanning(true);
            await BarcodeScanner.startScanning((barcodes) => {
                console.log('Barcodes detected:', barcodes);
                if (barcodes.length > 0) {
                    const barcode = barcodes[0];
                    setResult(`${barcode.type}: ${barcode.data}`);
                }
                stopScanning();
            });
        } catch (error) {
            console.error('Failed to start scanning:', error);
        }
    };

    const stopScanning = async () => {
        try {
            await BarcodeScanner.stopScanning();
            setScanning(false);
        } catch (error) {
            console.error('Failed to stop scanning:', error);
        }
    };


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
                <Text style={{color:'#1A1A1A',fontSize:appSize(17),fontWeight:'800'}}>活动签到</Text>
                <View style={{width:appSize(44),height:appSize(44)}}/>
            </View>
        </View>)
    }

    const ScanDom = () => {

        return(<View style={{flex:1,alignItems:'center',paddingHorizontal:appSize(16)}}>

                <View style={{justifyContent:'center',alignItems:'center',marginTop:appSize(24)}}>

                    <ImageBackground style={{zIndex:3,justifyContent:'center',alignItems:'center',height:appSize(242),width:appSize(242)}} source={require('../../../Assets/Life/scanBg.png')} >
                        <View style={{justifyContent:'center',alignItems:'center',height:appSize(240),width:appSize(240),borderColor:'#10B981',borderRadius:appSize(20),borderWidth:1}} >
                            {scanning?<CameraView style={styles.camera} />:<Image source={require('../../../Assets/Life/scanMidIcon.png')} style={{height:appSize(200),width:appSize(200)}} />}
                        </View>
                    </ImageBackground>
                </View>


                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:appSize(32),gap:appSize(4),backgroundColor:'#10B981',width:appSize(322),height:appSize(44),borderRadius:appSize(22)}} >
                    <Image style={{height:appSize(20),width:appSize(20)}} source={require('../../../Assets/Life/sacnIcon.png')} />
                    <Text style={{color:'#ffffff',fontSize:appSize(17)}}>扫码签到</Text>
                </TouchableOpacity>


                <Text style={{color:'#999999',fontSize:appSize(16),marginTop: appSize(88)}}>或者使用定位签到</Text>


                <View style={{marginTop:appSize(24),paddingHorizontal:appSize(12),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',backgroundColor:'#ffffff',borderRadius:appSize(12),width:'100%',height: appSize(80)}} >


                    <View style={{flexDirection:'row',gap:appSize(8)}}>
                        <View style={{backgroundColor:'#10B98133',borderRadius:appSize(20),height:appSize(40),width:appSize(40),justifyContent:'center',alignItems:'center'}}>
                            <Image style={{height:appSize(20),width:appSize(20)}} source={require('../../../Assets/Life/lcoal.png')} />
                        </View>
                        <View>
                            <Text style={{color:'#333333',fontSize:appSize(14)}}>当前位置</Text>
                            <Text style={{color:'#999999',fontSize:appSize(14)}}>中心公园阳光草坪 (已入场）</Text>
                        </View>
                    </View>



                    <TouchableOpacity onPress={()=>{
                        setSignType(1)
                    }} style={{width:appSize(82),height:appSize(32),justifyContent:'center',alignItems:'center',borderColor:'#10B981',borderRadius:appSize(16),borderWidth:1}}>
                        <Text style={{color:'#10B981'}}>打卡</Text>
                    </TouchableOpacity>


                </View>




            </View>)

    }

    const LocalDom = (inRange:boolean = false) => {


        return(<View style={{flex:1,alignItems:'center',paddingHorizontal:appSize(16)}}>


            <ImageBackground style={{marginTop:appSize(24),backgroundColor:inRange?'#10B981':'#CCCCCC',borderRadius:appSize(86),justifyContent:'center',alignItems:'center',height:appSize(172),width:appSize(172)}}
                             source={inRange?require('../../../Assets/Life/localBg.png'):require('../../../Assets/Life/localOutBg.png')} >
                <Image style={{height:appSize(48),width:appSize(48)}} source={inRange?require('../../../Assets/Life/localBgIn.png'):require('../../../Assets/Life/localOutBgIn.png')} />
                <Text style={{color:inRange?'#ffffff':'#666666',fontSize:appSize(17),marginTop:appSize(8)}}>当前位置</Text>
            </ImageBackground>

            <View style={{flexDirection:'row',alignItems:'center',gap:appSize(4),justifyContent:'center',marginTop:appSize(12)}} >
                <Image source={inRange?require('../../../Assets/Life/LocalOk.png'):require('../../../Assets/Life/LocalFail.png')} style={{height:appSize(16),width:appSize(16)}} />
                <Text style={{color:'#333333',fontSize:appSize(14)}}>中心公园阳光草坪</Text>
            </View>


            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:appSize(32),gap:appSize(4),backgroundColor:inRange?'#10B981':'#10B98150',width:inRange?appSize(322):appSize(360),height:appSize(44),borderRadius:appSize(22)}} >
                <Image style={{height:appSize(20),width:appSize(20)}} source={require('../../../Assets/Life/localBgIn.png')} />
                <Text style={{color:'#ffffff',fontSize:appSize(17)}}>{inRange?'定位签到':'超出签到范围，请您到达目的地后再次签到'}</Text>
            </TouchableOpacity>


            <Text style={{color:'#999999',fontSize:appSize(16),marginTop: appSize(88)}}>或者使用扫码签到</Text>


            <View style={{marginTop:appSize(24),paddingHorizontal:appSize(12),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',backgroundColor:'#ffffff',borderRadius:appSize(12),width:'100%',height: appSize(80)}} >


                <View style={{flexDirection:'row',alignItems:'center',gap:appSize(8)}}>
                    <View style={{backgroundColor:'#10B98133',borderRadius:appSize(20),height:appSize(40),width:appSize(40),justifyContent:'center',alignItems:'center'}}>
                        <Image style={{height:appSize(20),width:appSize(20)}} source={require('../../../Assets/Life/sacn.png')} />
                    </View>
                    <Text style={{color:'#333333',fontSize:appSize(14)}}>扫码签到</Text>
                </View>



                <TouchableOpacity onPress={()=>{
                    setSignType(0)
                }}  style={{width:appSize(82),height:appSize(32),justifyContent:'center',alignItems:'center',borderColor:'#10B981',borderRadius:appSize(16),borderWidth:1}}>
                    <Text style={{color:'#10B981'}}>扫码</Text>
                </TouchableOpacity>


            </View>




        </View>)
    }


    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>

        <Nav />

        <View style={{alignItems:'center',paddingHorizontal:appSize(16)}}>
            <Text style={{marginTop:appSize(24),fontSize:appSize(20),color:'#1A1A1A'}}>心灵疗愈 缓解焦虑</Text>
            <Text style={{marginTop:appSize(2),fontSize:appSize(16),color:'#666666'}}>2026-06-15 14:00</Text>
        </View>

        {signType==0?ScanDom():LocalDom(true)}


    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        height:appSize(230),
        width:appSize(230),
        borderRadius:appSize(20),

    },
    controls: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultContainer: {
        marginTop: 16,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 16,
        borderRadius: 8,
    },
    resultText: {
        color: 'white',
        fontSize: 14,
    },
});

export default ActicitySignInScreen
