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
import {appSize} from "../../Components/GStyles";
import LefePart from "./Components/LefePart";



export default function LifeIndexScreen() {

    // const ref = useAnimatedRef<FlashListRef<number>>();

    const pageraRef = useRef(null)

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




    return(<View style={{flex:1,backgroundColor:"",paddingTop:100}}>



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
