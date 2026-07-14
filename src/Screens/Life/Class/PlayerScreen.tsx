import {View, Text, TouchableOpacity} from "react-native";
import { Tabs } from 'react-native-collapsible-tab';
import {ClassSummary, Header, MenuBar, RecProj, renderRow, renderRowWaitExam, ReSizeWebView} from "./Component";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {appSize} from "../../../Components/GStyles";
import {SizedWebView} from "react-native-sized-webview";
import React, {useState} from "react";
import WebView from "react-native-webview";


export default function PlayerScreen() {

    const insets =  useSafeAreaInsets()

    return(<View style={{flex:1,backgroundColor:'#213'}}>


    </View>)
}
