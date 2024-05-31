import { BentoGridProjects } from "@/components/BentoProjects";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import React from "react";


const WorkPage = () => {
	return (
		<Container>
			<PageIntro
				eyebrow="With the Power of these awsome morden technologies i have created some awesome projects"
				title="The projects I have completed 🌟"
			>
				<BentoGridProjects/>
			</PageIntro>
		</Container>
	);
};

export default WorkPage;
