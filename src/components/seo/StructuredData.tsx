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
  applicationSubCategory: 'Hospitality Management Software',
  operatingSystem: 'iOS, Android, Web',
  description: 'App de gestão de equipe para restaurantes com gamificação, check-in GPS, tarefas e dashboards em tempo real',
  offers: {
    '@type': 'Offer',
    price: '0',
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
  image: 'https://chefiapp.com/og-image.svg',
  screenshot: 'https://chefiapp.com/og-image.svg',
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

export function StructuredData() {
  useEffect(() => {
    // Insert all schemas into head
    const schemas = [
      organizationSchema,
      productSchema,
      faqSchema,
      howToSchema,
      localBusinessSchema
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
