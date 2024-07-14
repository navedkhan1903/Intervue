import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import FooterList from "@/components/FooterList";
import { social, company, resources, product } from "@/dummyData";

export default function Footer() {
  return (
    <div className="bg-[#27282C] px-10 py-20 text-white lg:px-36 lg:py-32">
      <Image
        src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/648175fc7332de3fb931061a_intervue.svg"
        alt="Logo"
        width={180}
        height={10}
      />
      <div className="mt-10 grid grid-cols-1 items-start lg:grid-cols-12">
        <div className="col-span-5 flex h-full flex-col justify-between">
          <div className="hidden gap-7 lg:flex">
            {social.map((item, i) => (
              <button key={i}>{item}</button>
            ))}
          </div>
          <div>
            <p className="text-xl font-bold text-[#FDCD6B]">
              Hire better & faster
            </p>
            <div className="flex w-min items-center border-b border-b-white">
              <input
                placeholder="Enter your email address"
                className="mt-7 w-[75vw] bg-[#27282C] pb-5 outline-none placeholder:text-white lg:w-80"
              />
              <FaArrowRight className="-rotate-45 text-3xl text-[#FDCD6B]" />
            </div>
          </div>
        </div>
        <div className="col-span-7 mt-10 grid grid-cols-2 justify-between gap-y-10 lg:mt-0 lg:grid-cols-4">
          <FooterList title="Company" list={company} />
          <FooterList title="Resources" list={resources} />
          <FooterList title="Product" list={product} />
          <FooterList title="Product" list={company} />
        </div>
      </div>
      <div className="mt-40 hidden justify-between lg:flex">
        <p>© 2023 Intervue. Crafted by great minds.</p>
        <div className="flex gap-7">
          {["Dateenschutz", "Impressum", "Cookie Policy", "AGBs"].map(
            (item, i) => (
              <button key={i}>{item}</button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
