import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import authStore from '_store/authStore';
import { Navigate } from 'react-router-dom';

const NonAuthorizedRoute: FC<{ children: ReactElement }> = observer(
    ({ children }): ReactElement => {
        return authStore.isAuth ? <Navigate to='/main' /> : children;
    }
);

export default NonAuthorizedRoute;
