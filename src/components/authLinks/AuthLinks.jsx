import React from 'react';
import style from './auth.module.css';
import Link from 'next/link';

function AuthLinks() {
	const status = 'notauthenticated';
	return (
		<div>
			{status === 'notauthenticated' ? (
				<Link href="/login">Login</Link>
			) : (
				<>
					<Link href="/write">Write</Link>
					<span className={style.links}>Logout</span>
				</>
			)}
		</div>
	);
}

export default AuthLinks;
