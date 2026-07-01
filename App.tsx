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
// import { KeyboardProvider } from "react-native-keyboard-controller";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import {asyncStoragePersister} from "./src/Components/Storage";
import {QueryClient} from "@tanstack/react-query";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
})

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (<SafeAreaProvider >
            {/*<KeyboardProvider>*/}
      <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister: asyncStoragePersister }}
          onSuccess={() => {
              console.log('缓存恢复成功');
          }}
          onError={error => {
              console.log('缓存恢复失败:', error);
              // 可以在这里实现错误恢复逻辑
          }}
      >
                <RootSiblingParent>
                    {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
                    <AppNavigator/>
                </RootSiblingParent>
            {/*</KeyboardProvider>*/}

      </PersistQueryClientProvider>
        </SafeAreaProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
