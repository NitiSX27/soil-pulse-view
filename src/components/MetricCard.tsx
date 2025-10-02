import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: LucideIcon;
  trend?: number;
  gradient?: string;
}

export const MetricCard = ({ title, value, unit, icon: Icon, trend, gradient }: MetricCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-elevated group">
      <div className={cn("h-1.5", gradient || "bg-gradient-to-r from-primary to-accent")} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className={cn("p-2 rounded-lg transition-transform duration-300 group-hover:scale-110", gradient || "bg-gradient-to-br from-primary/10 to-accent/10")}>
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{unit}</div>
        </div>
        {trend !== undefined && (
          <p className={cn("text-xs mt-2", trend > 0 ? "text-primary" : "text-destructive")}>
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% from last week
          </p>
        )}
      </CardContent>
    </Card>
  );
};
