import {Image, Text, TouchableOpacity, View} from "react-native";
import WebView from "react-native-webview";
import GStyles, {appSize} from "../../../Components/GStyles";
import {goBack, navigate} from "../../../Navigator/NavigationService";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function ExamScreen(props) {


    console.log('props:',props)

    const params = props?.route?.params

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
                <Text style={{color:'#1A1A1A',fontSize:appSize(17)}}>考试</Text>
                <View style={{width:appSize(44)}} />
            </View>
        </View>)
    }


    const handleMessage = (event) => {
        // event.nativeEvent.data 是从 HTML 发来的字符串数据[reference:19]
        console.log('Received from WebView:', event.nativeEvent.data);
        try {
            const data = JSON.parse(event.nativeEvent.data);
            params?.updateFunc(params?.userChapterId);
            console.log(data);
            goBack()
            // 处理 JSON 数据
        } catch (e) {
            // 处理非 JSON 数据
        }
    };


    return (
      <View style={{ flex: 1 }}>
        <Nav />
        <WebView
          source={{ uri: 'http://192.168.1.9:3000' }}
          style={{ flex: 1, backgroundColor: '#f7f7f7', width: '100%' }}
          onMessage={handleMessage}
        />
      </View>
    );
}
