import { guides } from "@/dummyData";
import GuideCard from "@/components/GuideCard";

export default function () {
  return (
    <>
      <div className="mx-auto mt-20 hidden grid-cols-3 gap-10 px-24 lg:grid">
        {guides.map((guide, i) => (
          <GuideCard key={i} guide={guide} />
        ))}
      </div>
      <div className="mx-auto mt-20 grid grid-cols-1 gap-10 px-10 lg:hidden">
        {guides.slice(0, 3).map((guide, i) => (
          <GuideCard key={i} guide={guide} />
        ))}
      </div>
    </>
  );
}
