import { FC } from 'react';
import { MediaState } from '../common';

type OnMediaClick = (state: MediaState) => any;

type MediaControlProps = {
	state?: MediaState;
	onClick: OnMediaClick;
};

type DefaultMediaControlProxyValue = {
	Icon: FC;
	tooltip?: string;
};

type MediaControlButtonProxy<T extends object = DefaultMediaControlProxyValue> =
	Record<MediaState, T>;

export type { MediaControlProps, OnMediaClick, MediaControlButtonProxy };
