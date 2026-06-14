import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation";
// import { Carousel } from 'react-native-reanimated';
import { appSize, WINDOW_WIDTH } from '../../Components/GStyles.ts';
import Carousel from 'react-native-reanimated-carousel/src/components/Carousel.tsx';
export default function HomeIndexScreen() {
    
    const BannerView = () => {
      
      const renderItem = (item) => {

        console.log(item);

        return (<View style={{ width: WINDOW_WIDTH,height:appSize(240),backgroundColor:"#12312"+item?.item }}>
          <Text>{item?.item}</Text>
          <Text>{item?.item}</Text>
          <Text>{item?.item}</Text>
          <Text>{item?.item}</Text>
          <Text>{item?.item}</Text>
          <Text>{item?.item}</Text>
        </View>);

      };
      
      return (
        <Carousel
          testID={'normal-carousel-demo'}
          loop={true}
          snapEnabled={true}
          pagingEnabled={true}
          autoPlayInterval={2000}
          data={[1,2,3,4,5]}
          width={WINDOW_WIDTH}
          // scrollOffsetValue={scrollOffsetValue}
          style={{
            width: WINDOW_WIDTH ,
            height: appSize(240),
            backgroundColor: '',
          }}
          onScrollStart={() => {
            console.log('Scroll start');
          }}
          onScrollEnd={() => {
            console.log('Scroll end');
          }}
          onSnapToItem={(index: number) => console.log('current index:', index)}
          renderItem={renderItem}
        />
      );
      
    }
  
  
    return(<View style={{flex:1,backgroundColor:''}}>
        <BannerView />
    </View>)
}
