import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

function DoughnutChart({ data, dataKey }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          blendStroke
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={36}
          outerRadius={80}
          fill="#8884d8"
          dataKey={dataKey}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DoughnutChart;
