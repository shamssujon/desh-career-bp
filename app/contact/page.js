export default function Contact() {
	return (
		<section className="py-16">
			<div className="container">
				<div className="max-w-2xl">
					<h1 className="mb-3 text-4xl font-semibold leading-tight md:text-5xl md:leading-tight">
						Contact Us
					</h1>
					<p className=" leading-loose">
						If you want to contact us: you can send an email to{" "}
						<a
							href="mailto:contact.deshcareer@gmail.com"
							className="text-blue-500 hover:text-blue-600 hover:underline">
							contact.deshcareer@gmail.com
						</a>
					</p>
					<p className="leading-loose">
						If you want to meet with us, you can come to our office based on an appointment.
					</p>
					<address className="not-italic leading-loose mt-4">
						<p>
							Our Office address:
							<br />
							House: 13/3,
							<br />
							Road: 2,
							<br />
							Shyamoly, Dhaka-1207
							<br />
							+8801880811047
						</p>
					</address>
				</div>
			</div>
		</section>
	);
}
