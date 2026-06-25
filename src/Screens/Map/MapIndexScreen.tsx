import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation";
import {
    Header,
    LargeHeader,
    ScalingView,
    ScrollViewWithHeaders,
} from '@codeherence/react-native-header';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MapIndexScreen() {


    const HeaderComponent = ({ showNavBar }) => {


        console.log(showNavBar?.value)


        return (<View style={{}} opacity={showNavBar} >
            <Text>123</Text>
            <Text>123</Text>
        </View>)
    }

    const LargeHeaderComponent = ({ scrollY }) => (
        <LargeHeader>
            <ScalingView scrollY={scrollY}>
                <Text style={{ fontSize: 14 }}>Welcome!</Text>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>react-native-header</Text>
                <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#8E8E93' }}>
                    This project displays some header examples using the package.
                </Text>
            </ScalingView>
        </LargeHeader>
    );

    const { bottom } = useSafeAreaInsets();

    return (
        <ScrollViewWithHeaders
            HeaderComponent={HeaderComponent}
            LargeHeaderComponent={LargeHeaderComponent}
            contentContainerStyle={{ paddingBottom: bottom }}
        >
            <View style={{ padding: 16 }}>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
                <Text>Some body text...</Text>
            </View>
        </ScrollViewWithHeaders>
    );
}
