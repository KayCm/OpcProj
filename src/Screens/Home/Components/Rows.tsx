import {Image, Text, TouchableOpacity, View} from "react-native";
import {appSize} from "../../../Components/GStyles";
import React from "react";
import {formatNumber} from "../../../Components/Tools";
import {navigate} from "../../../Navigator/NavigationService";
import {ROUTES} from "../../../Components/Constant";

export const HeaderNews = () => {

    return(<View style={{backgroundColor:'#ffffff',height:appSize(228),width:appSize(264),borderRadius:appSize(12)}}>
        <Image style={{backgroundColor:'#123',height:appSize(148),width:appSize(264),borderTopRightRadius:appSize(12),borderTopLeftRadius:appSize(12)}} />

        <View style={{flex:1,justifyContent: 'space-between',paddingHorizontal:appSize(12),paddingTop:appSize(6),paddingBottom:appSize(12)}}>

            <Text numberOfLines={2} style={{lineHeight:appSize(19),color:'#1A1A1A',fontSize:appSize(14),fontWeight:'800'}}>程凯会见乌兹别克斯坦国家社会保障署署长一行程凯会见乌兹别克斯坦国家社会保障署署长一行</Text>

            <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'flex-end'}}>

                <Text numberOfLines={1} style={{width:appSize(180),color:'#999999',fontSize:appSize(12)}}>程凯会见乌兹别克斯坦国家社会保障署署长一行</Text>

                <View style={{gap:appSize(2),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image source={require('../../../Assets/Home/article_icon_read.png')} style={{width:appSize(16),height:appSize(16),backgroundColor:''}}/>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>{formatNumber(12443)}</Text>
                </View>

            </View>

        </View>
    </View>)

}

export const RowWithText = ({item,index}) => {

    // console.log("item",item)
    // console.log("index",index)

    return(<View id={index} style={{paddingVertical:appSize(6)}}>

        <TouchableOpacity onPress={()=>{
        //navigate(ROUTES.LIFE_ACT_SIGNIN)

            navigate('Detail', { item: item });


    }} style={{backgroundColor:'#ffffff',justifyContent: 'space-between',borderRadius:appSize(12),width:'100%',height:appSize(108),paddingHorizontal:appSize(12),paddingVertical:appSize(12)}}>
        <Text numberOfLines={3} style={{lineHeight:appSize(18),color:'#1A1A1A',fontSize:appSize(14),fontWeight:'600'}}>{item?.title}</Text>
        <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'flex-end'}}>
            <Text style={{color:'#999999',fontSize:appSize(12)}}>发布时间 {item?.updateTime}</Text>
            <View style={{gap:appSize(8),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                <View style={{gap:appSize(2),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image source={require('../../../Assets/Home/article_icon_read.png')} style={{width:appSize(16),height:appSize(16),backgroundColor:''}}/>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>{formatNumber(123)}</Text>
                </View>

                <View style={{gap:appSize(2),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image source={require('../../../Assets/Home/article_icon_fav.png')} style={{width:appSize(16),height:appSize(16),backgroundColor:''}}/>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>{formatNumber(1111)}</Text>
                </View>

                <View style={{gap:appSize(2),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image  source={require('../../../Assets/Home/article_icon_share.png')} style={{width:appSize(16),height:appSize(16),backgroundColor:''}}/>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>{formatNumber(11111)}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>

    </View>)
}

export const RowWithTextImg = ({item,index}) => {
    return( <TouchableOpacity onPress={()=>{
        navigate('Detail', { item: item });
    }} style={{paddingVertical:appSize(6)}}>
        <View style={{backgroundColor:'#ffffff',justifyContent: 'space-between',borderRadius:appSize(12),width:'100%',height:appSize(108),paddingHorizontal:appSize(12),paddingVertical:appSize(12)}}>

        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text numberOfLines={3} style={{lineHeight:appSize(18),flex:1,color:'#1A1A1A',fontSize:appSize(14),fontWeight:'600'}}>{item?.title}</Text>

            <Image style={{width:appSize(72),height:appSize(56),backgroundColor:'#123',borderRadius:appSize(4)}}/>
        </View>

        <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'flex-end'}}>
            <Text style={{color:'#999999',fontSize:appSize(12)}}>发布时间 {item?.updateTime}</Text>
            <View style={{gap:appSize(8),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                <View style={{gap:appSize(2),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image source={require('../../../Assets/Home/article_icon_read.png')} style={{width:appSize(16),height:appSize(16),backgroundColor:''}}/>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>{formatNumber(11111)}</Text>
                </View>

                <View style={{gap:appSize(2),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image source={require('../../../Assets/Home/article_icon_fav.png')} style={{width:appSize(16),height:appSize(16),backgroundColor:''}}/>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>{formatNumber(11111)}</Text>
                </View>

                <View style={{gap:appSize(2),flexDirection:'row',justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image  source={require('../../../Assets/Home/article_icon_share.png')} style={{width:appSize(16),height:appSize(16),backgroundColor:''}}/>
                    <Text style={{color:'#999999',fontSize:appSize(12)}}>{formatNumber(11111)}</Text>
                </View>
            </View>
        </View>
    </View>
    </TouchableOpacity>)
}

export const renderRow = ({item,index})=>{

    if (index == 0){
        return(<View style={{paddingHorizontal:appSize(16),paddingTop:appSize(20),paddingBottom:appSize(4)}}>
            <Text style={{color:'#1A1A1A',fontSize:appSize(16)}}>每日推送</Text>
        </View>)
    }

    if (item?.contentType == 'text'){
        return(<View style={{paddingHorizontal:appSize(16)}}>{RowWithText({item,index})}</View>)
    }else{
        return(<View style={{paddingHorizontal:appSize(16)}}>{RowWithTextImg({item, index})}</View>)
    }

}
