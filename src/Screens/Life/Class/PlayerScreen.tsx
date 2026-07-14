import {View, Text, TouchableOpacity} from "react-native";
import { Tabs } from 'react-native-collapsible-tab';
import {ClassSummary, Header, MenuBar, RecProj, renderRow, renderRowWaitExam, ReSizeWebView} from "./Component";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {appSize} from "../../../Components/GStyles";
import {SizedWebView} from "react-native-sized-webview";
import React, {useState} from "react";
import WebView from "react-native-webview";
import {VideoView,useVideoPlayer} from "react-native-video";
// import Orientation from 'react-native-orientation';

export default function PlayerScreen() {

    const insets =  useSafeAreaInsets()

    const player = useVideoPlayer(
        'https://www.w3schools.com/html/mov_bbb.mp4',
        (_player) => {
            _player.play();
        }
    );

    // const enterFullscreen = () => {
    //     // 1. 锁定屏幕方向为横屏
    //     Orientation.lockToLandscape();
    //
    //     // 2. 获取屏幕宽高并设置视频样式为全屏
    //     // const { width, height } = Dimensions.get('window');
    //     // 更新视频组件的 style 为 { width, height }
    //
    //     // 3. 调用原生的全屏方法（可选）
    //     if (videoRef.current) {
    //         videoRef.current.presentFullscreenPlayer();
    //     }
    // };


    return(<View style={{flex:1,backgroundColor:'#213'}}>


        <VideoView
            player={player}
            style={{ width: '100%', aspectRatio: 16 / 9 }}
            controls
        />

    </View>)
}
