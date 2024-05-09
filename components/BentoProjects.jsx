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
            link:"https://imaginary-gules.vercel.app/",
	},

	{
		title: "AirBnB clone",
		description: "Created using the power of Nextjs14 for lighning fast performance",
		header: "/p2.png",
            link:"https://bnbmy.vercel.app/",
	},
	{
		title: "Web Japan Landing page",
		description:
			"Recreated the landing page of Japan foregin ministry",
		header: "/p3.png",
            link:"https://nihon-app.vercel.app/",
	},

	{
		title: "The Joy of Creation",
		description: "Experience the thrill of bringing ideas to life.",
		header: <Skeleton />,
            link:"/",
	},
	{
		title: "The Spirit of Adventure",
		description: "Embark on exciting journeys and thrilling discoveries.",
		header: <Skeleton />,
            link:"/",
	},
];
