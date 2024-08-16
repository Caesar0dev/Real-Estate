"use client";

import React, { FC, useState } from "react";
import detail1JPG from "@/images/HIW2img.png";

import Image from "next/image";
import BuyerInfo from "@/components/BuyerInfo";
import MarketplaceCard from "@/components/MarketplaceCard/MarketplaceCard1";

const LIST_IMAGES_DEMO = [detail1JPG];

const MarketplacePage = () => {

  return (
    <div className={`nc-MarketplacePage `}>
      <main className="container mt-5 lg:mt-11">
        <div className="lg:flex justify-center">
          <div className="w-full lg:w-[100%] ">
            <div className="relative">
              <div className="relative">
                <MarketplaceCard />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>
      </main>

    </div>
  );
};

export default MarketplacePage;
