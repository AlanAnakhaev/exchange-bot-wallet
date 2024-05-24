"use client";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "../dashboard-graphics/components/overview";
import Image from "next/image";
import BNB from "../../assets/images/bnb-bnb-logo.svg";
import THR from "../../assets/images/tether-usdt-logo.svg";
import ETH from "../../assets/images/eth.svg";
import BTC from "../../assets/images/btc.svg";
import DGC from "../../assets/images/dogecoin-doge-logo-alternative.svg";
import chartUp from "../../assets/icons/trending-up.svg";
import WithAuth from "@/components/WithAuth";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col min-h-90vh">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Balance
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
                <Image src={chartUp} alt="chartUp" width={20} height={20}></Image>
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Bots</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">BNB Miner</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month by BNB/USDT
                <Image src={chartUp} alt="chartUp" width={20} height={20}></Image>
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profit</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+599$</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
                <Image src={chartUp} alt="chartUp" width={20} height={20}></Image>
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex justify-between text-2xl font-bold">
                  <p>BNB Miner</p>
                  <Image src={BNB} alt="Bnb" width={50} height={50}></Image>
                </div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Crypto Currencies Market Cap</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <Image src={BNB} alt="BNB"></Image>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">BNB</p>
                  <p className="text-sm text-muted-foreground">BINANCE</p>
                </div>
                <div className="ml-auto font-medium">$593.39</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <Image src={ETH} alt="Eth"></Image>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">ETH</p>
                  <p className="text-sm text-muted-foreground">ETHEREUM</p>
                </div>
                <div className="ml-auto font-medium">$3,737.58</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <Image src={BTC} alt="BTC"></Image>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">BTC</p>
                  <p className="text-sm text-muted-foreground">BITCOIN</p>
                </div>
                <div className="ml-auto font-medium">$67,537.34</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <Image src={THR} alt="THR"></Image>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">USDT</p>
                  <p className="text-sm text-muted-foreground">TETHER</p>
                </div>
                <div className="ml-auto font-medium">$0.9999</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <Image src={DGC} alt="Dogecoin"></Image>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">DOGE</p>
                  <p className="text-sm text-muted-foreground">DOGECOIN</p>
                </div>
                <div className="ml-auto font-medium">$0.1646</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WithAuth(Dashboard);
