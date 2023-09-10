import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const updateDimensions = () => {
		if (typeof window !== 'undefined') {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
	};
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return { width, height };
};

export default useWindowDimensions;
