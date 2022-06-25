import React, { FC, forwardRef, ReactElement } from 'react';
import AppSidebarItemWithBar from '../../components/AppSidebarItemWithBar';
import { Flex } from '@chakra-ui/react';
import { ReactComponent as LogoIcon } from '_icons/logo.svg';
import { AppSidebarNavigationItem } from '../items.types';

const DiscordItem = forwardRef<HTMLDivElement, AppSidebarNavigationItem>(
	({ offsetX, onClick, type, ...otherProps }, ref): ReactElement => {
		const onItemClickHandler = (id: string) => {
			if (onClick) {
				onClick(id);
			}
		};

		return (
			<AppSidebarItemWithBar
				ref={ref}
				offsetX={offsetX}
				onClick={onItemClickHandler}
				{...otherProps}
			>
				<Flex
					color='white'
					width='100%'
					height='100%'
					justify='center'
					align='center'
				>
					<LogoIcon />
				</Flex>
			</AppSidebarItemWithBar>
		);
	}
);

export default DiscordItem;
