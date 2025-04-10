import { useEffect, useState } from "react";

const ProgressBar: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 2), 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Progress Bar</h1>
      <p>Updating: {count}</p>
    </div>
  );
};

export default ProgressBar;
