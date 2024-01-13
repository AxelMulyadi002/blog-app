import style from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.info}>
				<div className={style.logo}>
					<Image src="/logo.png" alt="axel blog" width={50} height={50} />
					<h1 className={style.logoText}>Axel Blog</h1>
				</div>
				<p className={style.desc}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
					totam voluptate placeat tempore, numquam labore repudiandae? Repellat
					iusto ipsa est?
				</p>
				<div className={style.icons}>
					<Image src="/instagram.png" alt="instagram" width={18} height={18} />
					<Image src="/tiktok.png" alt="instagram" width={18} height={18} />
					<Image src="/facebook.png" alt="instagram" width={18} height={18} />
					<Image src="/youtube.png" alt="instagram" width={18} height={18} />
				</div>
			</div>
			<div className={style.links}>
				<div className={style.list}>
					<span className={style.listTitle}>Links</span>
					<Link href="/">Homepage</Link>
					<Link href="/">Contact</Link>
					<Link href="/">About</Link>
					<Link href="/">Blog</Link>
				</div>
				<div className={style.list}>
					<span className={style.listTitle}>Tags</span>
					<Link href="/">Style</Link>
					<Link href="/">Fashion</Link>
					<Link href="/">Coding</Link>
					<Link href="/">Travel</Link>
				</div>
				<div className={style.list}>
					<span className={style.listTitle}>Social</span>
					<Link href="/">Instagram</Link>
					<Link href="/">Tiktok</Link>
					<Link href="/">Youtube</Link>
					<Link href="/">Facebook</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
