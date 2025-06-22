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

const sales = [
  { date: "Week 1", value: 10 },
  { date: "Week 2", value: 30 },
  { date: "Week 3", value: 20 },
  { date: "Week 4", value: 55 },
];

const SalesAreaChart = () => {
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={sales}>
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
            dataKey="value"
            stroke="#4f8df7"
            strokeWidth={3}
            fill="url(#colorBlue)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SalesAreaChart;
