import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Box } from "@mui/material";

const data = [
  { name: "Card", value: 72, fill: "#4285F4" },
  { name: "PayPal", value: 36, fill: "#34A853" },
  { name: "COD", value: 12, fill: "#FBBC05" },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PieChartRadial() {
  return (
    <Box sx={{ width: "100%", height: 300, display: "flex" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width="100%" height={300}>
          <Pie
            data={data}
            // cx={250}
            // cy={130}
            innerRadius={90}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            // label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <text
            x={"50%"}
            y={"50%"}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="40px"
            fontWeight="bold"
          >
            $120K
          </text>
          <Legend
            verticalAlign="bottom"
            formatter={(value, entry, index) =>
              `${value} (${data[index].value}%)`
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
