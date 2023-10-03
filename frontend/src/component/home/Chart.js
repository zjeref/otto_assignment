import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import darkUnica from "highcharts/themes/dark-unica";
import axios from "axios";
import { useAtom } from "jotai";
import { lastTrigger, symbol } from "../../helpers/global-state";
import { checkAndSendNotification } from "../../helpers/notification";

const Chart = ({ autoRefresh }) => {
  const [currentSymbol, setCurrentSymbol] = useAtom(symbol);
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState([]);
  const [lastTriggerData, setLastTriggerData] = useAtom(lastTrigger);

  darkUnica(Highcharts);

  const options = {
    method: "GET",
    url: "https://apistocks.p.rapidapi.com/intraday",
    params: {
      symbol: currentSymbol,
      interval: "1min",
      maxreturn: "100",
    },
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "apistocks.p.rapidapi.com",
    },
  };

  let chartOptions = {
    title: {
      text: currentSymbol,
    },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%H:%M:%S", this.value);
        },
      },
    },
    yAxis: {
      title: {
        text: "Stock Price",
      },
    },
    series: [
      {
        type: "line",
        name: "Stock Price",
        data: priceData,
      },
    ],
  };

  let chartOptions2 = {
    title: {
      text: currentSymbol,
    },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%H:%M:%S", this.value);
        },
      },
    },
    yAxis: {
      title: {
        text: "Stock Price",
      },
    },
    series: [
      {
        type: "scatter",
        name: "Stock Price",
        data: priceData,
      },
    ],
  };

  const fetchAPI = async () => {
    try {
      console.log("api called")
      const response = await axios.request(options);
      const responseData = response.data.Results;
      if (responseData && responseData.length > 0) {
        const priceChartData = responseData.map((dataPoint) => [
          new Date(dataPoint.Date).getTime(),
          dataPoint.Close,
        ]);
        setPriceData(priceChartData);
      } else {
        console.error("No data found in the API response");
      }
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchAPI();
    setLoading(false);
  }, [currentSymbol]);

  useEffect(() => {
    let refreshInterval;

    const fetchAndCheckNotification = async () => {
      if (autoRefresh) {
        await fetchAPI(); // Fetch data
        if (lastTriggerData && lastTriggerData.price) {
          await checkAndSendNotification(
            priceData[priceData.length - 1][1],
            lastTriggerData.price,
            currentSymbol
          ).then(async () => {
            await axios
              .delete(
                `${process.env.REACT_APP_API_URL}/trigger/${lastTriggerData._id}`
              )
              .then((res) => console.log("trigger deleted"))
              .catch((error) => console.error("Error deleting trigger", error));
            setLastTriggerData(null);
          });
        }
      }
    };

    if (autoRefresh) {
      refreshInterval = setInterval(fetchAndCheckNotification, 20000);
    }

    return () => {
      clearInterval(refreshInterval);
    };
  }, [autoRefresh]);

  return (
    <>
      {!loading && (
        <div className="space-y-6">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          <HighchartsReact highcharts={Highcharts} options={chartOptions2} />
        </div>
      )}
    </>
  );
};

export default Chart;
