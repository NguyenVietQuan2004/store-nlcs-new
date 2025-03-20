"use client";

import Image from "next/image";
import { XIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import IconButton from "@/components/icon-button";
import { HeartIcon } from "../../../../public/icons";
import { useFavourite } from "@/hooks/useFavourite";
import { productOrderType } from "@/Type/OrderTypes";
import { productAPI } from "@/apiRequest/productAPI";
import { Separator } from "@/components/ui/separator";
import ListProductCard from "@/components/list-product-card";
import { createArrayByOrder, formattedPrice } from "@/lib/utils";
import { useModalUpdateSize } from "@/hooks/use-modal-update-size";

function CartClientNotSuspen() {
  const searchParams = useSearchParams();
  const { onOpen } = useModalUpdateSize();
  const [isMounted, setIsMounted] = useState(false);
  let totalPrice = 0;

  const { items, removeItem, onUpdateAmount, onUpdateWhenMounted } = useCart();
  const listIdProduct = items.map((item) => item.product._id);

  // gọi api lấy lại thông tin sản phẩm mới nhất khi mounted tránh đang giữ thông tin cũ gây sai số lượng
  const fetchAPI = async () => {
    const data = await productAPI.getListByListId({ listIdProduct });
    if (data?.data) onUpdateWhenMounted(data?.data.listProduct);
  };
  const { addItemFavourite } = useFavourite();
  // coi lại chỗ này
  useEffect(() => {
    if (isMounted === true) fetchAPI();
    setIsMounted(true);
  }, [isMounted]);

  const handleRemoveItem = (item: productOrderType) => {
    removeItem(item);
  };
  const handleUpdateSizeItem = (item: productOrderType) => {
    onOpen(item);
  };
  const handleCheckout = async () => {
    const storage = localStorage.getItem("user");
    if (!storage) {
      window.location.href = "/auth";
      return;
    } else {
      const filterItemsOutOfStock = items.filter((item) => item.quantity !== 0);
      if (!filterItemsOutOfStock.length) return;
      window.location.href = "/confirm";
    }
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast({
        title: "Check out success",
        variant: "success",
      });
    }
    if (searchParams.get("canceled")) {
      toast({
        title: "Cancel payment",
        variant: "destructiveCustom",
      });
    }
  }, [searchParams]);

  const handleOnchangeSelect = (item: productOrderType, newAmount: any) => {
    onUpdateAmount({
      old: {
        productId: item.product._id,
        product_variant_id: item.product_variant_id,
      },
      new: {
        amount: parseInt(newAmount),
      },
    });
  };
  if (!isMounted) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 px-2   xl:px-[100px] ">
      <div className="lg:col-span-4 max-w-full overflow-hidden  ">
        {items.map((item) => {
          const objectPrice = item.product.product_variants.find(
            (objectPrice: any) => objectPrice._id === item.product_variant_id
          );

          totalPrice +=
            (item.snapshot_price || 0) * item.quantity * (item.product.sales ? (100 - item.product.sales) / 100 : 1);

          //  chỉ hiện tối đa 10 select quantity
          const arraySelect =
            (objectPrice?.stock || 0) > 10 ? createArrayByOrder(10) : createArrayByOrder(objectPrice?.stock || 0);
          return (
            <React.Fragment key={item.product._id + item.product_variant_id}>
              <div className={` flex justify-between items-center `}>
                <div className="flex flex-1 gap-4 ">
                  <div>
                    <Image
                      alt=""
                      src={item.product.images[0]}
                      width={600}
                      height={600}
                      className="object-cover min-w-[150px] w-[150px]  lg:w-[164px]  aspect-square rounded-sm"
                    />
                  </div>
                  <div className="flex-1 col-span-2 text-[#707072] flex flex-col justify-between">
                    <div className="leading-[28px] ">
                      <div className=" lg:hidden font-medium  col-span-2 self-start ">
                        {formattedPrice(
                          (item.snapshot_price * item.quantity * (item.product.sales ? 100 - item.product.sales : 1)) /
                            100
                        )}
                      </div>
                      <div
                        className={`  font-semibold text-[#111111] line-clamp-2 ${
                          objectPrice?.stock === 0 && "text-[#707072]"
                        }`}
                      >
                        {item.product.name}
                      </div>
                      <div className="line-clamp-1  ">{item.product.category.name}</div>{" "}
                      {/* {item.product.variants[1]?.name} */}
                      {Object.keys(objectPrice?.variant_values || {})[1] ? (
                        <>
                          {Object.keys(objectPrice?.variant_values || {})[1]}:{" "}
                          {Object.values(objectPrice?.variant_values || {})[1]}
                        </>
                      ) : null}
                      {/* <div style={{ backgroundColor: item.color }} className="my-1 w-5 h-5 border rounded-full"></div> */}
                      <div className="flex items-start lg:items-center gap-4">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleUpdateSizeItem(item);
                          }}
                          className="flex lg:items-center flex-col lg:flex-row
                          "
                        >
                          {true ? (
                            <>
                              {Object.keys(objectPrice?.variant_values || {})[0]}:{" "}
                              <span className="whitespace-nowrap overflow-hidden leading-[24px]  lg:ml-2 border border-transparent border-b-[#707072] hover:opacity-75">
                                {Object.values(objectPrice?.variant_values || {})[0]}
                              </span>
                            </>
                          ) : null}
                        </button>
                        <div className="flex items-center gap-2">
                          {objectPrice?.stock !== 0 ? (
                            <>
                              Quantity
                              <select
                                value={item.quantity}
                                onChange={(e) => handleOnchangeSelect(item, e.target.value)}
                                className="w-12 text-sm pl-3"
                              >
                                {arraySelect.map((val, index) => (
                                  <option key={index} value={val}>
                                    {val}
                                  </option>
                                ))}
                                {!arraySelect.includes(item.quantity) && (
                                  <option value={item.quantity}>{item.quantity}</option>
                                )}
                              </select>
                            </>
                          ) : (
                            <div>Hết hàng</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2 lg:mt-0">
                      <IconButton
                        onClick={(e) => {
                          e.preventDefault();
                          addItemFavourite(item.product);
                        }}
                      >
                        <HeartIcon />
                      </IconButton>
                      <IconButton
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveItem(item);
                        }}
                      >
                        <XIcon className="w-[18px] h-[18px]" />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex font-medium  flex-col col-span-2 self-start ">
                  <span className="text-sm text-[#707072]">{formattedPrice(item.snapshot_price)} for one</span>
                  <span>
                    {formattedPrice(
                      item.snapshot_price * item.quantity * (item.product.sales ? (100 - item.product.sales) / 100 : 1)
                    )}
                  </span>
                </div>
              </div>
              <Separator className="my-6" />
            </React.Fragment>
          );
        })}
        {items.length === 0 && <div className="text-center underline">Cart is empty</div>}
      </div>
      <div className="lg:col-span-2 ">
        <div className="bg-zinc-100 p-2 lg:p-6 rounded-lg border border-">
          <div className="text-2xl font-medium mb-6">Summary</div>
          <div className="my-4 flex justify-between">
            <div>Subtotal</div>
            <div className="font-semibold">{formattedPrice(totalPrice)}</div>
          </div>{" "}
          <div className="my-4 flex justify-between">
            <div>Estimated Delivery & Handling</div>
            <div className="font-semibold">Free</div>
          </div>
          <Separator className="my-6" />
          <div className="my-4 flex justify-between">
            <div>Total</div>
            <div className="font-semibold">{formattedPrice(totalPrice)}</div>
          </div>
          <Separator className="my-6" />
          <Button size={"lg"} onClick={handleCheckout} className="py-8 w-full rounded-full">
            Proceed to Order
          </Button>
        </div>
      </div>
    </div>
  );
}

function CartClient() {
  const { itemsFavourite } = useFavourite();

  return (
    <Suspense fallback={<div>loading.....</div>}>
      <CartClientNotSuspen />
      <div className="px-4 lg:px-[50px]">
        <h2 className="text-[26px] font-medium mt-[40px] mb-6 ">You might also like</h2>
        {!itemsFavourite.length && (
          <div className="font-semibold text-center underline">Items added to your Favourites will be saved here.</div>
        )}
        <ListProductCard scroll={true} gridCols={3} listProduct={itemsFavourite} />
      </div>
    </Suspense>
  );
}

export default CartClient;
