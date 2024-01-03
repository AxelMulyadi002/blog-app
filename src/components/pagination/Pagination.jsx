import React from 'react';
import style from './pagination.module.css';

function Pagination() {
	return (
		<div className={style.container}>
			<button className={style.button}>Preious</button>
			<button className={style.button}>Next</button>
		</div>
	);
}

export default Pagination;
