import Image, { StaticImageData } from 'next/image';
export interface IProps {
	technologies: string[];
	name: string;
	description: string;
	img: StaticImageData;
	link: {
		project: string;
		code?: string;
	};
}

const Work = ({ technologies, name, description, img, link }: IProps) => {
	return (
		<div className="flex gap-5 pb-5 flex-col border-b-2 border-solid border-blue-600 lg:flex-row">
			<div className="w-full overflow-hidden lg:w-1/2">
				<Image className="duration-500 hover:scale-110" src={img} alt="work image" />
			</div>

			<div className="flex flex-col gap-3 justify-around w-full lg:w-1/2">
				<div className="flex gap-3 justify-center flex-wrap lg:justify-normal">
					{technologies.map((el, index) => {
						return (
							<span
								className="p-2 text-xs rounded-lg border-solid text-gray-200 border-[1px] border-blue-800"
								key={index}>
								{el}
							</span>
						);
					})}
				</div>
				<h3 className="font-bold text-gray-200 text-3xl text-center lg:text-left">{name}</h3>
				<div className="text-center lg:text-left">{description}</div>
				<div className="flex gap-3 justify-center lg:justify-normal">
					{link.project && (
						<a
							className="p-2 text-xs rounded-lg border-solid text-gray-200 border-[1px] border-blue-800"
							href={link.project}>
							Project
						</a>
					)}
					{link.code && (
						<a
							className="p-2 text-xs rounded-lg border-solid text-gray-200 border-[1px] border-blue-800"
							href={link.code}>
							Code
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Work;
