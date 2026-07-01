import {Image, TouchableOpacity, View, Text, ImageBackground} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize, WINDOW_HEIGHT} from "../../../Components/GStyles";
import {goBack} from "../../../Navigator/NavigationService";
import {useVideoPlayer, VideoView} from "react-native-video";
import {VideoViewRef} from "react-native-video/src/core/video-view/VideoViewProps";
import React, {useRef, useState} from "react";
import WebView from "react-native-webview";
import PagerView from "react-native-pager-view";
import DataList from "../../../Components/DataList";

export default function ClassDetailScreen() {

    const [classDetailType,setClassDetailType] = useState(1)

    const [showMore,setShowMore] = useState(false)

    const webViewRef = useRef(null)

    const VideoViewRef = useRef<VideoViewRef>(null);

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000030',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    VideoViewRef.current?.enterFullscreen();
                    // VideoViewRef.current?.presentFullscreenPlayer();

                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000030',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_share.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

            </View>
        </View>)
    }

    const player = useVideoPlayer(
        'https://www.w3schools.com/html/mov_bbb.mp4',
        (_player) => {
            _player.play();
        }
    );

    const Header = () => {

        return(<View style={{alignItems:'center',width:'100%',backgroundColor:''}}>

            <ImageBackground source={require('../../../Assets/demo/demo1.png')} style={{position:'absolute',height:appSize(260),width:'100%',backgroundColor:'#12397850'}}>
                <View style={{height:insets.top}} />
                <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                    <TouchableOpacity onPress={()=>{
                        goBack()
                    }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000060',width:appSize(30),height:appSize(30)}}>
                        <Image source={require('../../../Assets/Life/act_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                        VideoViewRef.current?.enterFullscreen();
                        // VideoViewRef.current?.presentFullscreenPlayer();

                    }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000060',width:appSize(30),height:appSize(30)}}>
                        <Image source={require('../../../Assets/Life/act_share.png')} style={{height:appSize(14),width:appSize(14)}} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>

            <View style={{position:'absolute',justifyContent:'center',alignItems:'center',right:appSize(20),top:appSize(180),backgroundColor:'#00000070',width:appSize(97),height:appSize(32),borderRadius:appSize(111)}} >
                <Text style={{color:'#fff',fontSize:appSize(14)}}>85人已学习</Text>
            </View>

            <View style={{marginTop:appSize(230),paddingVertical:appSize(16),paddingHorizontal:appSize(12),borderRadius:appSize(12),width:appSize(361),backgroundColor:'#fff'}}>


                <View style={{flexDirection:'row',width:'100%',height:appSize(44)}}>

                    <Text numberOfLines={2} style={{flex:1,fontSize:appSize(16),color:'#1A1A1A'}}>心灵疗愈 缓解焦虑心灵疗愈 缓解焦虑心灵疗愈心灵疗愈 缓解焦虑心灵疗愈 缓解焦虑心灵疗愈心灵疗愈 缓解焦虑心灵疗愈 缓解焦虑心灵疗愈缓解焦虑心灵疗愈缓解焦虑心灵疗愈缓解焦虑心灵疗愈缓解焦虑心灵疗愈缓解焦虑心灵疗愈缓解焦虑心灵疗愈</Text>

                    <View style={{flexDirection:'row',gap:appSize(12)}}>
                        <View style={{gap:appSize(4),justifyContent:'center',alignItems:'center',width:appSize(50)}}>
                            <View style={{height:appSize(14)}}>
                                <Image style={{height:appSize(13.54),width:appSize(17.07)}} source={require('../../../Assets/Life/class/like.png')} />
                            </View>
                            <Text style={{color:'#999999',fontSize:appSize(10)}}>12345678</Text>
                        </View>

                        <View style={{gap:appSize(4),justifyContent:'center',alignItems:'center',width:appSize(50)}}>
                            <Image style={{height:appSize(14),width:appSize(14)}} source={require('../../../Assets/Life/class/share.png')} />
                            <Text style={{color:'#999999',fontSize:appSize(10)}}>12345678</Text>
                        </View>
                    </View>

                </View>

                <View style={{paddingHorizontal:appSize(8),justifyContent:'center',width:'100%',height:appSize(28),marginTop:appSize(10),borderRadius:appSize(4),backgroundColor:'#F7F7F7'}} >
                    <Text style={{color:'#333333',fontSize:appSize(12)}}>完成全部课程：成长等级<Text style={{color:'#10B981',fontSize:appSize(12)}}>+60</Text> 破局直觉<Text style={{color:'#10B981',fontSize:appSize(12)}}>+8</Text></Text>
                </View>

                <Text numberOfLines={showMore?0:2} onPress={()=>{
                    setShowMore(!showMore)
                }} style={{color:'#999999',lineHeight:appSize(20),marginTop:appSize(10),fontSize:appSize(14)}}>本课程是一站学习剪辑、带货和投流的直播课程，学习形式包括:课后录播回放+专属VIP班级群本课程是一站学习剪辑、带货和投流的直播课程，学习形式包括:课后录播回放+专属VIP班级群本课程是一站学习剪辑、带货和投流的直播课程，学习形式包括:课后录播回放+专属VIP班级群本课程是一站学习剪辑、带货和投流的直播课程，学习形式包括:课后录播回放+专属VIP班级群本课程是一站学习剪辑、带货和投流的直播课程，学习形式包括:课后录播回放+专属VIP班级群本课程是一站学习剪辑、带货和投流的直播课程，学习形式包括:课后录播回放+专属VIP班级群</Text>



            </View>

        </View>)
    }

    var headerHtml = `<div></div>`

    const injectScript = () => {
        webViewRef.current.injectJavaScript(`
          (function() {
            const titleBar = document.createElement('div');
            titleBar.id = 'injected-header';
            titleBar.innerHTML = '`+headerHtml+`';
            document.body.insertBefore(titleBar, document.body.firstChild);
          })();
        `);
    };

    const renderRow = ({item,index}) => {

        return(<View style={{paddingVertical:appSize(6)}}>
            <View style={{gap:appSize(4),paddingVertical:appSize(12),paddingHorizontal:appSize(12),width:'100%',height:appSize(70),borderRadius:appSize(12),backgroundColor:'#fff'}}>
                <View style={{position:'absolute',right:0,justifyContent:'center',alignItems:'center',backgroundColor:'#99999920',width:appSize(28),height:appSize(28),borderTopRightRadius:appSize(12),borderBottomLeftRadius:appSize(8)}} >
                    <Image style={{width:appSize(28),height:appSize(28)}} source={require('../../../Assets/Life/class/localIcon.png')} />
                </View>

                <Text style={{color:'#333333',fontSize:appSize(16)}}>{index} 入门课程</Text>

                <View style={{flexDirection:'row',gap:appSize(6)}}>

                    <View style={{paddingHorizontal:appSize(8),paddingVertical:appSize(4),backgroundColor:'#F7F7F7',borderRadius:appSize(4)}}>
                        <Text style={{color:'#333333',fontSize:appSize(10)}}>成长等级<Text style={{color:'#10B981',fontSize:appSize(10)}}>+20</Text></Text>
                    </View>

                    <View style={{paddingHorizontal:appSize(8),paddingVertical:appSize(4),backgroundColor:'#F7F7F7',borderRadius:appSize(4)}}>
                        <Text style={{color:'#333333',fontSize:appSize(10)}}>成长等级<Text style={{color:'#10B981',fontSize:appSize(10)}}>+20</Text></Text>
                    </View>


                </View>

            </View>
        </View>)
    }

    return(<View style={{flex:1,backgroundColor:""}}>

        <Header />

        <View style={{flexDirection:'row',gap:appSize(16),paddingHorizontal:appSize(16),height:appSize(28),width:'100%',marginTop:appSize(20),marginBottom:appSize(8)}} >
            <TouchableOpacity onPress={()=>{
                setClassDetailType(1)
            }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
                <Text style={{fontSize:appSize(14),color:classDetailType==1?'#333333':'#909090'}}>课程详情</Text>
                <View style={{backgroundColor:classDetailType==1?'#10B981':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setClassDetailType(2)
            }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
                <Text style={{fontSize:appSize(14),color:classDetailType==2?'#333333':'#909090'}}>课程目录</Text>
                <View style={{backgroundColor:classDetailType==2?'#10B981':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
            </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal:appSize(16),flex:1,width:'100%',marginBottom:appSize(20)}}>


            <PagerView
                onPageSelected={e => {
                    //const position = e.nativeEvent.position;
                    //menuRef.current?.switchToTab(position);
                }}
                style={{ flex: 1, backgroundColor: '' }}>

                <View style={{borderRadius:appSize(12),paddingVertical:appSize(16),paddingHorizontal:appSize(12),overflow: 'hidden',backgroundColor:'#ffffff',flex:1}}>

                <WebView source={{ html:'课程主题：正确面对负面情绪，与内心温柔和解\n' +
                            '\n' +
                            '生活里的焦虑、内耗、压抑几乎人人都有：工作压力带来彻夜难眠，人际关系让你反复精神紧绷，莫名烦躁、情绪低落、陷入自我否定，明明不想胡思乱想，却控制不住被负面情绪裹挟。长期堆积的情绪内耗，正在悄悄消耗你的精力、睡眠与生活幸福感。\n' +
                            '\n' +
                            '这套心灵疗愈课程专为被焦虑困扰的你打造，不用复杂心理学基础，通俗易懂、落地实用，已有 85 位学员同步学习，跟着课程一步步梳理情绪、治愈内心。\n' +
                            '\n' +
                            '课程亮点\n' +
                            '\n' +
                            '✅ 通俗化讲解，避开晦涩专业术语，零基础也能轻松听懂\n' +
                            '✅ 方法落地，日常通勤、睡前、休息间隙都能练习\n' +
                            ' ✅ 聚焦真实情绪痛点，针对性解决焦虑、内耗、低落等问题\n' +
                            ' ✅ 轻量学习模式，碎片化时间即可完成自我心灵疏导'}}
                             ref={webViewRef}
                             onLoad={injectScript}
                             showsHorizontalScrollIndicator={false}
                             showsVerticalScrollIndicator={false}
                             style={{ flex: 1,borderRadius:appSize(12),overflow: 'hidden',backgroundColor:'', width: '100%' }}
                        // injectedJavaScript={injectTitleScript}
                             originWhitelist={['*']}
                             javaScriptEnabled={true}
                             domStorageEnabled={true}
                            onScroll={()=>{

                                console.log("###############")
                                setShowMore(false)
                            }}
                    />

                </View>


                <DataList
                    key={1}
                    renderRow={renderRow}
                    url={'/open-api/mobile/home/material/normal/list'}
                    params={{}}
                    queryKey={'normal-list'}
                    onScroll={()=>{
                        console.log("###############")
                        setShowMore(false)
                    }}
                />


            </PagerView>




        </View>



        {/*<Nav />*/}

        {/*<View style={{width:'100%',height:'100%',backgroundColor:'#123'}}>*/}


            {/*<VideoView*/}
            {/*    ref={VideoViewRef}*/}
            {/*    player={player}*/}
            {/*    style={{ width:'100%',*/}
            {/*        aspectRatio:   16/9,*/}
            {/*    }}*/}
            {/*    controls*/}
            {/*/>*/}


        {/*</View>*/}

        {/*<VideoView*/}
        {/*    ref={VideoViewRef}*/}
        {/*    player={player}*/}
        {/*    style={{ width:WINDOW_HEIGHT,*/}
        {/*        aspectRatio:   16/9,*/}
        {/*        backgroundColor:'#123',*/}
        {/*        transform: [{rotate: '270deg'}]}}*/}

        {/*    controls*/}
        {/*/>*/}

    </View>)

}
