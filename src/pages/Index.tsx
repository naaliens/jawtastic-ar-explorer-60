import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-8">
          Explorador de Mandíbula 3D
        </h1>
        
        <Card className="p-4 md:p-6 shadow-lg">
          <div className="aspect-video w-full relative bg-white rounded-lg overflow-hidden">
            <iframe 
              title="Mandible / Mandíbula"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/d012ecee2fda4f4abcabb792e92aa9ed/embed?autospin=1&autostart=1&transparent=1"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;