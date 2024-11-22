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
            <model-viewer
              src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF/Box.gltf"
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              poster="poster.webp"
              shadow-intensity="1"
              auto-rotate
              camera-orbit="45deg 55deg 2.5m"
              onLoad={handleModelLoad}
              className="w-full h-full"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
                </div>
              )}
              
              <Button
                slot="ar-button"
                className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600"
                onClick={handleARClick}
              >
                Ver en AR 👀
              </Button>
            </model-viewer>
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
          Modelo 3D por Gonzalo Matzner en Sketchfab
        </footer>
      </div>
    </div>
  );
};

export default Index;