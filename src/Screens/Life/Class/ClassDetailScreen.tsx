import {Image, TouchableOpacity, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import GStyles, {appSize, WINDOW_HEIGHT} from "../../../Components/GStyles";
import {goBack} from "../../../Navigator/NavigationService";
import {useVideoPlayer, VideoView} from "react-native-video";
import {VideoViewRef} from "react-native-video/src/core/video-view/VideoViewProps";
import {useRef} from "react";


export default function ClassDetailScreen() {

    const VideoViewRef = useRef<VideoViewRef>(null);

    const insets =  useSafeAreaInsets()

    const Nav = () => {
        return(<View style={{height:insets.top+appSize(44),width:'100%',backgroundColor:'#fff'}} >
            <View style={{height:insets.top}} />
            <View style={[GStyles.row,GStyles.ac,GStyles.jcBetween,GStyles.ph16,{height:appSize(44),width:'100%'}]}>
                <TouchableOpacity onPress={()=>{
                    goBack()
                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000030',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_back.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    VideoViewRef.current?.enterFullscreen();
                    // VideoViewRef.current?.presentFullscreenPlayer();

                }}  style={{justifyContent:'center',alignItems:'center',borderRadius:appSize(15),backgroundColor:'#00000030',width:appSize(30),height:appSize(30)}}>
                    <Image source={require('../../../Assets/Life/act_share.png')} style={{height:appSize(14),width:appSize(14)}} />
                </TouchableOpacity>

            </View>
        </View>)
    }

    const player = useVideoPlayer(
        'https://www.w3schools.com/html/mov_bbb.mp4',
        (_player) => {
            _player.play();
        }
    );

    return(<View style={{flex:1,backgroundColor:""}}>
        <Nav />

        {/*<View style={{width:'100%',height:'100%',backgroundColor:'#123'}}>*/}


            <VideoView
                ref={VideoViewRef}
                player={player}
                style={{ width:'100%',
                    aspectRatio:   16/9,
                }}
                controls
            />


        {/*</View>*/}

        {/*<VideoView*/}
        {/*    ref={VideoViewRef}*/}
        {/*    player={player}*/}
        {/*    style={{ width:WINDOW_HEIGHT,*/}
        {/*        aspectRatio:   16/9,*/}
        {/*        backgroundColor:'#123',*/}
        {/*        transform: [{rotate: '270deg'}]}}*/}

        {/*    controls*/}
        {/*/>*/}

    </View>)

}
