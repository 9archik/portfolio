import Image from 'next/image';
import img from '../../assets/images/guy.svg';
import styles from "./style.module.css"
const AboutMeHeader = () => {
	return (
		<div className={`flex flex-col items-center gap-5 h-screen justify-center ${styles.container}`}>
			<h1 className="text-blue-200 text-5xl font-black text-center sm:text-7xl">
				Литвинов Ярослав
			</h1>
			<Image src={img} alt="guy img" />
			<a
				href="https://t.me/ExMed0"
				className="text-blue-600 border-solid border-[1px] p-3 border-blue-600 rounded-lg">
				Связаться с мной
			</a>
		</div>
	);
};

export default AboutMeHeader;
