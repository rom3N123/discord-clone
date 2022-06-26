import { Tooltip } from '@chakra-ui/react';
import { createElement, FC, ReactElement } from 'react';

const withTooltip =
    <P>(Component: FC<P>, tooltip: string) =>
    (props: any): ReactElement<P> => {
        return createElement(
            Tooltip,
            { label: tooltip },
            createElement(Component, props)
        );
    };

export default withTooltip;
