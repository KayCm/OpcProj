import {Image, TouchableOpacity, View, Text, ImageBackground, Pressable, Alert} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize, WINDOW_HEIGHT} from "../../../Components/GStyles";
import React, {useEffect, useRef, useState} from "react";
import {
    ClassSummary,
    Header,
    MenuBar,
    PillTabBar,
    RecProj,
    RenderRow,
} from "./Component";
import {TabBarRenderProps, Tabs} from 'react-native-collapsible-tab';
import {R_POST} from "../../../Services/NetRequestService";
import Modal from 'react-native-modal';
import {navigate} from "../../../Navigator/NavigationService";
import {ROUTES} from "../../../Components/Constant";






export default function ClassDetailScreen(props) {
    const insets =  useSafeAreaInsets()

    const [isModalVisible,setModalVisible] = useState(false)

    const [courseData,setCourseData] = useState(null)
    const [chapterList,setChapterList] = useState([])
    const [recommendList,setRecommendList] = useState([])




    const {courseId} = props?.route?.params


    console.log('courseId',courseId)

    useEffect(()=>{

        getDetail()

    },[])

    const getChapterList = () => {

        // /mobile/course/chapterList

        let url = '/mobile/course/chapterList'
        let params = {
            "pageNum": 1,
            "pageSize": 20,
            "orderBy": "",
            "userId": 9,
            "courseId": courseId
        }

        R_POST(url,params).then(res=>{
            console.log('chapterList:',res)
            setChapterList(res?.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    const getDetail = () => {

        let url = '/mobile/course/detail'
        let params = {
            "userId": 9,
            "courseId": courseId
        }

        R_POST(url,params).then(res=>{
            console.log('res:',res)
            setCourseData(res?.data)

            getChapterList()

            getRecommendList()

        }).catch(err=>{
            console.log(err)
        })

    }

    const getRecommendList= () => {

        let url = '/mobile/jobs/recommendList'

        let params = {
            "userId": 9,
            "pageNum": 1,
            "pageSize": 10,
            "orderBy": "",
        }

        R_POST(url,params).then(res=>{

            console.log('getRecommendList:',res)

            setRecommendList(res?.data)

        }).catch(err=>{
            console.log('err',err)
        })


    }

    const courseBuy = () => {

        // /mobile/course/buy

        let url = '/mobile/course/buy'
        let params = {
            "userId": 9,
            "courseId": 4
        }

        R_POST(url,params).then(res=>{
            console.log('res:',res)
            getDetail()
        }).catch(err=>{
            console.log(err)
        })

    }

    const leanSuccess = (ucid) => {

        console.log(ucid)

        let url = '/mobile/course/learnChapter'

        let params = {
            "userId": 9,
            "userChapterId": ucid,
            "learnStatus": 3
        }

        console.log(params)

        R_POST(url,params).then(res=>{

            console.log(res)

            getChapterList()

        }).catch(err=>{

        })


    }


    return(<View style={{flex:1,backgroundColor:'#f7f7f7'}}>
        <View style={{height:insets.top,width:'100%',backgroundColor:'#fff'}} />
        <Tabs.Container renderHeader={() => <Header data={courseData} />}  renderTabBar={(props)=><PillTabBar {...props}/>}>
            <Tabs.Tab name="summary" label="课程简介">
                <Tabs.ScrollView>
                    <View style={{backgroundColor:'#f7f7f7', paddingHorizontal:appSize(16),paddingBottom:appSize(24)}} contentContainerStyle={{ flexGrow: 1 }}>
                        <ClassSummary data={courseData} />
                        <Text style={{paddingTop:appSize(16),paddingBottom:appSize(6),fontSize:appSize(16),fontWeight:'600',color:'#000'}}>推荐项目</Text>

                        {recommendList?.map((value, index, array)=>{

                            return <RecProj value={value} />
                        })}


                    </View>
                </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab name="list" label="课程列表">
                <Tabs.FlatList style={{paddingHorizontal:appSize(16),backgroundColor:'#f7f7f7'}} data={chapterList} renderItem={(item)=>{

                    return <RenderRow item={item?.item} index={item?.index} doExam={()=>{

                        navigate(ROUTES.ClASS_EXAM,{userChapterId:item?.item?.userChapterId,updateFunc:(userChapterId,isPass)=>{

                            if (isPass){
                                leanSuccess(item?.item?.userChapterId)
                            }
                            console.log('result===============>',userChapterId,isPass)
                               // leanSuccess(item?.item?.userChapterId)
                        }})

                        // console.log(item?.item?.userChapterId)

                        // leanSuccess(item?.item?.userChapterId)
                    }} />
                }} />
            </Tabs.Tab>
        </Tabs.Container>

        <View style={{backgroundColor:'#fff',width:'100%',height:appSize(56)+insets.bottom}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:appSize(16),height:appSize(56),backgroundColor:'#fff',width:'100%'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:appSize(2)}}>
                    <Text style={{color:'#FFA059',fontSize:appSize(20)}}>¥{courseData?.coursePrice}</Text>
                    <Text style={{color:'#999999',fontSize:appSize(12),textDecorationLine: 'line-through'}}>¥{courseData?.strikeoutPrice}</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    setModalVisible(true)


                    // courseBuy()
                }} style={{backgroundColor:'#10B981',width:appSize(172),height:appSize(44),borderRadius:appSize(22),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:appSize(17)}}>立即购买</Text>
                </TouchableOpacity>
            </View>
        </View>



        <Modal
            style={{margin: 0}}
            isVisible={isModalVisible}>
            <View style={{flex: 1,justifyContent:'flex-end'}}>
                <View style={{alignItems:'center',paddingHorizontal:appSize(16),borderTopLeftRadius:appSize(24),borderTopRightRadius:appSize(24),width:'100%',backgroundColor:'#fff',height:appSize(322)+insets.bottom}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',backgroundColor:''}}>
                        <View style={{width:appSize(44),height:appSize(44)}}/>
                        <Text style={{color:'#000',fontWeight:'bold',fontSize:appSize(16)}}>确认支付</Text>
                        <TouchableOpacity onPress={()=>{
                            setModalVisible(false)
                        }} style={{justifyContent:'center',alignItems:'flex-end',width:appSize(44),height:appSize(44)}}>
                            <Image style={{height:appSize(14),width:appSize(14)}} source={require('../../../Assets/Life/class/icon_x.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',borderRadius:appSize(12),marginTop:appSize(12),width:'100%',paddingHorizontal:appSize(12),paddingVertical:appSize(12),backgroundColor:'#f7f7f7'}} >

                        <Image style={{height:appSize(96),width:appSize(96),borderRadius:appSize(12),backgroundColor:'#123'}} />

                        <View style={{height:appSize(96),justifyContent:'center',paddingLeft:appSize(12),flex:1,backgroundColor:''}}>

                            <Text style={{fontSize:appSize(16),fontWeight:'bold',color:'#1a1a1a'}}>{courseData?.courseName}</Text>
                            <Text style={{marginTop:appSize(8),fontSize:appSize(12),color:'#999999'}}>课程节数：{chapterList.length}   课程数量：1</Text>
                            <Text style={{marginTop:appSize(4),color:'#FFA059',fontSize:appSize(20)}}>¥{courseData?.coursePrice}</Text>

                        </View>

                    </View>


                    <View style={[GStyles.row, GStyles.jc,GStyles.ac, {marginTop:appSize(30),width: '100%',gap:appSize(4) }]}>
                        <TouchableOpacity onPress={()=>{
                            // setAgree(!agree)
                        }}>
                            <Image style={{marginTop:appSize(-0.5),width:appSize(14),height:appSize(14)}} source={1==1?require('../../../Assets/userManager/agree.png'):require('../../../Assets/userManager/unagree.png')}  />
                        </TouchableOpacity>
                        <Text style={{ color: '#999999',fontSize:appSize(13),marginTop:appSize(-1.5) }}>
                            我已确认阅读
                            <Text
                                style={{ color: '#10B981' }}
                                onPress={() => {
                                    // Alert.alert('用户协议');
                                  navigate(ROUTES.ClASS_BUY_NOTE)
                                }}
                            >
                                《购买须知》
                            </Text>

                        </Text>

                    </View>



                    <TouchableOpacity onPress={()=>{
                      courseBuy()
                    }} style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(22),marginTop:appSize(20),backgroundColor:'#10B981',width:appSize(280),height:appSize(44)}}>
                        <Text style={{fontSize:appSize(17),color:'#fff',fontWeight:'bold'}}>立即支付 ¥{courseData?.coursePrice}</Text>
                    </TouchableOpacity>



                </View>
            </View>
        </Modal>




    </View>)
}
