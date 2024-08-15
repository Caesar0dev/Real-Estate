"use client";

import React, { FC, useState } from "react";
import detail1JPG from "@/images/HIW2img.png";

import Image from "next/image";
import BuyerInfo from "@/components/BuyerInfo";

const LIST_IMAGES_DEMO = [detail1JPG];

const ProductDetailPage = () => {

  const renderDetailSection = () => {
    return (
      <div className="">
        <h2 className="text-2xl font-semibold mb-10">For our Buyers: <br /> Make Your Dream of Owning a Home Without Constraints Come True</h2>
        <BuyerInfo />
      </div>
    );
  };

  return (
    <div className={`nc-ProductDetailPage `}>
      <main className="container mt-5 lg:mt-11">
        <div className="lg:flex justify-center">
          <div className="w-full lg:w-[60%] ">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-16 relative">
                <Image
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  src={LIST_IMAGES_DEMO[0]}
                  className="w-full rounded-2xl object-cover"
                  alt="product detail 1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
          {renderDetailSection()}
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>
      </main>

    </div>
  );
};

export default ProductDetailPage;
