import Label from "@/components/Label/Label";
import React, { FC } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Checkbox from "@/shared/Checkbox/Checkbox";
import Input from "@/shared/Input/Input";

interface Props {
  isActive: boolean;
  onOpenActive: () => void;
  onCloseActive: () => void;
}

const ContactInfo: FC<Props> = ({ isActive, onCloseActive, onOpenActive }) => {
  const renderAccount = () => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden z-0">
      <div className="flex flex-col sm:flex-row items-start p-6">
        <div className="flex space-x-4">
          <button
            className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 text-md font-medium rounded-lg"
            onClick={() => onOpenActive()}
          >
            Go Wallet
          </button>
          <button
            className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 text-md font-medium rounded-lg"
            onClick={() => onOpenActive()}
          >
            Another Action
          </button>
        </div>
      </div>
    </div>

    );
  };

  return renderAccount();
};

export default ContactInfo;
