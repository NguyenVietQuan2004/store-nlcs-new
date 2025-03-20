"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  fullName: z.string().min(2, "Tên phải chứa ít nhất 2 ký tự"),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  address: z.string().min(5, "Address must be at least 5 characters."),
});

type FormData = z.infer<typeof formSchema>;

function CheckoutForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const { items } = useCart();
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const filterItemsOutOfStock = items.filter((item) => item.quantity !== 0);
      const storage = localStorage.getItem("user");
      if (!storage) {
        window.location.href = "/auth";
        return;
      }
      const user = JSON.parse(storage)?.user;
      const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_ADMIN}/checkout`, {
        method: "POST",
        body: JSON.stringify({ order: filterItemsOutOfStock, user_id: user?._id, address: data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (res.statusCode === 401) {
        toast({
          title: "Số lượng không khả dụng, thử lại sau",
          variant: "destructiveCustom",
        });
      } else {
        toast({
          title: "Đặt hàng thành công",
          variant: "success",
        });
      }
      router.push("/");
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Đặt hàng thất bại",
        variant: "destructiveCustom",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg my-32 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Đặt hàng</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {Object.keys(formSchema.shape).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof FormData}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={field.name.replace(/([A-Z])/g, " $1").trim()}
                      className="w-full p-2 border rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Đang tiến hành..." : "Xác nhận đặt hàng"}
          </button>
        </form>
      </Form>
    </div>
  );
}

export default CheckoutForm;
