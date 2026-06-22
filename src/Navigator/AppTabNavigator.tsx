import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIndexScreen from "../Screens/Home/HomeIndexScreen";
import MineIndexScreen from "../Screens/Mine/MineIndexScreen";
import {useLinkBuilder} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize, TRUE_ONE_LINE, WINDOW_WIDTH} from "../Components/GStyles";
import {View, Image, Text, ImageBackground} from "react-native";
import {Route} from "@react-navigation/routers";
import {PlatformPressable} from "@react-navigation/elements";
import {MAIN_COLOR, ROUTES} from "../Components/Constant";
import StartupIndexScreen from "../Screens/Startup/MakeIndexScreen";
import {navigate} from "./NavigationService";
import LifeIndexScreen from "../Screens/Life/LifeIndexScreen";
import MapIndexScreen from "../Screens/Map/MapIndexScreen";


const Tab = createBottomTabNavigator();

function AppBottomTabBar({ state, descriptors, navigation }) {
    // const { colors } = useTheme();

    //const userInfo = useSelector(state => state?.userInfo);

    const { buildHref } = useLinkBuilder();
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flexDirection: 'row',
                // position: 'absolute',
                // bottom: 0,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#fff',
                height: appSize(60) + insets.bottom,
                paddingBottom:insets.bottom,
                borderTopRightRadius:appSize(30),
                borderTopLeftRadius:appSize(30),
            }}>

            <View style={{
                flexDirection: 'row',
                height: appSize(60),
                width: WINDOW_WIDTH,
                alignItems:'flex-end',
                borderTopWidth:TRUE_ONE_LINE,
                borderTopColor:'#8a8a8a30',
                borderTopRightRadius:appSize(30),
                borderTopLeftRadius:appSize(30),

            }}>
                {state.routes.map((route: Route<any>, index: number) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {

                        // console.log(userInfo)
                        // console.log(label)

                        if (ROUTES.STARTUP_TAB == label ){

                            navigate(ROUTES.LOGIN)

                        }else{

                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name, route.params);
                            }

                        }

                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    let Icon:any = null;
                    switch (label) {
                        default:
                        case ROUTES.NEWS_TAB:{
                            Icon = isFocused ? <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_1_selected.png')} />
                                : <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_1_unselect.png')} />
                            break;
                        }
                        case ROUTES.LIFE_TAB:{
                            Icon = isFocused ? <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_2_selected.png')} />
                                : <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_2_unselect.png')} />
                            break;
                        }
                        case ROUTES.MAP_TAB:{
                            Icon = isFocused ? <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_3_selected.png')} />
                                : <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_3_unselect.png')} />
                            break;
                        }
                        case ROUTES.MINE_TAB:{
                            Icon = isFocused ? <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_4_selected.png')} />
                                : <Image style={{height:appSize(18),width:appSize(18)}} source={require('../Assets/Tabs/tab_nor_4_unselect.png')} />
                            break;
                        }
                    }

                    if (label == ROUTES.STARTUP_TAB){
                        return (<PlatformPressable
                            key={index}
                            href={buildHref(route.name, route.params)}
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarButtonTestID}
                            pressOpacity={1}
                            pressColor={'#00000000'}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: isFocused ? 'red' : '',
                                height:appSize(80)
                            }}>
                            <View style={[GStyles.jc,GStyles.ac,{height:appSize(70),width:appSize(100),borderTopLeftRadius:appSize(50),borderTopRightRadius:appSize(50),backgroundColor:'#fff'}]}>
                                <ImageBackground style={[GStyles.jc,GStyles.ac,{backgroundColor:MAIN_COLOR,marginTop:appSize(-8), width:appSize(50),height:appSize(50),borderRadius:appSize(25)}]} >
                                    <Image source={require('../Assets/Tabs/tab_middle_icon.png')} style={{height:appSize(29.18),width:appSize(27.99)}} />
                                </ImageBackground>
                            </View>
                        </PlatformPressable>)
                    }

                    return (
                        <PlatformPressable
                            key={index}
                            href={buildHref(route.name, route.params)}
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarButtonTestID}
                            pressOpacity={1}
                            pressColor={'#00000000'}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: isFocused ? 'red' : '',
                                height:appSize(60)
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                {Icon}
                                <Text style={{
                                    color: isFocused ? '#1C1A17' : '#999999',
                                    marginTop: appSize(7.5),
                                    fontSize: isFocused ?appSize(10):appSize(10),
                                    fontWeight: isFocused ? '600' : '400',
                                    // letterSpacing:isFocused ? appSize(1.25):0
                                }}>
                                    {label}
                                </Text>
                            </View>
                        </PlatformPressable>
                    );
                })}
            </View>
        </View>
    );

}


export default function AppTabNavigator() {
    return (<Tab.Navigator initialRouteName={ROUTES.NEWS_TAB} screenOptions={{headerShown: false}} tabBar={props => <AppBottomTabBar {...props} />}>
        <Tab.Screen name={ROUTES.NEWS_TAB} component={HomeIndexScreen} />
        <Tab.Screen name={ROUTES.LIFE_TAB} component={LifeIndexScreen} />
        <Tab.Screen name={ROUTES.STARTUP_TAB} component={StartupIndexScreen} />
        <Tab.Screen name={ROUTES.MAP_TAB} component={MapIndexScreen} />
        <Tab.Screen name={ROUTES.MINE_TAB} component={MineIndexScreen} />
    </Tab.Navigator>);
}

