import AboutMeHeader from '@/components/AboutMeHeader/AboutMeHeader';
import AboutMeMain from '@/components/AboutMeMain/AboutMeMain';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Обо мне',
	description: 'Страничка обо мне',
};

export default function Page() {
	return (
		<>
			<Header />
			<main className="flex flex-col">
				<AboutMeHeader />
				<AboutMeMain />
			</main>
		</>
	);
}
