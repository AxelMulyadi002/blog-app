import Pagination from '../pagination/Pagination';
import style from './cardlist.module.css';

const CardList = () => {
	return (
		<div className={style.container}>
			Card List
			<Pagination />
		</div>
	);
};

export default CardList;
