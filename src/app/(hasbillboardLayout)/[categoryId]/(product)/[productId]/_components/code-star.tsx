"use client";

import { useEffect, useState } from "react";
import { createUniqueArray, generateRandomCode } from "@/lib/utils";
import { StarBlackIcon, StarIcon } from "../../../../../../../public/icons";

function CodeStar({ maxAmount, id, sales }: { maxAmount: number; id: string; sales: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="flex justify-between items-center">
      <div> Code: {id?.slice(0, 7)} </div>
      {/* <div className="flex items-center">
        {createUniqueArray(maxAmount % 5).map((val: any) => (
          <StarIcon key={val} />
        ))}
        {createUniqueArray(5 - (maxAmount % 5)).map((val: any) => (
          <StarBlackIcon key={val} />
        ))}
        <span className="text-sm font-light"> (1 đánh giá)</span>
      </div> */}
      {sales > 0 && <span className="ml-4 text-[#007D48]">Khuyến mãi: {sales}%</span>}
    </div>
  );
}

export default CodeStar;
