import { Action, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { getMiddleWares } from './store.utils';
import { AppMiddlewareList, AppState } from './store.utils';
import { isDevelopmentEnv, isProductionEnv } from '../shared';

const initializeStore = (): EnhancedStore<AppState, Action, AppMiddlewareList> => {
    const configuration = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getMiddleWares(getDefaultMiddleware),
    devTools: !isProductionEnv,
});
// Note: Below is the code for hot module replacement
// what is hot module replacement?
if(isDevelopmentEnv && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').then((module: any) => ({
            //todo: need to check this
            default: module.AppConnected,
        })).default;
        configuration.replaceReducer(newRootReducer);
    })
}
return configuration;
}

const appStore = initializeStore();

export { initializeStore, appStore };


  // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch