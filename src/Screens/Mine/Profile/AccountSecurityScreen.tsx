import {Image, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import NavBack from "../../../Assets/Common/NavBack";
import {goBack} from "../../../Navigator/NavigationService";
import {MenuBarWithoutIconComp} from "./MenuBarComp";

export default function AccountSecurityScreen() {

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }} style={{justifyContent:'center',width:appSize(44),height:appSize(44)}}>
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
                <MenuBarWithoutIconComp title={"密码"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#999999',fontSize:appSize(14)}}>已设置</Text>)
                }} />
                <MenuBarWithoutIconComp title={"手机号"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#999999',fontSize:appSize(14)}}>18888888888</Text>)
                }} />
                <MenuBarWithoutIconComp title={"微信绑定"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#999999',fontSize:appSize(14)}}>ABC-123</Text>)
                }} />
                <MenuBarWithoutIconComp title={"邮箱绑定"} onPress={()=>{

                }} OtherDom={()=>{
                    return(<Text style={{color:'#999999',fontSize:appSize(14)}}>123@456.com</Text>)
                }} />

            </View>

        </View>

    </View>)
}
