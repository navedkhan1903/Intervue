import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { GrLinkUp } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  return (
    <div className="mx-auto flex items-center justify-between px-10 py-9 lg:px-24">
      <Image
        src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/intervue.svg"
        alt="Logo"
        width={130}
        height={10}
      />
      <RxHamburgerMenu className="text-3xl lg:hidden" />
      <div className="hidden items-center gap-9 lg:flex">
        <div className="flex items-center gap-1">
          <FaUser />
          <p>Become an Interviewer</p>
          <GrLinkUp className="rotate-45" />
        </div>
        <p>Features</p>
        <p>Pricing</p>
        <p>Start a Trial</p>
        <div className="flex items-center gap-3">
          <button className="border border-black px-7 py-2">Login</button>
          <button className="bg-black px-7 py-2 text-white">Signup</button>
        </div>
      </div>
    </div>
  );
}
