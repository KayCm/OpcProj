import {Image, Switch, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../../Components/GStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import NavBack from "../../../Assets/Common/NavBack";
import {goBack} from "../../../Navigator/NavigationService";
import {useState} from "react";
import Arrow from "../../../Assets/Profile/Arrow";

export default function NotificationScreen() {

    const insets =  useSafeAreaInsets()

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

        <View style={{paddingHorizontal:appSize(16),marginTop:appSize(12)}}>
            <View style={{borderRadius:appSize(8),flexDirection:'row',width:'100%',justifyContent: 'space-between',alignItems:'center',backgroundColor:'#ffffff',height:appSize(50),paddingHorizontal:appSize(16)}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:appSize(6)}}>
                    <Text style={{color:'#333333',fontWeight:'800',fontSize:appSize(14)}}>消息通知</Text>
                </View>
                <Switch
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>

    </View>)
}
