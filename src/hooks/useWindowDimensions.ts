'use client';
import { useLayoutEffect, useState } from 'react';

const useWindowDimensions = () => {
	const [width, setWidth] = useState<number>(9999);
	const [height, setHeight] = useState<number>(9999);
	const updateDimensions = () => {
		if (typeof window !== 'undefined') {
			setWidth(window?.innerWidth);
			setHeight(window?.innerHeight);
		}
	};
	useLayoutEffect(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return { width, height };
};

export default useWindowDimensions;
