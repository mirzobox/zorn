import { MinusIcon, PlusIcon } from "../../public";
import PlusMinusCard from "./PlusMinusCard";

export default function Offers() {
  const [plus, minus] = [
    {
      title: "Без 1С-Товары",
      icon: PlusIcon,
      color: "bg-light-green-gradient",
      elements: [
        "Организованная система остатков",
        "Организованная система остатков",
        "В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент",
        "В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент",
        "Рассчитанный прогноз спроса",
        "Рассчитанный прогноз спроса",
        "Рассчитанный прогноз спроса",
      ],
    },
    {
      title: "Вместе с 1С-Товары",
      icon: MinusIcon,
      color: "bg-white",
      elements: [
        "Лишний товар складируется и не продается",
        "Лишний товар складируется и не продается",
        "Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
        "Лишний товар складируется и не продается",
        "Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
        "Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
        "Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
      ],
    },
  ];
  return (
    <section>
      <div className="base-container">
        <h2 className="mb-[30px] text-[28px]">С нами удобнее</h2>
        <div className="flex flex-col gap-5">
          <PlusMinusCard
            title={minus.title}
            elements={minus.elements}
            icon={minus.icon}
            color={minus.color}
          />
          <PlusMinusCard
            title={plus.title}
            elements={plus.elements}
            icon={plus.icon}
            color={plus.color}
          />
        </div>
      </div>
    </section>
  );
}
