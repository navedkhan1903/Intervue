import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="mx-auto mt-16 w-fit px-10 text-center">
      <h1 className="text-3xl font-[400]">Technical Interview Resources</h1>
      <h2 className="mt-4 text-[#767676]">
        Find all the technical interview resources here
      </h2>
      <div className="mt-8 flex items-center gap-4 rounded-full bg-[#f2f2f2] px-7 text-lg text-[#727272]">
        <FaMagnifyingGlass />
        <input
          placeholder="Search for resource here"
          className="w-10/12 bg-[#f2f2f2] py-4 outline-none lg:w-[550px]"
        />
      </div>
    </div>
  );
}
