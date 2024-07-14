import { FaArrowRight } from "react-icons/fa6";

interface Props {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export default function SecurityCardBig({ icon, title, subtitle }: Props) {
  return (
    <button className="relative bg-white p-4 text-left shadow-md">
      {icon}
      <p className="mt-3 text-sm font-bold">{title}</p>
      <p className="mb-10 mt-1 text-sm text-[#767676]">{subtitle}</p>
      <FaArrowRight className="absolute bottom-4 right-4 mt-5 text-xl" />
    </button>
  );
}
