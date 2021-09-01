import { format, parse } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: ChartData[],
}

export const Chart = ({ data }: ChartProps) => {
  const formatDate = (date: string) => {
    if (!date) {
      return date;
    }
    const parsedDate = parse(date, 'dd.MM.yyyy', new Date())
    return format(parsedDate, 'dd.LLL')
  }

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
        <XAxis
          dataKey="date"
          label={{ angle: -90 }}
          interval={6}
          tick={({ x, y, stroke, payload }) => (
            <g transform={`translate(${x},${y})`}>
              <text
                x={0}
                y={0}
                dy={16}
                textAnchor="middle"
                fill="#666"
              >{formatDate(payload.value)}</text>
            </g>
          )}
        />
        <YAxis
          yAxisId="left"
          label={{ value: 'Clicks', angle: -90, position: 'insideLeft', offset: -5 }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{ value: 'Impressions', angle: -90, position: 'insideRight', offset: -25 }}
        />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="clicks"
          stroke="#8884d8"
          dot={false}
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="impressions"
          stroke="#82ca9d"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
