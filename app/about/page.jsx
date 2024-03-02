"use client";
import ContactSection from "@/components/ContactSection";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import React, { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import Container from "@/components/Container";

const AboutPage = () => {
      useEffect(() => {
            const lenis = new Lenis()
            function raf(time) {
                  lenis.raf(time)
                  requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
      }, [])
      return (
            <Container>
                  <PageIntro eyebrow="About Me" title="My forte lies in my capacity to glean wisdom from my mistakes.">
                        <p>
                              In addition to my pursuits in coding, I derive immense enjoyment from engaging in the spirited sport of football.
                        </p>
                        <div className="mt-10 max-w-3xl space-y-6 text-base md:text-xl">
                              <p>
                                    During the leisurely interludes that grace my schedule, I find myself irresistibly drawn to the captivating realm of televised entertainment. It is within this realm that I immerse myself in a symphony of TV shows and web series, savoring each narrative as it unfolds before my discerning gaze. Moreover,
                              </p>
                              <p>
                                    I channel my curiosity through the boundless expanse of the Internet, embarking on expeditions to unearth and assimilate novel knowledge within the vast domain of technology and its associated spheres of influence. This ongoing voyage of discovery seamlessly integrates with my fervor for technology, culminating in a harmonious amalgamation of leisure and intellectual pursuit.
                              </p>
                        </div>
                  </PageIntro>
                  <Cultures />
                  <ContactSection />
            </Container>
      );
};

export default AboutPage;
