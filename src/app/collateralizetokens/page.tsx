import React, { FC } from "react";
import SocialsList from "@/shared/SocialsList/SocialsList";
import Label from "@/components/Label/Label";
import Input from "@/shared/Input/InputCheckbox";
import Textarea from "@/shared/Textarea/Textarea";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/components/SectionPromo1";

const info = [
    {
        title: "🗺 ADDRESS",
        desc: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
    },
    {
        title: "💌 EMAIL",
        desc: "real.estate@example.com",
    },
    {
        title: "☎ PHONE",
        desc: "000-123-456-7890",
    },
];

const CollateralizeTokens = ({}) => {
    return (
        <div className="">
            <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                Gnosis Market
            </h2>
            <div className="container max-w-7xl mx-auto">
                <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="space-y-8 w-full">
                        <label className="block shadow-md p-5 w-full rounded-lg">
                            <Label className="font-bold">Your asset supplies</Label>
                            <div className="text-gray-400 text-sm mt-6">
                                Nothing supplied yet
                            </div>
                        </label>
                        <label className="block shadow-md p-5 w-full rounded-lg">
                            <Label className="font-bold">Your properties supplies</Label>
                            <Input
                                type="text"
                                className="mt-1"
                            />
                            <div className="mt-5 flex justify-between">
                                <div className="inline-block align-middle ml-2">
                                    <input
                                        type="checkbox"
                                        className=""
                                    />
                                    <span className=" inline-block align-middle ml-2 text-gray-400 text-sm">Hide zero balances</span>
                                </div>
                                <span className="rounded-lg bg-slate-800 p-2 text-white">MULTI WITHDRAW</span>
                            </div>
                            <div className="text-gray-400 text-sm mt-6">
                                Nothing supplied yet
                            </div>
                        </label>
                        <label className="block shadow-md p-5 w-full rounded-lg">
                            <Label className="font-bold">Assets to supply</Label>
                            <table className="table-auto text-xs w-full text-center mt-5">
                                <thead>
                                    <tr className="border-gray-300 border-b-2 py-2 text-gray-400 text-sx font-thin">
                                        <th>Assets</th>
                                        <th>Wallet balance</th>
                                        <th>APY</th>
                                        <th>Can be collateral</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>USDC</td>
                                        <td>0</td>
                                        <td>7.44 %</td>
                                        <td>check</td>
                                        <td>Suppy Details</td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>XDAI</td>
                                        <td>0</td>
                                        <td>7.02 %</td>
                                        <td>check</td>
                                        <td>Suppy Details</td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>WXDAI</td>
                                        <td>0</td>
                                        <td>7.02%</td>
                                        <td>check</td>
                                        <td>Suppy Details</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </label>
                        <label className="block shadow-md p-5 w-full rounded-lg">
                            <Label>Properties to supply</Label>
                            <Input
                                type="text"
                                className="mt-1"
                            />
                            <div className="mt-5 flex justify-between">
                                <div className="inline-block align-middle ml-2">
                                    <input
                                        type="checkbox"
                                        className=""
                                    />
                                    <span className=" inline-block align-middle ml-2 text-gray-400 text-sm">Hide zero balances</span>
                                </div>
                                <span className="rounded-lg bg-slate-800 p-2 text-white">MULTI WITHDRAW</span>
                            </div>
                            <table className="table-auto text-xs w-full text-center mt-5">
                                <thead>
                                    <tr className="border-gray-300 border-b-2 py-2 text-gray-400 text-sx font-thin">
                                        <th>Assets</th>
                                        <th>Wallet balance</th>
                                        <th>APY</th>
                                        <th>Can be collateral</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>USDC</td>
                                        <td>0</td>
                                        <td>7.44 %</td>
                                        <td>check</td>
                                        <td>Suppy Details</td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>XDAI</td>
                                        <td>0</td>
                                        <td>7.02 %</td>
                                        <td>check</td>
                                        <td>Suppy Details</td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>WXDAI</td>
                                        <td>0</td>
                                        <td>7.02%</td>
                                        <td>check</td>
                                        <td>Suppy Details</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </label>
                    </div>
                    <div>
                        <label className="block shadow-md p-5 w-full rounded-lg">
                            <Label className="font-bold">Your borrows</Label>
                            <div className="text-gray-400 text-sm mt-6">
                                Nothing supplied yet
                            </div>
                        </label>
                        <label className="block shadow-md p-5 w-full rounded-lg">
                            <Label className="font-bold">Assets to borrow</Label>
                            <div className="text-gray-400 text-sm mt-6">
                                To borrow you need to supply any asset to be used as collateral.
                            </div>
                            <table className="table-auto text-xs w-full text-center mt-5">
                                <thead>
                                    <tr className="border-gray-300 border-b-2 py-2 text-gray-400 text-sx font-thin">
                                        <th>Assets</th>
                                        <th>Available</th>
                                        <th>APY, variable</th>
                                        <th>APY, stable</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>USDC</td>
                                        <td>0</td>
                                        <td>10.18 %</td>
                                        <td>-</td>
                                        <td>Borrow Details</td>
                                    </tr>
                                    <tr className="border-gray-300 border-b-2 py-2">
                                        <td>XDAI</td>
                                        <td>0</td>
                                        <td>9.66 %</td>
                                        <td>-</td>
                                        <td>Borrow Details</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollateralizeTokens;
