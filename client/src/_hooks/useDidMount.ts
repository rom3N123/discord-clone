import { useRef, useEffect } from 'react';

const useDidMount = (): boolean => {
	const isMounted = useRef<boolean>(false);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return isMounted.current;
};

export default useDidMount;
