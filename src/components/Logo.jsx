import { LogoImg } from "../../public";

export default function Logo() {
  return (
    <a
      className="text-dark-slate-gray inline-flex items-center gap-[10px] text-lg font-medium lg:text-2xl"
      href="#"
    >
      <img
        className="h-8 w-8 rounded-full lg:h-10 lg:w-10"
        src={LogoImg}
        alt="Zorn logo"
      />
      1С-Товары
    </a>
  );
}
