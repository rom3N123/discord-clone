import { FC, createElement } from 'react';
import { ReactElementFunction } from '_/_types/common';
import { AnyFunc } from '_/_types/helperTypes';

export const deferCallback = (callback: AnyFunc) => {
    window.requestIdleCallback(callback);
};

export const renderComponentOrItemMapFunc =
    ({ fallbackComponent }: { fallbackComponent: FC<any> }) =>
    (item: ReactElementFunction | any) =>
        typeof item === 'function'
            ? createElement(item)
            : createElement(fallbackComponent, item);
