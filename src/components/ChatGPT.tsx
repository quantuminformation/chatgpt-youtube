import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface PriceData {
  time: number;
  price: number;
}

export const ChatGPT: React.FC = () => {
  const [priceData, setPriceData] = useState<PriceData[]>([]);

  useEffect(() => {
    const fetchPriceData = async () => {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-04-01&end=2021-04-01"
      );
      const data = response.data.bpi;
      const formattedData = Object.keys(data).map((date) => ({
        time: new Date(date).getTime(),
        price: data[date],
      }));
      setPriceData(formattedData);
    };
    fetchPriceData();
  }, []);

  return (
    <div>
      <h1>Bitcoin Price (last 5 years)</h1>
      <LineChart width={800} height={400} data={priceData}>
        <XAxis
          dataKey="time"
          tickFormatter={(time) => new Date(time).toLocaleDateString()}
        />
        <YAxis dataKey="price" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
