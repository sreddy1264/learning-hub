import { MiddlewareArray } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { createLogger } from 'redux-logger';
import { isReduxLoggerEnabled } from '../shared';
import { AppMiddlewareList } from './store.types';

function getMiddleWares(
    getDefaultMiddleware: curriedGetDefaultMiddleware,
): AppMiddlewareList {
    const middlewareList = new MiddlewareArray().concat([...getDefaultMiddleware()]);

    // this will help us for development in browsers with redux dev tool
    if (isReduxLoggerEnabled) {
        middlewareList.push(createLogger());
    }

    return middlewareList;
}

export { getMiddleWares };