import { useEffect } from 'react'

// Schema.org structured data for ChefIApp
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ChefIApp',
  alternateName: 'Chef I App',
  url: 'https://chefiapp.com',
  logo: 'https://chefiapp.com/logo.png',
  description: 'Plataforma de gestão de equipe para restaurantes, bares, hotéis e hospitality com gamificação, check-in GPS e dashboards inteligentes',
  foundingDate: '2024',
  founders: [{
    '@type': 'Person',
    name: 'Elder Miranda de Andrade',
    jobTitle: 'Founder & CEO'
  }],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ibiza',
    addressCountry: 'ES'
  },
  sameAs: [
    'https://instagram.com/chefiapp',
    'https://youtube.com/@chefiapp',
    'https://tiktok.com/@chefiapp',
    'https://linkedin.com/company/chefiapp',
    'https://github.com/goldmonkey777/chefiapp-site'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: 'contact@goldmonkey.studio'
  }
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ChefIApp',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Hospitality workforce management',
  operatingSystem: 'iOS, Android, Web',
  description: 'App de gestão de equipe para restaurantes com gamificação, check-in GPS, tarefas e dashboards em tempo real. Alternativa moderna a 7shifts, Harri, Fourth para restaurantes independentes.',
  offers: {
    '@type': 'Offer',
    price: '29',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2025-12-31'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '200',
    bestRating: '5',
    worstRating: '1'
  },
  author: organizationSchema,
  image: 'https://chefiapp.com/og-image.png',
  screenshot: 'https://chefiapp.com/og-image.png',
  // SEO Keywords - nicho específico
  keywords: [
    'app para restaurante',
    'gestão de equipe para bares',
    'hospitality workforce management',
    'restaurant staff scheduling',
    'restaurant gamification',
    'hotel staff management',
    'software gestão equipe hotel',
    'alternativa 7shifts',
    'alternativa harri',
    'check-in gps funcionários',
    'gamificação restaurante',
    'checklists restaurante'
  ],
  featureList: [
    'Gestão de tarefas e checklists',
    'Check-in GPS com validação de localização',
    'Sistema de gamificação com XP e níveis',
    'Rankings de equipe em tempo real',
    'Dashboards com métricas',
    'Multi-idioma (PT, ES, EN)',
    'App móvel (iOS e Android)',
    'Integração Supabase'
  ]
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O ChefIApp funciona offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! A app mobile funciona offline com sincronização automática quando volta a conexão. Perfeito para locais com WiFi instável.'
      }
    },
    {
      '@type': 'Question',
      name: 'Como funciona o check-in GPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O funcionário abre a app e faz check-in. O GPS valida se está no local de trabalho (configurável). Tudo automático e seguro.'
      }
    },
    {
      '@type': 'Question',
      name: 'A gamificação realmente funciona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! XP, níveis, badges e rankings criam competição saudável e aumentam motivação. Clientes reportam +40% de engajamento.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para configurar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Setup básico em 5 minutos. Adicione funcionários, crie tarefas e pronto. Onboarding guiado incluído.'
      }
    }
  ]
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como começar a usar o ChefIApp no seu restaurante',
  description: 'Guia passo a passo para implementar o ChefIApp na gestão da sua equipe',
  totalTime: 'PT5M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Cadastro',
      text: 'Crie sua conta no ChefIApp e configure o perfil do restaurante',
      url: 'https://chefiapp.com/#early-access'
    },
    {
      '@type': 'HowToStep',
      name: 'Adicionar equipe',
      text: 'Convide funcionários via email ou WhatsApp para baixar o app',
      url: 'https://chefiapp.com/#how-it-works'
    },
    {
      '@type': 'HowToStep',
      name: 'Criar tarefas',
      text: 'Configure checklists e tarefas diárias para cada turno',
      url: 'https://chefiapp.com/#features'
    },
    {
      '@type': 'HowToStep',
      name: 'Ativar gamificação',
      text: 'Configure XP, níveis e rankings para motivar a equipe',
      url: 'https://chefiapp.com/#features'
    }
  ]
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sofigastrobar.com',
  name: 'Sofia Gastrobar Ibiza',
  description: 'Primeiro restaurante a usar ChefIApp - Laboratório oficial de testes',
  url: 'https://sofigastrobar.com',
  telephone: '+34-XXX-XXX-XXX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ibiza',
    addressRegion: 'Balearic Islands',
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '38.9067',
    longitude: '1.4206'
  },
  image: 'https://chefiapp.com/partners/sofia-gastrobar-logo.svg',
  priceRange: '€€',
  servesCuisine: 'Mediterranean, Gastrobar',
  acceptsReservations: true
}

// Topics Graph - Semantic relationships for SEO dominance
// This connects ChefIApp to the entire hospitality software ecosystem
const topicsGraphSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://chefiapp.com',
  name: 'ChefIApp - Hospitality Workforce Management Platform',
  description: 'The complete workforce management solution for restaurants, bars, hotels, and hospitality businesses',
  
  // Semantic knowledge topics - what ChefIApp knows about
  about: [
    {
      '@type': 'Thing',
      name: 'Restaurant Staff Scheduling',
      description: 'Digital scheduling and shift management for restaurant teams'
    },
    {
      '@type': 'Thing',
      name: 'Hospitality Workforce Management',
      description: 'Complete workforce solutions for hotels, restaurants, and bars'
    },
    {
      '@type': 'Thing',
      name: 'Employee Gamification',
      description: 'Using game mechanics to motivate and engage staff'
    },
    {
      '@type': 'Thing',
      name: 'GPS Time Tracking',
      description: 'Location-based attendance and time tracking systems'
    },
    {
      '@type': 'Thing',
      name: 'Restaurant Operations Management',
      description: 'Daily task management and checklists for food service'
    },
    {
      '@type': 'Thing',
      name: 'Hotel Staff Coordination',
      description: 'Team coordination systems for hospitality properties'
    },
    {
      '@type': 'Thing',
      name: 'F&B Team Management',
      description: 'Food and beverage service team management tools'
    },
    {
      '@type': 'Thing',
      name: 'Employee Engagement Software',
      description: 'Tools for improving workplace engagement and retention'
    }
  ],
  
  // Industry categories ChefIApp serves
  audience: {
    '@type': 'Audience',
    audienceType: 'Hospitality Industry Professionals',
    geographicArea: {
      '@type': 'AdministrativeArea',
      name: 'Global',
      containsPlace: [
        { '@type': 'Country', name: 'Spain' },
        { '@type': 'Country', name: 'Portugal' },
        { '@type': 'Country', name: 'Brazil' },
        { '@type': 'Country', name: 'Mexico' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Italy' },
        { '@type': 'Country', name: 'Germany' }
      ]
    }
  },
  
  // Related concepts and keywords for semantic SEO
  keywords: [
    // Restaurant focused
    'restaurant staff scheduling software',
    'restaurant employee management',
    'restaurant task management app',
    'restaurant checklist software',
    'kitchen staff coordination',
    'bar team management',
    'food service workforce',
    
    // Hotel focused
    'hotel staff management software',
    'hospitality workforce solutions',
    'hotel operations platform',
    'housekeeping task management',
    
    // Feature focused
    'employee gamification platform',
    'GPS time tracking hospitality',
    'real-time staff dashboard',
    'employee XP and leveling system',
    'team ranking and leaderboards',
    
    // Problem focused
    'reduce restaurant turnover',
    'improve staff engagement',
    'automate restaurant operations',
    'digital time clock hospitality',
    
    // Comparison focused
    'alternative to 7shifts',
    'alternative to harri',
    'alternative to fourth hotschedules',
    'alternative to deputy',
    'alternative to when i work',
    
    // Language specific
    'gestão equipe restaurante',
    'app para restaurante',
    'software hotelaria',
    'gestión equipo restaurante',
    'aplicación para restaurantes'
  ],
  
  // Breadcrumb for navigation
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://chefiapp.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://chefiapp.com/#features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Comparisons',
        item: 'https://chefiapp.com/#alternatives'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Early Access',
        item: 'https://chefiapp.com/#early-access'
      }
    ]
  },
  
  // Site links searchbox potential
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://chefiapp.com/compare/{search_term_string}.html'
    },
    'query-input': 'required name=search_term_string'
  }
}

// WebSite schema for sitelinks
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://chefiapp.com/#website',
  url: 'https://chefiapp.com',
  name: 'ChefIApp',
  description: 'Gestão inteligente de equipe para restaurantes, bares e hotéis',
  publisher: {
    '@id': 'https://chefiapp.com/#organization'
  },
  inLanguage: ['pt-BR', 'pt-PT', 'en', 'es'],
  copyrightYear: 2025,
  copyrightHolder: {
    '@type': 'Organization',
    name: 'goldmonkey.studio LLC'
  }
}

export function StructuredData() {
  useEffect(() => {
    // Insert all schemas into head - SEO Dominion System™
    const schemas = [
      organizationSchema,
      productSchema,
      faqSchema,
      howToSchema,
      localBusinessSchema,
      topicsGraphSchema,
      websiteSchema
    ]

    const scriptElements: HTMLScriptElement[] = []

    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      script.id = `schema-${index}`
      document.head.appendChild(script)
      scriptElements.push(script)
    })

    // Cleanup on unmount
    return () => {
      scriptElements.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  return null // This component doesn't render anything
}
