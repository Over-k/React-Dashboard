import React from "react";
import { BarChart, LineChart, PeinChart } from "../Cards";
export function Home() {
  return (
    <div className="lg:flex-row lg:items-center">
      <div className="mb-12 grid gap-y-10 gap-x-6 xl:grid-cols-2 xl:grid-cols-2">
        <BarChart />
        <LineChart />
        <PeinChart />
      </div>
    </div>
  );
}

export default Home;
