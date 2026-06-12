import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation";

export default function HomeIndexScreen() {

    return(<View style={{flex:1,backgroundColor:''}}>
        <Text>123</Text>
        <TouchableOpacity onPress={()=>{

        }}>
            <Text>Click</Text>
        </TouchableOpacity>
    </View>)
}
