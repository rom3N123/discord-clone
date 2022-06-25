import React, { FC, ReactElement } from 'react';
import { Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const FriendSkeletonItem: FC = (): ReactElement => {
	return (
		<Flex align='center' gap='30px' height='60px'>
			<SkeletonCircle width={'32px'} height={'32px'} />

			<SkeletonText noOfLines={1} width='20%' />
		</Flex>
	);
};

export default FriendSkeletonItem;
