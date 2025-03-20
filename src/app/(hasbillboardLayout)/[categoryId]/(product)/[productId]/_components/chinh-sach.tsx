"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";

function ChinhSach() {
  const [isReadFull, setIsReadFull] = useState(false);
  return (
    <div className="mt-10">
      <div
        className="text-sm font-semibold relative mt-10 mb-10 pb-4 border-b-2 before:content-['']
    before:w-[120px] before:h-[2px] before:absolute before:bg-black before:top-full before:left-0"
      >
        Chính Sách Đổi Trả
      </div>

      <div className={`text-sm font-light ${isReadFull ? "h-full" : "h-[73px]"} overflow-hidden`}>
        Shop hy vọng bạn sẽ hài lòng với sản phẩm đã đặt. Tuy nhiên, nếu bạn không hài lòng 100%, Shop cung cấp quy
        trình đổi trả đơn giản như sau:
        <br />
        <br /> 1- Vui lòng gọi hotline 0969.436.090 hoặc nhắn tin qua trang Facebook Shop Design để yêu cầu đổi trả.
        <br /> 2- Shop sẽ kiểm tra, xác nhận và hỗ trợ bạn trong vòng 30 phút.
        <br />
        <br />
        Yêu cầu đổi trả:
        <br /> 1. Đổi trả trong vòng 7 ngày kể từ ngày bạn nhận hàng.
        <br /> 2. Sản phẩm phải còn nguyên bao bì, nhãn mác, mã vạch và chưa qua sử dụng.
        <br /> 3. Nếu lỗi do nhà sản xuất, Shop sẽ chịu phí vận chuyển đổi trả.
        <br />{" "}
        <Link href="/chinh-sach/chinh-sach-doi-tra" className="underline text-blue-400">
          Tìm hiểu thêm
        </Link>
      </div>
      <div className="w-full bg-zinc-300 h-[1px] mt-6 relative" onClick={() => setIsReadFull(!isReadFull)}>
        {isReadFull ? (
          <ChevronUpCircle className="z-10 stroke-zinc-400 bg-white stroke-[1px] cursor-pointer absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" />
        ) : (
          <ChevronDownCircle className="z-10 stroke-zinc-400 bg-white stroke-[1px] cursor-pointer absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" />
        )}
      </div>
    </div>
  );
}

export default ChinhSach;
