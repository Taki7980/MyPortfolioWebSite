import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = ({...props}) => {
	return (
		<div className="relative overflow-hidden h-fit w-fit rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
			<div className="w-fit h-58 aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
				<Image
					src={props.ImgSrc}
					alt="thumbnail"
					height="150"
					width="260"
					className={`group-hover:scale-95 h-auto w-auto group-hover:rounded-2xl transform object-cover transition duration-200 `}
				/>
			</div>
			<div className=" p-4">
				<h2 className="font-bold my-4 text-lg text-zinc-700">
					{props.Title}
				</h2>
				<h2 className="font-normal my-4 text-sm text-zinc-500">
					{props.description}
				</h2>
				<div className="flex flex-row justify-between items-center mt-10">
					<span className="text-sm text-gray-500">{props.date}</span>
					{/* <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
						
					</div> */}
					<Link
						href={props.link}
						className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
					>
						See More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Projects;
