import React, { useEffect, useState } from "react";
import axios from "axios";
import addNotification from "react-push-notification";
import { useAtom } from "jotai";
import { lastTrigger, symbol, user } from "../../helpers/global-state";
import { AiOutlinePlus } from "react-icons/ai";
import Cookies from "js-cookie";

const Trigger = () => {
  const [trending, setTrending] = useState([]);
  const [currentSymbol, setCurrentSymbol] = useAtom(symbol);
  const [searchRes, setSearchRes] = useState([]);
  const [allTriggers, setAllTriggers] = useState([]);
  const [reRender, setReRender] = useState(false);
  const [lastTriggerData, setLastTriggerData] = useAtom(lastTrigger);

  const [currentUser, setCurrentUser] = useAtom(user);
  const [triggerSymbol, setTriggerSymbol] = useState("");
  const [triggerPrice, setTriggerPrice] = useState(0);

  const [triggerActive, setTriggerActive] = useState(false);

  // const options = {
  //   method: "GET",
  //   url: "https://twelve-data1.p.rapidapi.com/symbol_search",
  //   params: {
  //     symbol: "AA",
  //     outputsize: "10",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "",
  //     "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  //   },
  // };

  // const fetchAPI = async () => {
  //   await axios.request(options).then((res) => {
  //     setSearchRes(res.data);
  //   });
  // };

  useEffect(() => {
    // fetchAPI();
    const token = Cookies.get("authToken");
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get(`${process.env.REACT_APP_API_URL}/trigger/all`, { headers })
      .then((res) => {
        setAllTriggers(res.data);
        if (res.data.length > 0) {
          setLastTriggerData(res.data[res.data.length - 1]);
        }
      })
      .catch((err) => {
        console.error("Error fetching triggers", err);
      });
  }, [reRender]);

  async function handleTrigger() {
    if (triggerActive && triggerSymbol && triggerPrice) {
      const token = Cookies.get("authToken");
      const headers = { Authorization: `Bearer ${token}` };
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/trigger/create`,
          { symbol: triggerSymbol, price: triggerPrice },
          { headers }
        )
        .then((res) => setReRender(!reRender))
        .catch(err => console.error("Error creating trigger", err));

      setTriggerSymbol("");
      setTriggerPrice(0);
      setTriggerActive(!triggerActive);
    } else {
      setTriggerActive(!triggerActive);
    }
  }

  return (
    <div className="bg-secondary text-white px-4 py-2 max-h-[600px] overflow-y-auto">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="">
          {triggerActive ? (
            <div className="flex space-x-2">
              <input
                className="px-2 py-1 text-blackk"
                type="text"
                placeholder="Symbol"
                value={triggerSymbol}
                onChange={(e) => setTriggerSymbol(e.target.value)}
              />
              <input
                className="px-2 py-1 text-blackk"
                type="number"
                placeholder="Trigger Price"
                value={triggerPrice}
                onChange={(e) => setTriggerPrice(e.target.value)}
              />
            </div>
          ) : (
            <h2 className="text-xl font-bold mb-4 text-slate-400">
              Your Triggers
            </h2>
          )}
        </div>
        <div
          className="text-2xl text-white bg-bluee rounded-full cursor-pointer"
          onClick={() => handleTrigger()}
        >
          <AiOutlinePlus />
        </div>
      </div>
      <div className="w-full max-w-lg">
        <div className="flex w-full flex-col space-y-2">
          <div className="flex w-full border-b border-gray-400 font-semibold text-lg">
            <p className="w-1/2">Symbols</p>
            <p className="w-1/2">Trigger Price</p>
          </div>
          {allTriggers.map((trig) => (
            <div
              key={trig._id}
              className="flex w-full border-b border-gray-400 cursor-pointer"
            >
              <p className="w-1/2 flex-grow">{trig.symbol}</p>
              <p className={`w-1/3 flex-grow`}>{trig.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trigger;
