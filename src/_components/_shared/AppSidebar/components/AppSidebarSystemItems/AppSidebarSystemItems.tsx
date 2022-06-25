import { FC, Fragment, ReactElement } from 'react';
import { APP_SIDEBAR_ACTIVE_BAR_X_OFFSET } from '../../AppSidebar.constants';
import * as C from './AppSidebarSystemItems.constants';
import { Tooltip, Divider } from '@chakra-ui/react';
import * as T from './AppSidebarSystemItems.types';
import { useLocation } from 'react-router-dom';

const AppSidebarSystemItems: FC<T.AppSidebarSystemItemsProps> = ({
	onItemClick,
}): ReactElement => {
	const { pathname } = useLocation();

	return (
		<>
			{C.appSidebarItems.map(({ item, Component, needDivider, tooltip }) => {
				const component = (
					<Component
						offsetX={APP_SIDEBAR_ACTIVE_BAR_X_OFFSET}
						isActive={pathname.includes(item.route)}
						onClick={() => onItemClick(item)}
						{...item}
					/>
				);

				return (
					<Fragment key={item.id}>
						<Tooltip
							hasArrow
							shouldWrapChildren
							placement='right'
							label={tooltip}
							ml={1}
						>
							{component}
						</Tooltip>

						{needDivider && <Divider width='60%' mx='auto' my={2} />}
					</Fragment>
				);
			})}
		</>
	);
};

export default AppSidebarSystemItems;
