import React from "react";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import SectionIntro from "./SectionIntro";

const Cultures = () => {
      return (
            <Container className="mt-24 rounded-4xl rounded-3xl bg-gradient-to-t from-[#183D3D] to-[#040D12] py-24 sm:mt-32 lg:mt-40 lg:py-32">
                  <SectionIntro
                        eyebrow="My Roots"
                        title="I bear the burden of ordinariness."
                        invert
                  >
                        <>
                              Despite lacking an engineering background, I diligently endeavored to compensate for my deficiencies. In order to amplify my personal growth, I made a concerted effort to stay abreast of technological advancements and other developments within the realm of web development.
                        </>
                  </SectionIntro>
                  <Container className="mt-16">
                        <GridList>
                              <GridListItem title="Loyalty" invert>
                                    Our team has been with us since the beginning because none of them
                                    are allowed to have LinkedIn profiles.
                              </GridListItem>
                              <GridListItem title="Trust" invert>
                                    We dont care when our team works just as long as they are working
                                    every waking second.
                              </GridListItem>
                              <GridListItem title="Compassion" invert>
                                    You never know what someone is going through at home and we make
                                    sure to never find out.
                              </GridListItem>
                        </GridList>
                  </Container>
            </Container>
      );
};

export default Cultures;
