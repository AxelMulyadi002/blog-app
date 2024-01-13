import React from 'react';
import style from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

function page() {
	return (
		<div className={style.container}>
			<div className={style.infoContainer}>
				<div className={style.textContainer}>
					<h1 className={style.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
					</h1>
					<div className={style.user}>
						<div className={style.imgUser}>
							<Image src="/p1.jpeg" alt="" fill className={style.avatar} />
						</div>
						<div className={style.textUser}>
							<span className={style.username}>John Doe</span>
							<span className={style.date}>01.01.2024</span>
						</div>
					</div>
				</div>
				<div className={style.imgContainer}>
					<Image src="/p1.jpeg" alt="" fill className={style.image} />
				</div>
			</div>
			<div className={style.content}>
				<div className={style.post}>
					<div className={style.desc}>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
							laborum eos neque sit expedita facilis aliquam, necessitatibus ad
							pariatur quaerat? Cum molestiae labore iusto in quis, quasi
							ratione eos veniam ex, inventore dolore illum fugit adipisci non
							quos eligendi necessitatibus suscipit nemo accusantium saepe enim
							expedita incidunt iste hic. Consequuntur.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
							laborum eos neque sit expedita facilis aliquam, necessitatibus ad
							pariatur quaerat? Cum molestiae labore iusto in quis, quasi
							ratione eos veniam ex, inventore dolore illum fugit adipisci non
							quos eligendi necessitatibus suscipit nemo accusantium saepe enim
							expedita incidunt iste hic. Consequuntur.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
							laborum eos neque sit expedita facilis aliquam, necessitatibus ad
							pariatur quaerat? Cum molestiae labore iusto in quis, quasi
							ratione eos veniam ex, inventore dolore illum fugit adipisci non
							quos eligendi necessitatibus suscipit nemo accusantium saepe enim
							expedita incidunt iste hic. Consequuntur.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
							laborum eos neque sit expedita facilis aliquam, necessitatibus ad
							pariatur quaerat? Cum molestiae labore iusto in quis, quasi
							ratione eos veniam ex, inventore dolore illum fugit adipisci non
							quos eligendi necessitatibus suscipit nemo accusantium saepe enim
							expedita incidunt iste hic. Consequuntur.
						</p>
					</div>
					<div className={style.comments}>
						<Comments />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
}

export default page;
