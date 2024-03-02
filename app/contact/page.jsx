"use client";
import ContactDetails from "@/components/ContactDetails";
import React, { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = () => {
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
                  <PageIntro eyebrow="Contact us" title="Lets work together">
                        <p>{`Can't wait to Work woth You 😊`}</p>
                  </PageIntro>
                  <div className="mt-24 sm:mt-32 lg:mt-40">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                              <ContactDetails/>
                        </div>
                  </div>
            </Container>
      );
};

export default ContactPage;
