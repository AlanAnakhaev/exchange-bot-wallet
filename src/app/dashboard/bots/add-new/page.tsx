"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import botData from "../../../../utils/botData.json";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  user_id: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  exchange_key_id: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  amount: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  upper_price_limit: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  profit_percentage: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
function AddNewBot() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_id: "",
      exchange_key_id: "",
      amount: "",
      upper_price_limit: "",
      profit_percentage: "",
    },
  });
  function generateRandomString() {
    function randomHex() {
      return Math.floor(Math.random() * 16).toString(16);
    }

    function randomString(len: number) {
      var str = "";
      for (var i = 0; i < len; i++) {
        str += randomHex();
      }
      return str;
    }

    var uuid =
      "b" +
      randomString(8) +
      "-" +
      randomString(4) +
      "-" +
      randomString(4) +
      "-" +
      randomString(4) +
      "-" +
      randomString(12);
    return uuid;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newBot = {
      id: generateRandomString(),
      name: "New Bot",
      exchange: "Some Exchange",
      symbol: "Some Symbol",
      amount: parseFloat(values.amount),
      grid_length: 6.0,
      first_order_offset: 1.2,
      num_orders: 12,
      partial_num_orders: 6,
      next_order_volume: 1.4,
      profit_percentage: parseFloat(values.profit_percentage),
      price_change_percentage: 0.6,
      log_coefficient: 1.15,
      profit_capitalization: 1.06,
      upper_price_limit: parseFloat(values.upper_price_limit),
      status: "ACTIVE",
      is_active: true,
      user_id: values.user_id,
      exchange_key_id: values.exchange_key_id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    botData.push(newBot);

    alert("Bot created successfully!");

    form.reset();
  }

  const router = useRouter();

  const sendToBotsPage = () => {
    router.push("/dashboard/bots");
  };
  return (
    <div className="flex justify-center items-center min-h-90vh">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="user_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Id</FormLabel>
                <FormControl>
                  <Input placeholder="User ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="exchange_key_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Exchange Key?</FormLabel>
                <FormControl>
                  <Input placeholder="Exchange Key" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How much would you like to invest?</FormLabel>
                <FormControl>
                  <Input placeholder="Amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="upper_price_limit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What`s your upper price limit?</FormLabel>
                <FormControl>
                  <Input placeholder="Upper Price Limit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profit_percentage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How much % would you like to receive?</FormLabel>
                <FormControl>
                  <Input placeholder="Profit %" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" onClick={sendToBotsPage}>Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default AddNewBot;
