"use client";
import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

import Logo from "./Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";



const Footer = ({ className }) => {
      return (
            <FadeIn>
                  <Container className={cn("mt-24 h-full w-full sm:mt-32 lg:mt-40", className)}>

                        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                              <Link href={"/"} aria-label="Home">
                                    <Logo className="h-8" fillonhover="true">
                                          Nirjhar Sarkar
                                    </Logo>
                              </Link>
                              <p className="text-sm text-black">
                                    © Nirjhar Sarkar. {new Date().getFullYear()}
                              </p>
                        </div>

                  </Container>
            </FadeIn>
      );
};

export default Footer;
