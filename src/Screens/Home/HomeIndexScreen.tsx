import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import GStyles, {appSize, WINDOW_HEIGHT, WINDOW_WIDTH} from '../../Components/GStyles.ts';
// import Carousel from 'react-native-reanimated-carousel/src/components/Carousel.tsx';
import LinearGradient from 'react-native-linear-gradient';

import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import {HeaderNews, RowWithText, RowWithTextImg} from "./Components/Rows";
import {LOGIN_BG_NORMORL} from "../../Components/Constant";
export default function HomeIndexScreen() {

    const BannerView = () => {


      const renderItem = (item) => {

        console.log(item);

        return (<ImageBackground  source={require('../../Assets/demo/11.png')} style={{justifyContent:'center',alignItems:'center',width: WINDOW_WIDTH,height:appSize(245),backgroundColor:'#123'}}>

            <Text>{item?.index}</Text>
            <Text>{item?.item}</Text>
            <Text>{item?.item}</Text>
            <Text>{item?.item}</Text>
            <Text>{item?.item}</Text>
            <Text>{item?.item}</Text>
            <Text>{item?.item}</Text>
            <Text>{item?.item}</Text>

            <LinearGradient
                colors={['#ffffff00','#ffffff']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{position: 'absolute',bottom:0, width: '100%', height: appSize(44) }} />
        </ImageBackground>);

      };

      return (
        <Carousel
          loop={true}
          snapEnabled={true}
          pagingEnabled={true}
          // autoPlayInterval={1000}
          data={[1,2,3,4,5]}
          width={WINDOW_WIDTH}
          // scrollOffsetValue={scrollOffsetValue}
          style={{
            width: WINDOW_WIDTH ,
            height: appSize(245),
            backgroundColor: '',
          }}
          onScrollStart={() => {
            console.log('Scroll start');
          }}
          onScrollEnd={() => {
            console.log('Scroll end');
          }}
          onSnapToItem={(index: number) => console.log('current index:', index)}
          renderItem={renderItem}
        />);

    }

    const MenuView = () => {

        const menus = [
            '新闻热点',
            '政策文件',
            '官方通知',
            '活动讯息'
        ]

        return(<View style={[GStyles.row,GStyles.ac,{gap:appSize(12),width:'100%',height:appSize(36)}]}>

            <TouchableOpacity style={{paddingVertical:appSize(4),justifyContent:'center',alignItems:'center',backgroundColor:""}}>
                <Text style={{color:'#1A1A1A',fontSize:appSize(16),fontWeight:'800'}}>新闻热点</Text>
                <View style={{width:appSize(25),height:appSize(4),marginTop:appSize(2),borderRadius:appSize(2),backgroundColor:'#60A5FA'}} />
            </TouchableOpacity>


            <TouchableOpacity style={{paddingVertical:appSize(4),justifyContent:'center',alignItems:'center',backgroundColor:""}}>
                <Text style={{color:'#909090',fontSize:appSize(14),fontWeight:'800'}}>政策文件</Text>
                <View style={{width:appSize(25),height:appSize(4),marginTop:appSize(2),borderRadius:appSize(2),backgroundColor:''}} />
            </TouchableOpacity>
        </View>)

    }


    return(<View style={{flex:1,backgroundColor:''}}>
        <BannerView />
        <MenuView />



        <View style={{paddingHorizontal:appSize(16)}}>

            <HeaderNews />
            <View style={{height:10}} />

            <RowWithText />

            <View style={{height:10}} />

            <RowWithTextImg />
        </View>

    </View>)
}
