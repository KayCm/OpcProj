import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {navigationRef} from "./NavigationService";
import AppInitial from "../Screens/AppInitial";
import AppTabNavigator from "./AppTabNavigator";
import {ROUTES} from "../Components/Constant";
import LoginScreen from "../Screens/UsersManagers/LoginScreen";
import RegisterScreen from "../Screens/UsersManagers/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName={ROUTES.INIT}>
                <Stack.Screen
                    name={ROUTES.INIT}
                    component={AppInitial}
                    options={{ headerShown: false, animation: 'fade' }}
                />

                <Stack.Screen name={ROUTES.MAIN_TAB} component={AppTabNavigator} options={{ headerShown: false, animation: 'fade' }} />
                <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
                <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
                {/*<Stack.Screen name="Auth" component={AuthNavigator} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
