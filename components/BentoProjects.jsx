import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid";
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridProjects() {
	return (
		<BentoGrid className="w-full mx-auto">
			{items.map((item, i) => (
				<BentoGridItem
					link={item.link}
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					icon={item.icon}
					className={i === 3 || i === 6 ? "md:col-span-2" : ""}
				/>
			))}
		</BentoGrid>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
	{
		title: "Imaginary",
		description:
			"Powered by the AI and Nextjs an almighty image manipulator",
		header: "/p1.png",
		link: "https://imaginary-gules.vercel.app/",
	},
	{
		title: "CoolCrawler",
		description:
			"Track your favorite items and their prices with CoolCrawler",
		header: "/p5.png",
		link: "https://cool-crawler-5k1v.vercel.app/",
	},
	{
		title: "Ai chatbot - All in one",
		description:
			"Built intelligent chatbot application with natural language processing capabilities and real-time messaging",
		header: "/p3.png",
		link: "https://aichatbot-three-hazel.vercel.app/",
	},
];
