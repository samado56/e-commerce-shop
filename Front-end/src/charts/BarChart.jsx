import { Box } from "@mui/material";
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
const months = [
  {
    month: "Jan",
    uv: 4000,
    pv: 5000,
    amt: 3000,
  },
  {
    month: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    month: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    month: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    month: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: "Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: "jul",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const TinyBarChart = () => {
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={months}>
          <XAxis
            dataKey="month"
            interval={0}
            tick={{ fill: "#888", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#4f8df7" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TinyBarChart;
