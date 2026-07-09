import {Image, Text, TouchableOpacity, View} from "react-native";
import GStyles, {appSize} from "../../Components/GStyles";
import {goBack} from "../../Navigator/NavigationService";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function OpportunityListScreen() {

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

    const renderRow = () => {
      return(<View style={{width:'100%',paddingHorizontal:appSize(16),paddingVertical:appSize(6)}}>
          <View style={{flexDirection:'row',gap:appSize(12),paddingHorizontal:appSize(12),alignItems:'center',borderRadius:appSize(12),width:'100%',height:appSize(92),backgroundColor:'#fff'}} >

              <Image style={{width:appSize(60),height:appSize(60),backgroundColor:'#213',borderRadius:appSize(30)}} />

              <View style={{flex:1,backgroundColor:'',justifyContent:'center',gap:appSize(6),height:appSize(60)}} >

                  <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
                      <Text style={{color:'#333333',fontSize:appSize(16),fontWeight:'800'}}>AI电商自动化</Text>
                      <Text style={{color:'#999999',fontSize:appSize(14),fontWeight:'400'}}>2026.02.22</Text>
                  </View>

                  <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
                      <Text style={{color:'#999999',fontSize:appSize(14),fontWeight:'400'}}>操作手册，请按照手册内容执行</Text>


                      <View style={{justifyContent:'center',alignItems:'center',height:appSize(16),width:appSize(16),backgroundColor:'#FF4040',borderRadius:appSize(8)}}>
                          <Text style={{color:'#ffffff',fontSize:appSize(10),fontWeight:'bold'}}>1</Text>
                      </View>


                  </View>



              </View>
          </View>
      </View>)
    }

    return(<View style={{flex:1}}>
        <Nav />

        {renderRow()}

    </View>)
}
