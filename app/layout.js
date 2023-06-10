import { Inter } from "next/font/google";
import "./assets/css/styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Newsletter Home Page",
	description: "5-minute newsletter ",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<head>
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className={`${inter.className} h-full leading-normal text-slate-950`}>
				<div className="flex h-full flex-col justify-between">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
