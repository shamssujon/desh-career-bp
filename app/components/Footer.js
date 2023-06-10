import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/img/logo.png";

export default function Footer() {
	return (
		<footer className="bg-[#0F0D32]">
			<div className="container py-10">
				<ul className="flex items-center justify-center gap-2 text-white">
					<li>
						<Link
							href="https://facebook.com"
							target="_blank"
							className="block rounded border border-blue-100/50 p-1 text-xl transition hover:opacity-100 opacity-70">
							<FaFacebook />
						</Link>
					</li>
					<li>
						<Link
							href="https://facebook.com"
							target="_blank"
							className="block rounded border border-blue-100/50 p-1 text-xl transition hover:opacity-100 opacity-70">
							<FaYoutube />
						</Link>
					</li>
					<li>
						<Link
							href="https://facebook.com"
							target="_blank"
							className="block rounded border border-blue-100/50 p-1 text-xl transition hover:opacity-100 opacity-70">
							<FaLinkedinIn />
						</Link>
					</li>
				</ul>

				<div className="md:lg-4 mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
					<div className="text-center md:text-left">
						<Link href="/">
							<Image
								src={logo}
								width="180"
								height="150"
								alt="Logo"
								className="inline-block h-auto w-36 lg:w-44"
							/>
						</Link>
						<p className="mt-4 text-blue-100/70">
							Desh Career is Career based newsletter in Bengali language. This newsletter has published
							weekly. This is published in every Saturday at 12.00 PM.
						</p>
					</div>
					<div className="mt-4 text-center md:mt-6">
						<h4 className="mb-6 text-2xl text-gray-300 md:mb-8">Privacy And Terms</h4>
						<ul>
							<li>
								<Link
									href="/"
									className="inline-block py-1 text-blue-100/70 transition hover:text-white">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="inline-block py-1 text-blue-100/70 transition hover:text-white">
									Terms Condition
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="inline-block py-1 text-blue-100/70 transition hover:text-white">
									FAQ
								</Link>
							</li>
						</ul>
					</div>
					<div className="mt-4 text-center md:mt-6 md:text-right">
						<h4 className="mb-6 text-2xl text-gray-300 md:mb-8">Support</h4>
						<ul>
							<li>
								<Link
									href="/"
									className="inline-block py-1 text-blue-100/70 transition hover:text-white">
									Affiliate Link
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="inline-block py-1 text-blue-100/70 transition hover:text-white">
									Contact us
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="inline-block py-1 text-blue-100/70 transition hover:text-white">
									Advertise with us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="mx-auto max-w-[92%] opacity-20" />
			<div className="container py-5">
				<div className="flex flex-wrap items-center justify-center gap-4 md:justify-between">
					<p className="text-center text-sm text-blue-100/70 md:text-left">
						&copy; 2023 Newsletter E-mail Service: All Copyright reserved.
					</p>
					<ul className="flex flex-wrap items-center gap-2 text-sm">
						<li>
							<Link
								href="/"
								className="inline-block p-1 py-1 text-blue-100/70 transition hover:text-white">
								Terms
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="inline-block p-1 py-1 text-blue-100/70 transition hover:text-white">
								Cookie Policy
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="inline-block p-1 py-1 text-blue-100/70 transition hover:text-white">
								Terms
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="inline-block p-1 py-1 text-blue-100/70 transition hover:text-white">
								Privacy
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
