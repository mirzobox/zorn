export default function ActionsCard({ title, description, icon }) {
  return (
    <li className="rounded-[20px] bg-white p-5 shadow-sm" key={title}>
      <div className="mb-[14px] flex items-center justify-start gap-[10px]">
        <h3 className="text-xl font-medium text-dark-slate-gray">{title}</h3>
        <img
          className="-order-1 h-10 w-10 rounded-md object-contain lg:h-[52px] lg:w-[52px]"
          src={icon}
          alt={title}
        />
      </div>
      <p className="text-slate-green mb-5 text-xs">{description}</p>
      <a className="button--outline" href="#">
        Подробнее
      </a>
    </li>
  );
}
