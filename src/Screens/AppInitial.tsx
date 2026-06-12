import {ImageBackground, View} from "react-native";
import {useEffect} from "react";
import {navigate} from "../Navigator/NavigationService";
import {ROUTES} from "../Components/Constant";

function AppInitial() {

    useEffect(()=>{
        setTimeout(()=>{
            navigate('MainTab')
        },1000)
    },[])

    return(<View style={{backgroundColor:'#12332190',flex:1}} >

        <ImageBackground source={require('../Assets/bg.jpg')} style={{flex:1}}>

        </ImageBackground>

    </View>)

}

export default AppInitial
