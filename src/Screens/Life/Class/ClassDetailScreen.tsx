import {Image, TouchableOpacity, View, Text, ImageBackground} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize, WINDOW_HEIGHT} from "../../../Components/GStyles";
import {goBack} from "../../../Navigator/NavigationService";
// import {useVideoPlayer, VideoView} from "react-native-video";
// import {VideoViewRef} from "react-native-video/src/core/video-view/VideoViewProps";
import React, {useRef, useState} from "react";
import WebView from "react-native-webview";
import PagerView from "react-native-pager-view";
import DataList from "../../../Components/DataList";
import {Header, renderRow} from "./Component";

export default function ClassDetailScreen() {

    const [classDetailType,setClassDetailType] = useState(1)

    const [showMore,setShowMore] = useState(false)

    const webViewRef = useRef(null)

    // const VideoViewRef = useRef<VideoViewRef>(null);

    // const insets =  useSafeAreaInsets()


    // const player = useVideoPlayer(
    //     'https://www.w3schools.com/html/mov_bbb.mp4',
    //     (_player) => {
    //         _player.play();
    //     }
    // );


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


    return(<View style={{flex:1,backgroundColor:""}}>

        <Header />



        <View style={{paddingHorizontal:appSize(16),flex:1,width:'100%',marginBottom:appSize(20)}}>


            <PagerView
                onPageSelected={e => {
                    //const position = e.nativeEvent.position;
                    //menuRef.current?.switchToTab(position);
                }}
                style={{ flex: 1, backgroundColor: '' }}>


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
