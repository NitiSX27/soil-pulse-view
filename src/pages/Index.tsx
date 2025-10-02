import { Layout } from "@/components/Layout";
import { MetricCard } from "@/components/MetricCard";
import { SoilChart } from "@/components/SoilChart";
import { Droplets, Flame, Leaf, Wind } from "lucide-react";

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

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
          <h1 className="text-4xl font-bold mb-2">Soil Monitoring Dashboard</h1>
          <p className="text-muted-foreground">Real-time soil health metrics and analytics</p>
        </div>

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
      </div>
    </Layout>
  );
};

export default Index;
