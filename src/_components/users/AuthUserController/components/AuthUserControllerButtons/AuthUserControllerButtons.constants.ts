import HeadphonesButton from '_/_components/_buttons/HeadphonesButton';
import MicButton from '_/_components/_buttons/MicButton';
import SettingButton from '_/_components/_buttons/SettingButton';
import { IconButtonItem } from '_/_types/common';

const authUserControllerButtons: IconButtonItem[] = [
	{
		Button: MicButton,
	},
	{
		Button: HeadphonesButton,
	},
	{
		Button: SettingButton,
		tooltip: 'Настройки пользователя',
	},
];

export { authUserControllerButtons };
