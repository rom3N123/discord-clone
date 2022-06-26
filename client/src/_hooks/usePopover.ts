import { EmptyFunc } from '_types/helperTypes';
import { useState } from 'react';

export type UsePopoverValue = {
    isOpen: boolean;
    open: EmptyFunc;
    close: EmptyFunc;
    toggle: EmptyFunc;
};

const usePopover = (): UsePopoverValue => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const toggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return {
        isOpen,
        open,
        close,
        toggle,
    };
};

export default usePopover;
