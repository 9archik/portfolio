'use client';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
interface IProps {
	value: 'positive' | 'negative';
	children: React.ReactNode;
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}
const Alert: React.FC<IProps> = ({ value = 'negative', children, active, setActive }) => {

	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (active) {
			timerRef.current = setTimeout(() => {
				setActive(false);
			}, 5000);
			return () => {
				if (timerRef && timerRef.current) clearTimeout(timerRef.current);
			};
		}
	}, [active]);

	useEffect(() => {
		const clickWindow = () => {
			setActive(false);
		};
		window.addEventListener('click', clickWindow);
	}, []);
	return (
		<div
			style={{ transition: '0.5s' }}
			className={`fixed right-2 bottom-5 max-w-[320px] py-3 px-5 ${
				value === 'negative' ? 'bg-red-600' : 'bg-green-500'
			} text-2xl text-white font-bold ${active ? 'translate-x-0' : 'translate-x-[400px]'} ${
				active ? 'z-10' : 'z-0'
			} rounded-lg`}>
			{children}
		</div>
	);
};

export default Alert;
