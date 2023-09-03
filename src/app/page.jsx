"use client";
import { useEffect } from "react";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import imageLaptop from "@/images/laptop.jpg";
import StylizedImage from "@/components/StylizedImage";
import Testimonials from "@/components/Testimonials";

import Lenis from '@studio-freight/lenis'

export default function Home() {
      useEffect(() => {
            const lenis = new Lenis()
            function raf(time) {
                  lenis.raf(time)
                  requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
      }, [])
      return (
            <main className="text-black">
                  <Container className="mt-24 sm:mt-32">
                        <FadeIn className="w-full flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-evenly">
                              <div>
                                    <div className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                                          An ardent web artisan,diligently gleaning wisdom from his missteps.
                                    </div>
                                    <p className="mt-6 text-xl text-neutral-600">
                                          With an unwavering passion for web development, I am a dedicated artisan of the digital realm. My journey is paved by the method of trial and error, where each endeavor becomes a stepping stone towards mastery.
                                    </p>
                              </div>
                              <StylizedImage
                                    src={imageLaptop}
                                    sizes="(min-width: 1024px) 50rem, 70rem"
                                    className="justify-center w-full"
                              />
                        </FadeIn>
                  </Container>
                  <Clients />
                  <Testimonials
                        className="mt-24 sm:mt-32 lg:mt-40"
                        client={{ name: "Nirjhar Sarkar"}}
                  >
                        Crafting Digital Dreams: Your Vision, Our Code.
                        Elevating Web Experiences One Line at a Time.
                        Where Imagination Meets Innovation in Code.
                  </Testimonials>
                  <Services />
                  <ContactSection />
            </main>
      );
}

export const dynamic = 'force-dynamic'
