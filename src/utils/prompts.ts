
export const generateSleepRoutinePrompt = (userInput: string) => {
  return `Tu es un coach du sommeil bienveillant et expert en techniques de relaxation.

Génère une routine de sommeil personnalisée de 4-6 étapes à partir de cette situation : "${userInput}".

Instructions :
- Adapte la routine à l'état émotionnel et physique décrit
- Inclus des techniques variées : respiration, étirement, musique, visualisation, relaxation
- Donne des durées précises et réalistes
- Utilise des emojis pour rendre la routine plus engageante
- Inclus une durée totale estimée

Format de réponse :
🌙 Ta routine personnalisée Nightflow

1. **Nom de l'étape** ⏱️ X minutes
   - Description courte et claire
   - Instructions précises

2. **Nom de l'étape** ⏱️ X minutes
   - Description courte et claire
   - Instructions précises

[... continue pour 4-6 étapes]

💜 Durée totale : XX minutes pour un endormissement optimal

Adapte le ton et les techniques selon le niveau de stress/anxiété exprimé.`;
};

export const sleepTips = [
  "La respiration 4-7-8 active le système nerveux parasympathique",
  "Les fréquences 432Hz favorisent la relaxation profonde",
  "L'étirement doux libère les tensions accumulées dans la journée",
  "La visualisation positive prépare l'esprit au repos",
  "Les sons de la nature réduisent le cortisol (hormone du stress)"
];

export const defaultRoutines = {
  stress: `🌙 Routine Anti-Stress

1. **Respiration profonde** ⏱️ 5 minutes
   - Inspire lentement par le nez, expire par la bouche
   - Concentre-toi uniquement sur ton souffle

2. **Étirement du cou et épaules** ⏱️ 3 minutes
   - Rotations douces pour relâcher les tensions
   - Massage léger des tempes

3. **Musique apaisante 432Hz** ⏱️ 10 minutes
   - Allonge-toi confortablement
   - Laisse la musique t'envelopper

4. **Auto-massage des pieds** ⏱️ 5 minutes
   - Stimule les points de relaxation
   - Prépare le corps au repos

💜 Durée totale : 23 minutes`,

  energy: `🌙 Routine Retour au Calme

1. **Marche lente dans la maison** ⏱️ 3 minutes
   - Pas lents et conscients
   - Respiration naturelle

2. **Étirement complet** ⏱️ 7 minutes
   - Chat qui s'étire, torsions douces
   - Libère l'énergie résiduelle

3. **Lecture relaxante** ⏱️ 10 minutes
   - Livre apaisant ou méditation guidée
   - Lumière tamisée

4. **Tisane et gratitude** ⏱️ 5 minutes
   - Camomille ou verveine
   - Note 3 choses positives de ta journée

💜 Durée totale : 25 minutes`,

  anxiety: `🌙 Routine Anti-Anxiété

1. **Technique de grounding 5-4-3-2-1** ⏱️ 5 minutes
   - 5 choses que tu vois, 4 que tu touches, 3 que tu entends...
   - Ancrage dans le moment présent

2. **Respiration carrée** ⏱️ 5 minutes
   - Inspire 4s, retiens 4s, expire 4s, pause 4s
   - Stabilise le rythme cardiaque

3. **Auto-câlin thérapeutique** ⏱️ 3 minutes
   - Entoure-toi de tes bras
   - Libère l'ocytocine naturelle

4. **Visualisation du lieu sûr** ⏱️ 7 minutes
   - Imagine ton endroit préféré
   - Tous les détails sensoriels

💜 Durée totale : 20 minutes`
};
