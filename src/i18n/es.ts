import type { Translation } from './types';

export const es = {
  a11y: {
    skipToContent: 'Saltar al contenido principal',
  },

  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    resume: 'Currículum',
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
    body: 'Ingeniero Frontend Senior con más de 8 años de experiencia en producción construyendo aplicaciones React Native y React en Europa y LATAM. Mi trabajo abarca arquitectura, sistemas de diseño, testing y CI/CD. He construido productos desde cero, establecido estándares de ingeniería a nivel de empresa y publicado en App Store y Google Play. Utilizo Claude Code, Codex, OpenCode y Cursor como herramientas de trabajo diario — no como atajos, sino como multiplicadores de fuerza que me permiten mantener el foco en la calidad de ingeniería y las decisiones arquitectónicas.',
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
          'Desarrollé funcionalidades para una plataforma móvil de engagement deportivo',
          'Mantuve el pipeline de CI/CD y el proceso de releases',
        ],
      },
      threehundredDev: {
        title: 'Desarrollador React Native',
        bullets: [
          'Construí funcionalidades React Native en un entorno de agencia de ritmo acelerado',
          'Colaboré con equipos multifuncionales en la entrega de productos móviles',
        ],
      },
      teravision: {
        title: 'Desarrollador Móvil SSR',
        bullets: [
          'Desarrollé y mantuve aplicaciones móviles para clientes empresariales',
          'Participé en revisiones de código y estándares de calidad',
        ],
      },
    },
  },

  achievements: {
    heading: 'Logros Destacados',
    items: [
      {
        title: 'Estándares Frontend Establecidos',
        descriptor:
          'Definí e implementé estándares de arquitectura frontend a nivel de empresa adoptados por todos los equipos de producto en Nextlane.',
      },
      {
        title: '5+ Productos Construidos',
        descriptor:
          'Llevé más de cinco productos de cero a producción en plataformas web y móvil, cada uno desarrollado de extremo a extremo.',
      },
      {
        title: 'Sistemas de Componentes Reutilizables',
        descriptor:
          'Diseñé y construí librerías de componentes compartidas con MUI y primitivas personalizadas, reduciendo la duplicación entre equipos.',
      },
      {
        title: 'Publicación en Tiendas Móviles',
        descriptor:
          'Publiqué aplicaciones en App Store y Google Play, gestionando el pipeline completo desde el build hasta el envío a las tiendas.',
      },
      {
        title: 'Pipelines de CI/CD',
        descriptor:
          'Gestioné pipelines con GitHub Actions que redujeron los tiempos de despliegue hasta un 70% y proporcionaron una entrega automatizada confiable.',
      },
      {
        title: 'Liderazgo Técnico',
        descriptor:
          'Conduje entrevistas técnicas, mentoreé ingenieros y elevé la calidad de ingeniería a través de estándares y cultura de revisión de código.',
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

  resume: {
    heading: 'Currículum',
    downloadLabel: 'Descargar Currículum',
    lastUpdatedLabel: 'Última actualización',
    lastUpdatedDate: '14 de junio de 2026',
    previewLabel: 'Pedro Villarreal — Ingeniero Frontend Senior',
  },

  contact: {
    heading: 'Contacto',
    emailLabel: 'Enviarme un email',
    linkedinLabel: 'LinkedIn',
    opensInNewTab: 'se abre en una pestaña nueva',
    copyEmailLabel: 'Copiar email',
    copiedLabel: '¡Copiado!',
    email: 'pedrovillarreal@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/villapp',
    linkedinHandle: 'linkedin.com/in/villapp',
  },

  footer: {
    tagline: 'Ingeniero Frontend Senior · Madrid',
    copyright: 'Pedro Villarreal',
  },
} satisfies Translation;
