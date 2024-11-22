import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [currentModel, setCurrentModel] = useState("mandible");

  const handleVRClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    
    if (isIOS) {
      window.location.href = "https://sketchfab.com/models/6cbe72f8e0fe4e9a9321fc6f81b2e46d/embed-ar";
    } else {
      toast({
        title: "Dispositivo no compatible",
        description: "La visualización en VR solo está disponible para dispositivos iOS.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-8">
          Explorador de Mandíbula 3D
        </h1>
        
        <div className="flex justify-center gap-4 mb-6">
          <Button
            variant={currentModel === "mandible" ? "default" : "outline"}
            className="rounded-full px-6 shadow-lg"
            onClick={() => setCurrentModel("mandible")}
          >
            Mandíbula
          </Button>
          <Button
            variant={currentModel === "nerve" ? "default" : "outline"}
            className="rounded-full px-6 shadow-lg"
            onClick={() => setCurrentModel("nerve")}
          >
            Nervio
          </Button>
        </div>
        
        <Card className="p-4 md:p-6 shadow-lg">
          <div className="aspect-video w-full relative bg-white rounded-lg overflow-hidden">
            {currentModel === "mandible" ? (
              <iframe 
                title="Mandible / Mandíbula"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/d012ecee2fda4f4abcabb792e92aa9ed/embed?autospin=1&autostart=1&transparent=1"
              />
            ) : (
              <div className="relative">
                <iframe 
                  title="Nerve Content"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/6cbe72f8e0fe4e9a9321fc6f81b2e46d/embed?autospin=1&autostart=1&transparent=1"
                />
                <Button
                  className="absolute bottom-4 right-4 rounded-full px-6 bg-black/80 hover:bg-black/90 text-white shadow-lg backdrop-blur-sm"
                  onClick={handleVRClick}
                >
                  Visualizar en realidad virtual 👀
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;