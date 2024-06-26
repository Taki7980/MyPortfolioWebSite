import clsx from "clsx";
import React from "react";
import FadeIn from "./FadeIn";

const SectionIntro = ({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) => {
  return (
    <div {...props}>
      <FadeIn className="max-w-4xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  "mb-6 block font-display text-2xl font-semibold",
                  invert ? "text-white" : "text-neutral-950"
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block font-display tracking-tight [text-wrap:balance]",
              smaller
                ? "text-2xl font-semibold"
                : "text-4xl font-medium sm:text-5xl",
              invert ? "text-white" : "text-neutral-950"
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              "mt-6 text-xl",
              invert ? "text-neutral-300" : "text-neutral-600"
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </div>
  );
};

export default SectionIntro;
