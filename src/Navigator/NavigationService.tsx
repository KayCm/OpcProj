import { createNavigationContainerRef, CommonActions } from '@react-navigation/native';
import {ROUTES} from "../Components/Constant";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack();
    }
}

export function resetToMain() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: ROUTES.MAIN_TAB}],
      }),
    );
  }
}




// 重置到登录页并清除历史
export function resetToLogin() {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: ROUTES.LOGIN, params: { screen:'LOGIN' } }],
            })
        );
    }
}
