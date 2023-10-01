import React, { useState } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { symbol } from "../../helpers/global-state";

const Chart = () => {
    const [interval, setInterval] = useState("15m");
    const [currentSymbol, setCurrentSymbol] = useAtom(symbol);

  const options = {
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart",
    params: {
      interval: {interval},
      symbol: {symbol},
      range: "1d",
      region: "US",
      includePrePost: "false",
      useYfid: "true",
      includeAdjustedClose: "true",
      events: "capitalGain,div,split",
    },
    headers: {
      "X-RapidAPI-Key": "5ddca5e983msh9cd5fa10fe64654p106f81jsn644b82607479",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  return <div>Chart</div>;
};

export default Chart;
