import { forwardRef, ReactElement } from 'react';
import {
	motion,
	HTMLMotionProps,
	Variants as _Variants,
	MotionProps,
} from 'framer-motion';
import { WithTransitionConfig } from '@chakra-ui/transition/src/transition-utils';

export interface AppearProps
	extends WithTransitionConfig<HTMLMotionProps<'div'>> {}

export const appearTransformTemplate: MotionProps['transformTemplate'] = ({
	translateZ,
	y,
}) => {
	return `perspective(500px) translateY(${y}) translateZ(${translateZ})`;
};

export const appearConfig: HTMLMotionProps<'div'> = {
	initial: {
		y: '-50px',
		opacity: 0,
		translateZ: 100,
	},
	animate: { translateZ: 0, y: 0, opacity: 1 },
	transition: { duration: 0.3, type: 'spring' },
	exit: {
		translateZ: 50,
		y: '-10px',
		opacity: 0,
	},
};

const Appear = forwardRef<HTMLDivElement, AppearProps>(
	(props, ref): ReactElement | null => {
		const {
			unmountOnExit,
			in: isOpen = true,
			className,
			transition,
			transitionEnd,
			delay,
			...rest
		} = props;

		if (!isOpen) {
			return null;
		}

		return (
			<motion.div
				ref={ref}
				{...appearConfig}
				transformTemplate={appearTransformTemplate}
				{...rest}
			/>
		);
	}
);

export default Appear;
