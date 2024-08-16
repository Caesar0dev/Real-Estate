import React from 'react';
import Image from "next/image";
import detail1JPG from "@/images/HIW3img.png";

const LIST_IMAGES_DEMO = [detail1JPG];

export default function MarketplaceCard() {
    const List_Categories = [
        {
            category_title: "REG S: NON-U.S. ONLY",
            location: "Panama",
            site: "RealE",
            address: "PH Pinoalto A002, Boquete, Chiriqui, Panama",
            total_price: "587,808",
            token_price: "25",
            expected_income: "6-20",
            income_start_date: "N/A",
            income_per_token: "N/A",
            footer_text: "REG S: NON-U.S. ONLY",
            status: "",
        },
        {
            category_title: "SOLD OUT",
            location: "USA",
            site: "RealE",
            address: "1268 E 145th St, Cleveland, OH 44112",
            total_price: "108,360",
            token_price: "50.40",
            expected_income: "9.37",
            income_start_date: "October 1, 2024",
            income_per_token: "$ 4.72 / year",
            footer_text: "REG S: NON-U.S. ONLY",
            status: "SOLD",
        },
        {
            category_title: "SOLD OUT",
            location: "USA",
            site: "RealE",
            address: "11712 Dove Ave, Cleveland, OH 44105",
            total_price: "109,500",
            token_price: "50.93",
            expected_income: "9.42",
            income_start_date: "October 1, 2024",
            income_per_token: "$ 4.80 / year",
            footer_text: "REG S: NON-U.S. ONLY",
            status: "SOLD",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {List_Categories.map((item, index) => {
                return (
                    <div key={index} className="bg-white rounded-lg shadow-lg mb-4">
                        <div className="bg-gray-800 px-4 py-2 rounded-t-lg flex justify-between items-center">
                            <p className='text-white text-lg'>{item.category_title}</p>
                            <div className='flex space-x-2'>
                                <span className="text-sky-500 px-3 py-1 bg-white rounded-full">{item.location}</span>
                                <span className="text-sky-500 px-3 py-1 bg-white rounded-full">{item.site}</span>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            {/* Image Section */}
                            <div className="relative w-full md:w-7/12">
                                <Image
                                    src={LIST_IMAGES_DEMO[0]}
                                    alt="Property"
                                    className="w-full h-80 object-cover"
                                />
                                <p className="absolute bottom-2 left-4 text-white text-7xl bg-red-400 p-1 rounded">{item.status}</p>
                            </div>

                            {/* Content Section */}
                            <div className="p-2 md:p-4 w-full md:w-5/12">
                                <div className="mb-2">
                                    <h2 className="text-gray-700 font-semibold text-lg">{item.address}</h2>
                                </div>
                                <div className="flex md:flex-row justify-center mb-4">
                                    <div className='mb-2 md:mb-0 px-6 text-center'>
                                        <p className='text-lg'>TOTAL PRICE</p>
                                        <p className="text-gray-700 font-semibold text-2xl">$ {item.total_price}</p>
                                    </div>
                                    <div className='border-l-2 border-black px-6 text-center'>
                                        <p className='text-lg'>TOKEN PRICE</p>
                                        <p className="text-red-500 font-semibold text-2xl">$ {item.token_price}</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className='flex justify-between'>
                                        <p className="text-lg">Expected Income</p>
                                        <p className="text-lg">{item.expected_income}%</p>
                                    </div>
                                    <p className="text-xs text-gray-700 italic">Not including capital appreciation</p>
                                </div>
                                <div className="flex justify-between items-center border-t-2 border-gray-300 pt-2 mb-2">
                                    <p className="text-lg font-semibold">Income Start Date</p>
                                    <p className="text-gray-700">{item.income_start_date}</p>
                                </div>
                                <div className="flex justify-between items-center border-t-2 border-gray-300 pt-2">
                                    <p className="text-lg font-semibold">Income Per Token</p>
                                    <p className="text-gray-700">{item.income_per_token}</p>
                                </div>
                                <div className="text-black text-center pt-2">
                                    <p>{item.footer_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}