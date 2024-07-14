import { Key } from "react";

interface Props {
  title: string;
  list: Array<string>;
}

export default function FooterList({ title, list }: Props) {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <div className="mt-4 flex flex-col gap-4">
        {list.map((item: string, i: Key) => (
          <button key={i} className="block text-left text-[#8f8f8f]">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
