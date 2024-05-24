"use client";
import React, { useEffect, useState } from "react";
import botData from "../../../utils/botData.json";
import WithAuth from "@/components/WithAuth";
import { BotCardSolo } from "@/components/bot-card-solo";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import useBotStore from "../../../store/bot-store.js";

const Bots = () => {
  const router = useRouter();

  const { bots } = useBotStore();

  const handleClick = () => {
    router.push("/dashboard/bots/add-new");
  };
  return (
    <div>
      <div className="flex justify-end mt-5 mr-5">
        <Button onClick={() => handleClick()}>Add new bot</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bots.map((bot: any, index: any) => (
          <BotCardSolo key={index} bot={bot} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WithAuth(Bots);
