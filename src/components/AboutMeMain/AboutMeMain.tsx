import Link from 'next/link';
import Skills from './Skills/Skills';

const AboutMeMain = () => {
	return (
		<>
			<div className="flex flex-col items-center gap-5 container">
				<h2 className="text-blue-200 mt-20 text-5xl font-black text-center sm:text-7xl">Обо мне</h2>
				<div className="mt-5 text-center text-2xl">
					В области веб-разработки нахожусь полтора года. За это время успел поработать с различными
					проектами: от верстки макетов до разработки полноценных веб-приложений. Ознакомиться с
					моими работами можете в разделе <Link className="text-blue-600" href={'/portfolio'}>портфолио</Link>
				</div>
				<Skills />
			</div>
		</>
	);
};

export default AboutMeMain;
