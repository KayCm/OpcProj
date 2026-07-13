import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import NavBack from "../../../Assets/Common/NavBack";
import {goBack} from "../../../Navigator/NavigationService";
import {MenuBarWithoutIconComp} from "./MenuBarComp";
import {useSelector} from "react-redux";
import TurboImage from "react-native-turbo-image";

export default function ProfileEditScreen() {

    const userInfo = useSelector(state => state?.userInfo);

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',width:appSize(44),height:appSize(44)}}>
                    <Image source={require('../../../Assets/Common/nav_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>
                <Text style={{color:'#1A1A1A',fontSize:appSize(17)}}>个人资料</Text>
                <View style={{width:appSize(44)}} />
            </View>
        </View>)
    }

    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>
        <Nav />

        <View style={{height:appSize(210),alignItems:'center',paddingTop:appSize(40)}}>

            {/*<ImageBackground style={{height:appSize(104),width:appSize(104)}} imageStyle={{borderRadius:appSize(52),height:appSize(104),width:appSize(104)}} source={require('../../../Assets/demo/avatar.jpg')}>*/}

            {/*</ImageBackground>*/}

            <View>
                <TurboImage source={{uri:userInfo?.avatar}}  style={{height:appSize(104),width:appSize(104),borderRadius:appSize(52),borderWidth:appSize(2),borderColor:'#fff'}} imageStyle={{borderRadius:appSize(52),height:appSize(104),width:appSize(104)}} />
                <View style={{position:'absolute',justifyContent:'center',alignItems:'center',bottom:0,right:0,width:appSize(30),height:appSize(30),borderRadius:appSize(30),backgroundColor:'#000000CC'}} >
                    <Image style={{width:appSize(20),height:appSize(16.67)}} source={require('../../../Assets/Mine/carmeImg.png')} />
                </View>
            </View>

            <View style={{marginTop:appSize(15),gap:appSize(4),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:appSize(14),color:'#000'}}>UID:{userInfo?.memberId}</Text>
                <Image source={require('../../../Assets/Mine/copy.png')} style={{height:appSize(12),width:appSize(12)}} />
            </View>

        </View>



        <View style={{paddingHorizontal:appSize(16)}} >
            <View style={{backgroundColor:'#fff',marginTop:appSize(12),borderRadius:appSize(8)}}>

                <MenuBarWithoutIconComp title={"昵称"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#333333',fontSize:appSize(14)}}>{userInfo?.nickname}</Text>)
                }} />

                <MenuBarWithoutIconComp title={"性别"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#333333',fontSize:appSize(14)}}>保密</Text>)
                }} />
            </View>


            <View style={{backgroundColor:'#fff',marginTop:appSize(12),borderRadius:appSize(8)}}>

                <MenuBarWithoutIconComp title={"实名认证"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#333333',fontSize:appSize(14)}}>3301***********2313</Text>)
                }} />

            </View>

        </View>


    </View>)
}
