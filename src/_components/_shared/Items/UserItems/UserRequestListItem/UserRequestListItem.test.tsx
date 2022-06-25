import { render } from '@testing-library/react';
import { MOCK_FRIEND_REQUEST } from '_mocks/user-friend-requests.mocks';
import UserRequestListItem from './UserRequestListItem';
import MeStore from '_store/@meStore';
import { MOCK_ME } from '_mocks/me.mocks';
import '@testing-library/jest-dom';
import { getMockUser } from '_mocks/user.mocks';

const renderItem = () => {
	const e = () => {};

	return render(
		<UserRequestListItem
			onAcceptClick={e}
			onCancelClick={e}
			item={MOCK_FRIEND_REQUEST}
		/>
	);
};

describe('UserRequestListItem', () => {
	beforeEach(() => {
		MeStore.setClient(MOCK_ME);
	});

	test('Incoming request. Should show accept button', () => {
		MeStore.user = getMockUser('2');

		const { getByTestId } = renderItem();

		const acceptButton = getByTestId('accept-btn');

		expect(acceptButton).toBeInTheDocument();
	});

	test('Outcoming request. Should hide accept button', () => {
		const { queryByTestId } = renderItem();

		const acceptButton = queryByTestId('accept-btn');

		expect(acceptButton).toBeNull();
	});
});
