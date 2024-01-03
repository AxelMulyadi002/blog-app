import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import style from './cardlist.module.css';

const CardList = () => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Recent Posts</h1>
			<div className={style.posts}>
				<Card />
				<Card />
				<Card />
			</div>
			<Pagination />
		</div>
	);
};

export default CardList;
