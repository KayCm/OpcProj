// import React, {useRef} from 'react';
// import {View, Text, TouchableOpacity, Image} from 'react-native';
// import {
//     Header,
//     LargeHeader,
//     ScalingView,
//     ScrollViewWithHeaders,
//     FlashListWithHeaders,
// } from '@codeherence/react-native-header';
//
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import {FlashList, FlashListRef} from "@shopify/flash-list";
// import {useAnimatedRef} from "react-native-reanimated";
// import PagerView from "react-native-pager-view";
// import GStyles, {appSize} from "../../Components/GStyles";
// import LefePart from "./Components/LefePart";
// import {goBack} from "../../Navigator/NavigationService";
//
//
//
// export default function LifeIndexScreen() {
//
//     const pageraRef = useRef(null)
//
//     const insets =  useSafeAreaInsets()
//
//     const Nav = () => {
//         return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
//             <View style={{height:insets.top}} />
//             <View style={[GStyles.row,GStyles.ac,GStyles.jc,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
//                 <Text style={{color:'#1A1A1A',fontSize:appSize(17),fontWeight:'800'}}>精彩生活</Text>
//             </View>
//         </View>)
//     }
//
//     // const HeaderComponent = ({ showNavBar }) => (
//     //     <Header
//     //         showNavBar={showNavBar}
//     //         headerCenter={<Text style={{ fontSize: 16, fontWeight: 'bold' }}>react-native-header</Text>}
//     //     />
//     // );
//     //
//     //
//     // const LargeHeaderComponent = ({ scrollY }) => (
//     //     <LargeHeader>
//     //         <ScalingView scrollY={scrollY}>
//     //             <Text style={{ fontSize: 14 }}>Welcome!</Text>
//     //             <Text style={{ fontSize: 32, fontWeight: 'bold' }}>react-native-header</Text>
//     //             <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#8E8E93' }}>
//     //                 This project displays some header examples using the package.
//     //             </Text>
//     //         </ScalingView>
//     //     </LargeHeader>
//     // );
//     //
//     // const renderItem = () => {
//     //
//     //     return(<View style={{height:100,width:'100%',backgroundColor:'#987'}}>
//     //         <Text>123</Text>
//     //     </View>)
//     // }
//
//     const BannerView = () => {
//
//         return(<View style={{height:appSize(200),width:'100%',backgroundColor:'red'}}>
//
//         </View>)
//     }
//
//     const MenuBar = () => {
//
//         return(<View style={{justifyContent:'center',alignItems:'center',paddingVertical:appSize(18)}}>
//
//             <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-between',width:appSize(203),height:appSize(30)}}>
//
//                 <TouchableOpacity style={{}}>
//                     <Text style={{color:'#10B981',fontSize:appSize(16)}}>线下活动</Text>
//                 </TouchableOpacity>
//
//                 <TouchableOpacity style={{}}>
//                     <Text style={{color:'#909090',fontSize:appSize(16)}}>课程培训</Text>
//                 </TouchableOpacity>
//
//
//             </View>
//
//         </View>)
//
//     }
//
//     const renderHeader = () => {
//       return(<BannerView />)
//     }
//
//     const renderRow  = ({ item, index }) => {
//         if (index === 0) {
//             // 渲染头部
//             return (
//                 <View style={{height: 60,
//                     backgroundColor: 'white',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     // 添加阴影提升视觉效果
//                     shadowColor: '#000',
//                     shadowOffset: { width: 0, height: 2 },
//                     shadowOpacity: 0.1,
//                     elevation: 2,
//                     // 关键：使其固定在顶部
//                     position: 'sticky',
//                     top: 0,
//                     zIndex: 99}}>
//                     <Text style={{}}>{item.title}</Text>
//                 </View>
//             );
//         }
//
//         return(<View style={{paddingVertical:appSize(10)}}>
//             <View style={{width:'100%',height:appSize(64),backgroundColor:'#123'}}>
//
//         </View>
//         </View>)
//     }
//
//     return(<View style={{flex:1,backgroundColor:""}}>
//
//         <Nav />
//
//         <FlashList renderItem={renderRow}
//                    estimatedItemSize={appSize(84)}
//                     // 3. 关键：通过 contentContainerStyle 添加 paddingTop，
//                     //    让列表内容从头部下方开始，实现“吸顶”效果
//                    contentContainerStyle={{ paddingTop: 60 }} // 高度需与头部高度匹配
//                    showsVerticalScrollIndicator={false}
//                    stickyHeaderConfig={{
//                        offset: 0, // 默认从屏幕顶部开始固定
//                        // backdropComponent: YourBackdropComponent, // 可选：自定义背景
//                        useNativeDriver: true,
//                        hideRelatedCell: true, // 隐藏列表中的原始项，避免重复
//                        onChangeStickyIndex: (current, previous) => {
//                            console.log(`新固定的头部索引: ${current}, 之前的索引: ${previous}`);
//                        },
//                    }}
//                    data={[1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99]}
//                    ListHeaderComponent={renderHeader}
//         />
//
//         {/*<BannerView />*/}
//
//         {/*<MenuBar />*/}
//
//         {/*<PagerView*/}
//         {/*    ref={pageraRef}*/}
//         {/*    onPageSelected={e => {*/}
//         {/*        const position = e.nativeEvent.position;*/}
//         {/*        //menuRef.current?.switchToTab(position);*/}
//         {/*    }}*/}
//         {/*    style={{ flex: 1, backgroundColor: '' }}>*/}
//
//         {/*    <LefePart />*/}
//
//         {/*    <LefePart />*/}
//
//         {/*</PagerView>*/}
//
//
//     </View>)
// }

import React, {
    forwardRef,
    ForwardedRef,
    useState,
    useCallback,
    useMemo,
} from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { FlashList, type FlashListRef } from "@shopify/flash-list";
import {appSize} from "../../Components/GStyles";

// Define our data structure
type Item =
    | {
    type: "basic";
    title: string;
}
    | {
    type: "header";
    title: string;
};

const data: Item[] = Array.from({ length: 300 }, (_, index) =>
    index % 20 === 0
        ? {
            type: "header",
            title: `Header ${index / 20 + 1}`,
        }
        : {
            type: "basic",
            title: `Item ${index - Math.floor(index / 20) + 1}`,
        }
);

const headerIndices = data
    .map((item, index) => (item.type === "header" ? index : null))
    .filter((item) => item !== null) as number[];

interface ToggleProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
}
const Toggle = ({ label, value, onChange }: ToggleProps) => {
    return (
        <View style={styles.toggleContainer}>
            <Text>{label}</Text>
            <Switch value={value} onValueChange={onChange} />
        </View>
    );
};

const ItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
};

export default function LifeIndexScreen() {



    const [stickyHeadersEnabled, setStickyHeadersEnabled] = useState(true);
    const [withStickyHeaderOffset, setWithStickyHeaderOffset] = useState(false);
    const [withStickyHeaderBackground, setWithStickyHeaderBackground] =
        useState(false);

    // Memoize the renderItem function
    const renderItem = useCallback(
        ({ item }: { item: Item }) => (
            <View style={item.type === "header" ? styles.headerItem : styles.item}>
                <Text>{item.title}</Text>
            </View>
        ),
        []
    );


    const BannerView = () => {

        return(<View style={{height:appSize(200),width:'100%',backgroundColor:'red'}}>

        </View>)
    }

    const stickyHeaderConfig = useMemo(
        () => ({
            offset: withStickyHeaderOffset ? 44 : 0,
            backdropComponent: withStickyHeaderBackground ? (
                <View style={styles.stickyHeaderBackdropContainer}>
                    <View style={styles.stickyHeaderBackground} />
                </View>
            ) : undefined,
        }),
        [withStickyHeaderOffset, withStickyHeaderBackground]
    );

    return (
        <View
            style={styles.container}
            key={`${stickyHeadersEnabled}-${withStickyHeaderOffset}-${withStickyHeaderBackground}`}
        >
            <View style={styles.listContainer}>
                <FlashList
                    renderItem={renderItem}
                    ListHeaderComponent={BannerView}
                    alwaysBounceVertical
                    data={data}
                    stickyHeaderIndices={
                        stickyHeadersEnabled ? headerIndices : undefined
                    }
                    stickyHeaderConfig={stickyHeaderConfig}
                    ItemSeparatorComponent={ItemSeparator}
                />
            </View>
        </View>
    );

}
// LifeIndexScreen.displayName = "LifeIndexScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    listContainer: {
        borderRadius: 20,
        backgroundColor: "#C0C0CC",
        margin: 16,
        overflow: "hidden",
        flex: 1,
    },
    itemSeparator: {
        height: 1,
        backgroundColor: "#CDCDCD",
    },
    stickyHeaderBackdropContainer: {
        position: "absolute",
        width: "100%",
        inset: 0,
    },
    stickyHeaderBackground: {
        height: 44,
        backgroundColor: "#40C4FF4C",
    },
    headerItem: {
        height: 44,
        backgroundColor: "#FFAB40AA",
        paddingHorizontal: 16,
        justifyContent: "center",
    },
    item: {
        height: 44,
        backgroundColor: "#E0E0E0",
        paddingHorizontal: 16,
        justifyContent: "center",
    },
});
