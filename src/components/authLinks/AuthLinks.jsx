'use client';

import React, { useState } from 'react';
import style from './auth.module.css';
import Link from 'next/link';

function AuthLinks() {
	const status = 'notauthenticated';
	const [open, setOpen] = useState(false);
	return (
		<div className={style.container}>
			{status === 'notauthenticated' ? (
				<Link href="/login" className={style.link}>
					Login
				</Link>
			) : (
				<>
					<Link href="/write" className={style.link}>
						Write
					</Link>
					<span className={style.links}>Logout</span>
				</>
			)}
			<div className={style.burger} onClick={() => setOpen(!open)}>
				<div className={style.line}></div>
				<div className={style.line}></div>
				<div className={style.line}></div>
			</div>

			{open && (
				<div className={style.responsiveMenu}>
					<Link href="/">Homepage</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>

					{status === 'notauthenticated' ? (
						<Link href="/login">Login</Link>
					) : (
						<>
							<Link href="/write">Write</Link>
							<span className={style.link}>Logout</span>
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default AuthLinks;
