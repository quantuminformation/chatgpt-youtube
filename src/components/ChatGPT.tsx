// I want a named export react typescript component called ChatGPT that draws the bitcoin price for the last 5 years. The typescript must not have any implicit anys. Use only useReducer.

import React, { useEffect, useReducer } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PriceData {
  time: number;
  price: number;
}

type Action = { type: 'FETCH_SUCCESS'; payload: PriceData[] } | { type: 'FETCH_FAILURE'; error: AxiosError };

type State = {
  loading: boolean;
  priceData: PriceData[];
  error: AxiosError | null;
};

const initialState: State = {
  loading: true,
  priceData: [],
  error: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        priceData: action.payload,
        error: null,
      };
    case 'FETCH_FAILURE':
      return {
        loading: false,
        priceData: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const ChatGPT: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPriceData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<{ bpi: Record<string, number> }> = await axios.get(
          'https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-04-01&end=2021-04-01&error=true'
        );
        const data: Record<string, number> = response.data.bpi;
        const formattedData: PriceData[] = Object.keys(data).map((date: string) => ({
          time: new Date(date).getTime(),
          price: data[date],
        }));
        dispatch({ type: 'FETCH_SUCCESS', payload: formattedData });
      } catch (error: AxiosError) {
        dispatch({ type: 'FETCH_FAILURE', error });
      }
    };
    fetchPriceData();
  }, []);

  const { loading, priceData, error } = state;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
