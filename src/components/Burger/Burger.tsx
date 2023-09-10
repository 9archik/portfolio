import Navigation from '../Header/Navigaion';
import styles from './style.module.css';

interface IProps {
	active: boolean;
}

const Burger = ({ active }: IProps) => {
	return (
		<div
			className={`flex flex-col gap-10 fixed top-0 left-0 bottom-0 right-0 bg-black text-center py-20 ${
				styles.burger
			} ${active && styles.active}`}>
			<Navigation />
		</div>
	);
};

export default Burger;
