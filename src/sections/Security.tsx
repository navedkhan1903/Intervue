import { IoGlobeOutline, IoKey } from "react-icons/io5";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import SecurityCardBig from "@/components/SecurityCardBig";
import SecurityCardSmall from "@/components/SecurityCardSmall";

export default function Security() {
  return (
    <div className="mx-auto mt-40 bg-[#F8F6F9] px-10 py-20 lg:mt-[500px] lg:px-24">
      <h1 className="text-3xl font-[400]">Security is our top priority</h1>
      <h2 className="mt-3 text-[#767676] lg:w-4/12">
        Intervue serves startups to fortune 500 companies with enterprise grade
        security baked in by design
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-3 lg:w-8/12 lg:grid-cols-3">
        <SecurityCardBig
          icon={<IoKey className="text-3xl" />}
          title="Security"
          subtitle="Protecting your data at every layer is fundamental to how intervue
            works"
        />
        <SecurityCardBig
          icon={<HiMiniSquare3Stack3D className="text-3xl" />}
          title="Compiances"
          subtitle="Enterprise grade compliance commitments where we have established
            controls to adhere to those commitments"
        />
        <div className="flex flex-col justify-between gap-3">
          <SecurityCardSmall
            icon={<BsFillRocketTakeoffFill className="mb-3 text-3xl" />}
            title="Intervue for Startups"
          />
          <SecurityCardSmall
            icon={<IoGlobeOutline className="mb-3 text-3xl" />}
            title="Intervue for Enterprises"
          />
        </div>
      </div>
    </div>
  );
}
