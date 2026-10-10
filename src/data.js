// Modifiez ce fichier pour mettre à jour votre portfolio.
export const profile = {
  name: 'Abdelhadi Elidrissi', initials: 'AE', location: 'Casablanca, Maroc',
  title: 'Étudiant en 5ᵉ année · EMSI',
  linkedin: 'https://www.linkedin.com/in/abdelhadi-elidrissi-55860134b/',
  github: 'https://github.com/abdelhadi-01',
  email: 'elabdolhadi@gmail.com',
  phone: '+212 766608150',
  cv: './cv.pdf',
  photo: './profile.jpg',
  about: 'Étudiant en ingénierie informatique et réseaux à l’EMSI, je développe des applications web et mobiles avec un intérêt particulier pour les bases de données. J’aime transformer un besoin métier en une application utile, de la conception des données à l’interface utilisateur.',
};
export const projects = [
  { id:'reporting', name:'AP_REPORTING', category:'Data', label:'Reporting & automatisation', repo:'Plateforme-de-reporting-de-centralisation-des-donn-es-et-d-automatisation-de-l-envoi-des-e-mails', number:'01',
    description:'Centraliser les données, générer des rapports et automatiser leur envoi par e-mail.',
    detail: 'Plateforme développée lors de mon stage de deux mois chez Attijari Payment. Elle centralise les données issues de plusieurs bases de données, exécute des requêtes SQL et automatise la génération ainsi que l’envoi de rapports par e-mail.',
    stack:['FastAPI','Python','SQLAlchemy','MySQL','Oracle'], features:['Validation et exécution de requêtes SQL','Génération et export de rapports Excel / PDF','Planification et envoi par SMTP','Authentification et gestion des utilisateurs'] },
  { id:'transito', name:'TRANSITO', category:'Mobile', label:'Transport de colis', repo:'Aplication-du-transport-',number:'02',
    description:'Mettre en relation clients et chauffeurs pour faciliter le transport de colis.',
    detail:'Application mobile de transport de colis avec création de demandes, acceptation par les chauffeurs et suivi par géolocalisation.',stack:['Spring Boot','React Native','MySQL'],features:['Demandes de transport','Mise en relation clients / chauffeurs','Suivi par géolocalisation'] },
  { id:'ahforms', name:'AH.FORMS', category:'Web', label:'Formation en ligne', repo:'Plateforme-de-gestion-de-formation-en-ligne-',number:'03',
    description:'Accompagner l’apprentissage avec des cours, des évaluations et des certifications.',
    detail:'Plateforme de formation développée en binôme. Ma contribution porte sur les évaluations, les quiz, la certification et l’intégration d’un chatbot d’assistance.',stack:['Flask','Python','MySQL','ReportLab'],features:['Quiz et évaluations','Suivi des apprenants','Génération de certificats','Chatbot d’assistance'] },
  { id:'omnishore',name:'OMNISHORE MANAGEMENT',category:'Web',label:'Gestion de projets',repo:'Platform-de-management-du-projet',number:'04',description:'Planifier les projets, affecter les tâches et suivre leur avancement.',detail:'Application de gestion de projets réalisée dans le contexte de mon stage chez Omnishore, avec suivi collaboratif du travail.',stack:['Django','Python','MySQL'],features:['Gestion des projets et des tâches','Tableaux Kanban','Rapports et calendrier collaboratif'] },
  { id:'mercedes',name:'MERCEDES PARTS',category:'Desktop',label:'Gestion commerciale',repo:'MercedesPartsManage',number:'05',description:'Gérer un catalogue de pièces détachées, les stocks et les commandes.',detail:'Application desktop de gestion commerciale de pièces Mercedes, réalisée avec Java et JavaFX.',stack:['Java','JavaFX','MySQL'],features:['Catalogue de pièces','Gestion des stocks','Commandes et facturation'] },
  { id:'salles',name:'RÉSERVATION DE SALLES',category:'Web',label:'Réservation & disponibilité',repo:'plateforme-de-reservation-des-salles-enligne',number:'06',description:'Simplifier la réservation et la gestion des salles partagées.',detail:'Projet de fin d’année de troisième année : application web pour consulter les disponibilités et gérer les réservations de salles.',stack:['Django','Python'],features:['Gestion des salles','Calendrier des disponibilités','Création, modification et annulation de réservations'] },
  { id:'bijoux',name:'LUXE BIJOUX',category:'Web',label:'E-commerce',repo:'Platedorme-de-vente-de-bijoux-enligne',number:'07',description:'Présenter des collections de bijoux dans une plateforme de vente en ligne.',detail:'Projet e-commerce de vente de bijoux en ligne développé avec Django.',stack:['Django','HTML','CSS'],features:['Catalogue de bijoux','Présentation des produits'] },
  { id:'stock',name:'STOCK & FOURNISSEURS',category:'Desktop',label:'Gestion de stock',repo:'Programme-de-gestion-du-stock-et-fournisseur',number:'08',description:'Organiser les produits, les stocks et les fournisseurs.',detail:'Programme en C consacré à la gestion des fournisseurs, des stocks et des produits.',stack:['C'],features:['Gestion des fournisseurs','Gestion des produits et des stocks'] },
];
export const experience = [
  {
    date: '2026 · 2 mois',
    company: 'Attijari Payment',
    role: 'Stage · Développement de AP_REPORTING',
    text: 'Développement d’une plateforme de reporting permettant de centraliser les données issues de plusieurs bases de données et d’automatiser la génération ainsi que l’envoi de rapports par e-mail.',
    post: 'https://lnkd.in/p/e3_F6Wik',
    organization: 'payment',
  },
  {
    date: '15 juillet — 15 août 2025',
    company: 'Omnishore — Groupe MedTech',
    role: 'Stage · Développement web',
    text: 'Développement d’une plateforme de suivi du plan de charge et d’affectation des projets, avec gestion des tâches et suivi de leur avancement.',
    post: 'https://lnkd.in/p/eub437Ju',
    organization: 'omni',
  },
  {
    date: '2024 · 1 mois',
    company: 'Ministère de la Justice',
    role: 'Stage d’observation · Cellule technique',
    text: 'Découverte des systèmes d’information, observation des outils de gestion des données et des documents, participation aux réunions techniques et assistance aux techniciens.',
    organization: 'justice',
  },
];
export const skills = [
  {name:'Interfaces & mobile',items:['React','React Native','JavaScript','HTML / CSS','Bootstrap','JavaFX']},
  {name:'Backend & API',items:['Python','Java','FastAPI','Spring Boot','Django','Flask','PHP','Symfony','.NET','C','C++']},
  {name:'Données & outils',items:['MySQL','Oracle','SQLAlchemy','Git / GitHub','Linux','SQL','Neo4j','VS Code','IntelliJ IDEA','Visual Studio','Code::Blocks']},
];
// Certifications visibles dans l’index public LinkedIn. Liens individuels non ajoutés
// lorsque leur correspondance n’a pas pu être confirmée.
export const certificates = [
  {name:'React Basics',issuer:'Coursera',date:'Décembre 2025'},
  {name:'React Native',issuer:'Coursera',date:'Décembre 2025'},
  {name:'Introduction à la programmation orientée objet (en C++)',issuer:'École polytechnique fédérale de Lausanne',date:'Février 2025'},
  {name:'The Unix Workbench',issuer:'Johns Hopkins University',date:'Janvier 2025'},
  {name:'Interactivity with JavaScript',issuer:'University of Michigan',date:'Décembre 2024'},
];

export const education = [
 {date:'2024 — 2027', name:'Cycle d’ingénieur · EMSI Casablanca', description:'Ingénierie informatique et réseaux, option MIAGE. 5ᵉ année, diplôme en préparation.'},
 {date:'2022 — 2024', name:'Années préparatoires', description:'Prépa ingénieur.'},
 {date:'2021 — 2022', name:'Lycée Al Baida · Casablanca', description:'Baccalauréat Sciences Physiques & Chimiques — Mention Bien.'},
];
export const languages = ['Arabe · langue maternelle','Français · courant','Anglais · courant'];
export const interests = ['Veille technologique & open source','Sport','Bénévolat associatif','Musique'];

// Les projets détaillés sont complétés par les autres dépôts publics.
export const repositoryDescriptions = {
 'platforme-de-menagement-de-stock':'Dépôt consacré à une plateforme de gestion de stock.',
 'portfolio':'Mon portfolio personnel développé en React.',
 'projet-JEE':'Projet Java / JEE : code et fichiers disponibles dans le dépôt.',
 'sprint01':'Dépôt Java du premier sprint.',
 'Sprint02':'Dépôt du deuxième sprint.',
 'transitweb':'Projet web en JavaScript : consultez le dépôt pour découvrir le code.',
 'vite-react':'Projet React avec Vite.',
};
