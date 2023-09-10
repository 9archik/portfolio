'use client';
import Link from 'next/link';
import styles from './style.module.css';
import Navigation from './Navigaion';
import Image from 'next/image';
import telegram from '../../assets/images/telegram.svg';
import gmail from '../../assets/images/gmail.svg';
import github from '../../assets/images/github.svg';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useState } from 'react';
import Burger from '../Burger/Burger';
const Header = () => {
	const { width } = useWindowDimensions();
	const [active, setActive] = useState<boolean>(false);
	return (
		<>
		<header className="flex flex-row justify-between container py-5 items-center">
			<div className="text-slate-700 text-3xl flex gap-5">
				<a href="https://t.me/ExMed0">
					<Image layout="fixed" color="#d1d1d1" width={24} height={24} src={telegram} alt="" />
				</a>
				<a href="mailto:Pochtamedvedya00@mail.ru">
					<Image layout="fixed" color="#d1d1d1" width={24} height={24} src={gmail} alt="" />
				</a>
				<a href="https://github.com/9archik">
					<Image layout="fixed" color="#d1d1d1" width={24} height={24} src={github} alt="" />
				</a>
			</div>
			<div className="flex gap-5 text-gray-300">{width > 767 ? <Navigation /> : <button onClick={() => setActive(!active)} className={`${styles.btn} ${active && styles.active}`}></button>}</div>
		</header>

		{
			width < 768 && <Burger active={active}/>
		}
		</>
		
	);
};

export default Header;
