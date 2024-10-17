import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../store/counterSlice';
import Counter from '../Counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

describe('Counter', () => {
  it('renders the counter value', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  it('increments the counter when increment button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    fireEvent.click(screen.getByText(/Increment/i));
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
  });

  it('decrements the counter when decrement button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    fireEvent.click(screen.getByText(/Decrement/i));
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  it('adds 5 to the counter when "Add 5" button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    fireEvent.click(screen.getByText(/Add 5/i));
    expect(screen.getByText(/Counter: 5/i)).toBeInTheDocument();
  });
});