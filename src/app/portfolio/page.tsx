import Header from '@/components/Header/Header';
import Projects from '@/components/Projects/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Портфолио',
	description: 'Страничка портфолио',
};

const Page = () => {
	return (
		<>
			<Header />
			<Projects />
		</>
	);
};

export default Page;
