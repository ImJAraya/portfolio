export const siteData = {
  seo: {
    title: 'Jose Fabian Araya Montero | Full-Stack Developer',
    description:
      'Portfolio de Jose Fabian Araya Montero, Full-Stack Developer enfocado en React, JavaScript, Python y diseño de APIs escalables.',
    url: 'https://portfolio-jafm.netlify.app',
    image: 'https://portfolio-jafm.netlify.app/og-cover.svg',
    locale: 'es_CR'
  },
  person: {
    name: 'Jose Fabian Araya Montero',
    role: 'Desarrollador de Software Full-Stack',
    location: 'Cartago, Costa Rica',
    email: 'arayafabian99@gmail.com',
    github: 'https://github.com/ImJAraya',
    linkedin: 'https://www.linkedin.com/in/jarayam/',
    cvUrl: 'https://flowcv.com/resume/ubt9wc60niun',
    summary:
      'Desarrollador Web Full-Stack orientado a resultados, con experiencia en producción, control de calidad y construcción de productos web escalables con enfoque en usabilidad y rendimiento.'
  },
  hero: {
    badge: 'Disponible para oportunidades Full-Stack',
    headline: 'Construyo productos web claros, rápidos y listos para crecer.',
    subheadline:
      'Trabajo con JavaScript, React, Python y SQL para llevar ideas desde el prototipo hasta una entrega confiable en producción.'
  },
  about: {
    paragraphs: [
      'Tengo una base técnica sólida en frontend y backend: React, TypeScript, Flask, SQLAlchemy, diseño de APIs REST e integración de servicios externos.',
      'Además de mi experiencia técnica, he trabajado en entornos operativos donde la precisión, la comunicación y la coordinación entre equipos son críticas. Ese enfoque hoy lo aplico en desarrollo de software.'
    ]
  },
  experience: [
    {
      role: 'Web Developer',
      company: 'Programa Trainit',
      period: 'Julio 2025 - Actualidad',
      location: 'Remoto',
      type: 'tech',
      highlights: [
        'Diseño y desarrollo de componentes reutilizables con Next.js, React y TypeScript aplicando Tailwind CSS.',
        'Trabajo colaborativo en GitHub con branching, revisión de pull requests y resolución de issues.',
        'Participación en ciclos Scrum/Kanban con liderazgo rotativo, priorización y entrega continua.',
        'Implementación de pruebas unitarias y documentación técnica para mejorar mantenibilidad.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Freelance',
      period: '2025 - Actualidad',
      location: 'Costa Rica',
      type: 'tech',
      highlights: [
        'Desarrollo de aplicaciones web optimizadas con foco en experiencia de usuario y rendimiento.',
        'Gestión de versionado y calidad de código con Git y GitHub en ciclos iterativos de mejora.',
        'Traducción de requerimientos técnicos en soluciones claras para clientes de distintos rubros.',
        'Entrega end-to-end de proyectos educativos con React, Vite, Node.js y despliegue en Netlify.'
      ]
    },
    {
      role: 'Handler Material',
      company: 'Baxter Healthcare Corporation',
      period: 'Mayo 2023 - Febrero 2025',
      location: 'Cartago, Costa Rica',
      type: 'transferable',
      highlights: [
        'Análisis de planificación diaria e inventario para asegurar continuidad operativa bajo presión.',
        'Coordinación multidisciplinaria entre producción, logística y calidad con enfoque en resultados.',
        'Ejecución de procesos críticos con trazabilidad, control y reducción de interrupciones.'
      ]
    }
  ],
  projects: [
    {
      name: 'Equilibria',
      subtitle: 'App Full-Stack de bienestar emocional',
      problem:
        'Usuarios sin una herramienta simple para registrar emociones y recibir recomendaciones personalizadas en tiempo real.',
      solution:
        'Desarrollo de frontend en React y backend en Flask con API REST, autenticación JWT y persistencia con SQLAlchemy/PostgreSQL.',
      impact:
        'Plataforma funcional con dashboard seguro, flujos de autenticación y recomendaciones dinámicas integradas con OpenAI.',
      stack: ['React', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'OpenAI API'],
      repoUrl: 'https://github.com/ImJAraya/Equilibria',
      featured: true,
      priority: 1
    },
    {
      name: 'Elevate Dev Group',
      subtitle: 'Landing corporativa en Astro',
      problem:
        'Necesidad de una presencia web profesional, rápida y orientada a conversión para servicios digitales.',
      solution:
        'Implementación de landing estática con Astro 5 y Tailwind, arquitectura de componentes y configuración SEO base.',
      impact:
        'Sitio ligero, mantenible y listo para despliegue estático con robots/sitemap y estructura semántica clara.',
      stack: ['Astro 5', 'Tailwind CSS', 'Netlify', 'SEO técnico'],
      repoUrl: 'https://github.com/ImJAraya/Elevate-Dev-Group',
      demoUrl: 'https://elevategroup.netlify.app/',
      featured: true,
      priority: 2
    },
    {
      name: 'Recursos Ciencias',
      subtitle: 'Página de recursos del profesor',
      problem:
        'Docentes y estudiantes requerían centralizar material, prácticas y playlists educativas en un solo flujo web.',
      solution:
        'Aplicación React + Vite con rutas por sección, consumo de playlist mediante Netlify Functions y proxy seguro a YouTube API.',
      impact:
        'Experiencia unificada de contenido educativo con arquitectura preparada para iterar y ampliar módulos por materia.',
      stack: ['React', 'Vite', 'React Router', 'Netlify Functions', 'YouTube Data API'],
      repoUrl: 'https://github.com/ImJAraya/Pag_profesor_ciencias',
      demoUrl: 'https://recursosciencias.netlify.app/',
      featured: true,
      priority: 3
    },
    {
      name: 'Aprendamos Juntos CR',
      subtitle: 'Landing para lecciones privadas bimodales',
      problem:
        'Se requería una página clara y de alta conversión para captar estudiantes en modalidad presencial y virtual.',
      solution:
        'Desarrollo con Astro 5 y enfoque mobile-first, centralizando contenido del negocio para facilitar mantenimiento y actualización.',
      impact:
        'Landing rápida y optimizada para despliegue estático en Netlify con estructura SEO base y navegación directa a recursos clave.',
      stack: ['Astro 5', 'HTML5', 'CSS3', 'Mobile-first', 'Netlify', 'SEO técnico'],
      repoUrl: 'https://github.com/ImJAraya/Aprendamosjuntoscr',
      demoUrl: 'https://aprendamosjuntoscr.netlify.app/',
      featured: true,
      priority: 4
    }
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      items: ['Python', 'Flask', 'APIs REST', 'SQLAlchemy', 'Flask-Migrate', 'Alembic', 'JWT', 'PostgreSQL']
    },
    {
      title: 'Prácticas y herramientas',
      items: ['Git', 'GitHub', 'Scrum', 'Kanban', 'OpenAI API', 'PayPal API', 'Netlify']
    }
  ],
  education: [
    {
      title: 'Desarrollo de Software Full-Stack',
      institution: '4Geeks Academy',
      period: 'Mayo 2025',
      link: 'https://certificate.4geeks.com/52c32dfcbf27cb89366d1c2ba9d609367fc8d543'
    },
    {
      title: 'Informática Empresarial (en pausa)',
      institution: 'Universidad de Costa Rica (UCR)',
      period: '2024'
    }
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B1' }
  ]
};
