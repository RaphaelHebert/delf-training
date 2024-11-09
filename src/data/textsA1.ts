import { text } from '@/data/'

const textA1: text[] = [
  {
    text: 'Luc a un chien nommé Max. Chaque matin, ils vont se promener dans le parc près de chez eux.',
    questions: [
      {
        question: 'Quel est le nom du chien de Luc?',
        answers: ['Max', 'Rex', 'Leo', 'Tom'],
        correct: 'Max',
      },
      {
        question: 'Où Luc et Max vont-ils chaque matin?',
        answers: ['À la plage', 'Au parc', 'En ville', 'À la montagne'],
        correct: 'Au parc',
      },
      {
        question: 'Quand Luc et Max se promènent-ils?',
        answers: [
          'Chaque soir',
          'Chaque matin',
          'Chaque lundi',
          'Chaque week-end',
        ],
        correct: 'Chaque matin',
      },
      {
        question: 'Que font Luc et Max ensemble?',
        answers: [
          'Ils regardent la télé',
          'Ils jouent à la balle',
          'Ils vont se promener',
          'Ils cuisinent',
        ],
        correct: 'Ils vont se promener',
      },
    ],
  },
  {
    text: 'Anna et Julien sont amis depuis longtemps. Ils aiment se promener et discuter chaque week-end.',
    questions: [
      {
        question: 'Depuis combien de temps Anna et Julien sont-ils amis?',
        answers: [
          'Depuis quelques mois',
          'Depuis longtemps',
          'Depuis une semaine',
          'Depuis un an',
        ],
        correct: 'Depuis longtemps',
      },
      {
        question: "Qu'est-ce qu'Anna et Julien aiment faire ensemble?",
        answers: [
          'Faire du sport',
          'Se promener et discuter',
          'Regarder la télévision',
          'Jouer aux jeux vidéo',
        ],
        correct: 'Se promener et discuter',
      },
      {
        question: 'Quand Anna et Julien se rencontrent-ils?',
        answers: [
          'Chaque jour',
          'Chaque semaine',
          'Chaque mois',
          'Chaque année',
        ],
        correct: 'Chaque semaine',
      },
      {
        question: 'Quel est le lien entre Anna et Julien?',
        answers: [
          'Ils sont frères',
          'Ils sont amis',
          'Ils sont collègues',
          'Ils sont cousins',
        ],
        correct: 'Ils sont amis',
      },
    ],
  },
  {
    text: "Marie a un chat qui s'appelle Mimi. Elle aime jouer avec lui tous les jours après l'école.",
    questions: [
      {
        question: "Comment s'appelle le chat de Marie?",
        answers: ['Mimi', 'Minou', 'Luna', 'Mia'],
        correct: 'Mimi',
      },
      {
        question: 'Quand Marie joue-t-elle avec son chat?',
        answers: [
          'Tous les jours',
          'Seulement le week-end',
          'Le soir',
          'Jamais',
        ],
        correct: 'Tous les jours',
      },
      {
        question: 'Que fait Marie avec son chat?',
        answers: [
          'Elle joue avec lui',
          'Elle lui donne à manger',
          "Elle l'ignore",
          "Elle l'amène à l'école",
        ],
        correct: 'Elle joue avec lui',
      },
      {
        question: 'Qui a un chat?',
        answers: ['Marie', 'Luc', 'Paul', 'Léa'],
        correct: 'Marie',
      },
    ],
  },
  {
    text: 'Sophie prend le bus pour aller à son travail tous les matins. Elle travaille dans un magasin.',
    questions: [
      {
        question: 'Comment Sophie va-t-elle à son travail?',
        answers: ['En bus', 'En train', 'En voiture', 'À pied'],
        correct: 'En bus',
      },
      {
        question: 'Où travaille Sophie?',
        answers: [
          'Dans un magasin',
          'Dans une école',
          'Dans un hôpital',
          'Dans un bureau',
        ],
        correct: 'Dans un magasin',
      },
      {
        question: 'À quelle fréquence Sophie prend-elle le bus?',
        answers: [
          'Tous les matins',
          'Le soir',
          'Le week-end',
          'Une fois par semaine',
        ],
        correct: 'Tous les matins',
      },
      {
        question: 'Qui prend le bus pour aller travailler?',
        answers: ['Sophie', 'Marie', 'Paul', 'Pierre'],
        correct: 'Sophie',
      },
    ],
  },
  {
    text: 'Tom adore le sport. Il joue au football avec ses amis chaque samedi après-midi.',
    questions: [
      {
        question: 'Quel sport Tom aime-t-il?',
        answers: ['Le football', 'Le basket', 'Le tennis', 'La natation'],
        correct: 'Le football',
      },
      {
        question: 'Avec qui Tom joue-t-il au football?',
        answers: ['Ses amis', 'Sa famille', 'Ses collègues', 'Ses voisins'],
        correct: 'Ses amis',
      },
      {
        question: 'Quel jour Tom joue-t-il au football?',
        answers: ['Le samedi', 'Le dimanche', 'Le lundi', 'Le vendredi'],
        correct: 'Le samedi',
      },
      {
        question: 'Quand Tom joue-t-il au football?',
        answers: [
          'Chaque samedi après-midi',
          'Chaque matin',
          'Chaque soir',
          'Chaque dimanche',
        ],
        correct: 'Chaque samedi après-midi',
      },
    ],
  },
  {
    text: 'Lucie habite dans une petite ville près de la mer. Chaque matin, elle se promène sur la plage avec son chien Max. Ensuite, elle prend son petit-déjeuner dans un café en regardant les bateaux. Lucie adore vivre près de la mer, car elle se sent toujours calme et heureuse.',
    questions: [
      {
        question: 'Où habite Lucie?',
        answers: [
          'Près de la mer',
          'Dans une grande ville',
          'À la montagne',
          'Dans un village',
        ],
        correct: 'Près de la mer',
      },
      {
        question: 'Avec qui Lucie se promène-t-elle le matin?',
        answers: ['Son chien Max', 'Son chat', 'Ses amis', 'Son frère'],
        correct: 'Son chien Max',
      },
      {
        question: 'Où prend-elle son petit-déjeuner?',
        answers: [
          'Dans un café',
          'Chez elle',
          'Sur la plage',
          'Dans un restaurant',
        ],
        correct: 'Dans un café',
      },
      {
        question: 'Pourquoi Lucie aime-t-elle vivre près de la mer?',
        answers: [
          'Elle se sent calme',
          'Elle aime les montagnes',
          'Elle aime la mer',
          'Elle aime les bateaux',
        ],
        correct: 'Elle se sent calme',
      },
    ],
  },
  {
    text: 'Paul travaille dans un bureau en centre-ville. Il prend le métro tous les jours pour aller au travail. Le soir, après le travail, il aime faire une promenade dans le parc avant de rentrer chez lui. Parfois, il retrouve ses amis pour dîner dans un petit restaurant.',
    questions: [
      {
        question: 'Où travaille Paul?',
        answers: [
          'En centre-ville',
          'À la campagne',
          'Dans un parc',
          'Dans un café',
        ],
        correct: 'En centre-ville',
      },
      {
        question: 'Comment Paul se rend-il au travail?',
        answers: ['En métro', 'En bus', 'En voiture', 'À pied'],
        correct: 'En métro',
      },
      {
        question: 'Que fait Paul après le travail?',
        answers: [
          'Il se promène dans le parc',
          'Il va directement chez lui',
          'Il joue au football',
          'Il prend le bus',
        ],
        correct: 'Il se promène dans le parc',
      },
      {
        question: 'Avec qui Paul dîne-t-il parfois?',
        answers: ['Ses amis', 'Sa famille', 'Ses collègues', 'Ses voisins'],
        correct: 'Ses amis',
      },
    ],
  },
  {
    text: "Sarah est une étudiante en histoire. Elle passe beaucoup de temps à la bibliothèque pour préparer ses examens. Elle aime aussi visiter des musées le week-end pour en apprendre plus sur les civilisations anciennes. Son musée préféré est celui qui présente des expositions sur l'Égypte ancienne.",
    questions: [
      {
        question: "Qu'étudie Sarah?",
        answers: ["L'histoire", 'La biologie', 'La physique', 'La littérature'],
        correct: "L'histoire",
      },
      {
        question: 'Où Sarah passe-t-elle beaucoup de temps?',
        answers: [
          'À la bibliothèque',
          'À la plage',
          'Dans un parc',
          'Au cinéma',
        ],
        correct: 'À la bibliothèque',
      },
      {
        question: 'Que fait Sarah le week-end?',
        answers: [
          'Elle visite des musées',
          'Elle fait du sport',
          'Elle travaille',
          'Elle étudie chez elle',
        ],
        correct: 'Elle visite des musées',
      },
      {
        question: 'Quel est le thème du musée préféré de Sarah?',
        answers: [
          "L'Égypte ancienne",
          'La Grèce antique',
          "L'art moderne",
          'Les sciences naturelles',
        ],
        correct: "L'Égypte ancienne",
      },
    ],
  },
  {
    text: 'Tous les dimanches, Julien et sa famille vont chez leurs grands-parents. Ils passent la journée ensemble, jouent dans le jardin, et partagent un grand repas préparé par leur grand-mère. Julien aime beaucoup ces moments en famille.',
    questions: [
      {
        question: 'Où Julien et sa famille vont-ils tous les dimanches?',
        answers: [
          'Chez leurs grands-parents',
          'Au parc',
          'À la plage',
          'À la campagne',
        ],
        correct: 'Chez leurs grands-parents',
      },
      {
        question: 'Que fait la famille dans le jardin?',
        answers: ['Ils jouent', 'Ils travaillent', 'Ils dorment', 'Ils lisent'],
        correct: 'Ils jouent',
      },
      {
        question: 'Qui prépare le repas?',
        answers: ['La grand-mère', 'Julien', 'Le grand-père', 'Les parents'],
        correct: 'La grand-mère',
      },
      {
        question: 'Pourquoi Julien aime-t-il ces moments?',
        answers: [
          'Il aime être avec sa famille',
          'Il aime jouer seul',
          'Il aime faire du sport',
          'Il aime lire',
        ],
        correct: 'Il aime être avec sa famille',
      },
    ],
  },
  {
    text: 'Marie se lève tous les jours à six heures. Elle prend son petit-déjeuner avec un café et une tartine. Ensuite, elle va au travail à pied. Marie aime marcher le matin, car il fait frais et elle peut voir le lever du soleil.',
    questions: [
      {
        question: 'À quelle heure Marie se lève-t-elle?',
        answers: [
          'À six heures',
          'À sept heures',
          'À huit heures',
          'À neuf heures',
        ],
        correct: 'À six heures',
      },
      {
        question: "Qu'est-ce que Marie prend au petit-déjeuner?",
        answers: [
          'Un café et une tartine',
          'Un jus de fruit',
          'Une café et des céréales',
          'Un thé et une tartine',
        ],
        correct: 'Un café et une tartine',
      },
      {
        question: 'Comment Marie va-t-elle au travail?',
        answers: ['À pied', 'En voiture', 'En vélo', 'En bus'],
        correct: 'À pied',
      },
      {
        question: 'Pourquoi Marie aime-t-elle marcher le matin?',
        answers: [
          'Il fait frais',
          'Elle est en retard',
          'Elle aime le café',
          'Elle aime la nuit',
        ],
        correct: 'Il fait frais',
      },
    ],
  },
  {
    text: "Lucas adore le football. Tous les mercredis, il s'entraîne avec son équipe au stade près de chez lui. Son meilleur ami, Maxime, joue aussi dans la même équipe. Après l'entraînement, ils mangent une pizza ensemble.",
    questions: [
      {
        question: 'Quel sport Lucas aime-t-il?',
        answers: ['Le football', 'Le tennis', 'Le basket', 'La natation'],
        correct: 'Le football',
      },
      {
        question: "Avec qui Lucas s'entraîne-t-il?",
        answers: ['Son équipe', 'Sa famille', 'Ses voisins', 'Ses collègues'],
        correct: 'Son équipe',
      },
      {
        question: "Que fait Lucas après l'entraînement?",
        answers: [
          'Il mange une pizza',
          'Il regarde un film',
          'Il joue encore',
          'Il rentre chez lui',
        ],
        correct: 'Il mange une pizza',
      },
      {
        question: 'Qui est le meilleur ami de Lucas?',
        answers: ['Maxime', 'Paul', 'Julien', 'Thomas'],
        correct: 'Maxime',
      },
    ],
  },
  {
    text: 'Anaïs travaille dans une boulangerie. Elle commence sa journée très tôt, à cinq heures du matin. Elle prépare des pains et des croissants pour les clients. Anaïs aime son travail, car elle adore faire du pain.',
    questions: [
      {
        question: 'Où travaille Anaïs?',
        answers: [
          'Dans une boulangerie',
          'Dans un supermarché',
          'Dans un café',
          'Dans un restaurant',
        ],
        correct: 'Dans une boulangerie',
      },
      {
        question: 'À quelle heure commence-t-elle sa journée?',
        answers: [
          'À cinq heures',
          'À six heures',
          'À sept heures',
          'À huit heures',
        ],
        correct: 'À cinq heures',
      },
      {
        question: "Qu'est-ce qu'Anaïs prépare pour les clients?",
        answers: [
          'Des pains et des croissants',
          'Des gâteaux',
          'Des pizzas et du pain',
          'Des sandwichs et des croissants',
        ],
        correct: 'Des pains et des croissants',
      },
      {
        question: 'Pourquoi Anaïs aime-t-elle son travail?',
        answers: [
          'Elle adore faire du pain',
          'Elle aime cuisiner des plats',
          'Elle aime les clients',
          'Elle aime se lever très tôt',
        ],
        correct: 'Elle adore faire du pain',
      },
    ],
  },
  {
    text: "Tom a un chat qui s'appelle Minou. Minou est noir et blanc, et il adore jouer avec une balle. Chaque soir, Tom et Minou regardent la télévision ensemble sur le canapé. Minou aime aussi dormir près de Tom.",
    questions: [
      {
        question: "Comment s'appelle le chat de Tom?",
        answers: ['Minou', 'Tigrou', 'Félix', 'Grisou'],
        correct: 'Minou',
      },
      {
        question: 'Quelle est la couleur de Minou?',
        answers: ['Noir et blanc', 'Gris', 'Blanc', 'Marron et blanc'],
        correct: 'Noir et blanc',
      },
      {
        question: 'Avec quoi Minou aime-t-il jouer?',
        answers: ['Une balle', 'Une corde', 'Un coussin', 'Un carton'],
        correct: 'Une balle',
      },
      {
        question: 'Où Minou aime-t-il dormir?',
        answers: [
          'Près de Tom',
          'Dans la cuisine',
          'Sur une chaise',
          'Dans le jardin',
        ],
        correct: 'Près de Tom',
      },
    ],
  },
  {
    text: "Sophie aime lire des livres d'aventure. Tous les samedis, elle va à la bibliothèque pour emprunter de nouveaux livres. Elle peut lire un livre en une semaine. Sophie rêve de voyager comme les héros de ses livres.",
    questions: [
      {
        question: 'Quel type de livres Sophie aime-t-elle?',
        answers: ["D'aventure", "D'histoire", 'De science', 'De cuisine'],
        correct: "D'aventure",
      },
      {
        question: 'Où va Sophie chaque samedi?',
        answers: ['À la bibliothèque', 'Au supermarché', 'Au parc', 'Au musée'],
        correct: 'À la bibliothèque',
      },
      {
        question: 'Combien de temps prend Sophie pour lire un livre?',
        answers: ['Une semaine', 'Deux jours', 'Un mois', 'Un an'],
        correct: 'Une semaine',
      },
      {
        question: 'Quel est le rêve de Sophie?',
        answers: [
          'Voyager comme les héros de ses livres',
          'Devenir écrivain',
          'Travailler dans une bibliothèque',
          'Rencontrer ses amis',
        ],
        correct: 'Voyager comme les héros de ses livres',
      },
    ],
  },
  {
    text: 'Paul et sa famille habitent dans une maison avec un jardin. Paul adore jouer au ballon avec son chien Max dans le jardin. Quand il fait beau, la famille prend le déjeuner dehors, sous le grand arbre.',
    questions: [
      {
        question: 'Où habite Paul et sa famille?',
        answers: [
          'Dans une maison',
          'Dans un appartement',
          'Dans une ferme',
          'Dans une caravane',
        ],
        correct: 'Dans une maison',
      },
      {
        question: 'Avec qui Paul joue-t-il dans le jardin?',
        answers: ['Son chien Max', 'Sa sœur', 'Son ami', 'Son cousin'],
        correct: 'Son chien Max',
      },
      {
        question: 'Que fait la famille quand il fait beau?',
        answers: [
          'Elle prend le déjeuner dehors',
          'Elle regarde la télévision',
          'Elle fait du shopping',
          'Elle lit des livres',
        ],
        correct: 'Elle prend le déjeuner dehors',
      },
      {
        question: 'Où se trouve le grand arbre?',
        answers: [
          'Dans le jardin',
          'Devant la maison',
          'Dans le parc',
          'Dans la forêt',
        ],
        correct: 'Dans le jardin',
      },
    ],
  },
  {
    text: 'Emma est boulanger. Elle se lève tous les jours à quatre heures du matin pour préparer des croissants et des baguettes. Les clients adorent ses pains frais. Elle travaille dans la boulangerie de son quartier depuis cinq ans.',
    questions: [
      {
        question: "Quel est le métier d'Emma?",
        answers: ['Boulangère', 'Cuisinière', 'Caissière', 'Serveuse'],
        correct: 'Boulangère',
      },
      {
        question: 'À quelle heure Emma se lève-t-elle?',
        answers: [
          'À quatre heures',
          'À six heures',
          'À cinq heures',
          'À sept heures',
        ],
        correct: 'À quatre heures',
      },
      {
        question: 'Que prépare Emma le matin?',
        answers: [
          'Des croissants et des baguettes',
          'Des pizzas',
          'Des gâteaux',
          'Des tartes',
        ],
        correct: 'Des croissants et des baguettes',
      },
      {
        question:
          'Depuis combien de temps Emma travaille-t-elle dans la boulangerie?',
        answers: ['Cinq ans', 'Un an', 'Dix ans', 'Deux ans'],
        correct: 'Cinq ans',
      },
    ],
  },
  {
    text: "Léo adore les animaux. Il a un lapin qui s'appelle Nino et un chat nommé Mimi. Chaque soir, Léo donne des carottes à Nino et des croquettes à Mimi. Le matin, ils jouent tous ensemble dans le jardin.",
    questions: [
      {
        question: "Comment s'appelle le lapin de Léo?",
        answers: ['Nino', 'Mimi', 'Lulu', 'Max'],
        correct: 'Nino',
      },
      {
        question: 'Que donne Léo à son lapin?',
        answers: ['Des carottes', 'Des croquettes', 'Des pommes', 'Du pain'],
        correct: 'Des carottes',
      },
      {
        question: 'Quand est-ce que Léo joue avec ses animaux?',
        answers: ['Le matin', 'Le soir', "L'après-midi", 'La nuit'],
        correct: 'Le matin',
      },
      {
        question: 'Quel est le nom du chat de Léo?',
        answers: ['Mimi', 'Nino', 'Luna', 'Coco'],
        correct: 'Mimi',
      },
    ],
  },
  {
    text: 'Julie a une passion pour la peinture. Chaque dimanche, elle installe son chevalet près de la rivière. Elle aime peindre des paysages et des fleurs. Elle utilise des couleurs vives pour rendre ses tableaux plus joyeux.',
    questions: [
      {
        question: 'Quelle est la passion de Julie?',
        answers: ['La peinture', 'La danse', 'La musique', 'La lecture'],
        correct: 'La peinture',
      },
      {
        question: 'Où installe-t-elle son chevalet?',
        answers: [
          'Près de la rivière',
          'Dans le parc',
          'Dans son jardin',
          'Dans une école',
        ],
        correct: 'Près de la rivière',
      },
      {
        question: 'Que préfère-t-elle peindre?',
        answers: [
          'Des paysages et des fleurs',
          'Des animaux',
          'Des bâtiments',
          'Des portraits',
        ],
        correct: 'Des paysages et des fleurs',
      },
      {
        question: 'Pourquoi utilise-t-elle des couleurs vives?',
        answers: [
          'Pour rendre ses tableaux plus joyeux',
          'Pour les vendre',
          'Pour décorer son jardin',
          'Pour les offrir',
        ],
        correct: 'Pour rendre ses tableaux plus joyeux',
      },
    ],
  },
  {
    text: 'Marc a un potager où il cultive des légumes. Il plante des tomates, des carottes et des courgettes. Tous les matins, il arrose ses plantes. En été, il partage ses légumes avec ses voisins.',
    questions: [
      {
        question: 'Que cultive Marc dans son potager?',
        answers: ['Des légumes', 'Des fleurs', 'Des fruits', 'Des arbres'],
        correct: 'Des légumes',
      },
      {
        question: 'Quand arrose-t-il ses plantes?',
        answers: [
          'Tous les matins',
          'Tous les soirs',
          'Une fois par semaine',
          'Jamais',
        ],
        correct: 'Tous les matins',
      },
      {
        question: 'Quels légumes Marc plante-t-il?',
        answers: [
          'Tomates, carottes et courgettes',
          'Pommes et poires',
          'Salades et radis',
          'Brocolis et poivrons',
        ],
        correct: 'Tomates, carottes et courgettes',
      },
      {
        question: 'Avec qui partage-t-il ses légumes en été?',
        answers: ['Ses voisins', 'Ses collègues', 'Ses amis', 'Sa famille'],
        correct: 'Ses voisins',
      },
    ],
  },
  {
    text: "Amélie a un vélo rouge qu'elle utilise pour aller à l'école. Elle préfère le vélo à la marche parce que c'est plus rapide. Après l'école, elle fait parfois des balades dans le parc avec ses amis.",
    questions: [
      {
        question: "De quelle couleur est le vélo d'Amélie?",
        answers: ['Rouge', 'Bleu', 'Vert', 'Noir'],
        correct: 'Rouge',
      },
      {
        question: 'Pourquoi préfère-t-elle le vélo à la marche?',
        answers: [
          "Parce que c'est plus rapide",
          "Parce que c'est plus amusant",
          "Parce que c'est plus sain",
          "Parce que c'est moins fatiguant",
        ],
        correct: "Parce que c'est plus rapide",
      },
      {
        question: "Où va Amélie après l'école?",
        answers: [
          'Dans le parc',
          'À la bibliothèque',
          'Au centre commercial',
          'Chez elle',
        ],
        correct: 'Dans le parc',
      },
      {
        question: 'Avec qui fait-elle des balades?',
        answers: ['Ses amis', 'Ses cousins', 'Ses voisins', 'Sa famille'],
        correct: 'Ses amis',
      },
    ],
  },
  {
    text: 'Louis travaille dans un restaurant. Il est serveur et aime beaucoup parler avec les clients. Tous les jours, il sert des plats délicieux et fait sourire les gens avec sa bonne humeur.',
    questions: [
      {
        question: 'Quel est le métier de Louis?',
        answers: ['Serveur', 'Cuisinier', 'Directeur', 'Chauffeur'],
        correct: 'Serveur',
      },
      {
        question: 'Que fait-il tous les jours?',
        answers: [
          'Il sert des plats délicieux',
          'Il cuisine',
          'Il étudie',
          'Il fait la vaisselle',
        ],
        correct: 'Il sert des plats délicieux',
      },
      {
        question: 'Comment est Louis avec les clients?',
        answers: [
          'Il est de bonne humeur',
          'Il est silencieux',
          'Il est timide',
          'Il est triste',
        ],
        correct: 'Il est de bonne humeur',
      },
      {
        question: 'Que ressentent les clients quand ils voient Louis?',
        answers: [
          'Ils sourient',
          'Ils sont nerveux',
          'Ils sont fatigués',
          'Ils sont fâchés',
        ],
        correct: 'Ils sourient',
      },
    ],
  },
]

export default textA1
