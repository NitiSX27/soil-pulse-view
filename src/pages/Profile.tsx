import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";

const Profile = () => {
  const user = {
    name: "John Farmer",
    email: "john.farmer@agritech.com",
    phone: "+1 (555) 123-4567",
    location: "Green Valley Farms, California",
    joinDate: "January 2024",
    farmSize: "50 acres",
    crops: ["Wheat", "Corn", "Soybeans"],
  };

  return (
    <Layout>
      <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-500">
        <div>
          <h1 className="text-4xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your account and farm information</p>
        </div>

        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-primary to-accent" />
          <CardContent className="relative pt-16">
            <Avatar className="absolute -top-16 left-8 h-32 w-32 border-4 border-card shadow-elevated">
              <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="ml-40">
              <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {user.crops.map((crop) => (
                  <Badge key={crop} variant="secondary" className="bg-primary/10 text-primary">
                    {crop}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="transition-all duration-300 hover:shadow-elevated">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{user.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-elevated">
            <CardHeader>
              <CardTitle>Farm Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-medium">{user.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Farm Size</p>
                  <p className="font-medium">{user.farmSize}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Growing Crops</p>
                <div className="flex flex-wrap gap-2">
                  {user.crops.map((crop) => (
                    <Badge key={crop} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                      {crop}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
