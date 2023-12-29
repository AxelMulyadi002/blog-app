import React from 'react';
import style from './theme.module.css';
import Image from 'next/image';
function ThemeToggle() {
	return (
		<div className={style.container}>
			<Image src="/moon.png" alt="moon" width={14} height={14} />
			<div className={style.ball}></div>
			<Image src="/sun.png" alt="moon" width={14} height={14} />
		</div>
	);
}

export default ThemeToggle;
