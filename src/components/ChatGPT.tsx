// I want a named export react typescript component called ChatGPT that draws the bitcoin price for the last 5 years. The typescript must not have any implicit anys.

import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface PriceData {
  time: number;
  price: number;
}

export const ChatGPT: React.FC = () => {
  const [priceData, setPriceData] = useState<PriceData[]>([]);

  useEffect(() => {
    const fetchPriceData = async (): Promise<void> => {
      const response: AxiosResponse<{ bpi: Record<string, number> }> = await axios.get(
        'https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-04-01&end=2021-04-01'
      );
      const data: Record<string, number> = response.data.bpi;
      const formattedData: PriceData[] = Object.keys(data).map((date: string) => ({
        time: new Date(date).getTime(),
        price: data[date],
      }));
      setPriceData(formattedData);
    };
    fetchPriceData();
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <h1>Bitcoin Price (last 5 years)</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={priceData}>
          <XAxis dataKey="time" tickFormatter={(time: number) => new Date(time).toLocaleDateString()} />
          <YAxis dataKey="price" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
