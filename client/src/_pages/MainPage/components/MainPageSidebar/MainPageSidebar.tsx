import { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import ButtonWithIcon from '_shared/Items/components/ButtonWithIcon/ButtonWithIcon';
import * as C from './MainPageSidebar.constants';
import { useNavigate, useParams } from 'react-router-dom';
import Dialogs from './components/Dialogs';
import { UserItemProps } from '_components/users/UserItem/UserItem.types';
import PageSidebar from '_shared/PageSidebar';

const MainPageSidebar: FC = (): ReactElement => {
	const navigate = useNavigate();
	const { tab1 } = useParams();

	const onUserItemClick: UserItemProps['onClick'] = id => {
		navigate(`dialog/${id}`);
	};

	const onButtonClick = (id: string) => () => {
		navigate(id);
	};

	return (
		<PageSidebar width='240px'>
			<Box>
				{C.sidebarItems.map(({ id, label, Icon }) => (
					<ButtonWithIcon
						onClick={onButtonClick(id)}
						isActive={tab1 === id}
						key={id}
						start={<Icon />}
						center={label}
					/>
				))}
			</Box>

			<Box mt='20px'>
				<Dialogs onUserItemClick={onUserItemClick} />
			</Box>
		</PageSidebar>
	);
};

export default MainPageSidebar;
