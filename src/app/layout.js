import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Blog App',
	description: 'Created by Axel Mulyadi',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<div className="body">
				<div className="container">
					<div className="wrapper">
						<Navbar />
						{children}
						<Footer />
					</div>
				</div>
			</div>
		</html>
	);
}
