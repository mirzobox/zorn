export default function ActionsCard({ title, description, icon }) {
  return (
    <li className="rounde-[20px] bg-white shadow-md" key={title}>
      <div className="mb-[14px] flex flex-row-reverse items-center gap-[10px]">
        <h3>{title}</h3>
        <img
          className="h-[52px] w-[52px] rounded-md object-contain"
          src={icon}
          alt={title}
        />
      </div>
      <p className="mb-5">{description}</p>
      <button></button>
    </li>
  );
}
