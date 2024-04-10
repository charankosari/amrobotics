import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from '@mui/x-charts/PieChart';

const uData = [4000, 3000, 2000];

const xLabels = ["DIY Products", "Home Products", "Some other Products"];
const data = [
    { id: 0, value: 10, label: 'Home Products' },
    { id: 1, value: 15, label: 'DIY Products' },
    { id: 2, value: 20, label: 'Some other Products' },
  ];
function AdminDash() {
  return (
    <div className="top-0 left-0 w-full h-full flex sm:flex-row flex-col items-center justify-center bg-gray-300 gap-6">
         <div className="flex flex-col items-center justify-center pl-12 sm:pl-0">
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 10, additionalRadius: -30, color: 'gray' },
        },
      ]}
      width={window.innerWidth < 600 ? 200 : 500}
      height={window.innerWidth < 600 ? 100 : 200}
      className="h-[200px] w-[500px]"
    
    />
        <h1 className="text-black  text-xl mt-6">Products Overview </h1>
      </div>
      <div className="flex flex-col items-center justify-center pl-12 sm:pl-0">
        <BarChart
          width={window.innerWidth < 600 ? 270 : 500}
          height={window.innerWidth < 600 ? 205 : 300}
          series={[{ data: uData, id: "products", stack: "total" }]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
        <h1 className="text-black  text-xl">SALES OF PRODUCTS </h1>
      </div>
     
    </div>
  );
}

export default AdminDash;
