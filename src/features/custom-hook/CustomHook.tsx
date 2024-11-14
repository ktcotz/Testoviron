import { useCounter } from "./useCounter";

export const CustomHook = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h1>Custom Hook</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
