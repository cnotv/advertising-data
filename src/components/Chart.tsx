import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: ChartData[],
}

export const Chart = ({data}: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"/>
        <YAxis yAxisId="left"/>
        <YAxis yAxisId="right" orientation="right"/>
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="impressions" stroke="#82ca9d" dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
}
