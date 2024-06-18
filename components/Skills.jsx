import Anguler from "@/images/skills/angular-icon-1.svg";
import Astro from "@/images/skills/astro.svg";
import Nextjs from "@/images/skills/nextjs-13.svg";
import Reactjs from "@/images/skills/react-2.svg";
import { default as Vite, default as Vuejs } from "@/images/skills/vitejs.svg";
import Image from "next/image";

import Express from "@/images/skills/express-109.svg";
import Nodejs from "@/images/skills/nodejs.svg";

import Sanity from "@/images/skills/sanity.svg";
import Stripe from "@/images/skills/stripe-4.svg";

import Bootstrap from "@/images/skills/bootstrap-5.svg";
import Framer from "@/images/skills/framer-motion.svg";
import Tailwindcss from "@/images/skills/tailwind-css-2.svg";

import Jquery from "@/images/skills/jquery.svg";
import Prisma from "@/images/skills/prisma-2.svg";

import Docker from "@/images/skills/docker.svg";
import Firebase from "@/images/skills/firebase.svg";
import Github from "@/images/skills/github-2.svg";
import GraphQl from "@/images/skills/graphql.svg";
import MongoDb from "@/images/skills/mongodb.svg";
import MySql from "@/images/skills/mysql.svg";
import Planetscale from "@/images/skills/planetscale.svg";
import Pnpm from "@/images/skills/pnpm.svg";
import Python from "@/images/skills/python-3.svg";
import Redis from "@/images/skills/redis.svg";
import Rust from "@/images/skills/rust.svg";
import Shadcn from "@/images/skills/shadcn.svg";
import Svelte from "@/images/skills/svelte.svg";
import Typescript from "@/images/skills/ts.svg";
import Yarn from "@/images/skills/yarn.svg";

import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
	["NextJs", Nextjs],
	["ReactJs", Reactjs],
	["VueJs", Vuejs],
	["AngulerJs", Anguler],
	["Astro", Astro],
	["Vite", Vite],

	["Node Js", Nodejs],
	["Express", Express],

	["Sanity", Sanity],
	["Stripe", Stripe],

	["TailwindCss", Tailwindcss],
	["Bootstrap", Bootstrap],
	["Framer", Framer],

	["Jquery", Jquery],
	["Prisma", Prisma],

	["GitHub", Github],
	["Shadcn", Shadcn],
	["Pyhton", Python],
	["Docker", Docker],
	["Graphql", GraphQl],
	["MongoDb", MongoDb],
	["Firebase", Firebase],
	["MySql", MySql],
	["Redis", Redis],
	["Svelte", Svelte],
	["Typescript", Typescript],
	["Yarn", Yarn],
	["Rust", Rust],
	["Planetscale", Planetscale],
	["Pnpm", Pnpm],
];

const Skills = () => {
	return (
		<Container className="mt-16 rounded-3xl  w-full">
			<FadeIn className="flex items-center justify-center gap-x-8 rounded-4xl w-full">
				<h2 className="text-center text-black font-display text-2xl font-semibold tracking-wider sm:text-left">
					I have an experience with These Awsome Techs
				</h2>
				<div className="h-px flex-auto bg-neutral-800" />
			</FadeIn>
			<FadeInStagger faster>
				<ul
					role="list"
					className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 w-full"
				>
					{clients.map(([client, logo]) => (
						<li
							key={client}
							className="flex items-center justify-center"
						>
							<FadeIn className="flex items-center justify-center">
								<div className=" flex flex-col gap-2 items-center w-full h-fit">
									<Image
										src={logo}
										alt={client}
										style={{
											height: "30%",
											width: "30%",
											objectFit: "cover",
										}}
										unoptimized
									/>
									<p className="text-black text-lg font-semibold">
										{client}
									</p>
								</div>
							</FadeIn>
						</li>
					))}
				</ul>
			</FadeInStagger>
		</Container>
	);
};

export default Skills;
