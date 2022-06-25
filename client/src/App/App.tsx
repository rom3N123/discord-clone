import { FC, lazy, ReactElement, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '_styles/global.css';
import AuthorizedRoute from '_components/routes/AuthorizedRoute';
import NonAuthorizedRoute from '_components/routes/NonAuthorizedRoute';
import useAppAuthentication from './hooks/useAppAuthentication';
import { observer } from 'mobx-react-lite';
import loadingStore from '_store/loadingStore';
import LoadingScreen from '_components/loaders/LoadingScreen';
import Loaders from './components/Loaders';

const OnlineFriendsPage = lazy(
	() => import('_/_pages/MainPage/pages/FriendsPage/pages/OnlineFriendsPage')
);
const AllFriendsPage = lazy(
	() => import('_/_pages/MainPage/pages/FriendsPage/pages/AllFriendsPage')
);
const AuthPage = lazy(() => import('_pages/AuthPage'));
const Layout = lazy(() => import('_shared/Layout'));
const Channel = lazy(() => import('_shared/Channel'));
const MainPage = lazy(() => import('_pages/MainPage'));
const FriendsPage = lazy(() => import('_pages/MainPage/pages/FriendsPage'));
const DialogPage = lazy(() => import('_pages/MainPage/pages/DialogPage'));
const AddFriendPage = lazy(
	() => import('_pages/MainPage/pages/FriendsPage/pages/AddFriendPage')
);
const FriendRequests = lazy(
	() => import('_pages/MainPage/pages/FriendsPage/pages/FriendRequests')
);

const App: FC = observer((): ReactElement => {
	useAppAuthentication();

	return (
		<>
			<Loaders />

			{!loadingStore.isLoadingWithScreen && (
				<Suspense fallback={<LoadingScreen />}>
					<Routes>
						<Route
							path='auth/*'
							element={
								<NonAuthorizedRoute>
									<AuthPage />
								</NonAuthorizedRoute>
							}
						/>

						<Route
							path='/'
							element={
								<AuthorizedRoute>
									<Layout />
								</AuthorizedRoute>
							}
						>
							<Route path='main' element={<MainPage />}>
								<Route path='friends' element={<FriendsPage />}>
									<Route path='add' element={<AddFriendPage />} />

									<Route path='list/requests' element={<FriendRequests />} />
									<Route path='list/all' element={<AllFriendsPage />} />
									<Route path='list/online' element={<OnlineFriendsPage />} />

									<Route path='*' element={<Navigate to='list/all' />} />
								</Route>

								<Route path='dialog' element={<DialogPage />} />
							</Route>

							<Route path='channel/:channelId' element={<Channel />} />
						</Route>
					</Routes>
				</Suspense>
			)}
		</>
	);
});

export default App;
