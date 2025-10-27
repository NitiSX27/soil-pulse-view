import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface SoilChartProps {
  title: string;
  data: Array<{
    date: string;
    nitrogen?: number;
    phosphorous?: number;
    potassium?: number;
    temperature?: number;
    moisture?: number;
  }>;
  dataKeys: Array<{ key: string; color: string; name: string }>;
}

export const SoilChart = ({ title, data, dataKeys }: SoilChartProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-elevated hover:scale-[1.01] rounded-2xl bg-card/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground drop-shadow-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 4" className="stroke-border/60" />
            <XAxis dataKey="date" className="text-xs font-medium" tickLine={false} axisLine={{ stroke: 'hsl(var(--border))', strokeWidth: 2 }} />
            <YAxis className="text-xs font-medium" tickLine={false} axisLine={{ stroke: 'hsl(var(--border))', strokeWidth: 2 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1.5px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "0 4px 24px 0 rgb(80 72 229 / 0.10)",
              }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontWeight: 500 }} />
            {dataKeys.map((item, idx) => (
              <Line
                key={item.key}
                type="monotone"
                dataKey={item.key}
                stroke={item.color}
                strokeWidth={3}
                name={item.name}
                dot={{ r: 4, stroke: 'white', strokeWidth: 2 }}
                activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
                isAnimationActive={true}
                animationDuration={800 + idx * 200}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
