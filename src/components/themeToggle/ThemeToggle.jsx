'use client';
import React, { useContext } from 'react';
import style from './theme.module.css';
import Image from 'next/image';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
	const { theme, toggle } = useContext(ThemeContext);

	console.log(theme);

	return (
		<div
			className={style.container}
			onClick={toggle}
			style={
				theme === 'dark'
					? { backgroundColor: 'white' }
					: { backgroundColor: '#0f172a' }
			}
		>
			<Image src="/moon.png" alt="moon" width={14} height={14} />
			<div
				className={style.ball}
				style={
					theme === 'dark'
						? { backgroundColor: '#0f172a', left: 1 }
						: { backgroundColor: 'white', right: 1 }
				}
			></div>
			<Image src="/sun.png" alt="moon" width={14} height={14} />
		</div>
	);
}

export default ThemeToggle;
