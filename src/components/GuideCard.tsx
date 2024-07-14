const colorsMap: { [key: string]: string } = {
  Easy: "bg-[#1D67BC]",
  Medium: "bg-[#F69D1D]",
  Hard: "bg-[#50AF55]",
};

export default function GuideCard({ guide }: any) {
  return (
    <div className="rounded-lg border border-[#bfbfbf] p-5">
      <div className="items-center gap-3 lg:flex">
        <p
          className={`mb-3 w-fit rounded-md px-3 py-0.5 font-medium text-white lg:mb-0 ${colorsMap[guide.difficulty]}`}
        >
          {guide.difficulty}
        </p>
        <p className="text-sm text-[#767676]">{guide.subject}</p>
      </div>
      <p className="mt-5 font-bold">{guide.topic}</p>
      <p className="mt-3 text-sm text-[#767676]">{guide.description}</p>
    </div>
  );
}
