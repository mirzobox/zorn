import { useState } from "react";
import { BurgerIcon, XIcon } from "../../public";
import { navLinks } from "../constants";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="py-5 shadow-sm lg:py-6">
        <div className="base-container flex items-center justify-between">
          <Logo />
          <button
            className="inline-flex w-8 items-center justify-center transition-transform hover:scale-105"
            onClick={() => setOpen(!open)}
          >
            <img src={open ? XIcon : BurgerIcon} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="absolute top-[72px] h-full w-full bg-light-mist pt-20 lg:top-[88px]">
          <ul className="mb-10 flex flex-col items-center gap-10">
            {navLinks.map((element) => {
              return (
                <li key={element}>
                  <a className="text-sm text-dark-slate-gray" href="#">
                    {element}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex w-full justify-center">
            <a className="button button--green-gradient" href="#">
              Вход
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
