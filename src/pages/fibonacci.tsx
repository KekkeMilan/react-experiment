import { useState } from "react";

const Fibonacci: React.FC = () => {
  const [count, setCount] = useState(30);

  function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  function ExpensiveComponent({ n }: { n: number }) {
    const start = performance.now();
    const result = fib(n);
    const duration = performance.now() - start;

    console.log(`Fibonacci(${n}) = ${result} took ${duration.toFixed(2)}ms`);
    return <p>{result}</p>;
  }

  return (
    <div>
      <h1>Fibonacci</h1>
      <>
        <button className="bg-cyan-300" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <ExpensiveComponent n={count} />
      </>
    </div>
  );
};

export default Fibonacci;
