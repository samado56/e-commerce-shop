import { Box } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

//recharts
import {
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

//map chart
import MapChart from "../MapChart/MapChart";

const data = [
  { date: "Week 1", value: 10 },
  { date: "Week 2", value: 50 },
  { date: "Week 3", value: 20 },
  { date: "Week 4", value: 55 },
];

const SimpleAreaChart = () => {
  return (
    <Box sx={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fcb045" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#fcb045" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="date"
            interval={0}
            tick={{ fill: "#888", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#fcb045"
            strokeWidth={3}
            fill="url(#colorYellow)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

const data1 = [
  {
    categorie: "T-shirts",
    uv: 4000,
    pv: 5000,
    amt: 3000,
  },
  {
    categorie: "Dresses",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    categorie: "Hoodies",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    categorie: "Pens",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    categorie: "Caps",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const TinyBarChart = () => {
  return (
    <Box sx={{ width: "100%", height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data1}>
          <XAxis
            dataKey="categorie"
            interval={0}
            tick={{ fill: "#888", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#fcb045" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

const RecentOrders = () => {
  return (
    <>
      <div className="p-4 md:p-0 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
        <table className="w-[800px] md:w-full text-start table-fixed  border-1 border-gray-400/20 ">
          <thead className="bg-gray-400/10 ">
            <tr>
              <th className=" text-start py-2 px-4">ORDER</th>
              <th className=" text-start py-2 px-4">CUSTOMER</th>
              <th className=" text-start py-2 px-4">STATUS</th>
              <th className=" text-start py-2 px-4">TOTAL</th>
              <th className=" text-start py-2 px-4">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-1 border-gray-400/20">
              <td className="py-4 px-4 font-medium ">#12345</td>
              <td className="py-4 px-4 text-gray-500 text-lg ">Sophia alan</td>
              <td className="py-4 px-4">
                <span className="bg-cyan-500/10 py-1 px-3 text-cyan-500 font-[500] rounded-2xl">
                  Shipped
                </span>
              </td>
              <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
              <td className="py-4 px-4 text-gray-400">july 15, 2024</td>
            </tr>
            <tr className="border-b-1 border-gray-400/20">
              <td className="py-4 px-4 font-medium ">#12345</td>
              <td className="py-4 px-4 text-gray-500 text-lg ">David becam</td>
              <td className="py-4 px-4">
                <span className="bg-red-500/10 py-1 px-3 text-red-700 font-[500] rounded-2xl">
                  Canceled
                </span>
              </td>
              <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
              <td className="py-4 px-4 text-gray-400">july 15, 2024</td>
            </tr>
            <tr className="border-b-1 border-gray-400/20">
              <td className="py-4 px-4 font-medium ">#12345</td>
              <td className="py-4 px-4 text-gray-500 text-lg ">jessus brayn</td>
              <td className="py-4 px-4">
                <span className="bg-green-500/10 py-1 px-3 text-green-800 font-[500] rounded-2xl">
                  Delivered
                </span>
              </td>
              <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
              <td className="py-4 px-4 text-gray-400">july 15, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const TopSellingProducts = () => {
  const { products } = useContext(GlobalContext);
  products.splice(4);
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6 text-center md:text-start">
        {products &&
          products.map(({ title, thumbnail }, index) => {
            return (
              <div
                key={index}
                className="product-card  relative shadow-md shadow-black/20 rounded-md whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                // onClick={() => navigate("/product")}
              >
                <img src={thumbnail} className="w-full" />
                <div className="p-4">
                  <h1 className="text-lg font-semibold truncate text-center md:text-start">
                    {title}
                  </h1>
                  <p className="text-gray-500 font-[500]">150 units sold</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

const CustomerInsights = () => {
  return (
    <div className="flex flex-col md:flex-row items-centet gap-6">
      <div>
        <div className="p-3 rounded-md shadow-sm shadow-black/10 bg-white w-full mb-4">
          <p className="text-lg text-gray-500 font-semibold">Loyalty Score</p>
          <h1 className="text-4xl font-bold">85/100</h1>
          <div className="relative bg-gray-400/20 rounded-xl  h-[10px] w-[300px] block mt-2">
            <span className="absolute bg-yellow-400 rounded-xl  top-0 left-0 h-full w-[100px] block"></span>
          </div>
        </div>
        <div className="p-3 rounded-md shadow-sm shadow-black/10 bg-white w-full">
          <p className="text-lg text-gray-500 font-semibold">
            New vs Returning{" "}
          </p>
          <h1 className="text-4xl font-bold">60% / 40%</h1>
          <div className="relative bg-gray-400/20 rounded-xl  h-[10px] w-[300px] block mt-2">
            <span className="absolute bg-yellow-400 rounded-xl  top-0 left-0 h-full w-[100px] block"></span>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-md shadow-sm shadow-black/10 bg-white w-full ">
        <h2 className="text-xl font-bold ">Customer Location</h2>
        <MapChart />
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <>
      <div className=" px-4 md:px-10 py-[88px] md:pt-[61px] bg-gray-400/5 ">
        <h2 className="text-3xl font-bold my-10">Sales Overview</h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6 text-center md:text-start">
          <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
            <p className="text-gray-600 font-semibold mb-2">Revenue</p>
            <h1 className="text-4xl font-bold mb-1">$25,450</h1>
            <span className="block text-green-600 font-semibold">
              +12% from last month{" "}
            </span>
          </div>
          <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
            <p className="text-gray-600 font-semibold mb-2">Orders</p>
            <h1 className="text-4xl font-bold mb-1">1,235</h1>
            <span className="block text-green-600 font-semibold">
              +12% from last month{" "}
            </span>
          </div>
          <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
            <p className="text-gray-600 font-semibold mb-2">Customers</p>
            <h1 className="text-4xl font-bold mb-1">800</h1>
            <span className="block text-green-600 font-semibold">
              +12% from last month{" "}
            </span>
          </div>
          <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
            <p className="text-gray-600 font-semibold mb-2">Conversion Rate</p>
            <h1 className="text-4xl font-bold mb-1">4.5%</h1>
            <span className="block text-red-600 font-semibold">
              +12% from last month{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-centr gap-6 mt-10">
          <div className=" rounded-md shadow-md shadow-black/10 p-4 flex-1/3 bg-white">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-2xl font-medium ">Revenue Trend</h4>
                <span className="text-gray-600 font-semibold">
                  Last 30 Days
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-2xl font-bold ">$25,450</h4>
                <span className="text-green-600 font-semibold">+12%</span>
              </div>
            </div>
            {/* =========== Chart ============= */}
            <SimpleAreaChart />
          </div>
          <div className=" rounded-md shadow-md shadow-black/10 p-4 flex-1/7 bg-white">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-2xl font-medium ">Orders by Category</h4>
                <span className="text-gray-600 font-semibold">
                  Last 30 Days
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-2xl font-bold ">1,265</h4>
                <span className="text-green-600 font-semibold">+8%</span>
              </div>
            </div>
            <TinyBarChart />
          </div>
        </div>
        <h2 className="text-3xl font-bold my-10">Sales Overview</h2>
        <RecentOrders />
        <h2 className="text-3xl font-bold my-10">Top Selling Products</h2>
        <TopSellingProducts />
        <h2 className="text-3xl font-bold my-10">Customer Insights</h2>
        <CustomerInsights />
      </div>
    </>
  );
}
