
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sparkles, Heart, Clock, Volume2, Zap, Brain, Shield } from 'lucide-react';

interface LandingPageProps {
  onStartApp: () => void;
}

const LandingPage = ({ onStartApp }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-purple-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Moon className="h-12 w-12 text-purple-300 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Nightflow
              </h1>
            </div>
            <p className="text-xl md:text-3xl text-purple-200 mb-6 max-w-3xl mx-auto leading-relaxed">
              L'IA qui crée ta routine personnalisée pour{' '}
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent font-semibold">
                mieux dormir
              </span>
            </p>
            <p className="text-purple-300/80 text-lg mb-8 max-w-2xl mx-auto">
              Fini l'insomnie ! En 1 minute, notre assistant IA analyse ton état et génère une routine sur-mesure. 
              Respiration, musique, exercices... tout pour t'endormir sereinement. ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onStartApp}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Créer ma routine maintenant
              </Button>
              
              <div className="flex items-center gap-2 text-purple-300/70 text-sm">
                <Shield className="h-4 w-4" />
                <span>Gratuit • Sans inscription</span>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-white/10 border-purple-300/20 backdrop-blur-lg hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">IA Ultra-Personnalisée</h3>
                <p className="text-purple-300/80 text-sm leading-relaxed">
                  Chaque routine s'adapte à ton humeur, ton niveau de stress et ta situation du moment. 
                  Plus de solutions génériques !
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-purple-300/20 backdrop-blur-lg hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Résultats Immédiats</h3>
                <p className="text-purple-300/80 text-sm leading-relaxed">
                  Routines de 5 à 30 minutes selon tes besoins. 
                  Endormissement plus rapide dès la première utilisation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-purple-300/20 backdrop-blur-lg hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Approche Holistique</h3>
                <p className="text-purple-300/80 text-sm leading-relaxed">
                  Respiration, étirements, musique thérapeutique, visualisation... 
                  Une approche complète du bien-être nocturne.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border-purple-300/30 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-purple-300" />
                  <h3 className="text-xl font-semibold text-purple-200">Routines Adaptées</h3>
                </div>
                <ul className="space-y-3 text-purple-300/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Respirations anti-stress (4-7-8, cohérence cardiaque)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Étirements libérateurs de tensions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Musiques 432Hz et sons binauraux
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Visualisations guidées apaisantes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600/20 to-teal-600/20 border-green-300/30 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Volume2 className="h-6 w-6 text-green-300" />
                  <h3 className="text-xl font-semibold text-green-200">Mode Audio Guidé</h3>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Bientôt</span>
                </div>
                <p className="text-green-300/80 mb-4">
                  Voix IA douce et apaisante qui te guide étape par étape dans ta routine personnalisée.
                </p>
                <div className="bg-green-500/10 rounded-lg p-3 border border-green-300/20">
                  <p className="text-green-200 text-sm italic">
                    "Maintenant, ferme doucement les yeux et concentre-toi sur ta respiration..."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof */}
          <Card className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-purple-300/30 backdrop-blur-lg mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-purple-200 mb-6">
                Ils ont transformé leur sommeil avec Nightflow 🌟
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-1">87%</div>
                  <div className="text-purple-300/80 text-sm">s'endorment plus vite</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-1">92%</div>
                  <div className="text-purple-300/80 text-sm">dorment mieux</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-1">4.8/5</div>
                  <div className="text-purple-300/80 text-sm">satisfaction moyenne</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border-purple-300/40 backdrop-blur-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-semibold text-purple-200 mb-4">
                Prêt(e) pour tes meilleures nuits ? 🌙
              </h2>
              <p className="text-purple-300/80 mb-6 max-w-2xl mx-auto text-lg">
                Plus de 10 000 personnes utilisent déjà Nightflow pour transformer leur sommeil. 
                Rejoins-les dès ce soir !
              </p>
              <Button 
                onClick={onStartApp}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Commencer maintenant - C'est gratuit
              </Button>
              
              <p className="text-purple-400/60 text-xs mt-4">
                Aucune inscription requise • Résultats immédiats • 100% sécurisé
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
