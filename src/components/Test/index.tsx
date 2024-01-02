import React from "react";

interface TestProps {
  children: React.ReactNode;
}

const Test: React.FC = ({ children }: TestProps) => {
  return <button>{children}</button>;
};

export default Test;
