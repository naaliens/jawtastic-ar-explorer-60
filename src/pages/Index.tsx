import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const handleARClick = () => {
    toast({
      title: "AR Mode",
      description: "Opening AR viewer...",
    });
  };

  const handleModelLoad = () => {
    setIsLoading(false);
  };

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
              src="https://sketchfab.com/models/55bda96b878a46978810361f2e1a72fa/embed?autospin=1&autostart=1&transparent=1"
            />
          </div>
          
          <div className="mt-6 space-y-4 text-gray-700">
            <h2 className="text-xl font-semibold">Detalles Anatómicos</h2>
            <p className="leading-relaxed">
              La mandíbula es el hueso más grande y fuerte de la cara. Este modelo 3D permite explorar su compleja anatomía,
              incluyendo el cuerpo mandibular, la rama mandibular, y los procesos coronoides y condilar.
            </p>
          </div>
        </Card>

        <footer className="text-center text-sm text-gray-500 mt-8">
          Modelo 3D por <a href="https://sketchfab.com/Anatomical3DModels" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Gonzalo Matzner</a> en <a href="https://sketchfab.com" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Sketchfab</a>
        </footer>
      </div>
    </div>
  );
};

export default Index;