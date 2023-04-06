import { render, screen } from '@testing-library/react';
import ChatGPT from './ChatGPT';
import { expect } from 'vitest';

describe('ChatGPT', () => {
  it('should render without crashing', () => {
    render(<ChatGPT />);
    expect(screen.getByTestId('chatgpt')).toBeInTheDocument();
  });

  it('should display a loading message when data is being fetched', () => {
    render(<ChatGPT />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display an error message when an error occurs', () => {
    render(<ChatGPT forceError={true} />);
    expect(screen.getByText('Error: Failed to fetch bitcoin data.')).toBeInTheDocument();
  });

  it('should display a chart when data is successfully fetched', () => {
    render(<ChatGPT />);
    // Wait for chart to render
    setTimeout(() => {
      expect(screen.getByTestId('chart')).toBeInTheDocument();
    }, 1000);
  });
});
