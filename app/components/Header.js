"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../assets/img/logo.png";

const navLinks = [
	{ name: "Home", url: "/" },
	{ name: "Privacy Policy", url: "/privacy-policy" },
	{ name: "Terms Condition", url: "/terms-condition" },
	{ name: "About Us", url: "/about" },
	{ name: "Contact Us", url: "/contact" },
	{ name: "Advertise", url: "/advertise" },
];

export default function Header() {
	const [openMenu, handleOpenMenu] = useState(false);
	const pathname = usePathname();

	const handleMenuToggle = () => {
		handleOpenMenu(!openMenu);
		console.log(openMenu);
	};

	return (
		<div className="relative bg-white py-4 shadow-md">
			<div className="container flex flex-wrap items-center justify-between">
				<Link href="/" className="shrink-0">
					<Image src={Logo} width="180" height="150" alt="Logo" className="h-auto w-36 lg:w-44" />
				</Link>
				<button
					onClick={handleMenuToggle}
					className={`relative flex h-6 w-10 flex-col items-center justify-center before:absolute before:inset-x-0 before:h-0.5 before:w-full before:origin-center before:transform before:bg-black before:transition-all before:content-[''] after:absolute after:inset-x-0 after:h-0.5 after:w-full after:origin-center after:transform after:bg-black after:transition-all after:content-[''] lg:hidden ${
						openMenu
							? "before:-translate-y-1/2 before:-rotate-45 after:-translate-y-1/2 after:rotate-45"
							: "before:-translate-y-3 before:rotate-0 after:translate-y-3 after:rotate-0"
					}`}>
					<span className="sr-only">Menu</span>
					<span
						className={`absolute inset-x-0 block h-0.5 bg-black transition-all ${
							openMenu ? "w-0" : "w-full"
						}`}></span>
				</button>
				<div
					className={`absolute inset-x-0 top-full flex w-full flex-1 origin-top transform flex-col items-center gap-2 bg-white p-4 shadow-md transition-all lg:static lg:flex-row lg:justify-end lg:bg-transparent lg:p-0 lg:shadow-none ${
						openMenu ? "scale-y-100" : "scale-y-0 lg:scale-y-100"
					}`}>
					<ul className="flex flex-col items-center gap-2 lg:flex-row">
						{navLinks.map(({ name, url }) => {
							return (
								<li key={name}>
									<Link
										onClick={handleMenuToggle}
										href={url}
										className={`${
											pathname === url ? "text-rose-600" : "text-black"
										} p-2 font-semibold transition hover:text-rose-600`}>
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
					<Link href={"/"} className="rounded bg-rose-600 px-4 py-2 text-white transition hover:bg-rose-700">
						Join Now
					</Link>
				</div>
			</div>
		</div>
	);
}
