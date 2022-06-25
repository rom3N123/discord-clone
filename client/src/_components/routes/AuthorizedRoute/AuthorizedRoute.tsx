import React, { FC, ReactElement } from 'react';
import authStore from '_store/authStore';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const AuthorizedRoute: FC<{ children: ReactElement }> = observer(
	({ children }): ReactElement => {
		return authStore.isAuth ? children : <Navigate to='/auth' />;
	}
);

export default AuthorizedRoute;
