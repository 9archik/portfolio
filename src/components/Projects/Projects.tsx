import { IProps } from './Work/Work';
import feplex from '../../assets/images/feplex.png';
import chester from '../../assets/images/chester.png';
import reshbank from '../../assets/images/reshbank.png';
import tgWEBAPP from '../../assets/images/skuter.png';
import blog from '../../assets/images/blog.png';
import converter from '../../assets/images/converter.png';
import pomodoro from '../../assets/images/pomodoro.png';
import covid from '../../assets/images/covid.png';
import marketData from '../../assets/images/marketData.png';
import Work from './Work/Work';
const ProjectList: IProps[] = [
	{
		technologies: ['typescript', 'scss', 'react', 'react-query', 'zustand'],
		name: 'Chesterbets',
		description: 'Верстка страниц и подключение API',
		img: chester,
		link: {
			project: 'https://chesterbets.com/',
		},
	},
	{
		technologies: ['typescript', 'scss', 'react', 'react-context', 'SWR'],
		name: 'Reshbank',
		description:
			'Поправка валидации форм, добавление нового функционала, интеграция react-приложения с внешними API. Нашел и исправил баг, который крашил приложение',
		img: reshbank,
		link: {
			project: 'https://reshbank.online/',
		},
	},
	{
		technologies: ['javascript', 'scss', 'react'],
		name: 'Feplex',
		description:
			'Подправил баг анимации заднего фона, сделав ее более плавной и сделал слайдер в слайдере',
		img: feplex,
		link: {
			project: 'https://feplex.com/',
		},
	},
	{
		technologies: ['redux', 'scss', 'react'],
		name: 'tg webAPP',
		description: 'Верстка страничек',
		img: tgWEBAPP,
		link: {
			project: 'https://webapp-react-gamma.vercel.app/',
		},
	},
];

const PetProjectList: IProps[] = [
	{
		technologies: ['typescript', 'scss', 'react', 'django'],
		name: 'Blog',
		description:
			'Пет проект блога с админ панелью на django с регистрацией и комментариями к постам',
		img: blog,
		link: {
			project: 'http://9archikblog.ru/',
			code: 'https://github.com/9archik/react-django-blog',
		},
	},
	{
		technologies: ['typescript', 'tailwind', 'react', 'material UI'],
		name: 'Converter',
		description: 'Конвертер валют с возможностью смены темы и сохранения параметров в localStorage',
		img: converter,
		link: {
			project: 'https://test-converter-git-master-9archik.vercel.app/',
			code: 'https://github.com/9archik/test-converter',
		},
	},
	{
		technologies: ['javascript', 'react'],
		name: 'Pomodoro',
		description: 'Таймер помодоро с возможностью поставить музыку и записывать задачи',
		img: pomodoro,
		link: {
			project:
				'https://pomodoro-timer-6g16jdf29-9archik.vercel.app/?vercelToolbarCode=SBIBHIo3LIGMVIs',
			code: 'https://github.com/9archik/Pomodoro',
		},
	},
	{
		technologies: ['javascript'],
		name: 'Simulation covid-19',
		description:
			'Курсовая работа симуляции эпидемии коронавируса в течение 2 лет с разными процентами карантинных ограничений.',
		img: covid,
		link: {
			project: 'https://covid-19-9archik.vercel.app/',
			code: 'https://github.com/9archik/covid-19',
		},
	},
	{
		technologies: ['typescript', 'react', 'redux toolkit', 'rtk query', 'VictoryJS'],
		name: 'Market data',
		description:
			'Приложение для просмотра графиков акций разных компаний, получающее информацию от апи. Также можно просматривать последние новости с фильтрацией',
		img: marketData,
		link: {
			project: 'https://market-data.vercel.app/',
			code: 'https://github.com/9archik/Market-Data',
		},
	},
];

const Projects = () => {
	return (
		<main className="container">
			<h2 className="text-blue-200 mt-10 text-3xl font-black text-center sm:text-5xl">
				Проекты в которых я принимал участие
			</h2>

			<div className="flex flex-col gap-5 mt-5">
				{ProjectList.map((el) => {
					return (
						<Work
							key={el.name}
							technologies={el.technologies}
							name={el.name}
							description={el.description}
							img={el.img}
							link={el.link}
						/>
					);
				})}
			</div>

			<h2 className="text-blue-200 mt-20 text-3xl font-black text-center sm:text-5xl">
				Мои пет-проекты
			</h2>

			<div className="flex flex-col gap-5">
				{PetProjectList.map((el) => {
					return (
						<Work
							key={el.name}
							technologies={el.technologies}
							name={el.name}
							description={el.description}
							img={el.img}
							link={el.link}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default Projects;
