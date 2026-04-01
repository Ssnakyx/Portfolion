export const skills = [
  { name: "Java", value: 70, className: "skill-java" },
  { name: "HTML/CSS", value: 85, className: "skill-html" },
  { name: "JavaScript", value: 70, className: "skill-js" },
  { name: "Développement de jeux", value: 55, className: "skill-game" },
  { name: "React", value: 20, className: "skill-react" },
  { name: "Gestion de serveurs", value: 40, className: "skill-server" },
]

export const tools = ["Git", "UI Design", "Résolution de problèmes", "Réseaux", "Base de données", "Intégration API"]

export const projects = [
  {
    title: "Projet Forum",
    description:
      "Un forum collaboratif pour les passionnés de montagne avec des fonctionnalités comme le partage de photos, des cartes interactives et des avis d'utilisateurs.",
    icon: "message-square",
    color: "blue",
    githubUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
    technologies: ["HTML", "CSS", "Go", "Développement Web", "Collaboration"],
    details: {
      longDescription:
        "Ce projet consiste en un forum collaboratif conçu spécifiquement pour les passionnés de montagne. Notre objectif était de créer une plateforme où les amateurs de randonnée, d'escalade et d'autres activités montagnardes peuvent partager leurs expériences, photos, conseils et avis sur différents sites.",
      date: "Octobre 2023 - Décembre 2023",
      role: "Développeur full-stack, responsable du front-end et de la base de données",
      challenges:
        "L'intégration des cartes interactives et la gestion des uploads de photos ont été particulièrement complexes. Nous avons également dû optimiser les performances pour gérer un grand nombre d'utilisateurs simultanés.",
      solutions:
        "Nous avons utilisé Go pour le backend en raison de sa performance et de sa simplicité. Pour les cartes interactives, nous avons intégré des API cartographiques et optimisé le chargement des données. Un système de cache a été mis en place pour améliorer les performances.",
      status: "Terminé",
    },
  },
  {
    title: "Hackathon B2",
    description:
      "Un projet développé lors d'un événement hackathon, démontrant un développement rapide et des compétences innovantes de résolution de problèmes.",
    icon: "code",
    color: "purple",
    githubUrl: "https://github.com/Tokennn/Hackaton-B2",
    technologies: ["Développement Rapide", "Résolution de Problèmes", "Collaboration d'Équipe", "Innovation"],
    details: {
      longDescription:
        "Ce projet a été développé dans le cadre d'un hackathon de 48 heures. Notre équipe a relevé le défi de créer une solution innovante pour améliorer la vie étudiante sur le campus. Nous avons conçu et implémenté une application qui aide les étudiants à trouver des coéquipiers pour leurs projets académiques.",
      date: "Mars 2023",
      role: "Développeur principal et chef d'équipe",
      challenges:
        "Le délai extrêmement court (48h) a imposé une pression significative. Nous avons également dû composer avec des technologies nouvelles pour certains membres de l'équipe.",
      solutions:
        "Nous avons adopté une approche agile simplifiée avec des cycles de développement très courts. La répartition efficace des tâches selon les forces de chacun a été cruciale pour notre succès.",
      status: "Terminé",
    },
  },
  {
    title: "HangMan 2023",
    description:
      "Une implémentation moderne du jeu classique du Pendu avec des graphismes améliorés et des fonctionnalités de gameplay.",
    icon: "terminal",
    color: "green",
    githubUrl: "https://github.com/Ssnakyx/HangMan-2023",
    technologies: ["Java", "JavaFX", "Développement de Jeux", "Design UI"],
    details: {
      longDescription:
        "Ce projet est une réinvention moderne du jeu classique du Pendu. J'ai développé cette application pour explorer les possibilités offertes par JavaFX tout en créant un jeu amusant et éducatif. Le jeu propose plusieurs niveaux de difficulté, un système de score, et une interface utilisateur intuitive.",
      date: "Janvier 2023 - Février 2023",
      role: "Développeur unique",
      challenges:
        "La création d'une interface utilisateur intuitive et esthétique était un défi majeur, ainsi que l'implémentation d'un algorithme efficace pour la sélection de mots selon la difficulté.",
      solutions:
        "J'ai utilisé JavaFX pour créer une interface moderne, et j'ai implémenté un système de catégories de mots avec différents niveaux de difficulté. Un système de sauvegarde des scores a également été intégré.",
      status: "Terminé",
    },
  },
  {
    title: "HangMan Web",
    description:
      "Une version web du jeu du Pendu avec une interface utilisateur responsive, permettant aux joueurs de deviner des mots via un navigateur.",
    icon: "globe",
    color: "orange",
    githubUrl: "https://github.com/Ssnakyx/HangMan_Web",
    technologies: ["HTML", "CSS", "JavaScript", "Développement Web"],
    details: {
      longDescription:
        "Suite au succès de ma version Java du jeu du Pendu, j'ai décidé de créer une version web accessible à tous via un navigateur. Cette version inclut toutes les fonctionnalités de la version originale, mais avec l'avantage d'être accessible depuis n'importe quel appareil sans installation.",
      date: "Mars 2023 - Avril 2023",
      role: "Développeur web principal",
      challenges:
        "Adapter le jeu pour les appareils mobiles tout en maintenant une expérience utilisateur cohérente a été complexe. Gérer les différentes tailles d'écran et interactions tactiles a nécessité beaucoup d'ajustements.",
      solutions:
        "J'ai utilisé des techniques de design responsive et testé sur différents appareils pour assurer la compatibilité. J'ai également implémenté un système de stockage local pour sauvegarder les scores des joueurs.",
      status: "Terminé",
    },
  },
  {
    title: "Serveur Minecraft",
    description:
      "Une implémentation personnalisée de serveur Minecraft avec des outils de configuration et des plugins pour des expériences de jeu améliorées.",
    icon: "server",
    color: "red",
    githubUrl: "https://github.com/Ssnakyx/MinecraftServer",
    technologies: ["Java", "Gestion de Serveur", "Modding de Jeux", "Réseaux"],
    details: {
      longDescription:
        "Ce projet est une suite d'outils et de plugins personnalisés pour les serveurs Minecraft. J'ai développé ces outils pour améliorer l'expérience de jeu sur les serveurs que j'administre, en ajoutant des fonctionnalités qui ne sont pas disponibles dans le jeu de base.",
      date: "Juin 2022 - Présent",
      role: "Développeur de plugins et administrateur serveur",
      challenges:
        "Optimiser les performances du serveur tout en ajoutant de nouvelles fonctionnalités a été un équilibre délicat. La compatibilité entre les différentes versions de Minecraft a également posé des problèmes.",
      solutions:
        "J'ai implémenté des techniques d'optimisation comme la mise en cache de données et le traitement asynchrone. J'ai également développé un système modulaire qui permet aux administrateurs de n'activer que les fonctionnalités dont ils ont besoin.",
      status: "En cours",
    },
  },
  {
    title: "Jeu BreakOut",
    description:
      "Une recréation du jeu d'arcade classique Breakout avec des graphismes modernes et des fonctionnalités de gameplay supplémentaires.",
    icon: "box",
    color: "yellow",
    githubUrl: "https://github.com/Ssnakyx/BreakOut_Game",
    technologies: ["Java", "Développement de Jeux", "Graphismes", "Game Design"],
    details: {
      longDescription:
        "Ce projet est une recréation moderne du jeu d'arcade classique Breakout. J'ai ajouté des graphismes améliorés, des niveaux supplémentaires, des power-ups et d'autres fonctionnalités pour enrichir l'expérience de jeu tout en restant fidèle à l'esprit du jeu original.",
      date: "Mai 2022 - Juillet 2022",
      role: "Développeur et game designer",
      challenges:
        "Implémenter une physique réaliste pour les collisions et les rebonds a été techniquement difficile. Créer des niveaux équilibrés qui soient à la fois amusants et stimulants a également demandé beaucoup d'itérations.",
      solutions:
        "J'ai utilisé des bibliothèques de physique pour gérer les collisions et développé un éditeur de niveaux pour faciliter la création et le test de nouveaux niveaux. J'ai également implémenté un système de progression qui adapte la difficulté en fonction des performances du joueur.",
      status: "Terminé",
    },
  },
  {
    title: "PokeHamed",
    description:
      "Une application sur le thème de Pokémon avec un Pokédex personnalisé, un simulateur de combat et un système de gestion de collection.",
    icon: "zap",
    color: "pink",
    githubUrl: "https://github.com/Ssnakyx/PokeHamed",
    technologies: ["Java", "Intégration API", "Base de données", "Développement de Jeux"],
    details: {
      longDescription:
        "PokeHamed est une application complète sur le thème de Pokémon que j'ai développée pour les fans de la série. Elle comprend un Pokédex détaillé avec des informations sur tous les Pokémon, un simulateur de combat qui reproduit les mécaniques de jeu, et un système permettant aux utilisateurs de gérer leur collection.",
      date: "Septembre 2022 - Décembre 2022",
      role: "Développeur principal",
      challenges:
        "Reproduire fidèlement les mécaniques complexes des combats Pokémon a été particulièrement difficile. La gestion d'une grande quantité de données pour tous les Pokémon, attaques et objets a également posé des défis techniques.",
      solutions:
        "J'ai utilisé l'API PokéAPI pour obtenir des données précises et créé un système de cache local pour améliorer les performances. Le simulateur de combat utilise un moteur de règles personnalisé qui reproduit le système de types, de statistiques et d'effets spéciaux des jeux officiels.",
      status: "Terminé",
    },
  },
  {
    title: "Site Portfolio",
    description:
      "Ce site portfolio construit avec HTML, CSS et JavaScript pour une expérience interactive et responsive.",
    icon: "layout",
    color: "teal",
    githubUrl: "https://github.com/Ssnakyx",
    technologies: ["HTML", "CSS", "JavaScript", "Design Responsive"],
    details: {
      longDescription:
        "Ce site portfolio est conçu pour présenter mes projets et compétences de manière professionnelle et interactive. J'ai créé ce site de A à Z en utilisant HTML, CSS et JavaScript, avec une attention particulière à l'expérience utilisateur, l'accessibilité et la performance.",
      date: "Février 2024 - Mars 2024",
      role: "Développeur web front-end",
      challenges:
        "Créer un design à la fois esthétique, fonctionnel et parfaitement responsive sur tous les appareils a été un défi majeur. L'implémentation d'animations fluides sans compromettre les performances a également nécessité beaucoup d'optimisations.",
      solutions:
        "J'ai adopté une approche mobile-first pour le design responsive et utilisé des techniques d'optimisation comme le lazy-loading et la minification. Les animations sont basées sur les API modernes comme IntersectionObserver pour de meilleures performances.",
      status: "En cours",
    },
  },
]
