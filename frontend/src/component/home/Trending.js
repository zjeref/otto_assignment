import React, { useEffect, useState } from "react";
import axios from "axios";
import addNotification from "react-push-notification";
import { useAtom } from "jotai";
import { symbol } from "../../helpers/global-state";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [currentSymbol, setCurrentSymbol] = useAtom(symbol);

  const options = {
    method: "GET",
    url: "https://ms-finance.p.rapidapi.com/market/v2/get-movers",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_MSFIN_KEY}`,
      "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
    },
  };

  const fetchAPI = async () => {
    await axios.request(options).then((res) => {
      setTrending(res.data.actives);
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  // function test() {
  //   addNotification({
  //     title: "Warning",
  //     native: true,
  //   });
  // }

  function handleClick(symbol) {
    setCurrentSymbol(symbol);
  }

  return (
    <div className="bg-secondary text-white px-4 py-2 max-h-[600px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-slate-400">
        Trending Indexes
      </h2>
      <div className="w-full max-w-lg">
        <div className="flex w-full flex-col space-y-2">
          <div className="flex w-full border-b border-gray-400 font-semibold text-lg">
            <p className="w-1/3">Symbols</p>
            <p className="w-1/3">Price</p>
            <p className="w-1/3">Chg%</p>
          </div>
          {trending.map((trend) => (
            <div
              key={trend.ticker}
              className="flex w-full border-b border-gray-400 cursor-pointer"
              onClick={() => handleClick(trend.ticker)}
            >
              <p className="w-1/3 flex-grow">{trend.ticker}</p>
              <p
                className={`w-1/3 flex-grow ${
                  trend.percentNetChange > 0 ? "text-green-700" : "text-red-500"
                }`}
              >
                {trend.lastPrice}
              </p>
              <p
                className={`w-1/3 flex-grow ${
                  trend.percentNetChange > 0 ? "text-green-700" : "text-red-500"
                }`}
              >
                {trend.percentNetChange}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
