import Link from "next/link";
import { EarthIcon } from "../../public/icons";
import { Separator } from "@/components/ui/separator";

const list = [
  {
    id: "Hỗ Trợ",
    data: [
      "Nhận Trợ Giúp",
      "Trạng Thái Đơn Hàng",
      "Giao Hàng",
      "Trả Hàng",
      "Phương Thức Thanh Toán",
      "Liên Hệ Chúng Tôi",
    ],
  },
  {
    id: "Tài Nguyên",
    data: ["Tìm Cửa Hàng", "Trở Thành Thành Viên", "Gửi Phản Hồi"],
  },
  {
    id: "Về Cửa Hàng",
    data: ["Tin Tức", "Tuyển Dụng", "Nhà Đầu Tư", "Phát Triển Bền Vững"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white flex-grow-0 z-10">
      <div className="sm:p-4">
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-6 text-sm gap-10 lg:gap-0  p-2 lg:p-10">
            {list.map((item) => {
              return (
                <div key={item.id} className="px-2">
                  <h3 className="text-[#111111] font-semibold mb-4">{item.id}</h3>
                  {item.data.map((item) => (
                    <div key={item} className="text-[#707072] my-2 font-light cursor-pointer hover:opacity-75">
                      {item}
                    </div>
                  ))}
                </div>
              );
            })}
            <div className="hidden lg:block col-span-2"></div>
            <div className="flex px-2 lg:px-0 lg:py-10 md:flex md:items-center  lg:justify-end h-5 items-center">
              <EarthIcon />
              <span className="ml-1 text-[#707072] font-medium">Vietnam</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Tất Cả Quyền Được Bảo Lưu</p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <div className="text-sm text-muted-foreground hover:text-gray-600">Hotline: 0763948610</div>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Điều Khoản
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Chính Sách Bảo Mật
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Chính Sách Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
