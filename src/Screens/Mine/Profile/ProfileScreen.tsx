import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize} from "../../../Components/GStyles";
import Arrow from "../../../Assets/Profile/Arrow";
import NavBack from "../../../Assets/Common/NavBack";
import {goBack, navigate} from "../../../Navigator/NavigationService";
import {ROUTES} from "../../../Components/Constant";
import {MenuBarComp} from "./MenuBarComp";


const proMeunsArr1 = [
    {icon:require('../../../Assets/Profile/pro_icon1.png'),title:'个人资料',press:()=>navigate(ROUTES.PROFILE_SRC_EDIT)},
    {icon:require('../../../Assets/Profile/pro_icon2.png'),title:'身份信息',press:()=>navigate(ROUTES.IDENTITY_EDIT)},
    {icon:require('../../../Assets/Profile/pro_icon3.png'),title:'账号安全',press:()=>navigate(ROUTES.ACCOUNT_SECURITY)},
    {icon:require('../../../Assets/Profile/pro_icon4.png'),title:'我的收藏',press:()=>navigate(ROUTES.MY_FAVORITE)},
    {icon:require('../../../Assets/Profile/pro_icon5.png'),title:'通知管理',press:()=>navigate(ROUTES.NOTIFICATION)},
]


const proMeunsArr2 = [
    {icon:require('../../../Assets/Profile/pro_icon6.png'),title:'常见问题',press:()=>navigate(ROUTES.FAQ)},
    {icon:require('../../../Assets/Profile/pro_icon7.png'),title:'意见反馈',press:()=>navigate(ROUTES.FEEDBACK)},
    {icon:require('../../../Assets/Profile/pro_icon8.png'),title:'关于我们',press:()=>navigate(ROUTES.ABOUT)},
]


function ProfileScreen() {

    const insets =  useSafeAreaInsets()

    // const ClickBar = ({icon,title,onPress}) => {
    // <View style={{backgroundColor:'#123',width:appSize(22),height:appSize(22)}} />
    //     return(<TouchableOpacity onPress={onPress} style={{borderRadius:appSize(8),flexDirection:'row',width:'100%',justifyContent: 'space-between',alignItems:'center',backgroundColor:'#ffffff',height:appSize(50),paddingHorizontal:appSize(16)}}>
    //
    //         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:appSize(6)}}>
    //             <Image source={icon} style={{height:appSize(18),width:appSize(18)}} />
    //             <Text style={{color:'#333333',fontSize:appSize(14)}}>{title}</Text>
    //         </View>
    //
    //         <View style={{flexDirection:'row',alignItems:'center',gap:appSize(6)}}>
    //             <Arrow />
    //             {/*<Image source={require('../../Assets/Profile/Menu_vector.png')} style={{height:appSize(14),width:appSize(14)}} />*/}
    //         </View>
    //
    //     </TouchableOpacity>)
    // }


    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',width:appSize(44),height:appSize(44)}}>
                    <Image source={require('../../../Assets/Common/nav_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                    {/*<NavBack />*/}
                </TouchableOpacity>
            </View>
        </View>)
    }


    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>
        <Nav />
        <ScrollView style={{flex:1,paddingHorizontal:appSize(16)}}>
            <View style={{width:'100%',backgroundColor:'',gap:appSize(8),paddingTop:appSize(12)}}>
                {proMeunsArr1.map((value, index, array)=>{
                    return(<MenuBarComp key={'tag'+index} icon={value?.icon} title={value?.title} onPress={value?.press} />)
                })}
            </View>

            <View style={{width:'100%',backgroundColor:'#ffffff',marginTop:appSize(12),borderRadius:appSize(8)}}>
                {proMeunsArr2.map((value, index, array)=>{
                    return(<MenuBarComp key={'tag'+index} icon={value?.icon} title={value?.title} onPress={value?.press} />)
                })}
            </View>
        </ScrollView>

    </View>)
}

export default ProfileScreen;
