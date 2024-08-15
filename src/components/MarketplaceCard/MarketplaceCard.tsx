import React from 'react';
import Image from "next/image";
import detail1JPG from "@/images/HIW3img.png";

const LIST_IMAGES_DEMO = [detail1JPG];

export default function MarketplaceCard() {
    const List_Categories = [
        {
            category_title: "REG S: NON-U.S. ONLY",
            img_src: 'detail1JPG',
            location: "Panama",
            site: "RealE",
            address: "PH Pinoalto A002, Boquete, Chiriqui, Panama",
            total_price: "587,808",
            token_price: "25",
            expected_income: "6-20",
            income_start_date: "N/A",
        },
        {
            category_title: "REG S: NON-U.S. ONLY",
            img_src: 'detail1JPG',
            location: "Panama",
            site: "RealE",
            address: "PH Pinoalto A002, Boquete, Chiriqui, Panama",
            total_price: "587,808",
            token_price: "25",
            expected_income: "6-20",
            income_start_date: "N/A",
        },
    ];

    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 grid grid-cols-1 gap-4">
      <div className="w-full bg-white rounded-lg shadow-lg">
        {List_Categories.map((item, index) => {
            return (
                <div className="bg-gray-800 flex justify-between px-10 py-2 rounded-t-lg mb-10">
                    <p className=' text-white text-2xl'>{item.category_title}</p>
                    <div className=''>
                        <span className="ml-5 text-sky-500 px-4 py-1 bg-white rounded-full inline-block align-middle">{item.location}</span>
                        <span className="ml-5 text-sky-500 px-4 py-1 bg-white rounded-full inline-block align-middle">{item.site}</span>
                    </div>
                    <div className='flex'>
                        {/* Image Section */}
                        <div className="relative w-7/12">
                            <Image
                                src={LIST_IMAGES_DEMO[0]}
                                alt="Property"
                                className="w-full h-80 object-cover rounded-t-lg"
                            />
                            <p className="absolute bottom-2 left-4 text-white text-xs bg-black bg-opacity-50 p-1 rounded">Promotional Image. Final appearance may vary in design.</p>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 w-5/12">
                        <div className="justify-between items-center">
                            <div>
                                <h2 className="text-gray-700 font-semibold text-lg">{item.address}</h2>
                            </div>
                            <div className="flex justify-center mt-5">
                                <div className='px-10 center'>
                                    <p className='text-xl'>TOTAL PRICE</p>
                                    <p className="text-gray-700 font-semibold text-3xl">$ {item.total_price}</p>
                                </div>
                                <div className='px-10 center border-l-2 border-black'>
                                    <p className='text-xl'>TOKEN PRICE</p>
                                    <p className="text-red-500 font-semibold text-3xl">$ {item.token_price}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            <div className=" items-center text-sky-700 text-lg">
                                <div className='flex justify-between'>
                                    <p className="">Expected Income</p>
                                    <p className="">{item.expected_income}%</p>
                                </div>
                                <p className="text-xs text-black italic">Not including capital appreciation</p>
                            </div>
                            <div className="flex justify-between items-center border-t-2 border-black pt-4">
                                <p className="text-black font-semibold">Income Start Date</p>
                                <p className="text-gray-700">{item.income_start_date}</p>
                            </div>
                            <div className="text-black text-center py-2">
                                <p>{item.category_title}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        })}
        {/* Header Section */}
        {/* <div className="bg-gray-800 flex justify-between px-10 py-2 rounded-t-lg">
            <p className=' text-white text-2xl'>REG S: NON-U.S. ONLY</p>
            <div className=''>
                <span className="ml-5 text-sky-500 px-4 py-1 bg-white rounded-full inline-block align-middle">Panama</span>
                <span className="ml-5 text-sky-500 px-4 py-1 bg-white rounded-full inline-block align-middle">RealE</span>
            </div>
        </div> */}
        {/* <div className="flex items-center space-x-2 mt-2">
        </div> */}

        
      </div>

      {/* Footer Section */}
      {/* <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Previous Properties</button>
      </div> */}
    </div>
  );
}