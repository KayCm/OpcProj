import {Image, TouchableOpacity, View, Text, ImageBackground, Pressable, Modal} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize, WINDOW_HEIGHT} from "../../../Components/GStyles";
import React, {useRef, useState} from "react";
import {ClassSummary, Header, MenuBar,PillTabBar, RecProj, renderRow, renderRowPassExam, renderRowWaitExam} from "./Component";
import {TabBarRenderProps, Tabs} from 'react-native-collapsible-tab';






export default function ClassDetailScreen() {
    const insets =  useSafeAreaInsets()

    const [isModalVisible,setModalVisible] = useState(false)

    return(<View style={{flex:1,backgroundColor:'#f7f7f7'}}>
        <View style={{height:insets.top,width:'100%',backgroundColor:'#fff'}} />
        <Tabs.Container renderHeader={() => <Header />}  renderTabBar={(props)=><PillTabBar {...props}/>}>
            <Tabs.Tab name="summary" label="课程简介">
                <Tabs.ScrollView>
                    <View style={{backgroundColor:'#f7f7f7', paddingHorizontal:appSize(16),paddingBottom:appSize(24)}} contentContainerStyle={{ flexGrow: 1 }}>
                        <ClassSummary />
                        <Text style={{paddingTop:appSize(16),paddingBottom:appSize(6),fontSize:appSize(16),fontWeight:'600',color:'#000'}}>推荐项目</Text>
                        <RecProj />
                    </View>
                </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab name="list" label="课程列表">
                <Tabs.FlatList style={{paddingHorizontal:appSize(16),backgroundColor:'#f7f7f7'}} data={[1,2,3,4,5,6,7,8,8,9]} renderItem={renderRowWaitExam} />
            </Tabs.Tab>
        </Tabs.Container>

        <View style={{backgroundColor:'#fff',width:'100%',height:appSize(56)+insets.bottom}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:appSize(16),height:appSize(56),backgroundColor:'#fff',width:'100%'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:appSize(2)}}>
                    <Text style={{color:'#FFA059',fontSize:appSize(20)}}>¥899.99</Text>
                    <Text style={{color:'#999999',fontSize:appSize(12),textDecorationLine: 'line-through'}}>¥1258.00</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    // setModalVisible(true)
                }} style={{backgroundColor:'#10B981',width:appSize(172),height:appSize(44),borderRadius:appSize(22),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:appSize(17)}}>立即购买</Text>
                </TouchableOpacity>
            </View>
        </View>



        {/*<Modal*/}
        {/*    style={{margin: 0}}*/}
        {/*    isVisible={false}*/}
        {/*    onSwipeComplete={() => setModalVisible(false)}*/}
        {/*    swipeDirection="left">*/}
        {/*    <View style={{flex: 1}}>*/}
        {/*        <Text>I am the modal content!</Text>*/}
        {/*    </View>*/}
        {/*</Modal>*/}


    </View>)
}
