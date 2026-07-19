import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GStyles, { appSize } from '../../../Components/GStyles.ts';
import { goBack } from '../../../Navigator/NavigationService.tsx';

export function OrderDetailScreen() {

  const insets = useSafeAreaInsets();
  const Nav = () => {
    return (
      <View
        style={{
          height: insets.top + appSize(44),
          width: '100%',
          backgroundColor: '#fff',
        }}
      >
        <View style={{ height: insets.top }} />
        <View
          style={[
            GStyles.row,
            GStyles.ac,
            GStyles.jcBetween,
            GStyles.ph16,
            { height: appSize(44), width: '100%' },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
            style={{
              justifyContent: 'center',
              width: appSize(44),
              height: appSize(44),
            }}
          >
            <Image
              source={require('../../../Assets/Common/nav_back.png')}
              style={{ height: appSize(14), width: appSize(14) }}
            />
          </TouchableOpacity>
          <Text style={{ color: '#1A1A1A', fontSize: appSize(17) }}>
            订单详情
          </Text>
          <View style={{ width: appSize(44) }} />
        </View>
      </View>
    );
  };



   const Detail = () => {


     return (
       <View style={{ paddingHorizontal: appSize(16),marginTop: appSize(16) }}>
         <View
           style={{
             padding: appSize(12),
             backgroundColor: '#fff',
             borderRadius: appSize(12),
           }}
         >
           <View style={{ flexDirection: 'row', marginTop: appSize(10) }}>
             <Image
               style={{
                 borderRadius: appSize(16),
                 height: appSize(90),
                 width: appSize(90),
                 backgroundColor: '#123',
               }}
             />
             <View
               style={{
                 flex: 1,
                 marginLeft: appSize(10),
                 justifyContent: 'space-between',
                 paddingVertical: appSize(4),
               }}
             >
               <Text
                 style={{
                   fontSize: appSize(14),
                   fontWeight: '500',
                   color: '#000',
                 }}
               >
                 课程名称课程名称订阅名称商品名称课程名称课程名称订阅名称商品名称
               </Text>

               <Text
                 style={{
                   fontSize: appSize(18),
                   fontWeight: '500',
                   color: '#FFA059',
                 }}
               >
                 ¥19.90
                 <Text
                   style={{
                     fontSize: appSize(12),
                     fontWeight: '400',
                     color: '#999',
                     textDecorationLine: 'line-through',
                   }}
                 >
                   ¥19.90
                 </Text>
               </Text>
             </View>
           </View>


           <View style={{width:'100%',height:100,marginTop:appSize(16),borderRadius:appSize(12),backgroundColor:'#f7f7f7'}}>

           </View>



         </View>
       </View>
     );



   }



  
  return (
    <View style={{ flex: 1 }}>
      <Nav />

      <ScrollView style={{ flex: 1 }}>
        <Detail />
      </ScrollView>

      <View style={{backgroundColor:'#fff',width:'100%',height:appSize(56)+appSize(34)+insets.bottom}}>

      </View>

    </View>
  );
}