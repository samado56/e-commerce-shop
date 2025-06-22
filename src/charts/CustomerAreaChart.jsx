//recharts
import {
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
  XAxis,
  YAxis,
} from "recharts";

//mui
import { Box } from "@mui/material";

const custmoers = [
  { date: "Week 1", oldCustomer: 10, newCustomer: 5 },
  { date: "Week 1", oldCustomer: 56, newCustomer: 44 },
  { date: "Week 1", oldCustomer: 20, newCustomer: 15 },
  { date: "Week 1", oldCustomer: 80, newCustomer: 70 },
];

const CustomerAreaChart = () => {
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={custmoers}>
          <defs>
            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00C49F" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#00C49F" stopOpacity={0} />
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
            dataKey="oldCustomer"
            stroke="#00C49F"
            strokeWidth={3}
            fill="url(#colorGreen)"
            dot={false}
          />

          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f8df7" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#4f8df7" stopOpacity={0} />
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
            dataKey="newCustomer"
            stroke="#4f8df7"
            strokeWidth={3}
            fill="url(#colorBlue)"
            dot={false}
          />
        </AreaChart>

        {/* <AreaChart data={custmoers}>
          
        </AreaChart> */}
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomerAreaChart;
