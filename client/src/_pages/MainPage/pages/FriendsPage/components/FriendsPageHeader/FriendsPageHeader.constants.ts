import { FC, createElement } from 'react';
import PendingRequestsButton from './components/PendingRequestsButton';
import { FriendsPageHeaderButtonProps } from './FriendsPageHeader.types';

const headerCenterButtons: (FriendsPageHeaderButtonProps | FC<any>)[] = [
    {
        id: 'list/online',
        label: 'В сети',
    },
    {
        id: 'list/all',
        label: 'Все',
    },
    () => createElement(PendingRequestsButton),
    {
        id: 'add',
        label: 'Добавить в друзья',
        variant: 'success',
    },
];

export { headerCenterButtons };
