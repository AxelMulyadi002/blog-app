import React from 'react';
import style from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { listData } from './listData';
import EditorPick from '../editorPick/EditorPick';
import CategoryTopic from '../categorySidebar/CategoryTopic';

function Menu() {
	return (
		<div className={style.container}>
			<h2 className={style.subtitle}>{"What's hot"}</h2>
			<h1 className={style.title}>Most Popular</h1>
			<div className={style.items}>
				{listData.map((data, index) => {
					return (
						<Link href="/" className={style.item} key={index}>
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
			<CategoryTopic />
			<EditorPick />
		</div>
	);
}

export default Menu;
