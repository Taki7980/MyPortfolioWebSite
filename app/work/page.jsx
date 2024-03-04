import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import React from "react";
import P1 from "../../public/p1.png";

import Projects from "@/components/Projects";
import ProjectsData from "@/constants/ProjectsData";

const WorkPage = () => {
	return (
		<Container>
			<PageIntro
				eyebrow="Works that i have done"
				title="Proven solutions for real-world problems."
			>
				<div className="flex flex-col items-center justify-center gap-10">
					<p>
						while learning new Teches i created some projects and
						tried to play with the new things provided by the tech
					</p>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 mt-10 lg:mt-20 px-6 lg:px-0">
						{ProjectsData.map((data, index) => (
							<Projects key={index} {...data} />
						))}
					</div>
				</div>
			</PageIntro>
		</Container>
	);
};

export default WorkPage;
