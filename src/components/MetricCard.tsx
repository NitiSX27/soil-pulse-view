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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-elevated hover:scale-[1.025] group bg-card/80 backdrop-blur-sm">
      <div className={cn("h-2", gradient || "bg-gradient-to-r from-primary via-accent to-primary/80 animate-gradient-x")}/>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold text-foreground drop-shadow-sm">{title}</CardTitle>
        <div className={cn("p-3 rounded-xl transition-transform duration-300 group-hover:scale-125 shadow-md", gradient || "bg-gradient-to-br from-primary/80 to-accent/80")}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-extrabold tracking-tight text-foreground">{value}</div>
          <div className="text-base text-muted-foreground font-medium">{unit}</div>
        </div>
        {trend !== undefined && (
          <p className={cn("text-xs mt-2 font-medium", trend > 0 ? "text-primary" : "text-destructive")}>
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% from last week
          </p>
        )}
      </CardContent>
    </Card>
  );
};
