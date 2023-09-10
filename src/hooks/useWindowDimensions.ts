import { useLayoutEffect, useState } from 'react';

const useWindowDimensions = () => {
	const [width, setWidth] = useState(window?.innerWidth);
	const [height, setHeight] = useState(window?.innerHeight);
	const updateDimensions = () => {
		setWidth(window?.innerWidth);
		setHeight(window?.innerHeight);
	};
	useLayoutEffect(() => {
		setWidth(window?.innerWidth);
		setHeight(window?.innerHeight);
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return { width, height };
};

export default useWindowDimensions;
