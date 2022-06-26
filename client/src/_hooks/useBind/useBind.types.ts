import { InputBind } from '_/_types/components/input';
import { EmptyFunc } from '_/_types/helperTypes';

type Bind = () => InputBind;
type UseBindValue = {
    bind: Bind;
    value: InputBind['value'];
    clearValue: EmptyFunc;
};
type OnChange = InputBind['onChange'];

export type { Bind, UseBindValue, EmptyFunc, OnChange };
