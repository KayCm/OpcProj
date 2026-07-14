import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import GStyles, {appSize, WINDOW_HEIGHT, WINDOW_WIDTH} from '../../Components/GStyles.ts';
// import Carousel from 'react-native-reanimated-carousel/src/components/Carousel.tsx';
import LinearGradient from 'react-native-linear-gradient';

import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import {HeaderNews, renderRow, RowWithText, RowWithTextImg} from "./Components/Rows";
import {LOGIN_BG_NORMORL} from "../../Components/Constant";
import DataList from "../../Components/DataList";
import {useSafeAreaInsets} from "react-native-safe-area-context";
export default function HomeIndexScreen() {

    const insets =  useSafeAreaInsets()

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

    const HomeHeader = () => {

        return(<View style={{width:'100%',alignItems:'center',backgroundColor:'',height:appSize(401)}}>
            <ImageBackground source={require('../../Assets/demo/demo2.png')} style={{position:'absolute',backgroundColor:'red',width:'100%',height:appSize(280)}} >


                <View style={{marginTop:appSize(100),flexDirection:'row',gap:appSize(16),paddingHorizontal:appSize(16),height:appSize(28),width:'100%'}} >
                    <TouchableOpacity onPress={()=>{
                        setMenuSelect(1)
                    }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
                        <Text style={{fontSize:menuSelect==1?appSize(20):appSize(16),color:menuSelect==1?'#FFFFFF':'#ffffff'}}>行业资讯</Text>
                        <View style={{backgroundColor:menuSelect==1?'#FFFFFF':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                        setMenuSelect(2)
                    }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
                        <Text style={{fontSize:menuSelect==2?appSize(20):appSize(16),color:menuSelect==2?'#FFFFFF':'#ffffff'}}>我的订阅</Text>
                        <View style={{backgroundColor:menuSelect==2?'#FFFFFF':'',borderRadius:appSize(10),width:appSize(30),height:appSize(3)}} />
                    </TouchableOpacity>
                </View>

                <LinearGradient
                    colors={['#ffffff00','#f7f7f7']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{position: 'absolute',bottom:0, width: '100%', height: appSize(60) }} />
            </ImageBackground>

            <Image source={require('../../Assets/demo/demo11.png')} style={[
                {marginTop:appSize(200),borderRadius:appSize(16),width:appSize(361),height:appSize(202),backgroundColor:''},
                styles.shadowContainer]
            } />

        </View>)
    }

    const renderEmpty = () => {
      return(<View style={{backgroundColor:'',width:'100%',height:'100%',alignItems:'center'}}>

          <View style={{alignItems:'center',marginTop:appSize(100)}}>

              <Image style={{width:appSize(163),height:appSize(122.5)}} source={require('../../Assets/Home/emptyImg.png')} />
              <Text style={{fontSize:appSize(14),color:'#999999'}}>更多资讯，敬请期待</Text>

          </View>

      </View>)
    }

    const [menuAlpha,setMenuAlpha] = useState(0)
    const [menuSelect,setMenuSelect] = useState(1)

    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const currentOffset = contentOffset.y; // 获取垂直滚动距离[reference:3]
        console.log('当前滚动距离:', currentOffset);

        setMenuAlpha(currentOffset/400)
        // 360
        // 可以在这里根据滚动距离执行其他逻辑，例如：
        // - 判断是否滚动到底部[reference:4]
        // - 控制“回到顶部”按钮的显隐[reference:5]
        // - 触发下拉刷新等[reference:6]
    };

    return(<View style={{flex:1,backgroundColor:'#f7f7f7'}}>

        <View style={{opacity:menuAlpha,position:'absolute',justifyContent:'flex-end',zIndex:9,width:'100%',height:appSize(44)+insets.top,backgroundColor:'#ffffff'}} >


            <View style={{flexDirection:'row',gap:appSize(16),alignItems:'center',paddingHorizontal:appSize(16),height:appSize(44),width:'100%'}} >
                <TouchableOpacity onPress={()=>{
                    setMenuSelect(1)
                }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
                    <Text style={{fontSize:appSize(14),color:menuSelect==1?'#333333':'#909090'}}>行业资讯</Text>
                    <View style={{backgroundColor:menuSelect==1?'#10B981':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setMenuSelect(2)
                }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
                    <Text style={{fontSize:appSize(14),color:menuSelect==2?'#333333':'#909090'}}>我的订阅</Text>
                    <View style={{backgroundColor:menuSelect==2?'#10B981':'',borderRadius:appSize(3),width:appSize(30),height:appSize(3)}} />
                </TouchableOpacity>
            </View>

        </View>

        <DataList
            key={1}
            renderHeader={HomeHeader}
            renderRow={renderRow}
            renderEmpty={renderEmpty}
            url={menuSelect==1?'/open-api/mobile/home/material/normal/list':'/open-api/mobile/home/material/byTag/list'}
            params={menuSelect==1?{}:{
                "tagId": 15,
                "pageNum": 1,
                "pageSize": 10
            }}
            queryKey={menuSelect==1?'normal-list':'normal-list1'}
            onScroll={handleScroll}
        />



    </View>)




    return(<View style={{flex:1,backgroundColor:''}}>

        <DataList
            key={1}
            renderRow={renderRow}
            url={'/open-api/mobile/home/material/normal/list'}
            params={{}}
            queryKey={'normal-list'}
        />


        {/*<BannerView />*/}
        {/*<MenuView />*/}



        {/*<View style={{paddingHorizontal:appSize(16)}}>*/}

        {/*    <HeaderNews />*/}
        {/*    <View style={{height:10}} />*/}

        {/*    <RowWithText />*/}

        {/*    <View style={{height:10}} />*/}

        {/*    <RowWithTextImg />*/}
        {/*</View>*/}

    </View>)
}



const styles = StyleSheet.create({
    shadowContainer: {
        width:appSize(361),
        height:appSize(202),
        backgroundColor: '#00000000',
        borderRadius: appSize(16),
        // 使用 boxShadow 属性
        boxShadow: [
            {
                offsetX: 0,
                offsetY: 4,
                blurRadius: 8,
                spreadDistance: 0,
                color: 'rgba(0, 0, 0, 0.3)',
            },
        ],
    },
});
