import {Image, ImageBackground, Pressable, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {goBack, navigate} from "../../../Navigator/NavigationService";
import React, {useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {ROUTES} from "../../../Components/Constant";
import WebView from "react-native-webview";
import {TabBarRenderProps} from "react-native-collapsible-tab";
import {formatDate} from "../../../Components/Tools";

export const Header = ({data}) => {

    // const insets =  useSafeAreaInsets()

    const [showMore,setShowMore] = useState(false)


    return(<View style={{alignItems:'center',width:'100%',backgroundColor:'#f7f7f7'}}>

        <ImageBackground source={require('../../../Assets/demo/demo1.png')} style={{position:'absolute',height:appSize(260),width:'100%',backgroundColor:'#12397850'}}>
            {/*<View style={{height:insets.top}} />*/}
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000060',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    //VideoViewRef.current?.enterFullscreen();
                    // VideoViewRef.current?.presentFullscreenPlayer();

                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000060',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_share.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

            </View>
        </ImageBackground>

        <View style={{position:'absolute',justifyContent:'center',alignItems:'center',right:appSize(20),top:appSize(180),backgroundColor:'#00000070',width:appSize(97),height:appSize(32),borderRadius:appSize(111)}} >
            <Text style={{color:'#fff',fontSize:appSize(14)}}>{data?.userLearnSum}人已学习</Text>
        </View>

        <View style={[{marginTop:appSize(230),paddingVertical:appSize(16),paddingHorizontal:appSize(12),borderRadius:appSize(12),width:appSize(361),backgroundColor:'#fff'}]}>


            <View style={{flexDirection:'row',width:'100%',height:appSize(44)}}>

                <Text numberOfLines={2} style={{flex:1,fontWeight:'800',fontSize:appSize(16),color:'#1A1A1A'}}>{data?.courseName}</Text>

                <View style={{flexDirection:'row',gap:appSize(12)}}>
                    <View style={{gap:appSize(4),justifyContent:'center',alignItems:'center',width:appSize(50)}}>
                        <View style={{height:appSize(14)}}>
                            <Image style={{height:appSize(13.54),width:appSize(17.07)}} source={require('../../../Assets/Life/class/like.png')} />
                        </View>
                        <Text style={{color:'#999999',fontSize:appSize(10)}}>{data?.likeCount}</Text>
                    </View>

                    <View style={{gap:appSize(4),justifyContent:'center',alignItems:'center',width:appSize(50)}}>
                        <Image style={{height:appSize(14),width:appSize(14)}} source={require('../../../Assets/Life/class/share.png')} />
                        <Text style={{color:'#999999',fontSize:appSize(10)}}>{data?.starCount}</Text>
                    </View>
                </View>

            </View>

            <View style={{paddingHorizontal:appSize(8),justifyContent:'center',width:'100%',height:appSize(28),marginTop:appSize(10),borderRadius:appSize(4),backgroundColor:'#F7F7F7'}} >
                <Text style={{color:'#333333',fontWeight:'bold',fontSize:appSize(12)}}>完成全部课程：成长等级<Text style={{color:'#10B981',fontSize:appSize(12)}}>+{data?.growNumSum}</Text></Text>
            </View>

            <Text numberOfLines={showMore?0:2} onPress={()=>{
                setShowMore(!showMore)
            }} style={{color:'#999999',lineHeight:appSize(22),marginTop:appSize(10),fontSize:appSize(14)}}>{data?.courseSummary}</Text>



        </View>

    </View>)
}

export const RenderRow = ({item,index,doExam=null}) => {

    console.log('RenderRow',item)
    if (item?.progressStatus == 1){
        return <RenderRowWaitExam item={item} examPress={doExam} />
    }else if(item?.progressStatus == 3){
        return <RenderRowPassExam item={item} />
    }else{
        return(<View style={{paddingVertical:appSize(6)}}>
            <TouchableOpacity onPress={()=>{
                navigate(ROUTES.CLASS_PLAYER)
            }} style={{gap:appSize(4),paddingVertical:appSize(12),paddingHorizontal:appSize(12),width:'100%',height:appSize(70),borderRadius:appSize(12),backgroundColor:'#fff'}}>
                <View style={{position:'absolute',right:0,justifyContent:'center',alignItems:'center',backgroundColor:'#99999920',width:appSize(28),height:appSize(28),borderTopRightRadius:appSize(12),borderBottomLeftRadius:appSize(8)}} >
                    <Image style={{width:appSize(28),height:appSize(28)}} source={require('../../../Assets/Life/class/localIcon.png')} />
                </View>

                <Text style={{color:'#333333',fontSize:appSize(16),fontWeight:'600'}}>{item?.courseChapterTitle}</Text>

                <View style={{flexDirection:'row',gap:appSize(6)}}>

                    <View style={{paddingHorizontal:appSize(8),paddingVertical:appSize(4),backgroundColor:'#F7F7F7',borderRadius:appSize(4)}}>
                        <Text style={{color:'#333333',fontSize:appSize(10)}}>成长等级<Text style={{color:'#10B981',fontSize:appSize(10)}}>+{item?.chapterGrowNum}</Text></Text>
                    </View>

                </View>

            </TouchableOpacity>
        </View>)
    }






}

export const RenderRowWaitExam = ({item,index,examPress}) => {

    return(<View style={{paddingVertical:appSize(6)}}>
        <TouchableOpacity onPress={()=>{
            navigate(ROUTES.CLASS_PLAYER)
        }} style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',paddingVertical:appSize(12),paddingHorizontal:appSize(12),width:'100%',height:appSize(70),borderTopRightRadius:appSize(12),borderTopLeftRadius:appSize(12),backgroundColor:'#fff'}}>

            <View>
                <Text style={{color:'#333333',fontSize:appSize(16),fontWeight:'600'}}>{item?.courseChapterTitle}</Text>

                <View style={{flexDirection:'row',gap:appSize(6),marginTop:appSize(6)}}>

                    <View style={{paddingHorizontal:appSize(8),paddingVertical:appSize(4),backgroundColor:'#F7F7F7',borderRadius:appSize(4)}}>
                        <Text style={{color:'#333333',fontSize:appSize(10)}}>成长等级<Text style={{color:'#10B981',fontSize:appSize(10)}}>+{item?.chapterGrowNum}</Text></Text>
                    </View>


                </View>
            </View>

            <Image style={{height:appSize(24),width:appSize(24)}} source={require('../../../Assets/Life/class/examing.png')} />





        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',paddingHorizontal:appSize(12),borderBottomRightRadius:appSize(12),borderBottomLeftRadius:appSize(12),height:appSize(40),width:'100%',backgroundColor:'#10B9811A'}}>

            <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>小结考核</Text>
            <TouchableOpacity onPress={()=>{

                if (examPress)examPress()

                // navigate(ROUTES.ClASS_EXAM)
            }} style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                <Text style={{color:'#10B981',fontSize:appSize(14),fontWeight:'600'}}>前往考核</Text>
                <Image style={{height:appSize(12),width:appSize(12)}} source={require('../../../Assets/Life/class/goexam.png')} />
            </TouchableOpacity>

        </View>
    </View>)
}

export const RenderRowPassExam = ({item,index}) => {

    return(<View style={{paddingVertical:appSize(6)}}>

        <TouchableOpacity onPress={()=>{
            navigate(ROUTES.CLASS_PLAYER)
        }} style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',paddingVertical:appSize(12),paddingHorizontal:appSize(12),width:'100%',height:appSize(70),borderTopRightRadius:appSize(12),borderTopLeftRadius:appSize(12),backgroundColor:'#fff'}}>

            <View>
                <Text style={{color:'#333333',fontSize:appSize(16),fontWeight:'600'}}>{item?.courseChapterTitle}</Text>

                <View style={{flexDirection:'row',gap:appSize(6),marginTop:appSize(6)}}>

                    <View style={{paddingHorizontal:appSize(8),paddingVertical:appSize(4),backgroundColor:'#F7F7F7',borderRadius:appSize(4)}}>
                        <Text style={{color:'#333333',fontSize:appSize(10)}}>成长等级<Text style={{color:'#10B981',fontSize:appSize(10)}}>+{item?.chapterGrowNum}</Text></Text>
                    </View>


                </View>
            </View>

            <Image style={{height:appSize(24),width:appSize(24)}} source={require('../../../Assets/Life/class/examok.png')} />





        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',paddingHorizontal:appSize(12),borderBottomRightRadius:appSize(12),borderBottomLeftRadius:appSize(12),height:appSize(40),width:'100%',backgroundColor:'#10B9811A'}}>

            <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>小结考核</Text>
            <Text style={{color:'#333333',fontSize:appSize(14),fontWeight:'600'}}>已通过</Text>

        </View>
    </View>)
}

export const MenuBar = ({tabNames,
                            tabLabels,
                            activeIndex,
                            onTabPress}) => {

    // const insets =  useSafeAreaInsets()


    const [classDetailType,setClassDetailType] = useState(1)

    return(<View style={{flexDirection:'row',backgroundColor:'#f7f7f7',alignItems:'flex-end',paddingBottom:appSize(10),gap:appSize(16),paddingHorizontal:appSize(16),height:appSize(50),width:'100%'}} >
      <TouchableOpacity onPress={()=>{
          setClassDetailType(1)
      }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
          <Text style={{fontWeight:classDetailType==1?'bold':'',fontSize:appSize(14),color:classDetailType==1?'#333333':'#909090'}}>课程详情</Text>
          <View style={{backgroundColor:classDetailType==1?'#10B981':'',borderRadius:appSize(10),width:appSize(30),height:appSize(3)}} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
          setClassDetailType(2)
      }} style={{justifyContent:'center',alignItems:'center',gap:appSize(3)}}>
          <Text style={{fontWeight:classDetailType==2?'bold':'',fontSize:appSize(14),color:classDetailType==2?'#333333':'#909090'}}>课程目录</Text>
          <View style={{backgroundColor:classDetailType==2?'#10B981':'',borderRadius:appSize(10),width:appSize(30),height:appSize(3)}} />
      </TouchableOpacity>
  </View>)
}

export const ClassSummary =({data})=>{
    return(<View style={[{backgroundColor:'#fff',borderRadius:appSize(12),paddingVertical:appSize(16),paddingHorizontal:appSize(12)}]}>
        <Text style={{fontWeight:'600',fontSize:appSize(14),color:'#000'}}>课程主题：{data?.courseName}</Text>
        <Text style={{fontSize:appSize(14),color:'#666',marginTop:appSize(20)}}>
            {data?.courseSummaryHtml}
        </Text>
    </View>)
}

export const RecProj = ({value}) => {

    console.log('value',value)

    return(<View style={{backgroundColor:'#fff',borderRadius:appSize(12),paddingVertical:appSize(16),paddingHorizontal:appSize(12)}}>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontWeight:'600',fontSize:appSize(14),color:'#333333'}}>{value?.jobTitle}</Text>
            <Text style={{fontWeight:'600',fontSize:appSize(14),color:'#FFA059'}}>¥ 1000起</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:appSize(4)}}>
            <Text style={{color:'#999999',fontSize:appSize(12)}}>{value?.jobCompanyName}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:appSize(4),marginTop:appSize(8)}} >
            <View>
                <View style={{flexDirection:'row',gap:appSize(4),paddingVertical:appSize(4),paddingHorizontal:appSize(8),backgroundColor:'#F7F7F7',borderRadius:appSize(4),alignItems:'center'}} >
                    <Image style={{width:appSize(15),height:appSize(15)}} source={require('../../../Assets/Startup/hugeicon.png')} />
                    <Text style={{color:'#666666',fontSize:appSize(12)}}>项目人数：{value?.jobRecruitsNumber} 人 | 截止 {formatDate(value?.jobApplicationDeadline)}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>{
                navigate(ROUTES.STARTUP_DETAIL)
            }}  style={{borderColor:'#10B981',borderRadius:appSize(20),borderWidth:1,paddingHorizontal:appSize(12),paddingVertical:appSize(4),justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#10B981'}}>立即加入</Text>
            </TouchableOpacity>
        </View>

    </View>)
}

export const PillTabBar = ({tabNames,
                      tabLabels,
                      activeIndex,
                      onTabPress,}: TabBarRenderProps) => {

    return (
        <View style={{flexDirection:'row',backgroundColor:'#f7f7f7',alignItems:'flex-end',paddingBottom:appSize(10),gap:appSize(16),paddingHorizontal:appSize(16),height:appSize(50),width:'100%'}}>
            {tabNames.map((name, i) => {
                const focused = i === activeIndex;
                return (
                    <Pressable
                        key={name}
                        accessibilityRole="tab"
                        accessibilityState={{ selected: focused }}
                        style={[{justifyContent:'center',alignItems:'center',gap:appSize(3)}, focused && {}]}
                        onPress={() => onTabPress(name)}>
                        <Text style={[{color:'#909090'}, focused && {color:'#000',fontWeight:'600'}]}>
                            {tabLabels[name] ?? name}
                        </Text>
                        <View style={{backgroundColor:focused?'#10B981':'',borderRadius:appSize(10),width:appSize(30),height:appSize(3)}} />
                    </Pressable>
                );
            })}
        </View>
    );
}

export const ReSizeWebView = () => {

    const injectedScript = `
      (function() {
        function sendHeight() {
          const height = document.documentElement.scrollHeight || document.body.scrollHeight;
          window.ReactNativeWebView.postMessage(JSON.stringify({ height: height }));
        }
        // 页面加载完成后发送高度
        window.addEventListener('load', sendHeight);
        // 如果内容在加载后可能变化（如点击展开），可监听窗口大小变化
        window.addEventListener('resize', sendHeight);
      })();
    `;

    const [webViewHeight, setWebViewHeight] = useState(200); // 初始高度

    const onMessage = (event) => {
        try {
            const { height } = JSON.parse(event.nativeEvent.data);
            if (height && height > 0) {
                setWebViewHeight(height);
                console.log(height)
            }
        } catch (error) {
            console.warn('Failed to parse height message:', error);
        }
    };

    return(<View>
        <WebView
            source={{ html: `
        <html>
          <body>
            <h1>Privacy policy</h1>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
            <p>Generated by your CMS and sized automatically ✨</p>
          </body>
        </html>
      `, }}
            style={{ height: webViewHeight }} // 动态设置高度
            injectedJavaScript={injectedScript}
            onMessage={onMessage}
            scrollEnabled={false} // 禁用 WebView 内部滚动，让父容器滚动[reference:11]
        />
    </View>)
}
