"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";
import { Bot } from "@/types/botData";
import BNB from "../assets/images/bnb-bnb-logo.svg";
import Image from "next/image";
import activeIcon from "../assets/icons/checkmark.svg";
import inActiveIcon from "../assets/icons/cross.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useBotStore from "@/store/bot-store";

export function BotCardSolo({ bot, index }: { bot: Bot; index: number }) {
  const editBot = useBotStore((state) => state.editBot);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({});
  const onSubmit = async (data: any) => {
    editBot(index, data);
  };

  return (
    <div className="m-5">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between mb-5">
            <div>
              <CardTitle>{bot.name}</CardTitle>
              <CardDescription>{bot.symbol}</CardDescription>
            </div>
            <Image src={BNB} alt="BNB" width={50} height={50} />
          </div>
          <hr />
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{bot.exchange}</h2>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2>PROFIT</h2>
              <span className="font-medium">{bot.profit_percentage}%</span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2>Order grid</h2>
              <span className="font-medium">{bot.grid_length}</span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2>Amount</h2>
              <span className="font-medium">{bot.amount}</span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2>Profit Capitalization</h2>
              <span className="font-medium">{bot.profit_capitalization}</span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2>Next volume order</h2>
              <span className="font-medium"> + {bot.next_order_volume} %</span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2 className="">Status</h2>
              <div className="flex items-center gap-2">
                <span className="font-medium">{bot.status}</span>
                <Image
                  style={{ width: 20, height: 20 }}
                  src={bot.status === "ACTIVE" ? activeIcon : inActiveIcon}
                  alt="status"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <LineChart className="aspect-[3/2]" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Details about {bot.name} bot</DialogTitle>
                <DialogDescription>{bot.name}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <p>Name: {bot.name}</p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p>Exchange: {bot.exchange}</p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p> Symbol: {bot.symbol}</p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p>
                    Amount: <b>{bot.amount}</b>
                  </p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p>
                    Grid Length: <b>{bot.grid_length}</b>
                  </p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p>
                    Log coefficient <b>{bot.log_coefficient} </b>
                  </p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p>
                    Upper price limit <b>{bot.upper_price_limit}</b>{" "}
                  </p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p> Created At:{bot.created_at}</p>
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <p>Updated At:{bot.updated_at}</p>
                  etc...
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <form>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit bot</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4 max-h-96 overflow-y-auto pr-5">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue={bot.name}
                      className="col-span-3"
                      {...register("name", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.name && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="symbol" className="text-right">
                      Symbol
                    </Label>
                    <Input
                      id="symbol"
                      defaultValue={bot.symbol}
                      className="col-span-3"
                      {...register("symbol", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.symbol && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">
                      Amount
                    </Label>
                    <Input
                      id="amount"
                      defaultValue={bot.amount}
                      className="col-span-3"
                      {...register("amount", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.amount && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="first_order_offset" className="text-right">
                      First Order Offset
                    </Label>
                    <Input
                      id="first_order_offset"
                      defaultValue={bot.first_order_offset}
                      className="col-span-3"
                      {...register("first_order_offset", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.first_order_offset && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="num_orders" className="text-right">
                      Number of Orders
                    </Label>
                    <Input
                      id="num_orders"
                      defaultValue={bot.num_orders}
                      className="col-span-3"
                      {...register("num_orders", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.num_orders && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="partial_num_orders" className="text-right">
                      Partial Number of orders
                    </Label>
                    <Input
                      id="partial_num_orders"
                      defaultValue={bot.partial_num_orders}
                      className="col-span-3"
                      {...register("partial_num_orders", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.partial_num_orders && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="log_coefficient" className="text-right">
                      Log Coefficient
                    </Label>
                    <Input
                      id="log_coefficient"
                      defaultValue={bot.log_coefficient}
                      className="col-span-3"
                      {...register("log_coefficient", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.log_coefficient && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">
                      Status
                    </Label>
                    <Input
                      id="status"
                      defaultValue={bot.status}
                      className="col-span-3"
                      {...register("status", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.status && (
                      <p className="col-span-3 text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="upper_price_limit" className="text-right">
                      Upper Price Limit
                    </Label>
                    <Input
                      id="upper_price_limit"
                      defaultValue={bot.upper_price_limit}
                      className="col-span-3"
                      {...register("upper_price_limit", { required: true })}
                    />
                    <div className="col-span-3"></div>{" "}
                    {errors?.upper_price_limit && (
                      <div className="col-span-3 text-red-500">
                        This field is required
                      </div>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  <DialogTrigger asChild>
                    <Button onClick={handleSubmit(onSubmit)} type="submit">
                      Save changes
                    </Button>
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

function LineChart(props: any) {
  function getRandomNumber(): number {
    return Math.floor(Math.random() * 201);
  }
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: getRandomNumber() },
              { x: "Feb", y: getRandomNumber() },
              { x: "Mar", y: getRandomNumber() },
              { x: "Apr", y: getRandomNumber() },
              { x: "May", y: getRandomNumber() },
              { x: "Jun", y: getRandomNumber() },
            ],
            lineTension: 1,
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "none",
            },
          },
          background: "transparent",
        }}
        role="application"
      />
    </div>
  );
}
