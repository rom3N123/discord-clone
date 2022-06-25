import { UserClient } from '@discord-clone/types';

type UserItemProps = UserClient & {
	onClick?: (id: UserClient['_id']) => void;
};

export type { UserItemProps };
