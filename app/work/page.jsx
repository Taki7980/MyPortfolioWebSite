import { BentoGridProjects } from "@/components/BentoProjects";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import React from "react";


const WorkPage = () => {
	return (
		<Container>
			<PageIntro
				eyebrow="Works that i have done"
				title="Proven solutions for real-world problems."
			>
				<BentoGridProjects/>
			</PageIntro>
		</Container>
	);
};

export default WorkPage;
