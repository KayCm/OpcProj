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
// import OffLineEvent from "./Components/OffLineEvent";
// import {goBack} from "../../Navigator/NavigationService";
// import DataList from "../../Components/DataList";
// import OnLineClass from "./Components/OnLineClass";



// export default function LifeIndexScreen() {
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
//
//     return(<View style={{flex:1,backgroundColor:""}}>
//         <Nav />
//
//     </View>)
// }

import React, {
    forwardRef,
    ForwardedRef,
    useState,
    useCallback,
    useMemo, useEffect,
} from "react";
import {Text, View, Switch, StyleSheet, TouchableOpacity, Image, ImageBackground} from "react-native";
import { FlashList, type FlashListRef } from "@shopify/flash-list";
import GStyles, {appSize} from "../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Card, LongCard,ClassCard} from "./Components/Rows";
import {navigate} from "../../Navigator/NavigationService";
import {ROUTES} from "../../Components/Constant";
import {R_POST} from "../../Services/NetRequestService";

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
    index  === 0 ? {type: "header",title: `Header ${index / 20 + 1}`,} : {type: "basic", title: `Item ${index - Math.floor(index / 20) + 1}`,}
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


const OffLineMenuTags = [
    {name:'最新活动',bg:require('../../Assets/Life/menuBg1.png')},
    {name:'我的活动',bg:require('../../Assets/Life/menuBg2.png')},
    {name:'往期活动',bg:require('../../Assets/Life/menuBg3.png')},
]

const classMenuTags = [
    {name:'推荐课程',bg:require('../../Assets/Life/classMenuBg2.png')},
    {name:'我的课程',bg:require('../../Assets/Life/classMenuBg1.png')},
]


export default function LifeIndexScreen() {


    const insets =  useSafeAreaInsets()

    const [MenuSelect,setMenuSelect] = useState(1)
    const [OffLineMenuSelect,setOffLineMenuSelect] = useState(0)
    const [OnLineMenuSelect,setOnLineMenuSelect] = useState(0)

    const getList = () => {

        let url = '/mobile/course/list';

        R_POST(url,{}).then(res=>{
            
            console.log("res:",res)

        }).catch(err=>{
            console.log(err)
        })

    }

    useEffect(()=>{

        getList()

    },[])

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jc,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <Text style={{color:'#1A1A1A',fontSize:appSize(17),fontWeight:'800'}}>精彩生活</Text>
            </View>
        </View>)
    }

    const MenuBar = () => {

        return(<View style={{backgroundColor:'',flexDirection:'row',alignItems:'center',justifyContent: 'space-between',width:appSize(203)}}>

            <TouchableOpacity onPress={()=>{
                setMenuSelect(1)
            }} style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:MenuSelect==1?'#10B981':'',fontWeight:MenuSelect==1?'800':'400',fontSize:MenuSelect==1?appSize(17):appSize(16)}}>线下活动</Text>
                <View style={{marginTop:appSize(2),backgroundColor:MenuSelect==1?'#10B981':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setMenuSelect(2)
            }} style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:MenuSelect==2?'#10B981':'',fontWeight:MenuSelect==2?'800':'400',fontSize:MenuSelect==2?appSize(17):appSize(16)}}>课程培训</Text>
                <View style={{marginTop:appSize(2),backgroundColor:MenuSelect==2?'#10B981':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
            </TouchableOpacity>

        </View>)
    }

    const OffLineMenuBar = () => {

        return(<ImageBackground source={OffLineMenuTags[OffLineMenuSelect]?.bg} style={{height:appSize(52),width:appSize(393)}} >

            <View style={{flexDirection:'row',height:appSize(36),width:'100%'}}>
                {OffLineMenuTags.map((value, index, array)=>{

                    if (index == 1){
                        return(<TouchableOpacity onPress={()=>{
                            setOffLineMenuSelect(index)
                        }} key={index} style={{flex:1,gap:appSize(4),flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                            <Text style={{color:'#353535',fontSize:appSize(14),fontWeight:OffLineMenuSelect == index?'800':'400'}}>{value?.name}</Text>
                            <View style={{backgroundColor:'#FF4040',borderRadius:appSize(16),width:appSize(16),height:appSize(16),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:appSize(10),fontWeight:'800',color:'#ffffff'}}>1</Text>
                            </View>
                            {OffLineMenuSelect == index && <Image source={require('../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                        </TouchableOpacity>)
                    }

                    return(<TouchableOpacity onPress={()=>{
                        setOffLineMenuSelect(index)
                    }} key={index} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                        <Text style={{color:'#353535',fontSize:appSize(14),fontWeight:OffLineMenuSelect == index?'800':'400'}}>{value?.name}</Text>
                        {OffLineMenuSelect == index && <Image source={require('../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                    </TouchableOpacity>)
                })}
            </View>
        </ImageBackground>)

    }

    const OnLineMenuBar = () => {
        return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>

            <ImageBackground source={classMenuTags[OnLineMenuSelect]?.bg} style={{height:appSize(52),width:appSize(393)}} >
                <View style={{flexDirection:'row',height:appSize(36),width:'100%'}}>
                    {classMenuTags.map((value, index, array)=>{

                        if (index == 1){
                            return(<TouchableOpacity onPress={()=>{
                                setOnLineMenuSelect(index)
                            }} key={index} style={{flex:1,gap:appSize(4),flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                                <Text style={{color:'#353535',fontSize:appSize(14),fontWeight:OnLineMenuSelect == index?'800':'400'}}>{value?.name}</Text>
                                <View style={{backgroundColor:'#FF4040',borderRadius:appSize(16),width:appSize(16),height:appSize(16),justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:appSize(10),fontWeight:'800',color:'#ffffff'}}>1</Text>
                                </View>
                                {OnLineMenuSelect == index && <Image source={require('../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                            </TouchableOpacity>)
                        }

                        return(<TouchableOpacity onPress={()=>{
                            setOnLineMenuSelect(index)
                        }} key={index} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{color:'#353535',fontSize:appSize(14),fontWeight:OnLineMenuSelect == index?'800':'400'}}>{value?.name}</Text>
                            {OnLineMenuSelect == index && <Image source={require('../../Assets/Life/selected.png')} style={{position: 'absolute',width:appSize(60),height:appSize(12)}} />}
                        </TouchableOpacity>)
                    })}
                </View>
            </ImageBackground>

        </View>)
    }

    function getRowNumber() {

        if (MenuSelect == 1){

            if (OffLineMenuSelect == 1){
                return 1
            }else{
                return 2
            }

        }else {
            return 2
        }

    }

    const [stickyHeadersEnabled, setStickyHeadersEnabled] = useState(true);
    const [withStickyHeaderOffset, setWithStickyHeaderOffset] = useState(false);
    const [withStickyHeaderBackground, setWithStickyHeaderBackground] = useState(false);

    // Memoize the renderItem function
    const renderItem = useCallback(
        ({ item }: { item: Item }) => (
            item.type === "header" ? (<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#f7f7f7'}}>
                <View style={{paddingTop:appSize(20),paddingBottom:appSize(16)}}>
                    <MenuBar />
                </View>
                    {MenuSelect == 1?<OffLineMenuBar />:<OnLineMenuBar />}
            </View>) :<View style={{paddingVertical:appSize(4),justifyContent:'center',alignItems:'center'}}>
                {MenuSelect==1? getRowNumber()==2?<Card onPress={()=>{
                    navigate(ROUTES.LIFE_ACT_DETAIL)
                }} />:<LongCard onPress={()=>{
                    navigate(ROUTES.LIFE_ACT_DETAIL)
                }} />:<ClassCard onPress={()=>{
                    navigate(ROUTES.CLASS_DETAIL)
                }} />}

                {/*{getRowNumber()==2?<Card onPress={()=>{*/}
                {/*}*/}
                {/*} />:<LongCard />}*/}
            </View>
        ),[MenuSelect,OffLineMenuSelect,OnLineMenuSelect]);


    const BannerView = () => {

        return(<View style={{height:appSize(230),justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:''}}>

            <Image source={require('../../Assets/demo/demo11.png')} style={[styles.shadowContainer,{borderRadius:appSize(16),width:appSize(361),height:appSize(202),backgroundColor:''}]} />

        </View>)
    }

    const stickyHeaderConfig = useMemo(
        () => ({
            offset: withStickyHeaderOffset ? 44 : 0,
            backdropComponent: withStickyHeaderBackground ? (
                <View style={styles.stickyHeaderBackdropContainer}>
                    <View style={styles.stickyHeaderBackground} />
                    {/*<MenuBar />*/}
                </View>
            ) : undefined,
        }),
        [withStickyHeaderOffset, withStickyHeaderBackground]
    );

    return (
        <View
            style={styles.container}
            key={`${stickyHeadersEnabled}-${withStickyHeaderOffset}-${withStickyHeaderBackground}`}>
            <Nav />
            <View style={styles.listContainer}>
                <FlashList
                    renderItem={renderItem}
                    ListHeaderComponent={BannerView}
                    alwaysBounceVertical
                    data={data}
                    estimatedItemSize={100}
                    keyExtractor={(_: any, index: number) => index.toString()}
                    numColumns={2}
                    overrideItemLayout={(layout, item, index) => {
                        if (index === 0) {
                            layout.span = 2; // 让第一个 Item 跨两列，实现独占一行的效果
                        }
                        if (getRowNumber() == 1){
                            layout.span = 2;
                        }
                        // 其他 Item 保持默认，即 span = 1
                    }}
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
        // borderRadius: 20,
        backgroundColor: "#f7f7f7",
        overflow: "hidden",
        flex: 1,
    },
    itemSeparator: {
        height: 1,
        // backgroundColor: "#CDCDCD",
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
        // height: 44,
        // backgroundColor: "#f7f7f7",
        // paddingHorizontal: 16,
        // justifyContent: "center",
    },
    shadowContainer: {
        width:appSize(361),
        height:appSize(202),
        backgroundColor: '#00000000',
        borderRadius: appSize(16),
        // 使用 boxShadow 属性
        boxShadow: [
            {
                offsetX: 0,          // 水平偏移
                offsetY: 4,          // 垂直偏移
                blurRadius: 8,       // 模糊半径
                spreadDistance: 0,   // 扩散距离
                color: 'rgba(0, 0, 0, 0.3)', // 阴影颜色
            },
        ],
    },
});


