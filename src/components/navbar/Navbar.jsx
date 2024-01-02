import style from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
	return (
		<div className={style.container}>
			<div className={style.socials}>
				<Image src="/instagram.png" alt="instagram" width={24} height={24} />
				<Image src="/tiktok.png" alt="instagram" width={24} height={24} />
				<Image src="/facebook.png" alt="instagram" width={24} height={24} />
				<Image src="/youtube.png" alt="instagram" width={24} height={24} />
			</div>
			<div className={style.logo}>AxelBlog</div>
			<div className={style.links}>
				<ThemeToggle />
				<Link href="/" className={style.link}>
					Homepage
				</Link>
				<Link href="/" className={style.link}>
					Contact
				</Link>
				<Link href="/" className={style.link}>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
};

export default Navbar;
