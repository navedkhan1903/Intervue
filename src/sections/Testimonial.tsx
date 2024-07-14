import Image from "next/image";
import { IoIosPlay } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import testimonial from "../../public/testimonial.png";

export default function Testimonial() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 bg-[#fcfcfc] pr-10 lg:grid-cols-12 lg:p-24 lg:pr-0">
      <div className="relative col-span-7 flex h-40 items-center overflow-hidden rounded-r-full lg:h-72">
        <Image
          src={testimonial}
          alt="Testimonial Image"
          className="col-span-7 h-auto w-full"
        />
        <div className="absolute h-72 w-full bg-gradient-to-r from-white to-transparent opacity-20" />
        <div className="absolute bottom-10 left-10 text-white">
          <p className="font-medium">Niket Gupta</p>
          <p className="text-sm text-[#d9d9d9]">Head of Aquisition, Yubi</p>
        </div>
        <div className="absolute flex h-full w-full items-center justify-center text-7xl text-[#1D67BC]">
          <IoIosPlay className="cursor-pointer" />
        </div>
      </div>
      <div className="col-span-7 pl-10 lg:col-span-4 lg:pl-0">
        <p className="text-lg text-[#727272]">
          After interviewing on intervue, we were able to convert at least 5% of
          people from our application base to hires.
        </p>
        <p className="mt-5 font-bold">Niket Gupta</p>
        <p>Group head of talent acquisition, Yubi</p>
        <button className="mt-5 flex items-center font-bold text-[#1D67BC]">
          <p>See more customer stories</p>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
