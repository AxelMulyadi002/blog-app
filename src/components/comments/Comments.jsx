import style from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Comments() {
	const status = 'authenticated';

	return (
		<div className={style.container}>
			<h1 className={style.title}>Comments</h1>
			{status === 'authenticated' ? (
				<div className={style.write}>
					<textarea
						placeholder="write a comments..."
						className={style.input}
					></textarea>
					<button className={style.button}>Send</button>
				</div>
			) : (
				<Link href="/login">Login to write a comments</Link>
			)}
			<div className={style.comments}>
				<div className={style.comment}>
					<div className={style.user}>
						<Image
							src="/p1.jpeg"
							alt=""
							width={50}
							height={50}
							className={style.image}
						/>
						<div className={style.userInfo}>
							<span className={style.username}>John Doe</span>
							<span className={style.date}>01.01.2024</span>
						</div>
					</div>
					<p className={style.desc}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
						dolores sint. Repellendus reiciendis suscipit, eaque quas vero modi
						facilis porro!
					</p>
				</div>
				<div className={style.comment}>
					<div className={style.user}>
						<Image
							src="/p1.jpeg"
							alt=""
							width={50}
							height={50}
							className={style.image}
						/>
						<div className={style.userInfo}>
							<span className={style.username}>John Doe</span>
							<span className={style.date}>01.01.2024</span>
						</div>
					</div>
					<p className={style.desc}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
						dolores sint. Repellendus reiciendis suscipit, eaque quas vero modi
						facilis porro!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Comments;
