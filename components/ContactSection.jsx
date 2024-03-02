import React from "react";
import Button from "./Button";
import Container from "./Container";
import FadeIn from "./FadeIn";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40 flex w-2/3 item-start mx-0">
      <FadeIn className="-mx-6 rounded-3xl bg-gradient-to-t from-[#183D3D] to-[#040D12] px-6 py-16 sm:mx-0 md:px-12 w-auto">
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
