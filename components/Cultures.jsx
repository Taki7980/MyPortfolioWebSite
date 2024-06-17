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
                  
            </Container>
      );
};

export default Cultures;
