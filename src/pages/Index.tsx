
import { useState } from 'react';
import LandingPage from "@/components/LandingPage";
import RoutineGenerator from "@/components/RoutineGenerator";

const Index = () => {
  const [showApp, setShowApp] = useState(false);

  if (showApp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-4xl">🌙</span>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Nightflow
                </h1>
              </div>
              <p className="text-purple-200 text-lg">Crée ta routine de sommeil personnalisée</p>
            </div>

            <RoutineGenerator onBack={() => setShowApp(false)} />
          </div>
        </div>
      </div>
    );
  }

  return <LandingPage onStartApp={() => setShowApp(true)} />;
};

export default Index;
