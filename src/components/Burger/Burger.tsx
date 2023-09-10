import { usePathname } from 'next/navigation';
import Navigation, { Links } from '../Header/Navigaion';
import Link from "next/link";
import styles from './style.module.css';


interface IProps {
	active: boolean;
}


const Burger = ({ active }: IProps) => {
	const pathname = usePathname();
	return (
		<div
			className={`flex flex-col gap-10 fixed top-0 left-0 bottom-0 right-0 bg-black text-center py-20 ${
				styles.burger
			} ${active && styles.active}`}>
			{Links.map((el) => {
				if (el.href === pathname) {
					return (
						<Link className='text-blue-600' key={el.href} href={el.href}>
							{el.text}
						</Link>
					);
				} else {
					return (
						<Link key={el.href} href={el.href}>
							{el.text}
						</Link>
					);
				}
			})}
		</div>
	);
};

export default Burger;
