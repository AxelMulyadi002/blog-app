import style from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>
				<b>Hey, Axel blog here! Discover my latest stories and my writing</b>
			</h1>
			<div className={style.post}>
				<div className={style.imgContainer}>
					<Image src="/p1.jpeg" alt="" fill className={style.image} />
				</div>
				<div className={style.textContainer}>
					<h1 className={style.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
						aliquid!
					</h1>
					<p className={style.postDesc}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
						id sit dolorem quae, commodi eum explicabo consequatur nostrum dicta
						quia quas atque voluptas veniam, impedit deleniti obcaecati odit in
						perferendis?
					</p>
					<button className={style.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
