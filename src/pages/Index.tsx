import { Layout } from "@/components/Layout";
import { MetricCard } from "@/components/MetricCard";
import { SoilChart } from "@/components/SoilChart";
import { Droplets, Flame, Leaf, Wind } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for demonstration
const currentMetrics = {
  nitrogen: 45,
  phosphorous: 32,
  potassium: 28,
  temperature: 24,
  moisture: 68,
};

const weeklyData = [
  { date: "Mon", nitrogen: 42, phosphorous: 30, potassium: 26, temperature: 22, moisture: 65 },
  { date: "Tue", nitrogen: 43, phosphorous: 31, potassium: 27, temperature: 23, moisture: 66 },
  { date: "Wed", nitrogen: 44, phosphorous: 31, potassium: 27, temperature: 23, moisture: 67 },
  { date: "Thu", nitrogen: 44, phosphorous: 32, potassium: 28, temperature: 24, moisture: 68 },
  { date: "Fri", nitrogen: 45, phosphorous: 32, potassium: 28, temperature: 24, moisture: 68 },
  { date: "Sat", nitrogen: 45, phosphorous: 32, potassium: 28, temperature: 25, moisture: 69 },
  { date: "Sun", nitrogen: 45, phosphorous: 32, potassium: 28, temperature: 24, moisture: 68 },
];

// ✅ Nutrient Pie Chart Data
const nutrientBalance = [
  { name: "Nitrogen", value: currentMetrics.nitrogen },
  { name: "Phosphorous", value: currentMetrics.phosphorous },
  { name: "Potassium", value: currentMetrics.potassium },
];

const COLORS = ["#4ade80", "#60a5fa", "#facc15"];

// ✅ Weather Forecast Data
const forecast = [
  { day: "Mon", temp: 25, rain: "10%" },
  { day: "Tue", temp: 24, rain: "20%" },
  { day: "Wed", temp: 23, rain: "15%" },
];

// ✅ Alerts
const alerts: string[] = [];
if (currentMetrics.nitrogen < 40) alerts.push("Low Nitrogen - Consider fertilization");
if (currentMetrics.moisture < 50) alerts.push("Low Moisture - Irrigation recommended");

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Title */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Soil Monitoring Dashboard</h1>
          <p className="text-muted-foreground">Real-time soil health metrics and analytics</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <MetricCard
            title="Nitrogen (N)"
            value={currentMetrics.nitrogen}
            unit="ppm"
            icon={Leaf}
            trend={7.1}
            gradient="bg-gradient-to-r from-primary to-primary/70"
          />
          <MetricCard
            title="Phosphorous (P)"
            value={currentMetrics.phosphorous}
            unit="ppm"
            icon={Wind}
            trend={6.7}
            gradient="bg-gradient-to-r from-accent to-accent/70"
          />
          <MetricCard
            title="Potassium (K)"
            value={currentMetrics.potassium}
            unit="ppm"
            icon={Leaf}
            trend={7.7}
            gradient="bg-gradient-to-r from-primary to-accent"
          />
          <MetricCard
            title="Temperature"
            value={currentMetrics.temperature}
            unit="°C"
            icon={Flame}
            trend={9.1}
            gradient="bg-gradient-to-r from-orange-500 to-red-500"
          />
          <MetricCard
            title="Moisture"
            value={currentMetrics.moisture}
            unit="%"
            icon={Droplets}
            trend={4.6}
            gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SoilChart
            title="NPK Levels (Weekly Trend)"
            data={weeklyData}
            dataKeys={[
              { key: "nitrogen", color: "hsl(142 76% 36%)", name: "Nitrogen" },
              { key: "phosphorous", color: "hsl(199 89% 48%)", name: "Phosphorous" },
              { key: "potassium", color: "hsl(142 86% 46%)", name: "Potassium" },
            ]}
          />
          <SoilChart
            title="Environmental Conditions"
            data={weeklyData}
            dataKeys={[
              { key: "temperature", color: "hsl(25 95% 53%)", name: "Temperature (°C)" },
              { key: "moisture", color: "hsl(199 89% 48%)", name: "Moisture (%)" },
            ]}
          />
        </div>

        {/* Additional Charts & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Soil pH Trend */}
          <SoilChart
            title="Soil pH Levels"
            data={weeklyData.map((d, i) => ({ ...d, ph: 6.2 + i * 0.05 }))}
            dataKeys={[
              { key: "ph", color: "hsl(280 65% 50%)", name: "pH" },
            ]}
          />

          {/* Nutrient Balance Pie */}
          <div className="bg-card rounded-xl p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Nutrient Balance</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={nutrientBalance}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {nutrientBalance.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weather Forecast */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Weather Forecast</h2>
          <div className="grid grid-cols-3 gap-4">
            {forecast.map((f) => (
              <div
                key={f.day}
                className="bg-card rounded-xl p-4 text-center shadow-md"
              >
                <h3 className="font-bold">{f.day}</h3>
                <p>{f.temp}°C</p>
                <p className="text-sm text-muted-foreground">Rain: {f.rain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg space-y-2">
          <h2 className="font-semibold text-red-700">⚠ Alerts</h2>
          {alerts.length ? (
            alerts.map((a, i) => <p key={i}>• {a}</p>)
          ) : (
            <p>All conditions normal ✅</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
