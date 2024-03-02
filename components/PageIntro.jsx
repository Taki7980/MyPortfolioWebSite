import clsx from "clsx";
import React from "react";
import FadeIn from "./FadeIn";

const PageIntro = ({ eyebrow, title, children, centered = false }) => {
  return (
    <div
      className={clsx("mt-24 sm:mt-32 lg:mt-40", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-2xl font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display leading-10 text-[2rem] md:text-6xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] ",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl md:text-2xl text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </div>
  );
};

export default PageIntro;
