import React from "react";
import Button from "./Button";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40 flex  item-start mx-0 relative isolate w-full">
      <Image
				src="/bg1.jpg"
				alt="Background"
				fill
				className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 rounded-tl-3xl rounded-br-3xl"
				yOffset={-256}
			/>
      <FadeIn className="-mx-6 rounded-3xl  px-6 py-16 sm:mx-0 md:px-12 w-full">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Hire me for your Projects
          </h2>
          <div className="mt-6 flex">
            <Button href={"/contact"} invert>
              Say Hello
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
