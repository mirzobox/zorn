import {
  AnalayzeIcon,
  AutoOrderIcon,
  CartIcon,
  ControlOrderIcon,
  ControlProductIcon,
  ControlStoreIcon,
  ProgressIcon,
} from "../../public";
import ActionsCard from "./ActionsCard";

export default function Actions() {
  const actionList = [
    {
      title: "Управление запасами",
      description:
        "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.",
      icon: AnalayzeIcon,
    },
    {
      title: "Автозаказ товаров",
      description:
        "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.",
      icon: AutoOrderIcon,
    },
    {
      title: "Анализ магазина",
      description:
        "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
      icon: CartIcon,
    },
    {
      title: "Прогнозирование спроса",
      description:
        "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
      icon: ControlOrderIcon,
    },
    {
      title: "Управление поставками",
      description:
        "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
      icon: ControlProductIcon,
    },
    {
      title: "Управление ассортиментом",
      description:
        "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
      icon: ControlStoreIcon,
    },
    {
      title: "Управление продажами",
      description:
        "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
      icon: ProgressIcon,
    },
  ];

  return (
    <section>
      <div className="base-container mb-10">
        <h2 className="sr-only">Actions</h2>
        <ul className="grid grid-cols-1 gap-5">
          {actionList.map((props) => {
            return <ActionsCard key={props.title} {...props} />;
          })}
        </ul>
      </div>
    </section>
  );
}
