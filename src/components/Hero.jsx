import { HeroImg } from "../../public";

export default function Hero() {
  return (
    <div className="base-container pb-5 pt-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start">
          <h1 className="mb-5 text-[30px]">
            Управление запасами розничного магазина
          </h1>
          <p className="mb-[30px]">
            Использование сервиса 1С-Товары позволяет значительно упростить
            работу по формированию заявок поставщику.
          </p>
          <a className="button--green" href="#">
            Заказать демонстрацию
          </a>
        </div>
        <img className="w-full" src={HeroImg} alt="Sale" />
      </div>
    </div>
  );
}
