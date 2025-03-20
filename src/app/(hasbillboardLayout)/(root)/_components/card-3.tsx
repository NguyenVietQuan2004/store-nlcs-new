"use client";
import Image from "next/image";
import { ListProductResType, ProductType } from "@/Type/ProductType";
import ProductCard from "@/components/product-card";
import ListProductCard from "@/components/list-product-card";
import { useEffect, useState } from "react";

interface Card3Props {
  productBestSeller: ListProductResType["data"]["listProduct"] | undefined;
  productHighestSales: ListProductResType["data"]["listProduct"] | undefined;
}
function Card3({ productBestSeller, productHighestSales }: Card3Props) {
  const [numbProductShow, setNumbProductShow] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setNumbProductShow(3);
      } else {
        setNumbProductShow(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center ">
        <h3 className="text-2xl font-semibold mb-10 text-center">Sản phẩm hàng đầu</h3>
      </div>

      <div className=" flex flex-col lg:grid items-start grid-cols-2 gap-y-6 lg:mt-12 lg:gap-x-2">
        <div className="lg:p-5 bg-white rounded-2xl mt-auto pt-5">
          <h4 className="text-xl font-medium mb-4 lg:mb-6 text-center text-[#000000]">Bán chạy nhất</h4>

          {productBestSeller && (
            <ListProductCard gridCols={numbProductShow} listProduct={productBestSeller} scroll={false} />
          )}
        </div>

        <div className="lg:p-5 bg-white rounded-2xl mt-auto pt-5">
          <h4 className="text-xl font-medium mb-4 lg:mb-6 text-center text-[#000000] ">Giảm giá hàng đầu</h4>
          {productHighestSales && (
            <ListProductCard
              title="sales"
              gridCols={numbProductShow}
              listProduct={productHighestSales}
              scroll={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card3;
