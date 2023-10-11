import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
      return (
            <>
                  <SectionIntro
                        eyebrow="Services"
                        title="Elevate Your Digital Presence: Crafting Online Success, One Website at a Time"
                        className="mt-24 sm:mt-32 lg:mt-40"
                  >
                        <p>
                              Elevate Your Production and Connectivity to New Heights with My Websites!
                        </p>
                  </SectionIntro>
                  <Container className="mt-16">
                        <div className="lg:flex w-full lg:items-center lg:justify-end justify-between gap-6">
                              <div className="flex justify-center w-fit lg:justify-end lg:pr-12">
                                    <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                                          <StylizedImage
                                                src={imageLaptop}
                                                sizes="(min-width: 1024px) 41rem, 31rem"
                                                className="justify-center lg:justify-end"
                                          />
                                    </FadeIn>
                              </div>
                              {/* List item */}
                              <List className="mt-16 lg:mt-0 w-fit lg:pl-4">
                                    <ListItem title="Web development">
                                          {"Revolutionize your web presence with blazing speed and cutting-edge tech – from Next.js 13 to Astro.js, we're 10x faster, and full-stack is a breeze!"}
                                    </ListItem>
                                    <ListItem title="Application development">
                                          {"If you're in search of a dynamic web application that can effectively address specific challenges or propel your business to new heights, I'm your go-to expert ready to assist you every step of the way"}
                                    </ListItem>
                                    <ListItem title="E-commerce">
                                          {"Ready to supercharge your business's radiance? Look no further! With my E-commerce website, you can effortlessly bring that vision to life. And if you desire seamless Shopify integration, it's as easy as a slice of cake!"}
                                    </ListItem>
                                    <ListItem title="Custom content management">
                                          {"Unlock the full potential of your Headless CMS! Managing content can be challenging, but fear not – my product is here to simplify it for you."}
                                    </ListItem>
                              </List>
                        </div>
                  </Container>
            </>
      );
};

export default Services;
