import {Image, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import NavBack from "../../../Assets/Common/NavBack";
import {goBack, navigate} from "../../../Navigator/NavigationService";
import {MenuBarWithoutIconComp} from "./MenuBarComp";
import {ROUTES} from "../../../Components/Constant";

export default function IdentityEditScreen() {

    const insets =  useSafeAreaInsets()

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

        <View style={{paddingHorizontal:appSize(16)}} >
            <View style={{backgroundColor:'#fff',marginTop:appSize(12),marginBottom:appSize(20),borderRadius:appSize(8)}}>
                <MenuBarWithoutIconComp title={"实名认证状态"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#999999',fontSize:appSize(14)}}>未认证</Text>)
                }} />
                <MenuBarWithoutIconComp title={"证件上传"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#999999',fontSize:appSize(14)}}>未认证</Text>)
                }} />

            </View>


            <MenuBarWithoutIconComp title={"紧急联系人"} onPress={()=>{

            }} OtherDom={()=>{
                return(<Text style={{color:'#999999',fontSize:appSize(14)}}>去添加</Text>)
            }} onPress={()=>{
                navigate(ROUTES.EMERGENCY_ADD)
            }} />

        </View>

    </View>)
}
