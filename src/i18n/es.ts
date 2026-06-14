import type { Translation } from './types';

export const es = {
  a11y: {
    skipToContent: 'Saltar al contenido principal',
  },

  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    expertise: 'Especialidad',
    skills: 'Habilidades',
    contact: 'Contacto',
  },

  hero: {
    title: 'Ingeniero Frontend Senior',
    locationTag: 'Madrid, España',
    availabilityTag: 'Disponible para Remoto',
    headline:
      'Construyendo sistemas frontend escalables para productos que necesitan crecer rápido y de forma sostenida.',
    subtitle:
      'Ingeniero Frontend Senior especializado en React, React Native, Next.js y desarrollo asistido por IA.',
    specialization:
      'ARQUITECTURA FRONTEND • DESARROLLO ASISTIDO POR IA • CI/CD • SISTEMAS DE DISEÑO',
    badges: [
      '8+ Años de Experiencia',
      'Madrid, España',
      'Disponible para Remoto',
      'App Store y Google Play',
      'Experto en React Native y Next.js',
    ],
    downloadResume: 'Descargar CV',
    contactMe: 'Contáctame',
    viewExperience: 'Ver Experiencia',
  },

  impact: {
    metrics: [
      { value: '8+', label: 'Años de Experiencia' },
      { value: '5+', label: 'Productos Construidos desde Cero' },
      { value: 'Europa y LATAM', label: 'Internacional' },
      { value: 'App Store y Google Play', label: 'Publicado' },
      { value: 'Desarrollo Asistido por IA', label: 'Flujos de Trabajo Agénticos' },
    ],
  },

  about: {
    heading: 'Sobre mí',
    body: [
      'Durante los últimos 8+ años he desarrollado aplicaciones React Native y React de nivel producción en Europa y América Latina.',
      'Mi experiencia abarca arquitectura frontend, sistemas de diseño, estrategias de testing, automatización de CI/CD y prácticas de ingeniería escalables.',
      'He construido aplicaciones desde cero, establecido estándares de ingeniería adoptados a nivel de empresa y publicado productos tanto en la App Store como en Google Play.',
      'Utilizo activamente agentes de codificación con IA como Claude Code, Codex, OpenCode y Cursor como parte de mi flujo de trabajo diario, acelerando la implementación, refactorización, testing, depuración y exploración técnica, manteniendo siempre altos estándares de ingeniería y calidad de código.',
    ],
    education: {
      label: 'Educación',
      degree: 'Ingeniería en Informática',
      institution: 'Universidad Católica Andrés Bello',
      period: '2010–2016',
    },
  },

  experience: {
    heading: 'Experiencia',
    currentBadge: 'Actual',
    earlierRolesLabel: 'Experiencia anterior',
    roles: {
      nextlane: {
        title: 'Ingeniero Frontend Senior',
        bullets: [
          'Definí los estándares frontend de la empresa, adoptados por todos los equipos',
          'Desarrollé 3 aplicaciones de producción desde cero de extremo a extremo',
          'Estandaricé el stack Next.js + React Query + Zod + React Hook Form',
          'Construí la librería de componentes MUI compartida usada en todos los productos',
          'Gestioné los pipelines de CI/CD con GitHub Actions',
          'Introduje cobertura con Jest + React Testing Library desde cero',
          'Conduje entrevistas técnicas y ayudé a crecer al equipo frontend',
        ],
      },
      capitole: {
        title: 'Ingeniero React Native',
        bullets: [
          'Automaticé despliegues con GitHub Actions, reduciendo el tiempo de deploy en un 70%',
          'Integré Sentry para monitorización de errores en la aplicación móvil',
          'Integré Braze para notificaciones push y flujos de engagement',
          'Implementé el bridge WebView de React Native para funcionalidad híbrida',
        ],
      },
      makingSense: {
        title: 'Ingeniero React Native',
        bullets: [
          '18 meses integrado en un equipo de producto multifuncional',
          'Construí componentes nativos personalizados para UX específica de plataforma',
          'Adopté React Query para la gestión de estado asíncrono',
          'Estandaricé React Hook Form en toda la aplicación',
          'Alcancé cobertura completa con Jest + React Testing Library',
        ],
      },
      novacomp: {
        title: 'Ingeniero React Native',
        bullets: [
          'Responsable de la arquitectura frontend en un proyecto greenfield de extremo a extremo',
          'Implementé la integración con backend AWS Amplify + GraphQL',
          'Usé GraphQL Code Generator para una capa de API con tipado seguro',
          'Configuré App Center para actualizaciones OTA y distribución',
        ],
      },
      urijiJami: {
        title: 'Ingeniero React Native & Android',
        bullets: [
          'Desarrollé una red social React Native desde cero hasta producción',
          'Publiqué en App Store y Google Play',
          'Mantuve la aplicación Android nativa (Java, patrones MVVM/MVP)',
          'Implementé notificaciones push, OAuth e integraciones REST',
        ],
      },
    },
    earlierRoles: {
      fancision: {
        title: 'Desarrollador React Native',
        bullets: [
          'Desarrollé funcionalidades para una app de alto engagement (trivia, minijuegos, encuestas) donde el rendimiento impactaba directamente en la retención',
          'Integré notificaciones push de OneSignal y login OAuth con Google/Facebook para reducir la fricción de registro',
          'Apliqué Redux Persist para el estado entre sesiones, permitiendo a los usuarios retomar justo donde lo dejaron',
        ],
      },
      threehundredDev: {
        title: 'Desarrollador React Native',
        bullets: [
          'Construí una app de e-commerce de farmacia desde cero, estableciendo la arquitectura completa del proyecto y las decisiones fundamentales',
          'Integré Firebase para datos en tiempo real y autenticación; implementé flujos de checkout con React Hook Form priorizando la fiabilidad crítica para la conversión',
        ],
      },
      teravision: {
        title: 'Desarrollador Móvil SSR',
        bullets: [
          'Contribuí tanto en Android nativo (Java) como en un backend Spring Boot dentro del mismo producto',
          'Operé más allá de la capa frontend cuando el producto lo requería',
        ],
      },
    },
  },

  achievements: {
    heading: 'Logros Destacados',
    items: [
      {
        title: 'Estándares frontend establecidos',
        descriptor: 'Adopción a nivel de empresa',
      },
      {
        title: '5+ productos construidos',
        descriptor: 'De cero a producción',
      },
      {
        title: 'Sistemas de componentes reutilizables',
        descriptor: 'Usados en múltiples productos',
      },
      {
        title: 'Publicación de apps móviles',
        descriptor: 'App Store y Google Play',
      },
      {
        title: 'Pipelines de CI/CD',
        descriptor: 'Despliegues automatizados',
      },
      {
        title: 'Liderazgo técnico',
        descriptor: 'Entrevistas y evaluaciones',
      },
    ],
  },

  expertise: {
    heading: 'Especialidades',
    items: [
      {
        title: 'Arquitectura Frontend',
        description:
          'Diseño de sistemas, gestión de estado y jerarquías de componentes escalables para aplicaciones web de gran escala.',
      },
      {
        title: 'Ingeniería Móvil',
        description:
          'Experiencia en React Native abarcando proyectos greenfield, módulos nativos y publicación en App Store y Google Play.',
      },
      {
        title: 'Calidad de Ingeniería',
        description:
          'Estrategia de testing, cultura de revisión de código y estándares que permiten a los equipos avanzar rápido sin comprometer la calidad.',
      },
      {
        title: 'Entrega Continua',
        description:
          'Pipelines con GitHub Actions, despliegues automatizados y procesos de release que permiten entregar con confianza.',
      },
      {
        title: 'Ingeniería Asistida por IA',
        description:
          'Uso de Claude Code, Codex, OpenCode y Cursor como herramientas de trabajo — no como atajos — para mantener estándares de ingeniería senior.',
      },
    ],
  },

  skills: {
    heading: 'Habilidades Técnicas',
    groups: [
      {
        name: 'Arquitectura Frontend',
        skills: ['Diseño de Sistemas', 'Gestión de Estado', 'Librerías de Componentes'],
      },
      {
        name: 'Ecosistema React',
        skills: ['React', 'Next.js', 'TypeScript'],
      },
      {
        name: 'Ingeniería Móvil',
        skills: ['React Native', 'Expo', 'Módulos Nativos'],
      },
      {
        name: 'Testing y Calidad',
        skills: ['Jest', 'RTL', 'Revisiones de Código'],
      },
      {
        name: 'CI/CD y Automatización',
        skills: ['GitHub Actions', 'Despliegues Automatizados'],
      },
      {
        name: 'Flujo de Trabajo con IA',
        skills: [
          'Claude Code',
          'OpenAI Codex',
          'OpenCode',
          'Cursor',
          'Flujos de Trabajo Agénticos',
          'Desarrollo Asistido por LLM',
        ],
      },
      {
        name: 'Experiencia de Desarrollador',
        skills: ['Tooling', 'Documentación', 'Estándares de Ingeniería'],
      },
    ],
  },

  contact: {
    heading: 'Contacto',
    availability:
      'Abierto a oportunidades donde pueda ayudar a equipos a construir productos escalables, establecer estándares de ingeniería y entregar experiencias de usuario de alta calidad.',
    ctaLabel: 'Hablemos',
    emailLabel: 'Enviarme un email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    opensInNewTab: 'se abre en una pestaña nueva',
    copyEmailLabel: 'Copiar email',
    copiedLabel: '¡Copiado!',
    email: 'pedrovillarreal@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/villapp',
    linkedinHandle: 'linkedin.com/in/villapp',
    githubUrl: 'https://github.com/pavp',
    githubHandle: 'github.com/pavp',
  },

  footer: {
    tagline: 'Ingeniero Frontend Senior',
    copyright: 'Pedro Villarreal. Hecho con precisión y atención al detalle.',
  },
} satisfies Translation;
