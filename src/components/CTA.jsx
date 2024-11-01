import React from "react";
import { GiftIcon } from "../../public";

export default function CTA() {
  return (
    <div className="base-container">
      <div className="bg-light-green-gradient rounded-[20px] p-5 shadow-sm">
        <div className="mb-[10px] flex items-center gap-5">
          <p className="text-green">
            Подключи любой продукт на 1 месяц бесплатно и оцени наши
            приемущества
          </p>
          <img
            className="-order-1 h-10 w-10 object-contain"
            src={GiftIcon}
            alt="Gift icon"
          />
        </div>
        <button className="button--green w-full">Подключить сейчас</button>
      </div>
    </div>
  );
}
