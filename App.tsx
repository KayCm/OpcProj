/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AppNavigator from "./src/Navigator/AppNavigator";
import { RootSiblingParent } from 'react-native-root-siblings';
import { KeyboardProvider } from "react-native-keyboard-controller";


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (<SafeAreaProvider >
            <KeyboardProvider>
                <RootSiblingParent>
                    {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
                    <AppNavigator/>
                </RootSiblingParent>
            </KeyboardProvider>
        </SafeAreaProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
