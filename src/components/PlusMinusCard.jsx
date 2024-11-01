export default function PlusMinusCard({ color, title, elements, icon }) {
  return (
    <div className={`rounded-[20px] p-5 shadow-sm ${color}`}>
      <h3 className="mb-5 text-center">{title}</h3>
      <ul className="flex flex-col gap-5">
        {elements.map((text, index) => {
          return (
            <li className="flex items-center gap-5" key={index}>
              <p className="text-charcoal-green text-sm">{text}</p>
              <img className="-order-1" src={icon} alt="" aria-hidden="true" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
