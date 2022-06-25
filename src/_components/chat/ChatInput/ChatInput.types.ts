import { InputBind } from '_/_types/components/input';

type ChatInputProps = InputBind & {
	onSubmit: (value: string) => void;
};

export type { ChatInputProps };
