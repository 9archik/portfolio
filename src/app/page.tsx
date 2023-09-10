import Header from '@/components/Header/Header';
import MainInfo from '@/components/MainInfo/MainInfo';
import Image from 'next/image';
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Главная',
  description: "Главная страница"
};

export default function Home() {
	return <>
  <Header/>
  <MainInfo/>
  </>;
}
