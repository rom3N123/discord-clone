import { UserClient } from '@discord-clone/types';
import { EmptyFunc } from '_/_types/helperTypes';
import { InputProps } from '@chakra-ui/react';
import { ComponentClass, FC, FunctionComponent } from 'react';

type CommonIconButton = {
    Icon: FC;
    tooltip?: string;
    onClick?: EmptyFunc;
};

type UserCallback = (user: UserClient) => any;

type IconButtonItem<T = any> = {
    Button: FC<T>;
    tooltip?: string;
};

type MediaState = 'on' | 'off';

type SystemStatus = 'error' | 'success';

type CommonInput = InputProps & {
    name: string;
    label?: string;
};

type Inputs<T extends object = {}> = ({ name: keyof T } & Omit<
    CommonInput,
    'name'
>)[];

type ControlledWindow = {
    isOpen: boolean;
    onClose: EmptyFunc;
};

type AbstractModel = { _id: string };

type ReactElementFunction =
    | string
    | FunctionComponent<any>
    | ComponentClass<any, any>;

type UserStatus = 'online' | 'offline';

export type {
    CommonIconButton,
    MediaState,
    CommonInput,
    SystemStatus,
    IconButtonItem,
    Inputs,
    ControlledWindow,
    AbstractModel,
    ReactElementFunction,
    UserStatus,
    UserCallback,
};
