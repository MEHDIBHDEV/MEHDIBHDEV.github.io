const site = {
  identity: {
    name: 'Mehdi BOUCHERROUR',
    role: 'Développeur Web en Alternance',
    location: 'Paris 75009',
    availability: 'À la recherche d\'une alternance (3 semaines entreprise / 1 semaine école)',
    email: 'mehdiboucherrourdev@gmail.com',
    phone: '+33 7 61 73 24 98',
    photo: '/images/mehdi.jpg',
  },
  socials: {
    github: 'https://github.com/MEHDIBHDEV',
    linkedin: 'LIEN_LINKEDIN_A_REMPLACER',
  },
  education: [
    'Mastère (Bac+4/5) - IRIS, 2024-2025, Paris',
    'BTS SIO (SLAM) - IF2I, 2023-2024',
    'Technicien Spécialisé Dév. Informatique - ISTA LAZARET, 2021-2023',
    'Baccalauréat Sciences Physiques - Oujda, 2020-2021',
  ],
  projects: [
    {
      title: 'Site vitrine - Neuilly Bureaux Services',
      role: 'Développeur Front-End (Stage 2 mois)',
      period: 'Mai 2024 - Juillet 2024',
      location: 'Neuilly-Plaisance, France',
      tech: ['PHP','JavaScript','Bootstrap'],
      description: 'Intégration front d\'un site de location de bureaux et espaces de travail.',
      demo: null,
      repo: 'https://github.com/MEHDIBHDEV/neuilly-bs',
      image: '/images/projects/neuilly.jpg',
    },
    {
      title: 'E-commerce tableaux - CEFOLUM',
      role: 'Développeur Front & Back (Stage 1 mois)',
      period: 'Mars 2023 - Avril 2023',
      location: 'Oujda, Maroc',
      tech: ['React','Node.js','MySQL','Bootstrap'],
      description: 'Site de vente de tableaux de décoration (front + back, panier/catalogue).',
      demo: 'DEMO_CEFOLUM_URL',
      repo: 'REPO_CEFOLUM_URL',
      image: '/images/projects/cefolum.jpg',
    },
  ],
  skills: {
    'Front-End': ['HTML','CSS','Bootstrap','JavaScript','TypeScript','React','Redux'],
    'Back-End': ['PHP','Laravel','Node.js','Python'],
    'Bases de données': ['SQL Server','MySQL','SQLite','MongoDB'],
    'Outils': ['Git','GitHub','GitLab','Jira','CI/CD'],
    'Méthodes': ['Agile/Scrum','Mind Mapping'],
    'Langues': ['Français (Courant)','Anglais (Intermédiaire)','Arabe (Maternelle)'],
  },
}

export default site
