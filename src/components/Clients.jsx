import Image from "next/image";
import Nextjs from "@/images/skills/nextjs-13.svg"
import Reactjs from "@/images/skills/react-2.svg"
import Vuejs from "@/images/skills/vitejs.svg"
import Anguler from "@/images/skills/angular-icon-1.svg"
import Astro from "@/images/skills/astro.svg"
import Vite from "@/images/skills/vitejs.svg"


import Nodejs from "@/images/skills/nodejs.svg"
import Express from "@/images/skills/express-109.svg"

import Sanity from "@/images/skills/sanity.svg"
import Stripe from "@/images/skills/stripe-4.svg"

import Tailwindcss from "@/images/skills/tailwind-css-2.svg"
import Bootstrap from "@/images/skills/bootstrap-5.svg"
import Framer from "@/images/skills/framer-motion.svg"


import Jquery from "@/images/skills/jquery.svg"
import Prisma from "@/images/skills/prisma-2.svg"

import Github from "@/images/skills/github-2.svg"
import Shadcn from "@/images/skills/shadcn.svg"
import Python from "@/images/skills/python-3.svg"

import FadeIn, { FadeInStagger } from "./FadeIn";
import Container from "./Container";

const clients = [
      ["NextJs", Nextjs],
      ["ReactJs", Reactjs],
      ["VueJs", Vuejs],
      ["AngulerJs", Anguler],
      ["Astro", Astro],
      ["Vite", Vite],

      ["Node Js", Nodejs],
      ["Express", Express],

      ["Sanity", Sanity],
      ["Stripe", Stripe],

      ["TailwindCss", Tailwindcss],
      ["Bootstrap", Bootstrap],
      ["Framer", Framer],

      ["Jquery", Jquery],
      ["Prisma", Prisma],

      ["GitHub", Github],
      ["Shadcn", Shadcn],
      ["Pyhton", Python],

];

const Clients = () => {
      return (
            <div className="mt-24 mx-5 rounded-3xl bg-slate-300  py-20 sm:mt-32 sm:py-32 lg:mt-56">
                  <Container>
                        <FadeIn className="flex items-center gap-x-8 rounded-4xl">
                              <h2 className="text-center text-black font-display text-2xl font-semibold tracking-wider sm:text-left">
                                    I have an experience with These Awsome Techs
                              </h2>
                              <div className="h-px flex-auto bg-neutral-800" />
                        </FadeIn>
                        <FadeInStagger faster>
                              <ul
                                    role="list"
                                    className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
                              >
                                    {clients.map(([client, logo]) => (
                                          <li key={client} className="flex ic justify-center">
                                                <FadeIn className="flex items-center justify-center">
                                                      <div className=" flex flex-col gap-2 items-center w-full h-fit">
                                                            <Image src={logo} alt={client} style={{height:"30%",width:"30%",objectFit:"cover"}} unoptimized />
                                                            <p className="text-black text-lg font-semibold">{client}</p>
                                                      </div>
                                                </FadeIn>
                                          </li>
                                    ))}
                              </ul>
                        </FadeInStagger>
                  </Container>
            </div>
      );
};

export default Clients;
