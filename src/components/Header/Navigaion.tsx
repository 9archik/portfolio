import Link from 'next/link';
import {usePathname} from "next/navigation"

interface ILink {
	href: string;
	text: string;
}

const Links: ILink[] = [
	{ href: '/', text: 'Главная' },
	{ href: '/about', text: 'Обо мне' },
	{ href: '/portfolio', text: 'Портфолио' },
];
const Navigation = () => {
	const pathname = usePathname();

	return (
		<>
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
		</>
	);
};
export default Navigation;