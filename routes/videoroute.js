const fs = require('fs');
var express = require("express");
const session = require('express-session');
var router = express.Router();

router.use(session({
    secret: 'écoclima', 
    resave: false,
    saveUninitialized: true,
  }));
  
  
  router.get('/Changementclimatique', async (req, res) => {
    const changementClimatiqueList = [
        "Réchauffement progressif de la planète due aux activités humaines",
        "Émissions massives de gaz à effet de serre provenant de l'industrie",
        "Impacts profonds sur la biodiversité et les écosystèmes fragiles",
        "Changements climatiques mondiaux affectant toutes les régions de la Terre",
        "Importance cruciale de la transition vers les énergies renouvelables",
        "Protocole de Kyoto visant à réduire les émissions de gaz à effet de serre",
        "Accord de Paris pour limiter le réchauffement climatique en dessous de 2 degrés Celsius",
        "Nécessité d'adaptation aux changements climatiques pour minimiser les impacts négatifs",
        "Atténuation des émissions de CO2 et autres polluants atmosphériques",
        "Montée progressive du niveau de la mer menaçant les zones côtières",
        "Phénomènes météorologiques extrêmes tels que tempêtes, ouragans et inondations",
        "Déforestation massive contribuant à la perte de la biodiversité",
        "Promotion de la durabilité environnementale pour préserver les ressources",
        "Responsabilité climatique partagée à l'échelle mondiale",
        "Effet de serre amplifiant les changements climatiques",
        "Conséquences sur les ressources hydriques et stress hydrique",
        "Transition énergétique vers des sources propres et renouvelables",
        "Écologie globale intégrant les interactions complexes des écosystèmes",
        "Sensibilisation climatique pour encourager des comportements respectueux de l'environnement",
        "Épuisement des ressources naturelles menant à des déséquilibres écologiques",
        "Consommation durable comme solution pour réduire l'impact sur l'environnement",
        "Réduction de l'empreinte carbone par des choix éco-responsables",
        "Politiques environnementales visant à réguler les activités polluantes",
        "Éducation environnementale pour former une société consciente des enjeux climatiques",
        "Gestion des déchets pour réduire la pollution et favoriser le recyclage",
        "Changements profonds dans les écosystèmes avec des implications à long terme",
        "Innovation verte comme moteur de solutions durables",
        "Éco-responsabilité individuelle et collective pour un avenir plus durable",
        "Recherche climatique cruciale pour comprendre les dynamiques du changement",
        "Mesures concertées pour lutter contre le changement climatique à l'échelle mondiale",
        "Réduction de la pollution atmosphérique comme impératif pour la santé planétaire",
        "Gestion des risques climatiques nécessitant une planification proactive",
        "Conséquences économiques du changement climatique avec des répercussions sur les industries",
      ];
      const clima$$ = changementClimatiqueList.toString();

      for (let i = 1; i <= 10; i++) {
        const min = Math.ceil(1);
        const max = Math.floor(100);
        const r = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        const climafile = `réchauffementclimatique${r}_${i}.txt`; 
        const clima$$ = changementClimatiqueList+"".replace("","");

      
        
        fs.writeFile(climafile, clima$$, (err) => {
          if (err) {
            console.error('Error writing to file:', err);
          } else {
            console.log(`Text array has been written to ${climafile}`);
          }
        });
      }
      
req.session.storedValue = "True";
const storedValue = req.session.storedValue || 'No value set';
res.json({ value: storedValue });

  });
  module.exports= router;
  


  