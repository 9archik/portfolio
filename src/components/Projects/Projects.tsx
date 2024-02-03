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
import partnersPng from '../../assets/images/partners.png';
import Work from './Work/Work';
import { cache } from 'react';
import Form from '../Form/Form';
import Link from 'next/link';

interface IPost {
	title: string;
	image: string;
	link?: string;
	github?: string | null;
	technologies: string[];
	description: string;
}

interface IFetchData {
	projects: IPost[];
	petProjects: IPost[];
}
interface IServerError {
	errorCode: number;
	serverError: boolean;
}

function isIFetchData(variable: any): variable is IFetchData {
	return (
		typeof variable === 'object' &&
		Array.isArray(variable.projects) &&
		Array.isArray(variable.petProjects)
	);
}

type getProjectsFunc = () => Promise<IFetchData | IServerError>;
const getAllProjects: getProjectsFunc = async () => {
	try {
		const data = await fetch('http://www.cr54355.tw1.ru/api/projects/', {
			cache: 'no-store',
		});

		const projects: IFetchData = await data.json();
		return projects;
	} catch {
		return {
			errorCode: 500,
			serverError: true,
		};
	}
};

const Projects = async () => {
	const projects = await getAllProjects();

	console.log(projects)

	if ('serverError' in projects && projects?.serverError) {
		return (
			<main className="container flex justify-center flex-col items-center">
				<div className="text-blue-200 text-center text-xl font-black sm:text-3xl">
					Извините, в данный момент сервер недоступен
				</div>

				<Link
					style={{ transition: '0.25s' }}
					href="/"
					className="text-blue-600 mt-5 border-solid border-[1px] p-3 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
					Перейти на главную
				</Link>
			</main>
		);
	}

	return (
		<main className="container">
			{isIFetchData(projects) &&
				projects.projects.length === 0 &&
				projects.petProjects.length === 0 && (
					<div className="text-blue-200 mt-10 text-3xl font-black text-center sm:text-5xl">
						Портфолио пока пусто ):
					</div>
				)}
			{isIFetchData(projects) && projects.projects.length !== 0 && (
				<>
					<h2 className="text-blue-200 mt-10 text-3xl font-black text-center sm:text-5xl">
						Проекты в которых я принимал участие
					</h2>

					<div className="flex flex-col gap-5 mt-5">
						{projects.projects.map((el) => {
							return (
								<Work
									key={el.title}
									technologies={el.technologies}
									name={el.title}
									description={el.description}
									img={`http://www.cr54355.tw1.ru/${el.image}`}
									link={el.link}
									github={el?.github}
								/>
							);
						})}
					</div>
				</>
			)}

			{isIFetchData(projects) && projects.petProjects.length !== 0 && (
				<>
					{' '}
					<h2 className="text-blue-200 mt-20 mb-5 text-3xl font-black text-center sm:text-5xl">
						Мои пет-проекты
					</h2>
					<div className="flex flex-col gap-5">
						{projects.petProjects.map((el) => {
							return (
								<Work
									key={el.title}
									technologies={el.technologies}
									name={el.title}
									description={el.description}
									img={`http://www.cr54355.tw1.ru/${el.image}`}
									link={el.link}
									github={el?.github}
								/>
							);
						})}
					</div>
				</>
			)}

			<Form />
		</main>
	);
};

export default Projects;
