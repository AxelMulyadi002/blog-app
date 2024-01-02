import React from 'react';
import style from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';

function CategoryList() {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Popular Categories</h1>
			<div className={style.categories}>
				<Link
					href="/blog?cat=style"
					className={`${style.category} ${style.style}`}
				>
					<Image
						src="/style.png"
						alt=""
						width={32}
						height={32}
						className={style.image}
					/>
					Style
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.category} ${style.fashion}`}
				>
					<Image
						src="/fashion.png"
						alt=""
						width={32}
						height={32}
						className={style.image}
					/>
					Fashion
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.category} ${style.food}`}
				>
					<Image
						src="/food.png"
						alt=""
						width={32}
						height={32}
						className={style.image}
					/>
					Food
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.category} ${style.travel}`}
				>
					<Image
						src="/travel.png"
						alt=""
						width={32}
						height={32}
						className={style.image}
					/>
					Travel
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.category} ${style.culture}`}
				>
					<Image
						src="/culture.png"
						alt=""
						width={32}
						height={32}
						className={style.image}
					/>
					Culture
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.category} ${style.coding}`}
				>
					<Image
						src="/coding.png"
						alt=""
						width={32}
						height={32}
						className={style.image}
					/>
					Coding
				</Link>
			</div>
		</div>
	);
}

export default CategoryList;
