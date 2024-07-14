import { faqs } from "@/dummyData";
import { FaPhoneAlt, FaPlus } from "react-icons/fa";

export default function FAQs() {
  return (
    <div className="hidden grid-cols-12 gap-20 bg-[#F5E7E7] p-24 lg:grid">
      <div className="col-span-5">
        <h1 className="text-3xl font-[400]">FAQs</h1>
        <h2 className="mb-10 mt-8 text-[#727272]">
          Here are frequently asked questions to clear all your doubts
        </h2>
        <h3 className="text-xl font-medium">Still have doubts?</h3>
        <button className="mt-1 flex items-center gap-1 text-lg font-bold text-[#1D67BC]">
          <FaPhoneAlt />
          <p>Talk to our representative</p>
        </button>
      </div>
      <div className="col-span-7">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="flex items-center justify-between border border-t-black p-5 font-semibold"
          >
            <p>{faq}</p>
            <FaPlus />
          </div>
        ))}
      </div>
    </div>
  );
}
