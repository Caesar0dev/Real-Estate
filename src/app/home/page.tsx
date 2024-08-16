import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderLargeProduct from "@/components/SectionSliderLargeProduct";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import { DEMO_MORE_EXPLORE_DATA_2 } from "@/components/SectionGridMoreExplore/data";
import SectionPromo2 from "@/components/SectionPromo2";
import SectionHero3 from "@/components/SectionHero/SectionHero3";
import SectionPromo1 from "@/components/SectionPromo1";
import { SPORT_PRODUCTS } from "@/data/data";
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="container pt-10">
        <SectionHero3 />
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <SectionHowItWork />

        {/* SECTION */}
        <SectionSliderProductCard
          data={SPORT_PRODUCTS.filter((_, i) => i < 8)}
          subHeading="New House"
        />

        {/* SECTION */}
        <SectionPromo2 />

        {/* SECTION 3 */}
        <SectionSliderLargeProduct />

        {/* SECTION */}
        <SectionGridFeatureItems data={SPORT_PRODUCTS} />

        {/* SECTION */}
        <SectionPromo1 />
      </div>
    </div>
  );
}

export default PageHome;
