'use client';
import { useState } from 'react';
import { FormEvent } from 'react';
import Alert from '../Alert/Alert';
import styles from './style.module.css';

const Form = () => {
	const [form, setForm] = useState({
		email: '',
		name: '',
		text: '',
	});

	const [emailAlert, setEmailAlert] = useState<boolean>(false);
	const [serverError, setServerError] = useState<boolean>(false);
	const [noConnectAlert, setNoConnectAlert] = useState<boolean>(false);
	const [successForm, setSuccessForm] = useState<boolean>(false);
	const [sending, setSending] = useState<boolean>(false);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isValidEmail = form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

		if (!isValidEmail) {
			setEmailAlert(true);
		} else {
			setSending(true);
			fetch('http://www.cr54355.tw1.ru/api/message/', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					email: form.email.trim(),
					name: form.name.trim(),
					text: form.text.trim(),
				}),
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setSuccessForm(true);
					setSending(false);
					setForm({ ...form, email: '', name: '', text: '' });
				})
				.catch((err) => {
					console.log('error', err);
					console.error(err);
					if (navigator.onLine) setServerError(true);
					else setNoConnectAlert(true);
					setSending(false);
				});
		}
	};
	return (
		<>
			<form
				onSubmit={(e) => {
					onSubmit(e);
				}}
				className="flex flex-col items-center gap-5 mt-20">
				<div className="font-bold text-2xl">Оставить отзыв и связаться со мной</div>
				<label className="flex flex-col gap-1 w-full focus:text-blue-600">
					<span className="text-xl">Email</span>
					<input
						style={{ transition: '0.25s' }}
						className="py-2 text-white outline-none border-b-[1px] border-white bg-transparent focus:border-blue-600"
						required
						onChange={(e) => {
							setForm({ ...form, email: e.target.value.trim() });
						}}
						value={form.email}
					/>
				</label>

				<label className="flex flex-col gap-1 w-full focus:text-blue-600">
					<span className="text-xl text-inherit">Имя</span>
					<input
						style={{ transition: '0.25s' }}
						onChange={(e) => {
							setForm({ ...form, name: e.target.value.trimStart() });
						}}
						className="py-2 text-white outline-none border-b-[1px] border-white bg-transparent focus:border-blue-600"
						required
						value={form.name}
					/>
				</label>

				<label className="flex flex-col gap-1 w-full">
					<span className="text-xl">Текст</span>
					<textarea
						onChange={(e) => {
							setForm({ ...form, text: e.target.value.trimStart() });
						}}
						style={{ transition: '0.25s' }}
						className="p-2 text-white mt-2 outline-none bg-transparent border-[1px] border-white rounded-lg focus:border-blue-600"
						required
						value={form.text}
					/>
				</label>

				<button
					style={{ transition: '0.25s' }}
					disabled={sending}
					className="text-blue-600 mb-8 w-48 min-h-12 border-solid border-[1px] p-3 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
					{sending ? (
						<svg
							className={`${styles.svgLoader} w-6 text-blue-600`}
							viewBox="0 0 100 100"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="45" />
						</svg>
					) : (
						'Отправить'
					)}
				</button>
			</form>

			<Alert setActive={setEmailAlert} active={emailAlert} value="negative">
				Неккоректный email
			</Alert>

			<Alert setActive={setServerError} active={serverError} value="negative">
				Ошибка сервера
			</Alert>

			<Alert setActive={setSuccessForm} active={successForm} value="positive">
				Заявка отправлена
			</Alert>

			<Alert setActive={setNoConnectAlert} active={noConnectAlert} value="negative">
				Отсутсвует подключение к интернету
			</Alert>
		</>
	);
};

export default Form;
