import { text } from '@/data/'

const textA2: text[] = [
  {
    text: "Sophie habite à Lyon depuis cinq ans. Elle adore cette ville parce qu'il y a beaucoup de parcs et de musées. Tous les samedis, elle va au marché pour acheter des légumes frais. Elle aime aussi visiter de nouveaux restaurants avec ses amis le week-end.",
    questions: [
      {
        question: 'Depuis combien de temps Sophie habite-t-elle à Lyon?',
        answers: ['Cinq ans', 'Deux ans', 'Dix ans', 'Un an'],
        correct: 'Cinq ans',
      },
      {
        question: 'Pourquoi aime-t-elle Lyon?',
        answers: [
          "Parce qu'il y a des parcs et des musées",
          "Parce qu'il y a des plages",
          'Parce que sa famille y habite',
          "Parce qu'il fait chaud",
        ],
        correct: "Parce qu'il y a des parcs et des musées",
      },
      {
        question: 'Que fait Sophie tous les samedis?',
        answers: [
          'Elle va au marché',
          'Elle visite un musée',
          'Elle va à la piscine',
          'Elle fait du sport',
        ],
        correct: 'Elle va au marché',
      },
      {
        question: 'Avec qui Sophie visite-t-elle des restaurants?',
        answers: ['Ses amis', 'Sa famille', 'Son frère', 'Son collègue'],
        correct: 'Ses amis',
      },
    ],
  },
  {
    text: 'Lucas est professeur d’anglais dans une école secondaire. Chaque matin, il prépare ses cours et organise des activités pour ses élèves. Il aime voir ses élèves progresser et réussir. Pendant les vacances, il voyage souvent en Angleterre pour améliorer son anglais.',
    questions: [
      {
        question: 'Quel est le métier de Lucas?',
        answers: [
          "Professeur d'anglais",
          'Élève',
          'Guide touristique',
          'Musicien',
        ],
        correct: "Professeur d'anglais",
      },
      {
        question: 'Que fait-il chaque matin?',
        answers: [
          'Il prépare ses cours',
          'Il part en voyage',
          'Il fait du sport',
          'Il regarde la télévision',
        ],
        correct: 'Il prépare ses cours',
      },
      {
        question: 'Pourquoi Lucas voyage-t-il en Angleterre?',
        answers: [
          'Pour améliorer son anglais',
          'Pour visiter sa famille',
          'Pour se reposer',
          'Pour faire du shopping',
        ],
        correct: 'Pour améliorer son anglais',
      },
      {
        question: 'Que ressent-il en voyant ses élèves progresser?',
        answers: [
          'Il est content',
          'Il est triste',
          'Il est inquiet',
          'Il est en colère',
        ],
        correct: 'Il est content',
      },
    ],
  },
  {
    text: "Le week-end, Emma et ses enfants vont souvent à la campagne. Ils aiment faire des promenades et observer les animaux. Parfois, ils font un pique-nique au bord d'un lac. Emma trouve que la campagne est un endroit paisible où elle peut se détendre.",
    questions: [
      {
        question: 'Que fait Emma avec ses enfants le week-end?',
        answers: [
          'Ils vont à la campagne',
          'Ils vont à la mer',
          'Ils restent à la maison',
          'Ils vont au musée',
        ],
        correct: 'Ils vont à la campagne',
      },
      {
        question: "Qu'est-ce qu'ils font parfois au bord du lac?",
        answers: ['Un pique-nique', 'Du sport', 'De la pêche', 'Des jeux'],
        correct: 'Un pique-nique',
      },
      {
        question: 'Pourquoi Emma aime-t-elle la campagne?',
        answers: [
          "Parce que c'est paisible",
          "Parce qu'il y a des magasins",
          "Parce qu'il fait chaud",
          "Parce qu'il y a des fêtes",
        ],
        correct: "Parce que c'est paisible",
      },
      {
        question: 'Que préfèrent-ils observer pendant leurs promenades?',
        answers: ['Les animaux', 'Les plantes', 'Les nuages', 'Les rivières'],
        correct: 'Les animaux',
      },
    ],
  },
  {
    text: 'Julien est passionné de photographie. Chaque dimanche, il se promène dans la ville avec son appareil photo pour capturer de beaux paysages et des scènes de rue. Il participe souvent à des expositions pour montrer son travail. Ses amis admirent beaucoup ses photos.',
    questions: [
      {
        question: 'Quelle est la passion de Julien?',
        answers: ['La photographie', 'La peinture', 'La musique', 'Le dessin'],
        correct: 'La photographie',
      },
      {
        question: 'Que fait-il chaque dimanche?',
        answers: [
          'Il se promène avec son appareil photo',
          'Il lit un livre',
          'Il va au cinéma',
          'Il visite sa famille',
        ],
        correct: 'Il se promène avec son appareil photo',
      },
      {
        question: 'Pourquoi participe-t-il à des expositions?',
        answers: [
          'Pour montrer son travail',
          'Pour acheter des photos',
          'Pour voyager',
          'Pour rencontrer ses amis',
        ],
        correct: 'Pour montrer son travail',
      },
      {
        question: 'Que pensent ses amis de ses photos?',
        answers: [
          'Ils les admirent',
          'Ils les critiquent',
          'Ils sont indifférents',
          "Ils n'aiment pas",
        ],
        correct: 'Ils les admirent',
      },
    ],
  },
  {
    text: 'Marc et Julie ont décidé de partir en vacances à la montagne cet été. Ils ont réservé une maison pour deux semaines. Chaque matin, ils font une randonnée dans les montagnes. Ils aiment l’air frais et la tranquillité de la nature. Le soir, ils cuisinent des plats traditionnels et profitent de la vue.',
    questions: [
      {
        question: 'Où Marc et Julie partent-ils en vacances?',
        answers: ['À la montagne', 'À la mer', 'À la campagne', 'En ville'],
        correct: 'À la montagne',
      },
      {
        question: 'Que font-ils chaque matin?',
        answers: [
          'Ils font une randonnée',
          'Ils font du shopping',
          'Ils vont à la piscine',
          'Ils visitent un musée',
        ],
        correct: 'Ils font une randonnée',
      },
      {
        question: 'Qu’est-ce qu’ils aiment dans la montagne?',
        answers: [
          "L'air frais et la tranquillité",
          'Les magasins',
          'Les fêtes',
          'Les restaurants',
        ],
        correct: "L'air frais et la tranquillité",
      },
      {
        question: 'Que font-ils le soir?',
        answers: [
          'Ils cuisinent et profitent de la vue',
          'Ils regardent la télévision',
          'Ils vont au cinéma',
          'Ils sortent dans un bar',
        ],
        correct: 'Ils cuisinent et profitent de la vue',
      },
    ],
  },
  {
    text: 'Lucie habite dans un petit appartement à Paris. Elle travaille comme journaliste et écrit des articles pour un grand journal. Le matin, elle prend son café sur le balcon, puis elle va au bureau à pied. Elle adore la ville et ses nombreux cafés. Le week-end, elle rencontre ses amis dans un café près de chez elle.',
    questions: [
      {
        question: 'Où Lucie habite-t-elle?',
        answers: ['À Paris', 'À Lyon', 'À Marseille', 'À Toulouse'],
        correct: 'À Paris',
      },
      {
        question: 'Quel est le métier de Lucie?',
        answers: ['Journaliste', 'Médecin', 'Professeur', 'Commerçante'],
        correct: 'Journaliste',
      },
      {
        question: 'Que fait Lucie le matin?',
        answers: [
          'Elle prend son café sur le balcon',
          'Elle fait du sport',
          'Elle lit un livre',
          'Elle regarde la télévision',
        ],
        correct: 'Elle prend son café sur le balcon',
      },
      {
        question: 'Que fait-elle le week-end?',
        answers: [
          'Elle rencontre ses amis dans un café',
          'Elle visite sa famille',
          'Elle fait du shopping',
          'Elle va au cinéma',
        ],
        correct: 'Elle rencontre ses amis dans un café',
      },
    ],
  },
  {
    text: "Le vendredi soir, Thomas et ses amis vont souvent au cinéma. Ils aiment regarder des films de science-fiction. Après le film, ils vont manger dans un restaurant asiatique. Ils aiment découvrir de nouveaux plats et discuter de ce qu'ils ont vu.",
    questions: [
      {
        question: 'Que fait Thomas le vendredi soir?',
        answers: [
          'Il va au cinéma',
          'Il travaille',
          'Il reste chez lui',
          'Il fait du sport',
        ],
        correct: 'Il va au cinéma',
      },
      {
        question: 'Quel genre de films aime-t-il regarder?',
        answers: [
          'Des films de science-fiction',
          'Des films d’horreur',
          'Des films comiques',
          'Des films dramatiques',
        ],
        correct: 'Des films de science-fiction',
      },
      {
        question: 'Que font-ils après le film?',
        answers: [
          'Ils vont manger dans un restaurant asiatique',
          'Ils rentrent chez eux',
          'Ils vont au parc',
          'Ils font du shopping',
        ],
        correct: 'Ils vont manger dans un restaurant asiatique',
      },
      {
        question: 'Que discutent-ils après le film?',
        answers: [
          "De ce qu'ils ont vu",
          'De leur travail',
          'De leurs familles',
          'De leurs vacances',
        ],
        correct: "De ce qu'ils ont vu",
      },
    ],
  },
  {
    text: 'Chloé aime beaucoup le sport. Elle pratique la natation trois fois par semaine. Le week-end, elle participe souvent à des compétitions locales. Elle adore l’esprit d’équipe et la compétition. Après chaque course, elle se repose et prend un bon repas.',
    questions: [
      {
        question: 'Quel sport pratique Chloé?',
        answers: ['La natation', 'Le tennis', 'Le football', 'Le basket'],
        correct: 'La natation',
      },
      {
        question: 'Combien de fois par semaine pratique-t-elle la natation?',
        answers: ['Trois fois', 'Deux fois', 'Quatre fois', 'Une fois'],
        correct: 'Trois fois',
      },
      {
        question: 'Que fait-elle le week-end?',
        answers: [
          'Elle participe à des compétitions locales',
          'Elle se repose',
          'Elle fait du shopping',
          'Elle va au cinéma',
        ],
        correct: 'Elle participe à des compétitions locales',
      },
      {
        question: 'Que fait-elle après chaque course?',
        answers: [
          'Elle se repose et prend un bon repas',
          'Elle va à la piscine',
          'Elle fait du sport',
          'Elle lit un livre',
        ],
        correct: 'Elle se repose et prend un bon repas',
      },
    ],
  },
  {
    text: 'Marie adore faire du jardinage. Chaque matin, elle arrose ses plantes et vérifie la santé de ses fleurs. Elle cultive aussi des légumes dans un petit potager. Ses amis lui demandent souvent des conseils pour entretenir leurs plantes.',
    questions: [
      {
        question: "Qu'est-ce que Marie aime faire?",
        answers: ['Du jardinage', 'De la cuisine', 'Du sport', 'Du dessin'],
        correct: 'Du jardinage',
      },
      {
        question: 'Que fait-elle chaque matin?',
        answers: [
          'Elle arrose ses plantes',
          'Elle regarde la télévision',
          'Elle fait du vélo',
          'Elle écrit un livre',
        ],
        correct: 'Elle arrose ses plantes',
      },
      {
        question: 'Que cultive-t-elle dans son potager?',
        answers: ['Des légumes', 'Des fleurs', 'Des fruits', 'Des herbes'],
        correct: 'Des légumes',
      },
      {
        question: 'Pourquoi ses amis lui demandent-ils des conseils?',
        answers: [
          'Pour entretenir leurs plantes',
          'Pour cuisiner',
          'Pour voyager',
          'Pour peindre',
        ],
        correct: 'Pour entretenir leurs plantes',
      },
    ],
  },
  {
    text: 'Thomas travaille dans une bibliothèque. Il adore aider les gens à trouver des livres intéressants. Tous les mardis, il organise une activité de lecture pour les enfants. Il trouve que son travail est très enrichissant.',
    questions: [
      {
        question: 'Où travaille Thomas?',
        answers: [
          'Dans une bibliothèque',
          'Dans un supermarché',
          'Dans une école',
          'Dans un restaurant',
        ],
        correct: 'Dans une bibliothèque',
      },
      {
        question: 'Que fait-il tous les mardis?',
        answers: [
          'Il organise une activité de lecture',
          'Il voyage',
          'Il fait du sport',
          'Il joue de la musique',
        ],
        correct: 'Il organise une activité de lecture',
      },
      {
        question: 'Pourquoi Thomas aime-t-il son travail?',
        answers: [
          "Parce que c'est enrichissant",
          "Parce que c'est facile",
          "Parce qu'il est seul",
          "Parce qu'il est bien payé",
        ],
        correct: "Parce que c'est enrichissant",
      },
      {
        question: "Qui participe à l'activité de lecture organisée par Thomas?",
        answers: [
          'Les enfants',
          'Les adultes',
          'Les professeurs',
          'Les bibliothécaires',
        ],
        correct: 'Les enfants',
      },
    ],
  },
  {
    text: 'Pauline et ses parents partent en vacances chaque été dans le sud de la France. Ils passent leurs journées à la plage et visitent de petits villages. Pauline aime particulièrement goûter aux spécialités locales, comme les olives et le fromage.',
    questions: [
      {
        question: 'Où Pauline et sa famille partent-ils en vacances?',
        answers: [
          'Dans le sud de la France',
          'Dans le nord',
          'À Paris',
          "À l'étranger",
        ],
        correct: 'Dans le sud de la France',
      },
      {
        question: "Qu'est-ce que Pauline aime faire pendant ses vacances?",
        answers: [
          'Goûter les spécialités locales',
          "Rester à l'hôtel",
          'Lire des livres',
          'Faire du vélo',
        ],
        correct: 'Goûter les spécialités locales',
      },
      {
        question: 'Quels aliments Pauline apprécie-t-elle particulièrement?',
        answers: [
          'Les olives et le fromage',
          'Le chocolat',
          'Les fruits exotiques',
          'Les pâtisseries',
        ],
        correct: 'Les olives et le fromage',
      },
      {
        question: 'Que visite la famille pendant les vacances?',
        answers: [
          'De petits villages',
          'De grandes villes',
          'Des musées',
          'Des montagnes',
        ],
        correct: 'De petits villages',
      },
    ],
  },
  {
    text: 'Lucie est étudiante et vit en colocation avec deux amis. Elle aime beaucoup cuisiner pour eux le week-end. Ils partagent les tâches ménagères et organisent souvent des soirées ensemble. Lucie trouve que la colocation est une belle expérience de vie.',
    questions: [
      {
        question: 'Avec qui Lucie vit-elle?',
        answers: ['Deux amis', 'Sa famille', 'Son frère', 'Sa cousine'],
        correct: 'Deux amis',
      },
      {
        question: "Qu'est-ce qu'elle aime faire le week-end?",
        answers: [
          'Cuisiner pour ses amis',
          'Étudier',
          'Aller au cinéma',
          'Faire du sport',
        ],
        correct: 'Cuisiner pour ses amis',
      },
      {
        question: 'Comment Lucie décrit-elle la colocation?',
        answers: [
          'Comme une belle expérience',
          'Comme un problème',
          'Comme une tâche difficile',
          'Comme une obligation',
        ],
        correct: 'Comme une belle expérience',
      },
      {
        question: "Qu'est-ce qu'ils organisent souvent ensemble?",
        answers: ['Des soirées', 'Des voyages', 'Des réunions', 'Des concerts'],
        correct: 'Des soirées',
      },
    ],
  },
  {
    text: 'Marie adore cuisiner des gâteaux. Tous les week-ends, elle prépare une nouvelle recette pour sa famille. Ses enfants l’aident à mélanger les ingrédients et à décorer les gâteaux. Après, ils les dégustent ensemble en famille. Leur préféré est le gâteau au chocolat.',
    questions: [
      {
        question: 'Qu’aime faire Marie?',
        answers: [
          'Cuisiner des gâteaux',
          'Faire du sport',
          'Jouer au tennis',
          'Aller au cinéma',
        ],
        correct: 'Cuisiner des gâteaux',
      },
      {
        question: 'Quand Marie prépare-t-elle des gâteaux?',
        answers: ['Le week-end', 'Le matin', 'Le lundi', 'Tous les jours'],
        correct: 'Le week-end',
      },
      {
        question: 'Qui aide Marie à préparer les gâteaux?',
        answers: ['Ses enfants', 'Son mari', 'Sa mère', 'Ses amis'],
        correct: 'Ses enfants',
      },
      {
        question: 'Quel est leur gâteau préféré?',
        answers: [
          'Le gâteau au chocolat',
          'Le gâteau aux fraises',
          'La tarte aux pommes',
          'Le gâteau au citron',
        ],
        correct: 'Le gâteau au chocolat',
      },
    ],
  },
  {
    text: 'Paul travaille dans un bureau en ville. Il prend le bus tous les matins pour se rendre au travail. Pendant sa pause déjeuner, il aime lire des livres dans un parc près de son bureau. Le soir, il rentre chez lui en métro.',
    questions: [
      {
        question: 'Où Paul travaille-t-il?',
        answers: [
          'Dans un bureau',
          'Dans un magasin',
          'Dans une école',
          'Dans un hôpital',
        ],
        correct: 'Dans un bureau',
      },
      {
        question: 'Quel moyen de transport utilise-t-il le matin?',
        answers: ['Le bus', 'Le vélo', 'La voiture', 'Le métro'],
        correct: 'Le bus',
      },
      {
        question: 'Que fait-il pendant sa pause déjeuner?',
        answers: [
          'Il lit des livres',
          'Il va au restaurant',
          'Il téléphone à ses amis',
          'Il fait du sport',
        ],
        correct: 'Il lit des livres',
      },
      {
        question: 'Comment rentre-t-il chez lui le soir?',
        answers: ['En métro', 'À pied', 'En bus', 'En voiture'],
        correct: 'En métro',
      },
    ],
  },
  {
    text: 'Sarah et son frère Antoine ont un chien nommé Max. Chaque jour après l’école, ils vont au parc pour jouer avec lui. Max aime courir après une balle et jouer dans l’herbe. Le week-end, ils partent parfois en promenade plus longue avec Max dans la forêt.',
    questions: [
      {
        question: 'Quel est le nom du chien de Sarah et Antoine?',
        answers: ['Max', 'Léo', 'Toby', 'Rocky'],
        correct: 'Max',
      },
      {
        question: 'Où vont-ils après l’école?',
        answers: [
          'Au parc',
          'À la piscine',
          'Au cinéma',
          'Au centre commercial',
        ],
        correct: 'Au parc',
      },
      {
        question: 'Que fait Max au parc?',
        answers: [
          'Il court après une balle',
          'Il dort',
          'Il chasse des oiseaux',
          'Il creuse des trous',
        ],
        correct: 'Il court après une balle',
      },
      {
        question: 'Où vont-ils avec Max le week-end?',
        answers: ['Dans la forêt', 'À la plage', 'Chez des amis', 'Au lac'],
        correct: 'Dans la forêt',
      },
    ],
  },
  {
    text: 'Chaque année, Nicolas et sa famille vont en vacances au bord de la mer. Ils passent leurs journées sur la plage à se baigner et à jouer au ballon. Le soir, ils mangent dans de petits restaurants et goûtent des plats de la région. Nicolas préfère les fruits de mer.',
    questions: [
      {
        question: 'Où Nicolas et sa famille passent-ils leurs vacances?',
        answers: [
          'Au bord de la mer',
          'À la montagne',
          'À la campagne',
          'Dans la forêt',
        ],
        correct: 'Au bord de la mer',
      },
      {
        question: 'Que font-ils pendant la journée?',
        answers: [
          'Ils se baignent et jouent au ballon',
          'Ils visitent des musées',
          'Ils font des courses',
          'Ils regardent la télévision',
        ],
        correct: 'Ils se baignent et jouent au ballon',
      },
      {
        question: 'Où mangent-ils le soir?',
        answers: [
          'Dans de petits restaurants',
          'À la maison',
          'Dans des fast-foods',
          'Dans un hôtel',
        ],
        correct: 'Dans de petits restaurants',
      },
      {
        question: 'Quel plat préfère Nicolas?',
        answers: [
          'Les fruits de mer',
          'Les pâtes',
          'Les pizzas',
          'Les hamburgers',
        ],
        correct: 'Les fruits de mer',
      },
    ],
  },
  {
    text: 'L’année dernière, Claire et ses amis sont partis en vacances en Espagne. Ils ont visité Barcelone et Madrid. Ils ont beaucoup aimé la plage et la nourriture espagnole, surtout la paella. Ils ont aussi visité des monuments célèbres comme la Sagrada Familia et le parc Güell.',
    questions: [
      {
        question: 'Où Claire et ses amis sont-ils allés en vacances?',
        answers: ['En Espagne', 'En Italie', 'En Grèce', 'Aux États-Unis'],
        correct: 'En Espagne',
      },
      {
        question: 'Qu’ont-ils aimé en Espagne?',
        answers: [
          'La plage et la nourriture',
          'Le musée du Louvre',
          'Les montagnes',
          'Le shopping',
        ],
        correct: 'La plage et la nourriture',
      },
      {
        question: 'Quel plat ont-ils aimé en particulier?',
        answers: ['La paella', 'Les pâtes', 'La pizza', 'Les sushis'],
        correct: 'La paella',
      },
      {
        question: 'Quels monuments ont-ils visités?',
        answers: [
          'La Sagrada Familia et le parc Güell',
          'Le Colisée et la Tour de Pise',
          'Le Big Ben et Buckingham Palace',
          'La Tour Eiffel et Notre-Dame',
        ],
        correct: 'La Sagrada Familia et le parc Güell',
      },
    ],
  },
  {
    text: 'Marc est allé en voyage en Afrique du Sud avec sa famille. Ils ont vu des animaux sauvages comme des lions et des éléphants dans un parc naturel. Marc a aussi visité Le Cap et a marché sur la montagne de la Table. Il a pris beaucoup de photos pendant son séjour.',
    questions: [
      {
        question: 'Où Marc est-il allé en voyage?',
        answers: ['En Afrique du Sud', 'Au Canada', 'En Australie', 'En Inde'],
        correct: 'En Afrique du Sud',
      },
      {
        question: 'Qu’ont-ils vu pendant leur voyage?',
        answers: [
          'Des animaux sauvages',
          'Des paysages urbains',
          'Des monuments historiques',
          'Des musées',
        ],
        correct: 'Des animaux sauvages',
      },
      {
        question: 'Quel animal Marc a-t-il vu dans le parc naturel?',
        answers: [
          'Des lions et des éléphants',
          'Des kangourous',
          'Des ours',
          'Des tigres',
        ],
        correct: 'Des lions et des éléphants',
      },
      {
        question: 'Qu’a-t-il visité à Le Cap?',
        answers: [
          'La montagne de la Table',
          'Le parc naturel',
          'Le zoo',
          'La plage',
        ],
        correct: 'La montagne de la Table',
      },
    ],
  },
  {
    text: 'Anna et son mari ont voyagé à Rome pour leurs vacances. Ils ont visité des monuments célèbres comme le Colisée, le Forum romain et la Fontaine de Trevi. Ils ont également goûté des spécialités italiennes, comme les pâtes et la glace. Anna adore l’Italie!',
    questions: [
      {
        question: 'Où Anna et son mari ont-ils voyagé?',
        answers: ['À Rome', 'À Paris', 'À Madrid', 'À Berlin'],
        correct: 'À Rome',
      },
      {
        question: 'Quels monuments ont-ils visités?',
        answers: [
          'Le Colisée, le Forum romain et la Fontaine de Trevi',
          'La Tour Eiffel et Notre-Dame',
          'Le Big Ben et la Cathédrale Saint-Paul',
          'La Sagrada Familia et le parc Güell',
        ],
        correct: 'Le Colisée, le Forum romain et la Fontaine de Trevi',
      },
      {
        question: 'Quelles spécialités italiennes ont-ils goûtées?',
        answers: [
          'Les pâtes et la glace',
          'Les crêpes et le fromage',
          'Les pizzas et les pâtes',
          'Les sushis et les ramen',
        ],
        correct: 'Les pâtes et la glace',
      },
      {
        question: 'Quel pays Anna adore-t-elle?',
        answers: ['L’Italie', 'La France', 'L’Espagne', 'Le Japon'],
        correct: 'L’Italie',
      },
    ],
  },
  {
    text: 'Pierre a voyagé en Asie l’année dernière. Il a visité la Chine, le Japon et la Thaïlande. Il a découvert des cultures très différentes et a beaucoup aimé la cuisine asiatique. En Chine, il a vu la Grande Muraille, et au Japon, il a visité Tokyo et Kyoto. Pierre souhaite retourner en Asie un jour.',
    questions: [
      {
        question: 'Où Pierre a-t-il voyagé?',
        answers: ['En Asie', 'En Europe', 'En Afrique', 'En Amérique'],
        correct: 'En Asie',
      },
      {
        question: 'Quels pays Pierre a-t-il visités?',
        answers: [
          'La Chine, le Japon et la Thaïlande',
          'L’Italie, l’Espagne et la France',
          'Les États-Unis, le Canada et le Mexique',
          'L’Allemagne, l’Autriche et la Suisse',
        ],
        correct: 'La Chine, le Japon et la Thaïlande',
      },
      {
        question: 'Quel monument a-t-il vu en Chine?',
        answers: [
          'La Grande Muraille',
          'La Tour Eiffel',
          'Le Colisée',
          'Le Taj Mahal',
        ],
        correct: 'La Grande Muraille',
      },
      {
        question: 'Quelles villes Pierre a-t-il visitées au Japon?',
        answers: [
          'Tokyo et Kyoto',
          'Osaka et Kobe',
          'Hiroshima et Nara',
          'Beijing et Shanghai',
        ],
        correct: 'Tokyo et Kyoto',
      },
    ],
  },
  {
    text: "Sophie et Paul vont au restaurant pour célébrer l'anniversaire de Sophie. Ils choisissent un restaurant italien. Sophie prend des pâtes à la bolognaise et Paul choisit une pizza margherita. En dessert, Sophie prend une glace à la vanille et Paul choisit un tiramisu. Ils sont très contents de leur repas.",
    questions: [
      {
        question: 'Pourquoi Sophie et Paul vont-ils au restaurant?',
        answers: [
          "Pour célébrer l'anniversaire de Sophie",
          'Pour rencontrer des amis',
          "Pour un déjeuner d'affaires",
          'Pour fêter Noël',
        ],
        correct: "Pour célébrer l'anniversaire de Sophie",
      },
      {
        question: 'Quel plat Sophie a-t-elle choisi?',
        answers: [
          'Des pâtes à la bolognaise',
          'Une pizza margherita',
          'Un steak frites',
          'Un croissant',
        ],
        correct: 'Des pâtes à la bolognaise',
      },
      {
        question: 'Quel dessert Paul a-t-il choisi?',
        answers: [
          'Un tiramisu',
          'Une tarte au citron',
          'Une crème brûlée',
          'Un gâteau au chocolat',
        ],
        correct: 'Un tiramisu',
      },
      {
        question: 'Comment se sentent-ils après le repas?',
        answers: [
          'Ils sont très contents',
          'Ils sont fatigués',
          'Ils sont déçus',
          'Ils sont pressés de partir',
        ],
        correct: 'Ils sont très contents',
      },
    ],
  },
  {
    text: "Marc et Claire sont allés dans un restaurant français. Marc a commandé une soupe à l'oignon et un canard rôti avec des légumes. Claire a choisi une salade de chèvre chaud et un saumon grillé. Ils ont bu un verre de vin rouge et un café pour terminer. Ils ont beaucoup aimé la cuisine française.",
    questions: [
      {
        question: 'Quel plat Marc a-t-il commandé?',
        answers: [
          "Une soupe à l'oignon et du canard rôti",
          'Une pizza margherita',
          'Un hamburger',
          'Un curry',
        ],
        correct: "Une soupe à l'oignon et du canard rôti",
      },
      {
        question: 'Que Claire a-t-elle choisi comme plat principal?',
        answers: [
          'Un saumon grillé',
          'Des pâtes',
          'Un steak frites',
          'Une pizza',
        ],
        correct: 'Un saumon grillé',
      },
      {
        question: "Qu'ont-ils bu pendant le repas?",
        answers: [
          'Un verre de vin rouge et un café',
          "De l'eau et du thé",
          'Du jus de fruit et du soda',
          'Du vin blanc et du champagne',
        ],
        correct: 'Un verre de vin rouge et un café',
      },
      {
        question: 'Quel type de cuisine ont-ils mangé?',
        answers: [
          'De la cuisine française',
          'De la cuisine italienne',
          'De la cuisine asiatique',
          'De la cuisine américaine',
        ],
        correct: 'De la cuisine française',
      },
    ],
  },
  {
    text: "Au restaurant, le serveur a apporté le menu. Il y avait des entrées comme des salades et des soupes, des plats principaux comme du poulet rôti et du poisson grillé, et des desserts comme des crêpes et des fruits frais. Pour les boissons, il y avait des sodas, de l'eau minérale, et du vin. Le prix des plats est indiqué sur le menu.",
    questions: [
      {
        question: 'Quels types de plats y a-t-il sur le menu?',
        answers: [
          'Des entrées, des plats principaux et des desserts',
          'Des pizzas et des pâtes',
          'Des hamburgers et des frites',
          'Des sushis et des tempuras',
        ],
        correct: 'Des entrées, des plats principaux et des desserts',
      },
      {
        question: 'Quel dessert est mentionné dans le texte?',
        answers: [
          'Des crêpes et des fruits frais',
          'Un gâteau au chocolat',
          'Une mousse au chocolat',
          'Des éclairs au chocolat',
        ],
        correct: 'Des crêpes et des fruits frais',
      },
      {
        question: 'Quelles boissons sont proposées?',
        answers: [
          "Des sodas, de l'eau minérale et du vin",
          'Du thé et du café',
          'Des jus de fruits et des smoothies',
          'Du lait et du chocolat chaud',
        ],
        correct: "Des sodas, de l'eau minérale et du vin",
      },
      {
        question: 'Comment sont indiqués les prix des plats?',
        answers: [
          'Sur le menu',
          'Sur la carte des vins',
          "Sur la porte d'entrée",
          "Sur l'ardoise à l'extérieur",
        ],
        correct: 'Sur le menu',
      },
    ],
  },
  {
    text: 'Emilie et son mari sont allés dans un restaurant végétarien. Ils ont choisi des plats sans viande. Emilie a pris un burger végétarien avec des frites, et son mari a pris une salade de quinoa avec des légumes grillés. Ils ont trouvé tout très délicieux et ont décidé de revenir la semaine prochaine.',
    questions: [
      {
        question: 'Quel type de restaurant Emilie et son mari ont-ils choisi?',
        answers: [
          'Un restaurant végétarien',
          'Un restaurant italien',
          'Un restaurant asiatique',
          'Un restaurant de fruits de mer',
        ],
        correct: 'Un restaurant végétarien',
      },
      {
        question: "Qu'est-ce qu'Emilie a pris comme plat?",
        answers: [
          'Un burger végétarien avec des frites',
          'Une pizza végétarienne',
          'Un plat de pâtes',
          'Une salade de fruits',
        ],
        correct: 'Un burger végétarien avec des frites',
      },
      {
        question: 'Quel plat son mari a-t-il choisi?',
        answers: [
          'Une salade de quinoa avec des légumes grillés',
          'Un steak frites',
          'Une soupe de légumes',
          'Un hamburger avec des frites',
        ],
        correct: 'Une salade de quinoa avec des légumes grillés',
      },
      {
        question: "Qu'ont-ils décidé de faire après leur repas?",
        answers: [
          'Revenir la semaine prochaine',
          'Essayer un autre restaurant',
          'Partir en vacances',
          'Prendre un dessert',
        ],
        correct: 'Revenir la semaine prochaine',
      },
    ],
  },
  // manually verified until here
]

export default textA2
