
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Volume2, Heart, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { defaultRoutines, sleepTips } from "@/utils/prompts";

interface RoutineGeneratorProps {
  onBack: () => void;
}

const RoutineGenerator = ({ onBack }: RoutineGeneratorProps) => {
  const [situation, setSituation] = useState('');
  const [routine, setRoutine] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string>('');
  const { toast } = useToast();

  const moods = [
    { id: 'stress', label: 'Stressé(e)', emoji: '😰', color: 'bg-red-500/20 text-red-300' },
    { id: 'anxiety', label: 'Anxieux(se)', emoji: '😟', color: 'bg-orange-500/20 text-orange-300' },
    { id: 'energy', label: 'Trop d\'énergie', emoji: '⚡', color: 'bg-yellow-500/20 text-yellow-300' },
    { id: 'tired', label: 'Épuisé(e)', emoji: '😴', color: 'bg-blue-500/20 text-blue-300' },
    { id: 'overthinking', label: 'Ruminations', emoji: '🤯', color: 'bg-purple-500/20 text-purple-300' },
    { id: 'calm', label: 'Déjà calme', emoji: '😌', color: 'bg-green-500/20 text-green-300' }
  ];

  const generateRoutine = async () => {
    if (!situation.trim() && !selectedMood) {
      toast({
        title: "Décris ta situation",
        description: "Sélectionne ton humeur ou décris comment tu te sens pour une routine personnalisée.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    console.log('Génération de routine pour:', { situation, mood: selectedMood });

    // Simulation d'appel API - à remplacer par vraie API OpenAI
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Utilise les routines par défaut si pas de situation spécifique
    let generatedRoutine = '';
    
    if (selectedMood && !situation.trim()) {
      generatedRoutine = defaultRoutines[selectedMood as keyof typeof defaultRoutines] || defaultRoutines.stress;
    } else {
      // Routine personnalisée basée sur la description
      generatedRoutine = `🌙 Ta routine personnalisée Nightflow

1. **Respiration apaisante** ⏱️ 4 minutes
   - Technique 4-7-8 pour calmer le système nerveux
   - Inspire 4s, retiens 7s, expire 8s

2. **Étirement libérateur** 🧘‍♀️ 6 minutes  
   - Rotation douce des épaules et du cou
   - Étirement chat-vache pour relâcher le dos

3. **Immersion sonore** 🎵 12 minutes
   - Musique binaurale 432Hz
   - Sons de pluie douce pour l'apaisement

4. **Visualisation guidée** ✨ 8 minutes
   - Voyage mental vers ton lieu de paix
   - Ancrage des sensations de sécurité

5. **Transition vers le sommeil** 🤫 5 minutes
   - Relaxation progressive de tout le corps
   - Diminution graduelle de la conscience

💜 Durée totale : 35 minutes pour un endormissement profond`;
    }

    setRoutine(generatedRoutine);
    setIsGenerating(false);
    
    toast({
      title: "Routine créée ! 🌙",
      description: "Ta routine personnalisée est prête. Doux rêves !",
    });
  };

  const startAudioGuide = () => {
    toast({
      title: "Mode audio bientôt disponible ! 🔊",
      description: "La narration vocale IA arrive dans la prochaine version.",
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Input Section */}
      <Card className="bg-white/10 border-purple-300/20 backdrop-blur-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-purple-200 text-center">
            Comment te sens-tu ce soir ? 🌙
          </h2>
          
          {/* Mood Selection */}
          <div className="mb-6">
            <p className="text-purple-300 mb-3 text-sm">Sélectionne ton humeur :</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {moods.map((mood) => (
                <Button
                  key={mood.id}
                  variant={selectedMood === mood.id ? "default" : "outline"}
                  onClick={() => setSelectedMood(selectedMood === mood.id ? '' : mood.id)}
                  className={`${mood.color} border-purple-300/30 text-sm h-auto py-2 px-3 ${
                    selectedMood === mood.id ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  <span className="mr-2">{mood.emoji}</span>
                  {mood.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Text Input */}
          <div className="mb-6">
            <p className="text-purple-300 mb-3 text-sm">Ou décris ta situation (optionnel) :</p>
            <Textarea
              placeholder="Ex: J'ai eu une journée difficile au travail, je ressens des tensions dans les épaules et j'ai du mal à arrêter de penser..."
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              className="min-h-24 bg-white/5 border-purple-300/30 text-white placeholder:text-purple-300/50 resize-none"
              rows={4}
            />
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={generateRoutine}
              disabled={isGenerating}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Création en cours...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Créer ma routine IA
                </div>
              )}
            </Button>

            {routine && (
              <Button 
                onClick={generateRoutine}
                disabled={isGenerating}
                variant="outline"
                className="border-purple-300/30 text-purple-300 hover:bg-purple-300/10"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Output Section */}
      {routine && (
        <Card className="bg-white/10 border-purple-300/20 backdrop-blur-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-purple-200">
                Ta routine personnalisée ✨
              </h2>
              <Badge variant="outline" className="border-purple-300/30 text-purple-300">
                <Clock className="h-3 w-3 mr-1" />
                Générée par IA
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-white/5 to-purple-500/5 rounded-lg p-6 border border-purple-300/20">
                <pre className="whitespace-pre-wrap text-sm text-purple-100 font-medium leading-relaxed">
                  {routine}
                </pre>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={startAudioGuide}
                  className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Écouter en mode guidé
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-purple-300/30 text-purple-300 hover:bg-purple-300/10"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Sauvegarder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips Section */}
      <Card className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border-purple-300/30 backdrop-blur-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-purple-200 mb-4">💡 Le savais-tu ?</h3>
          <p className="text-purple-300/80 text-sm">
            {sleepTips[Math.floor(Math.random() * sleepTips.length)]}
          </p>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center">
        <Button 
          variant="outline"
          onClick={onBack}
          className="border-purple-300/30 text-purple-300 hover:bg-purple-300/10"
        >
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
};

export default RoutineGenerator;
