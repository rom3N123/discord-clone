import { useState } from 'react';
import * as T from './useDialogPageHeaderButtons.types';

const useDialogPageHeaderButtons = (): T.UseDialogPageHeaderButtonsValue => {
    const [isCalling, setIsCalling] = useState<boolean>(false);

    const onButtonClick: T.UseDialogPageHeaderButtonsValue['onButtonClick'] =
        () => {
            setIsCalling(true);
        };

    return { isCalling, onButtonClick };
};

export default useDialogPageHeaderButtons;
