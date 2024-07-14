import { FaArrowRight } from "react-icons/fa6";

interface Props {
  icon: JSX.Element;
  title: string;
}

export default function SecurityCardSmall({ icon, title }: Props) {
  return (
    <button className="bg-white p-4 shadow-md">
      {icon}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{title}</p>
        <FaArrowRight className="text-xl" />
      </div>
    </button>
  );
}
