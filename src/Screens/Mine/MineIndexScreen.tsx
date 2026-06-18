import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation";
import {navigate} from "../../Navigator/NavigationService";
import {ROUTES} from "../../Components/Constant";

export default function MineIndexScreen() {

    return(<View>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <TouchableOpacity onPress={()=>{
            navigate(ROUTES.PROFILE_SRC)
        }}>
            <Text>Click</Text>
        </TouchableOpacity>
    </View>)
}
