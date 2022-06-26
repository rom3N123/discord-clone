import { ChangeEvent } from 'react';

type InputBind = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type { InputBind };
