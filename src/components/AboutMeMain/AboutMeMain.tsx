import Skills from './Skills/Skills';

const AboutMeMain = () => {
	return (
		<>
			<div className="flex flex-col items-center gap-5 container">
				<h2 className="text-blue-200 mt-20 text-5xl font-black text-center sm:text-7xl">Обо мне</h2>
				<div className="mt-5 text-center text-2xl">
					Изучаю веб-разработку полтора года. Нравится разрабатывать пользовательские части сайтов.
					Имею 8 месяцев опыта работы на фрилансе, в ходе которых участвовал в различных проектах
					связанных с React: верстка, подключение API, доработка функционала, исправление багов
				</div>
				<Skills />
			</div>
		
		</>
	);
};

export default AboutMeMain;
