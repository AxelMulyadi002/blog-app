import React from 'react';
import style from './categoryTopic.module.css';
import Link from 'next/link';

function CategoryTopic() {
	return (
		<div className={style.container}>
			<h2 className={style.subtitle}>Discover by topic</h2>
			<h1 className={style.title}>Categories</h1>
			<div className={style.categoryList}>
				<Link
					href="/blog?cat=style"
					className={`${style.categoryItem} ${style.style}`}
				>
					Style
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.categoryItem} ${style.fashion}`}
				>
					Fashion
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.categoryItem} ${style.food}`}
				>
					Food
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.categoryItem} ${style.culture}`}
				>
					Culture
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.categoryItem} ${style.travel}`}
				>
					Travel
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${style.categoryItem} ${style.coding}`}
				>
					Coding
				</Link>
			</div>
		</div>
	);
}

export default CategoryTopic;
