import { AbstractModel } from '_types/common';
import { UserClient } from '@discord-clone/types';

export type FriendItemProps = {
	item: AbstractModel & UserClient;
};
