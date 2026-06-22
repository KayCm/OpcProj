import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
    Header,
    LargeHeader,
    ScalingView,
    ScrollViewWithHeaders,
    FlashListWithHeaders,
} from '@codeherence/react-native-header';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {FlashListRef} from "@shopify/flash-list";
import {useAnimatedRef} from "react-native-reanimated";
import PagerView from "react-native-pager-view";
import GStyles, {appSize} from "../../Components/GStyles";
import LefePart from "./Components/LefePart";
import {goBack} from "../../Navigator/NavigationService";



export default function LifeIndexScreen() {

    const pageraRef = useRef(null)

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jc,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <Text style={{color:'#1A1A1A',fontSize:appSize(17),fontWeight:'800'}}>精彩生活</Text>
            </View>
        </View>)
    }

    // const HeaderComponent = ({ showNavBar }) => (
    //     <Header
    //         showNavBar={showNavBar}
    //         headerCenter={<Text style={{ fontSize: 16, fontWeight: 'bold' }}>react-native-header</Text>}
    //     />
    // );
    //
    //
    // const LargeHeaderComponent = ({ scrollY }) => (
    //     <LargeHeader>
    //         <ScalingView scrollY={scrollY}>
    //             <Text style={{ fontSize: 14 }}>Welcome!</Text>
    //             <Text style={{ fontSize: 32, fontWeight: 'bold' }}>react-native-header</Text>
    //             <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#8E8E93' }}>
    //                 This project displays some header examples using the package.
    //             </Text>
    //         </ScalingView>
    //     </LargeHeader>
    // );
    //
    // const renderItem = () => {
    //
    //     return(<View style={{height:100,width:'100%',backgroundColor:'#987'}}>
    //         <Text>123</Text>
    //     </View>)
    // }

    const BannerView = () => {

        return(<View style={{marginTop:appSize(6),height:appSize(200),width:'100%',backgroundColor:'#556'}}>

        </View>)
    }

    const MenuBar = () => {

        return(<View style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(18)}}>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-between',width:appSize(203),height:appSize(30)}}>

                <TouchableOpacity style={{}}>
                    <Text style={{color:'#10B981',fontSize:appSize(16)}}>线下活动</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{}}>
                    <Text style={{color:'#909090',fontSize:appSize(16)}}>课程培训</Text>
                </TouchableOpacity>


            </View>

        </View>)

    }



    return(<View style={{flex:1,backgroundColor:""}}>

        <Nav />

        <BannerView />

        <MenuBar />

        <PagerView
            ref={pageraRef}
            onPageSelected={e => {
                const position = e.nativeEvent.position;
                //menuRef.current?.switchToTab(position);
            }}
            style={{ flex: 1, backgroundColor: '' }}>

            <LefePart />

            <LefePart />

        </PagerView>


    </View>)
}
