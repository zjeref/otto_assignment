import React, { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const options = {
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers",
    params: { region: "US" },
    headers: {
      "X-RapidAPI-Key": "5ddca5e983msh9cd5fa10fe64654p106f81jsn644b82607479",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  const fetchAPI = async () => {
    await axios.request(options).then((res) => {
      setTrending(res.data.finance.result[0].quotes);
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="bg-black text-white px-4 py-2 w-max">
      <h2 className="text-xl font-bold">Trending Indexes</h2>
      <div>
        <table className="flex flex-col space-y-2 w-full max-w-lg">
          <tr>
            <th>Symbols</th>
            <th>Chg%</th>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>0.1</td>
          </tr>
          {trending.map((trend) => {
            return (
              <tr>
                <td>{trend.symbol}</td>
                <td
                  className={`${
                    trend.regularMarketChangePercent > 0
                      ? "text-green-700"
                      : "text-red-500"
                  } `}
                >
                  {trend.regularMarketChangePercent.toFixed(3)}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Trending;
