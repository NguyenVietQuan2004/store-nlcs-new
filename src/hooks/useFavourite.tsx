import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { ProductType } from "@/Type/ProductType";
import { toast } from "@/components/ui/use-toast";

interface FavouriteStoreProps {
  itemsFavourite: ProductType[];
  removeAllFavourite: () => void;
  addItemFavourite: (product: ProductType) => void;
  removeItemFavourite: (product: ProductType) => void;
}

export const useFavourite = create(
  persist<FavouriteStoreProps>(
    (set, get) => ({
      itemsFavourite: [],
      addItemFavourite: (product: ProductType) => {
        const currentItems = get().itemsFavourite;

        const existProduct = currentItems.find((item) => item._id === product._id);
        if (existProduct) {
          return toast({
            title: "Sản phẩm đã tồn tại",
          });
        }
        toast({
          title: "Thêm vào yêu thích thành công",
          variant: "success",
        });
        set({ itemsFavourite: [...currentItems, product] });
      },
      removeItemFavourite: (product: ProductType) => {
        const currentItems = get().itemsFavourite;
        set({ itemsFavourite: currentItems.filter((item) => item._id !== product._id) });
      },
      removeAllFavourite: () => set({ itemsFavourite: [] }),
    }),
    {
      name: "product-favourite",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
