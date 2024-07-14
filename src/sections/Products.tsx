import { products } from "@/dummyData";
import { FaArrowRight } from "react-icons/fa6";

export default function Products() {
  return (
    <div className="w-full px-10 py-32 lg:px-36">
      <h1 className="text-4xl lg:text-center">
        Explore more products on intervue
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {products.map((product, i) => (
          <div key={i} className="p-4 shadow-lg">
            <img src={product.image} alt="Product Image" />
            <p className="mt-5 text-xl font-bold">{product.title}</p>
            <p className="mt-2 text-lg text-[#727272]">{product.description}</p>
            <button className="mt-14 flex items-center gap-1 font-bold text-[#1D67BC]">
              <p>Know more</p>
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
