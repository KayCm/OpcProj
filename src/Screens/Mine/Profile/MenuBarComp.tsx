import {Image, Text, TouchableOpacity, View} from "react-native";
import {appSize} from "../../../Components/GStyles";
import Arrow from "../../../Assets/Profile/Arrow";

export const MenuBarComp = ({icon,title,onPress,OtherDom}) => {

    return(<TouchableOpacity onPress={onPress} style={{borderRadius:appSize(8),flexDirection:'row',width:'100%',justifyContent: 'space-between',alignItems:'center',backgroundColor:'#ffffff',height:appSize(50),paddingHorizontal:appSize(16)}}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:appSize(6)}}>
            <Image source={icon} style={{height:appSize(18),width:appSize(18)}} />
            <Text style={{color:'#333333',fontSize:appSize(14)}}>{title}</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',gap:appSize(2)}}>
            {OtherDom && <OtherDom /> }
            <Arrow />
            {/*<Image source={require('../../Assets/Profile/Menu_vector.png')} style={{height:appSize(14),width:appSize(14)}} />*/}
        </View>

    </TouchableOpacity>)

}

export const MenuBarWithoutIconComp = ({title,onPress,OtherDom}) => {

    return(<TouchableOpacity onPress={onPress} style={{borderRadius:appSize(8),flexDirection:'row',width:'100%',justifyContent: 'space-between',alignItems:'center',backgroundColor:'#ffffff',height:appSize(50),paddingHorizontal:appSize(16)}}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:appSize(6)}}>
            <Text style={{color:'#333333',fontWeight:'800',fontSize:appSize(14)}}>{title}</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',gap:appSize(2)}}>
            {OtherDom && <OtherDom /> }
            <Arrow />
            {/*<Image source={require('../../Assets/Profile/Menu_vector.png')} style={{height:appSize(14),width:appSize(14)}} />*/}
        </View>

    </TouchableOpacity>)

}
