import {Image, Text, TouchableOpacity, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize} from "../../Components/GStyles";
import {goBack} from "../../Navigator/NavigationService";

export default function OpportunityMessageScreen() {

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',width:appSize(44),height:appSize(44)}}>
                    <Image source={require('../../Assets/Common/nav_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>
                <Text style={{color:'#1A1A1A',fontSize:appSize(17),fontWeight:'800'}}>商机</Text>
                <View style={{width:appSize(44)}} />
            </View>
        </View>)
    }


    return(<View style={{flex:1}}>
        <Nav />
    </View>)
}
