import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {navigationRef} from "./NavigationService";
import AppInitial from "../Screens/AppInitial";
import AppTabNavigator from "./AppTabNavigator";
import {ROUTES} from "../Components/Constant";
import LoginScreen from "../Screens/UsersManagers/LoginScreen";
import RegisterScreen from "../Screens/UsersManagers/RegisterScreen";
import ProfileScreen from "../Screens/Mine/Profile/ProfileScreen";
import ProfileEditScreen from "../Screens/Mine/Profile/ProfileEditScreen";
import IdentityEditScreen from "../Screens/Mine/Profile/IdentityEditScreen";
import EmergencyAddScreen from "../Screens/Mine/Profile/EmergencyAddScreen";
import AccountSecurityScreen from "../Screens/Mine/Profile/AccountSecurityScreen";
import MyFavoriteScreen from "../Screens/Mine/Profile/MyFavoriteScreen";
import NotificationScreen from "../Screens/Mine/Profile/NotificationScreen";
import FaqScreen from "../Screens/Mine/Profile/FaqScreen";
import FeedbackScreen from "../Screens/Mine/Profile/FeedbackScreen";
import AboutScreen from "../Screens/Mine/Profile/AboutScreen";
import ActivityDetailScreen from "../Screens/Life/ActivityDetailScreen";
import ActicityApplyScreen from "../Screens/Life/ActicityApplyScreen";
import ActicitySignInScreen from "../Screens/Life/ActicitySignInScreen";

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


                {/*Life*/}
                <Stack.Screen name={ROUTES.LIFE_ACT_DETAIL} component={ActivityDetailScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.LIFE_ACT_APPLY} component={ActicityApplyScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.LIFE_ACT_SIGNIN} component={ActicitySignInScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />

                {/*Profile*/}
                <Stack.Screen name={ROUTES.PROFILE_SRC} component={ProfileScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.PROFILE_SRC_EDIT} component={ProfileEditScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.IDENTITY_EDIT} component={IdentityEditScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.EMERGENCY_ADD} component={EmergencyAddScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.ACCOUNT_SECURITY} component={AccountSecurityScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.MY_FAVORITE} component={MyFavoriteScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.NOTIFICATION} component={NotificationScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.FAQ} component={FaqScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.FEEDBACK} component={FeedbackScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name={ROUTES.ABOUT} component={AboutScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />

                <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
                <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
                {/*<Stack.Screen name="Auth" component={AuthNavigator} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
