"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
	const pathname = usePathname();

	return (
		<div className="bg-white shadow py-4">
			<div className="container flex items-center">
				<Link href="/">
					<Image src={Logo} width="150" height="150" alt="Logo" />
				</Link>
				<div className="flex items-center ml-auto gap-2">
					<ul className="flex items-center gap-2">
						{navLinks.map(({ name, url }) => {
							return (
								<li key={name}>
									<Link href={url} className={`${pathname === url ? "text-blue-500" : ""} font-bold`}>
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
					<Link href={"/"} className="bg-red-600 text-white px-4 py-2 rounded">
						Join Now
					</Link>
				</div>
			</div>
		</div>
	);
}
