"use client";
import { useState } from "react";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head />
      <body>
        <h2>Header</h2>
        <h3>{count}</h3>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;