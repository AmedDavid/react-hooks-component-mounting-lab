import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from '../Timer';

test('Timer starts counting on mount', () => {
  jest.useFakeTimers(); // Use fake timers to control setInterval
  const removeTimer = jest.fn(); // Mock the removeTimer prop

  render(<Timer id={1} removeTimer={removeTimer} />);

  // Initial state
  expect(screen.getByText("0")).toBeInTheDocument();

  // Fast-forward 1 second
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(screen.getByText("1")).toBeInTheDocument();

  // Fast-forward another second
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(screen.getByText("2")).toBeInTheDocument();

  jest.useRealTimers(); // Reset to real timers
});

test('Timer clears interval on unmount', () => {
  jest.useFakeTimers();
  const removeTimer = jest.fn();

  const { unmount } = render(<Timer id={1} removeTimer={removeTimer} />);

  // Fast-forward 1 second
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(screen.getByText("1")).toBeInTheDocument();

  // Unmount the component
  unmount();

  // Fast-forward another second
  act(() => {
    jest.advanceTimersByTime(1000);
  });

  // Timer should not have updated after unmount
  expect(screen.queryByText("2")).not.toBeInTheDocument();

  jest.useRealTimers();
});