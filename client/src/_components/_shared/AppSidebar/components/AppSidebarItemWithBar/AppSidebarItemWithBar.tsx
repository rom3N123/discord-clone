import { forwardRef, ReactElement, useState } from 'react';
import AppSidebarItem from '_shared/AppSidebar/components/AppSidebarItem';
import AppSidebarItemBar from '_shared/AppSidebar/components/AppSidebarItemBar';
import * as T from './AppSidebarItemWithBar.types';

const AppSidebarItemWithBar = forwardRef<
	HTMLDivElement,
	T.AppSidebarItemWithBarProps
>(
	(
		{ id, isActive, onClick, offsetX = '0', children, ...otherProps },
		ref
	): ReactElement => {
		const [isHovered, setIsHovered] = useState<boolean>(false);

		const onClickHandler = () => {
			onClick(id);
		};

		const onMouseEnterHandler = () => {
			if (!isActive) {
				setIsHovered(true);
			}
		};

		const onMouseLeaveHandler = () => {
			setIsHovered(false);
		};

		const isActiveItem: boolean = Boolean(isHovered || isActive);

		return (
			<AppSidebarItem
				ref={ref}
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
				onClick={onClickHandler}
				position='relative'
				isActive={isActiveItem}
				{...otherProps}
			>
				<AppSidebarItemBar
					height={isActive ? '100%' : '50%'}
					top='50%'
					transform='translateY(-50%) scale(0)'
					transition='all 0.2s ease'
					transformOrigin='0 50%'
					sx={
						isActiveItem
							? {
									transform: 'translateY(-50%) scale(1)',
							  }
							: {}
					}
					left={offsetX}
				/>

				{children}
			</AppSidebarItem>
		);
	}
);

export default AppSidebarItemWithBar;
