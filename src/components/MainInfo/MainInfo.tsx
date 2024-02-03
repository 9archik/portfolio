import img from '../../assets/images/workspace.svg';
import Image from 'next/image';
const MainInfo = () => {
	return (
		<main className="items-center flex">
			<div className="flex flex-col container items-center gap-10 py-10 md:flex-row">
				<div className="w-full text-center md:text-left md:w-2/4 md:justify-center">
					<div className="text-5xl mt-5 text-gray-300 font-bold">Литвинов Ярослав</div>
					<div className="text-3xl mt-6 font-bold">
						<span className="text-blue-600">Frontend </span>
						<span className="text-gray-300">разработчик</span>
					</div>
					<div className="text-gray-300 mt-6">
						Люблю создавать и творить, создавать красивые, удобные интерфейсы для пользователей.
						Быстро учусь и постоянно изучаю что-то новое, дабы не стоять на месте.
					</div>
					<div className="mt-10">
						<a
							href="https://t.me/ExMed0"
							className="text-blue-600 border-solid border-[1px] p-3 border-blue-600 rounded-lg">
							Связаться с мной
						</a>
					</div>
				</div>
				<Image alt="image" className="w-3/4 md:w-2/4" src={img} />
			</div>
		</main>
	);
};

export default MainInfo;
