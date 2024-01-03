import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './editor.module.css';
import { listData } from './listData';

function EditorPick() {
	return (
		<div className={style.container}>
			<h2 className={style.subtitle}>Chosen by the editor</h2>
			<h1 className={style.title}>Editors Pick</h1>
			<div className={style.items}>
				{listData.map((data, index) => {
					return (
						<Link href="/" className={style.item} key={index}>
							<div className={style.imgContainer}>
								<Image src={data.image} alt="" fill className={style.image} />
							</div>
							<div className={style.textContainer}>
								<span className={`${style.category} ${style[data.category]}`}>
									{data.category}
								</span>
								<h3 className={style.postTitle}>{data.title}</h3>
								<div className={style.detail}>
									<span className={style.username}>{data.username}</span>
									<span className={style.date}>{data.date}</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default EditorPick;
