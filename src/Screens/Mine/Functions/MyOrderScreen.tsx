import { Image, Text, TouchableOpacity, View } from 'react-native';
import GStyles, { appSize } from '../../../Components/GStyles.ts';
import { goBack, navigate } from '../../../Navigator/NavigationService.tsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTES } from '../../../Components/Constant.ts';


export default function MyOrderScreen() {

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
          <Text style={{ color: '#1A1A1A', fontSize: appSize(17) }}>我的订单</Text>
          <View style={{ width: appSize(44) }} />
        </View>
      </View>
    );
  };

  const RenderRow = () => {
    return (
      <View style={{ paddingHorizontal: appSize(16), marginTop: 100 }}>
        <TouchableOpacity
          onPress={()=>{
            navigate(ROUTES.FUNC_MY_ORDER_DETAIL)
          }}
          style={{
            padding: appSize(12),
            backgroundColor: '#fff',
            borderRadius: appSize(12),
          }}
        >
          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <Text
              style={{
                color: '#FF4040',
                fontWeight: '500',
                fontSize: appSize(14),
              }}
            >
              待支付
            </Text>
          </View>

          <View style={{ flexDirection: 'row',marginTop:appSize(10) }}>
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

          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              paddingTop: appSize(10),
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: appSize(40),
                backgroundColor: '#10B981',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: appSize(4),
                paddingHorizontal: appSize(26),
              }}
            >
              <Text style={{ color: '#FFFFFF',fontSize:appSize(14),fontWeight:'500' }}>付款</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  
  return (<View style={{flex:1}}>
    <Nav />

    <RenderRow />


  </View>)
}