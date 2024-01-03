import React from 'react';
import style from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Card() {
	return (
		<div className={style.container}>
			<div className={style.imgContainer}>
				<Image src="/p1.jpeg" alt="" fill className={style.image} />
			</div>
			<div className={style.textContainer}>
				<div className={style.detail}>
					<span className={style.date}>03.01.2024 - </span>
					<span className={style.category}> Culture</span>
				</div>
				<Link href="/">
					<h1>Lorem ipsum dolor sit amet consectetur.</h1>
				</Link>
				<p className={style.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero
					deleniti itaque atque error illum nostrum sunt illo laborum accusamus
					velit, eos culpa quis praesentium quod numquam beatae ipsa explicabo!
				</p>
				<Link href="/" className={style.link}>
					Read More
				</Link>
			</div>
		</div>
	);
}

export default Card;
