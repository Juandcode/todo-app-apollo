// RootNavigation.js
import {createNavigationContainerRef, StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export async function navigate(name, params) {
    if (navigationRef.isReady()) {
        await navigationRef.navigate(name, params);
    }
}

export function dispatch(func) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(func);
    }
}
