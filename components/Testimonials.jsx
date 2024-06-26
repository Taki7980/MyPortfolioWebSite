import clsx from "clsx";
import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import GridPattern from "./GridPattern";
import Image from "next/image";

const Testimonials = ({ children, client, className }) => {
	return (
		<Container
			className={clsx(
				"relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 w-full",
				className
			)}
		>
			<Image
				src="/bg2.jpg"
				alt="Background"
				fill
				className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_10%,transparent_90%)] rounded-tl-3xl rounded-br-3xl"
				yOffset={-256}
			/>

			<FadeIn>
				<figure className="mx-auto max-w-4xl">
					<blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
						<p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
							{children}
						</p>
					</blockquote>
					<figcaption className="mt-10">
						{/* <Image src={client.logo} alt={client.name} unoptimized /> */}
						<p className="text-base font-semibold">{client.name}</p>
					</figcaption>
				</figure>
			</FadeIn>
		</Container>
	);
};

export default Testimonials;
