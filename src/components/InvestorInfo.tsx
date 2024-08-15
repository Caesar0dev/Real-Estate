"use client";

import { Disclosure } from "@/app/headlessui";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const DEMO_DATA = [
  {
    name: "Bring new owners to life with NestInvest",
    content:
      `With NestInvest, investing in real estate is a unique opportunity. Our business model guarantees you high returns, total transparency on your investment, and the possibility of investing in traditional currency or cryptocurrency.
      <br />
      <ul class="list-disc list-inside leading-7">
        <li>Investment open to all: Whether you are a seasoned investor or a beginner, our platform is accessible to all.</li>
        <li>High return of 5% minimum: Enjoy a guaranteed competitive return on your investments.</li>
        <li>Smart contract available on the blockchain: Your investments are secure and transparent thanks to smart contracts.</li>
      </ul>`,
  },
  
];

interface Props {
  panelClassName?: string;
  data?: typeof DEMO_DATA;
}

const BuyerInfo: FC<Props> = ({
  panelClassName = "p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6",
  data = DEMO_DATA,
}) => {
  return (
    <div className="w-full rounded-2xl space-y-2.5">
      {/* ============ */}
      {data.map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 2}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}

      {/* ============ */}
    </div>
  );
};

export default BuyerInfo;
