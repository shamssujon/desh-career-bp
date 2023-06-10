import { HiOutlineEnvelope } from "react-icons/hi2";
export default function Home() {
	return (
		<section className="py-16">
			<div className="container">
				<div className="max-w-2xl">
					<h1 className="mb-3 text-4xl font-semibold leading-tight md:text-5xl md:leading-tight">
						Get Smarter about your career
					</h1>
					<p className="mb-6">
						Get the <strong>5-minute newsletter</strong> keeping about smart career
					</p>
					<form className="mb-8">
						<div className="flex rounded-md border bg-white p-2 shadow">
							<div className="grid place-content-center p-1 text-lg">
								<HiOutlineEnvelope />
							</div>
							<input
								type="email"
								className="h-full w-full flex-1 p-3 outline-none"
								placeholder="Your E-mail Addresss"
							/>
							<button
								className="rounded bg-rose-600 px-4 py-3 leading-none text-white transition hover:bg-rose-700 md:px-10"
								type="submit">
								Join Free
							</button>
						</div>
					</form>
					<p className="text-sm">
						We&apos;re committed to your privacy. DashCareer uses the information you provide to contact you
						about our relevant content and services. You may unsubscribe from these communications at any
						time. For more information, check out our Privacy Policy.
					</p>
				</div>
			</div>
		</section>
	);
}
