import { EmptyFunc } from '_types/helperTypes';
import { useCallback, useState } from 'react';

type UseToggleReturnValue = [boolean, EmptyFunc, (value: boolean) => void];

const useToggle = (defaultValue: boolean = false): UseToggleReturnValue => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

    const toggle = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    return [isOpen, toggle, setIsOpen];
};

export default useToggle;
