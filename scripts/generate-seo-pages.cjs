/**
 * SEO Dominion System™ — Page Generator
 * Generates comparison and intent pages for ChefIApp
 * 
 * Run: node scripts/generate-seo-pages.js
 */

const fs = require('fs');
const path = require('path');

// ============================================
// COMPETITORS DATA
// ============================================
const competitors = [
  {
    slug: '7shifts',
    name: '7shifts',
    focus: 'Escala e folha de pagamento para restaurantes',
    strengths: ['Sistema robusto de escalas', 'Integração com payroll EUA/Canadá', 'Integrações com POS (Toast, Square)'],
    weaknesses: ['Sem gamificação', 'Complexo para equipes pequenas', 'Foco em compliance, não em cultura'],
    whyChefIApp: 'Se você quer mais que escalas — quer engajar sua equipe com gamificação, tarefas diárias e check-in GPS — o ChefIApp é a alternativa perfeita.',
    category: 'restaurant'
  },
  {
    slug: 'harri',
    name: 'Harri',
    focus: 'HCM completo para grandes redes de hospitality',
    strengths: ['Recrutamento integrado', 'Analytics avançado', 'Enterprise-grade'],
    weaknesses: ['Preço enterprise', 'Implementação demorada', 'Overkill para independentes'],
    whyChefIApp: 'Harri é para corporações. ChefIApp é para quem quer resultados rápidos, sem consultoria e sem meses de implementação.',
    category: 'hotel'
  },
  {
    slug: 'fourth',
    name: 'Fourth (HotSchedules)',
    focus: 'Workforce + Inventário para hotelaria e QSR',
    strengths: ['Suite completa', 'Previsão de demanda', 'Gestão de inventário'],
    weaknesses: ['Muito complexo', 'Preço alto', 'Curva de aprendizado longa'],
    whyChefIApp: 'Fourth tenta fazer tudo. ChefIApp faz uma coisa muito bem: engajar sua equipe na operação diária.',
    category: 'hotel'
  },
  {
    slug: 'unifocus',
    name: 'Unifocus',
    focus: 'Labor management para cadeias de hotéis',
    strengths: ['Otimização de labor', 'Analytics de produtividade', 'Foco em custos'],
    weaknesses: ['Apenas para grandes hotéis', 'Setup complexo', 'Interface datada'],
    whyChefIApp: 'Seu hotel boutique ou hostel não precisa de uma Ferrari corporativa. ChefIApp é o carro esportivo ágil que você precisa.',
    category: 'hotel'
  },
  {
    slug: 'hotschedules',
    name: 'HotSchedules',
    focus: 'Scheduling pioneiro (agora parte do Fourth)',
    strengths: ['Marca estabelecida', 'Muitas integrações', 'Base grande de usuários'],
    weaknesses: ['Interface antiga', 'Agora parte de suite maior', 'Menos inovação recente'],
    whyChefIApp: 'HotSchedules foi revolucionário em 2010. ChefIApp é a evolução para 2025: mobile-first, gamificado, instantâneo.',
    category: 'restaurant'
  },
  {
    slug: 'helloshift',
    name: 'HelloShift',
    focus: 'Colaboração e tarefas para staff de hotel',
    strengths: ['Interface limpa', 'Foco em comunicação', 'Bom para housekeeping'],
    weaknesses: ['Limitado para F&B', 'Sem gamificação', 'Menos features de workforce'],
    whyChefIApp: 'HelloShift é bom para housekeeping. ChefIApp foi feito para a cozinha, o bar e o salão.',
    category: 'hotel'
  },
  {
    slug: 'stay',
    name: 'STAY',
    focus: 'Guest experience e operações de hotel',
    strengths: ['Experiência do hóspede', 'Upselling', 'Interface moderna'],
    weaknesses: ['Foco no guest, não na equipe', 'Menos features de workforce'],
    whyChefIApp: 'STAY cuida do hóspede. ChefIApp cuida de quem cuida do hóspede: sua equipe.',
    category: 'hotel'
  },
  {
    slug: 'wheniwork',
    name: 'WhenIWork',
    focus: 'Scheduling simples para pequenos negócios',
    strengths: ['Fácil de usar', 'Preço acessível', 'App mobile bom'],
    weaknesses: ['Genérico (não é para hospitality)', 'Sem features específicas de restaurante'],
    whyChefIApp: 'WhenIWork serve para qualquer negócio. ChefIApp foi feito especificamente para restaurantes, bares e hotéis.',
    category: 'general'
  },
  {
    slug: 'deputy',
    name: 'Deputy',
    focus: 'Workforce management geral com foco em compliance',
    strengths: ['Compliance trabalhista', 'Timesheet robusto', 'Muitas integrações'],
    weaknesses: ['Interface complexa', 'Não é específico para hospitality', 'Sem gamificação'],
    whyChefIApp: 'Deputy é burocracia digital. ChefIApp é motivação digital — sua equipe vai querer usar.',
    category: 'general'
  },
  {
    slug: 'planday',
    name: 'Planday',
    focus: 'Scheduling europeu com foco em compliance EU',
    strengths: ['Compliance europeu', 'Interface moderna', 'Bom suporte EU'],
    weaknesses: ['Menos features que competidores', 'Sem gamificação', 'Foco em escalas apenas'],
    whyChefIApp: 'Planday faz escalas. ChefIApp faz escalas + tarefas + gamificação + check-in GPS. Tudo em um.',
    category: 'general'
  },
  {
    slug: 'homebase',
    name: 'Homebase',
    focus: 'Scheduling e timesheet para pequenos negócios EUA',
    strengths: ['Gratuito para básico', 'Fácil de usar', 'Timesheet integrado'],
    weaknesses: ['Muito básico', 'Foco em EUA', 'Sem features avançadas'],
    whyChefIApp: 'Homebase é um bom começo. ChefIApp é onde você chega quando quer levar sua equipe ao próximo nível.',
    category: 'general'
  },
  {
    slug: 'toast-team',
    name: 'Toast Team Management',
    focus: 'Módulo de equipe do POS Toast',
    strengths: ['Integração nativa com Toast POS', 'Dados de vendas integrados'],
    weaknesses: ['Só funciona com Toast', 'Features limitadas', 'Vendor lock-in'],
    whyChefIApp: 'Toast Team é um add-on de POS. ChefIApp é uma plataforma completa de gestão de equipe, independente do seu POS.',
    category: 'restaurant'
  },
  {
    slug: 'square-shifts',
    name: 'Square Shifts',
    focus: 'Scheduling do ecossistema Square',
    strengths: ['Integração com Square', 'Interface simples', 'Preço incluído'],
    weaknesses: ['Básico', 'Só para usuários Square', 'Sem gamificação'],
    whyChefIApp: 'Square Shifts é básico e limitado ao ecossistema Square. ChefIApp funciona com qualquer sistema.',
    category: 'restaurant'
  },
  {
    slug: 'workforce-com',
    name: 'Workforce.com',
    focus: 'Workforce management enterprise',
    strengths: ['Analytics avançado', 'AI/ML para previsão', 'Enterprise features'],
    weaknesses: ['Preço enterprise', 'Complexo', 'Não é para pequenos'],
    whyChefIApp: 'Workforce.com é para corporações com departamento de RH. ChefIApp é para donos de restaurante que fazem tudo.',
    category: 'general'
  },
  {
    slug: 'zoho-people',
    name: 'Zoho People',
    focus: 'HRM geral do ecossistema Zoho',
    strengths: ['Preço bom', 'Suite Zoho integrada', 'Muitas features'],
    weaknesses: ['Interface confusa', 'Não é específico para hospitality', 'Curva de aprendizado'],
    whyChefIApp: 'Zoho People é HR genérico. ChefIApp entende que restaurante não é escritório.',
    category: 'general'
  },
  {
    slug: 'jolt',
    name: 'Jolt',
    focus: 'Operações e compliance para restaurantes',
    strengths: ['Checklists digitais', 'Food safety', 'Compliance'],
    weaknesses: ['Foco em compliance, não em pessoas', 'Interface datada', 'Sem gamificação'],
    whyChefIApp: 'Jolt é sobre seguir regras. ChefIApp é sobre motivar pessoas a fazer mais.',
    category: 'restaurant'
  },
  {
    slug: 'hotelkit',
    name: 'Hotelkit',
    focus: 'Comunicação e colaboração para hotéis',
    strengths: ['Comunicação interna', 'Gestão de tarefas', 'Made for hotels'],
    weaknesses: ['Foco em grandes hotéis', 'Preço alto', 'Menos foco em F&B'],
    whyChefIApp: 'Hotelkit é ótimo para o hotel. ChefIApp é perfeito para o restaurante do hotel.',
    category: 'hotel'
  },
  {
    slug: 'alice',
    name: 'ALICE',
    focus: 'Operations platform para hotéis de luxo',
    strengths: ['Luxo e premium', 'Guest experience', 'Operations completo'],
    weaknesses: ['Muito caro', 'Só para luxury', 'Overkill para maioria'],
    whyChefIApp: 'ALICE é para o Four Seasons. ChefIApp é para todos os outros hotéis do mundo.',
    category: 'hotel'
  },
  {
    slug: 'sling',
    name: 'Sling',
    focus: 'Scheduling gratuito com comunicação',
    strengths: ['Gratuito', 'Fácil de usar', 'Comunicação integrada'],
    weaknesses: ['Features limitadas', 'Sem gamificação', 'Suporte básico'],
    whyChefIApp: 'Sling é bom para começar. ChefIApp é onde você vai quando quer resultados de verdade.',
    category: 'general'
  },
  {
    slug: 'connecteam',
    name: 'Connecteam',
    focus: 'App de equipe all-in-one para deskless workers',
    strengths: ['Muitas features', 'App mobile completo', 'Comunicação'],
    weaknesses: ['Interface sobrecarregada', 'Não é específico para hospitality', 'Muitas features = complexidade'],
    whyChefIApp: 'Connecteam tenta fazer tudo. ChefIApp faz o essencial perfeitamente para restaurantes.',
    category: 'general'
  }
];

// ============================================
// INTENT PAGES DATA
// ============================================
const intentPages = [
  {
    slug: 'best-app-for-restaurants',
    title: 'Melhor App para Restaurantes 2025',
    titleEn: 'Best App for Restaurants 2025',
    description: 'Descubra qual é o melhor aplicativo de gestão para restaurantes em 2025. Comparativo completo com features, preços e avaliações.',
    keywords: 'melhor app restaurante, aplicativo para restaurante, software restaurante 2025, gestão restaurante app',
    category: 'restaurant'
  },
  {
    slug: 'restaurant-checklist-app',
    title: 'App de Checklist para Restaurantes',
    titleEn: 'Restaurant Checklist App',
    description: 'Organize a operação do seu restaurante com checklists digitais. Abertura, fechamento, limpeza, mise en place — tudo controlado.',
    keywords: 'checklist restaurante, app checklist cozinha, lista tarefas restaurante, checklist abertura restaurante',
    category: 'restaurant'
  },
  {
    slug: 'workforce-management-hospitality',
    title: 'Workforce Management para Hospitality',
    titleEn: 'Workforce Management for Hospitality',
    description: 'Guia completo sobre gestão de força de trabalho para hotéis e restaurantes. Escalas, tarefas, engajamento e mais.',
    keywords: 'workforce management hospitality, gestão equipe hotel, workforce restaurante, labor management hospitality',
    category: 'hotel'
  },
  {
    slug: 'gamification-for-restaurants',
    title: 'Gamificação para Restaurantes: Guia Completo',
    titleEn: 'Gamification for Restaurants: Complete Guide',
    description: 'Como usar gamificação para motivar sua equipe de restaurante. XP, níveis, badges e rankings que funcionam.',
    keywords: 'gamificação restaurante, gamification hospitality, motivar equipe restaurante, ranking funcionários',
    category: 'restaurant'
  },
  {
    slug: 'gps-checkin-restaurants',
    title: 'Check-in GPS para Restaurantes',
    titleEn: 'GPS Check-in for Restaurants',
    description: 'Controle de ponto por GPS para restaurantes. Elimine fraudes, automatize presença e tenha dados em tempo real.',
    keywords: 'check-in gps restaurante, controle ponto gps, geolocalização funcionários, ponto digital restaurante',
    category: 'restaurant'
  },
  {
    slug: 'team-ranking-hospitality',
    title: 'Sistema de Ranking para Equipes de Hospitality',
    titleEn: 'Team Ranking System for Hospitality',
    description: 'Como criar um sistema de ranking que motiva sua equipe de hotel ou restaurante. Métricas, XP e competição saudável.',
    keywords: 'ranking equipe restaurante, sistema pontos funcionários, leaderboard hospitality, competição equipe',
    category: 'hotel'
  },
  {
    slug: 'restaurant-task-management',
    title: 'Gestão de Tarefas para Restaurantes',
    titleEn: 'Task Management for Restaurants',
    description: 'Organize todas as tarefas do seu restaurante. Atribuição, acompanhamento e conclusão em tempo real.',
    keywords: 'gestão tarefas restaurante, app tarefas cozinha, organização restaurante, task management hospitality',
    category: 'restaurant'
  },
  {
    slug: 'hotel-staff-management',
    title: 'Gestão de Equipe para Hotéis',
    titleEn: 'Hotel Staff Management',
    description: 'Guia completo para gerir equipes de hotéis. Housekeeping, F&B, recepção — tudo coordenado.',
    keywords: 'gestão equipe hotel, staff management hotel, coordenação equipe hotelaria, app para hotel',
    category: 'hotel'
  },
  {
    slug: 'bar-staff-app',
    title: 'App para Equipe de Bar',
    titleEn: 'Bar Staff Management App',
    description: 'Aplicativo especializado para gestão de equipes de bares e pubs. Escalas, tarefas e gamificação.',
    keywords: 'app para bar, gestão equipe bar, software bar, app bartender',
    category: 'restaurant'
  },
  {
    slug: 'catering-workforce-management',
    title: 'Gestão de Equipe para Catering e Buffet',
    titleEn: 'Catering Workforce Management',
    description: 'Gerencie equipes de catering e buffet com eficiência. Eventos, escalas dinâmicas e controle operacional.',
    keywords: 'gestão equipe catering, app buffet, software catering, workforce buffet',
    category: 'restaurant'
  },
  {
    slug: 'restaurant-employee-scheduling',
    title: 'Escala de Funcionários para Restaurantes',
    titleEn: 'Restaurant Employee Scheduling',
    description: 'Crie escalas de funcionários para seu restaurante de forma fácil. Templates, automação e comunicação.',
    keywords: 'escala funcionários restaurante, scheduling restaurante, turnos restaurante, horários equipe',
    category: 'restaurant'
  },
  {
    slug: 'hospitality-software-comparison',
    title: 'Comparativo de Software para Hospitality 2025',
    titleEn: 'Hospitality Software Comparison 2025',
    description: 'Comparativo completo entre os principais softwares de gestão para hotéis e restaurantes.',
    keywords: 'comparativo software hospitality, melhor software hotel, comparação app restaurante',
    category: 'hotel'
  },
  {
    slug: 'restaurant-operations-software',
    title: 'Software de Operações para Restaurantes',
    titleEn: 'Restaurant Operations Software',
    description: 'Automatize as operações do seu restaurante. Checklists, tarefas, comunicação e controle em tempo real.',
    keywords: 'software operações restaurante, gestão operacional restaurante, automação restaurante',
    category: 'restaurant'
  },
  {
    slug: 'hotel-task-management',
    title: 'Gestão de Tarefas para Hotéis',
    titleEn: 'Hotel Task Management',
    description: 'Organize todas as tarefas do seu hotel. Housekeeping, manutenção, F&B — tudo em um lugar.',
    keywords: 'gestão tarefas hotel, task management hotel, housekeeping app, manutenção hotel',
    category: 'hotel'
  },
  {
    slug: 'restaurant-team-motivation',
    title: 'Como Motivar Equipe de Restaurante',
    titleEn: 'How to Motivate Restaurant Staff',
    description: 'Estratégias comprovadas para motivar sua equipe de restaurante. Gamificação, reconhecimento e cultura.',
    keywords: 'motivar equipe restaurante, engajamento funcionários, retenção staff, cultura restaurante',
    category: 'restaurant'
  },
  {
    slug: 'reduce-restaurant-turnover',
    title: 'Como Reduzir Turnover em Restaurantes',
    titleEn: 'How to Reduce Restaurant Turnover',
    description: 'Reduza a rotatividade de funcionários no seu restaurante. Estratégias que funcionam de verdade.',
    keywords: 'reduzir turnover restaurante, retenção funcionários, rotatividade equipe, employee retention',
    category: 'restaurant'
  },
  {
    slug: 'digital-timesheet-restaurants',
    title: 'Folha de Ponto Digital para Restaurantes',
    titleEn: 'Digital Timesheet for Restaurants',
    description: 'Elimine o papel e automatize o controle de ponto do seu restaurante com tecnologia GPS.',
    keywords: 'folha ponto digital, timesheet restaurante, controle ponto app, registro horas',
    category: 'restaurant'
  },
  {
    slug: 'restaurant-communication-app',
    title: 'App de Comunicação para Equipe de Restaurante',
    titleEn: 'Restaurant Team Communication App',
    description: 'Centralize a comunicação da sua equipe. Avisos, trocas de turno e atualizações em tempo real.',
    keywords: 'comunicação equipe restaurante, app comunicação staff, chat equipe, avisos funcionários',
    category: 'restaurant'
  },
  {
    slug: 'kitchen-staff-management',
    title: 'Gestão de Equipe de Cozinha',
    titleEn: 'Kitchen Staff Management',
    description: 'Organize sua brigada de cozinha. Tarefas, prep lists, mise en place e comunicação eficiente.',
    keywords: 'gestão equipe cozinha, app para chefs, brigada cozinha, kitchen management',
    category: 'restaurant'
  },
  {
    slug: 'hospitality-employee-engagement',
    title: 'Engajamento de Funcionários em Hospitality',
    titleEn: 'Hospitality Employee Engagement',
    description: 'Como aumentar o engajamento de funcionários em hotéis e restaurantes. Métricas, estratégias e ferramentas.',
    keywords: 'engajamento funcionários hospitality, employee engagement hotel, motivação equipe hotel',
    category: 'hotel'
  }
];

// ============================================
// HTML TEMPLATE - COMPARISON PAGE
// ============================================
function generateComparisonPage(competitor) {
  const categoryEmoji = competitor.category === 'hotel' ? '🏨' : competitor.category === 'restaurant' ? '🍽️' : '💼';
  const accentColor = competitor.category === 'hotel' ? '#a855f7' : '#f97316';
  
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>ChefIApp vs ${competitor.name} — Comparativo Completo 2025 | Alternativa</title>
  <meta name="description" content="Comparativo: ChefIApp vs ${competitor.name}. ${competitor.focus}. Descubra qual é melhor para o seu negócio. Gamificação, GPS, tarefas." />
  <meta name="keywords" content="alternativa ${competitor.slug}, ${competitor.slug} vs chefiapp, melhor que ${competitor.slug}, comparativo ${competitor.slug}, ${competitor.name} alternative" />
  <meta name="author" content="ChefIApp by goldmonkey.studio" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://chefiapp.com/compare/${competitor.slug}.html" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="ChefIApp vs ${competitor.name} — Qual Escolher?" />
  <meta property="og:description" content="Comparativo completo entre ChefIApp e ${competitor.name}. Descubra a melhor opção para sua equipe." />
  <meta property="og:url" content="https://chefiapp.com/compare/${competitor.slug}.html" />
  <meta property="og:image" content="https://chefiapp.com/og-image.png" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ChefIApp vs ${competitor.name} — Comparativo 2025" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/logo.png" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ChefIApp vs ${competitor.name}: Comparativo Completo",
    "description": "Análise detalhada comparando ChefIApp e ${competitor.name}",
    "author": { "@type": "Organization", "name": "ChefIApp" },
    "publisher": { "@type": "Organization", "name": "goldmonkey.studio" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-12-04",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "ChefIApp",
      "applicationCategory": "Hospitality Workforce Management"
    }
  }
  </script>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: linear-gradient(180deg, #020617 0%, #0f172a 100%); color: #e2e8f0; line-height: 1.7; min-height: 100vh; }
    .container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
    header { padding: 1.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); position: sticky; top: 0; background: rgba(2,6,23,0.95); backdrop-filter: blur(20px); z-index: 100; }
    .header-inner { display: flex; align-items: center; justify-content: space-between; }
    .logo { display: flex; align-items: center; gap: 0.5rem; text-decoration: none; font-weight: 700; font-size: 1.25rem; color: white; }
    .logo img { width: 36px; height: 36px; }
    .logo span { color: ${accentColor}; }
    .back-link { color: #94a3b8; text-decoration: none; font-size: 0.875rem; }
    .back-link:hover { color: ${accentColor}; }
    .hero { padding: 4rem 0 3rem; text-align: center; }
    .badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.1); border: 1px solid rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.2); border-radius: 9999px; font-size: 0.875rem; color: ${accentColor}; margin-bottom: 1.5rem; }
    h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; color: white; margin-bottom: 1rem; line-height: 1.2; }
    h1 .highlight { color: ${accentColor}; }
    .subtitle { font-size: 1.125rem; color: #94a3b8; max-width: 600px; margin: 0 auto; }
    .content { padding: 2rem 0 4rem; }
    h2 { font-size: 1.75rem; font-weight: 700; color: white; margin: 3rem 0 1.5rem; padding-bottom: 0.75rem; border-bottom: 2px solid rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.3); }
    h3 { font-size: 1.25rem; font-weight: 600; color: white; margin: 2rem 0 1rem; }
    p { margin-bottom: 1rem; color: #cbd5e1; }
    .card { background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; }
    .card.green { border-color: rgba(34, 197, 94, 0.3); background: rgba(34, 197, 94, 0.05); }
    .card.accent { border-color: rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.3); background: rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.05); }
    .card.red { border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.05); }
    .card h4 { font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; }
    .card.green h4 { color: #4ade80; }
    .card.accent h4 { color: ${accentColor}; }
    .card.red h4 { color: #f87171; }
    ul { margin: 1rem 0 1.5rem 1.5rem; color: #cbd5e1; }
    li { margin-bottom: 0.5rem; }
    .table-wrapper { overflow-x: auto; margin: 2rem 0; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); }
    table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    th, td { padding: 1rem; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
    th { background: rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.1); color: white; font-weight: 600; }
    td { color: #cbd5e1; }
    .check { color: #4ade80; font-weight: bold; }
    .partial { color: #fbbf24; }
    .cross { color: #f87171; }
    .cta-section { background: linear-gradient(135deg, rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.1) 0%, rgba(${competitor.category === 'hotel' ? '249, 115, 22' : '168, 85, 247'}, 0.1) 100%); border: 1px solid rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.3); border-radius: 1.5rem; padding: 3rem 2rem; text-align: center; margin: 3rem 0; }
    .cta-section h3 { font-size: 1.5rem; margin-bottom: 1rem; }
    .cta-section p { color: #94a3b8; margin-bottom: 1.5rem; }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: linear-gradient(135deg, ${accentColor} 0%, ${competitor.category === 'hotel' ? '#7c3aed' : '#ea580c'} 100%); color: white; font-weight: 600; text-decoration: none; border-radius: 0.75rem; transition: all 0.2s; box-shadow: 0 10px 30px rgba(${competitor.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.3); }
    .btn:hover { transform: translateY(-2px); }
    footer { padding: 2rem 0; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: #64748b; font-size: 0.875rem; }
    footer a { color: ${accentColor}; text-decoration: none; }
    blockquote { border-left: 4px solid ${accentColor}; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #94a3b8; }
    blockquote cite { display: block; margin-top: 0.5rem; font-style: normal; font-weight: 600; color: white; }
    .links { margin-top: 2rem; }
    .links a { color: ${accentColor}; margin-right: 1rem; text-decoration: none; }
    .links a:hover { text-decoration: underline; }
    @media (max-width: 640px) { h1 { font-size: 1.75rem; } .cta-section { padding: 2rem 1rem; } }
  </style>
</head>
<body>
  <header>
    <div class="container header-inner">
      <a href="/" class="logo"><img src="/logo.png" alt="ChefIApp">ChefI<span>App</span>™</a>
      <a href="/" class="back-link">← Voltar ao site</a>
    </div>
  </header>
  
  <main>
    <section class="hero">
      <div class="container">
        <div class="badge">${categoryEmoji} Comparativo 2025</div>
        <h1>ChefIApp vs ${competitor.name}:<br><span class="highlight">Qual Escolher?</span></h1>
        <p class="subtitle">${competitor.focus}. Veja o comparativo completo e descubra qual é a melhor opção para seu negócio.</p>
      </div>
    </section>
    
    <section class="content">
      <div class="container">
        
        <h2>🎯 Sobre o ${competitor.name}</h2>
        <p><strong>${competitor.name}</strong> é uma plataforma focada em: <em>${competitor.focus}</em>.</p>
        
        <div class="card green">
          <h4>✅ Pontos fortes do ${competitor.name}</h4>
          <ul>
            ${competitor.strengths.map(s => `<li>${s}</li>`).join('\n            ')}
          </ul>
        </div>
        
        <div class="card red">
          <h4>⚠️ Onde pode não servir</h4>
          <ul>
            ${competitor.weaknesses.map(w => `<li>${w}</li>`).join('\n            ')}
          </ul>
        </div>
        
        <h2>🆚 Tabela Comparativa</h2>
        
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Funcionalidade</th>
                <th>${competitor.name}</th>
                <th>ChefIApp</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Gamificação (XP, Níveis)</td><td class="cross">✗</td><td class="check">✓</td></tr>
              <tr><td>Check-in GPS</td><td class="partial">◐</td><td class="check">✓</td></tr>
              <tr><td>Tarefas Diárias</td><td class="partial">◐</td><td class="check">✓</td></tr>
              <tr><td>Rankings e Badges</td><td class="cross">✗</td><td class="check">✓</td></tr>
              <tr><td>Setup em 5 minutos</td><td class="cross">✗</td><td class="check">✓</td></tr>
              <tr><td>Multi-idioma (PT/EN/ES)</td><td class="partial">◐</td><td class="check">✓</td></tr>
              <tr><td>Foco em Hospitality</td><td class="check">✓</td><td class="check">✓</td></tr>
              <tr><td>Preço acessível</td><td class="partial">◐</td><td class="check">✓</td></tr>
            </tbody>
          </table>
        </div>
        
        <h2>💡 Por que escolher o ChefIApp?</h2>
        
        <div class="card accent">
          <h4>🚀 O Diferencial</h4>
          <p>${competitor.whyChefIApp}</p>
        </div>
        
        <h3>Para quem o ChefIApp é ideal:</h3>
        <ul>
          <li>✅ Restaurantes independentes e pequenas redes</li>
          <li>✅ Bares, pubs e gastropubs</li>
          <li>✅ Hotéis boutique e hostels</li>
          <li>✅ Operações em Portugal, Espanha e LATAM</li>
          <li>✅ Quem quer resultados rápidos, sem consultoria</li>
        </ul>
        
        <h2>🏝️ Testado de Verdade</h2>
        
        <p>O ChefIApp nasceu dentro do <strong>Sofia Gastrobar em Ibiza</strong>, testado diariamente com uma equipe real de 15 funcionários.</p>
        
        <blockquote>
          "Precisávamos de algo que motivasse a equipe todos os dias. O ChefIApp faz exatamente isso."
          <cite>— Elder Miranda de Andrade, Fundador</cite>
        </blockquote>
        
        <div class="cta-section">
          <h3>🚀 Pronto para experimentar?</h3>
          <p>Cadastre-se no Early Access e veja a diferença em dias, não meses.</p>
          <a href="/#early-access" class="btn">Testar gratuitamente →</a>
        </div>
        
        <h2>🔗 Outros Comparativos</h2>
        <div class="links">
          <a href="/compare/7shifts.html">vs 7shifts</a>
          <a href="/compare/harri.html">vs Harri</a>
          <a href="/compare/fourth.html">vs Fourth</a>
          <a href="/compare/deputy.html">vs Deputy</a>
          <a href="/guides/gamification-for-restaurants.html">Gamificação →</a>
        </div>
        
      </div>
    </section>
  </main>
  
  <footer>
    <div class="container">
      <p>© 2025 <a href="/">ChefIApp™</a> by <a href="https://goldmonkey.studio" target="_blank">goldmonkey.studio</a></p>
      <p style="margin-top: 0.5rem;">🏝️ From Ibiza with Love</p>
    </div>
  </footer>
</body>
</html>`;
}

// ============================================
// HTML TEMPLATE - INTENT PAGE
// ============================================
function generateIntentPage(intent) {
  const categoryEmoji = intent.category === 'hotel' ? '🏨' : '🍽️';
  const accentColor = intent.category === 'hotel' ? '#a855f7' : '#f97316';
  
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>${intent.title} | ChefIApp — Guia Completo</title>
  <meta name="description" content="${intent.description}" />
  <meta name="keywords" content="${intent.keywords}, chefiapp, gestão equipe hospitality" />
  <meta name="author" content="ChefIApp by goldmonkey.studio" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://chefiapp.com/guides/${intent.slug}.html" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${intent.title} | ChefIApp" />
  <meta property="og:description" content="${intent.description}" />
  <meta property="og:url" content="https://chefiapp.com/guides/${intent.slug}.html" />
  <meta property="og:image" content="https://chefiapp.com/og-image.png" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${intent.title}" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/logo.png" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${intent.title}",
    "description": "${intent.description}",
    "author": { "@type": "Organization", "name": "ChefIApp" },
    "publisher": { "@type": "Organization", "name": "goldmonkey.studio" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-12-04",
    "keywords": "${intent.keywords}"
  }
  </script>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: linear-gradient(180deg, #020617 0%, #0f172a 100%); color: #e2e8f0; line-height: 1.8; min-height: 100vh; }
    .container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }
    header { padding: 1.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); position: sticky; top: 0; background: rgba(2,6,23,0.95); backdrop-filter: blur(20px); z-index: 100; }
    .header-inner { display: flex; align-items: center; justify-content: space-between; }
    .logo { display: flex; align-items: center; gap: 0.5rem; text-decoration: none; font-weight: 700; font-size: 1.25rem; color: white; }
    .logo img { width: 36px; height: 36px; }
    .logo span { color: ${accentColor}; }
    .back-link { color: #94a3b8; text-decoration: none; font-size: 0.875rem; }
    .back-link:hover { color: ${accentColor}; }
    .hero { padding: 4rem 0 3rem; text-align: center; }
    .badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.1); border: 1px solid rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.2); border-radius: 9999px; font-size: 0.875rem; color: ${accentColor}; margin-bottom: 1.5rem; }
    h1 { font-size: clamp(2rem, 5vw, 2.75rem); font-weight: 800; color: white; margin-bottom: 1rem; line-height: 1.2; }
    .subtitle { font-size: 1.125rem; color: #94a3b8; max-width: 600px; margin: 0 auto; }
    .content { padding: 2rem 0 4rem; }
    article { font-size: 1.05rem; }
    h2 { font-size: 1.5rem; font-weight: 700; color: white; margin: 2.5rem 0 1rem; }
    h3 { font-size: 1.25rem; font-weight: 600; color: white; margin: 2rem 0 0.75rem; }
    p { margin-bottom: 1.25rem; color: #cbd5e1; }
    ul, ol { margin: 1rem 0 1.5rem 1.5rem; color: #cbd5e1; }
    li { margin-bottom: 0.5rem; }
    strong { color: white; }
    .highlight-box { background: rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.1); border: 1px solid rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.3); border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; }
    .highlight-box h4 { color: ${accentColor}; font-size: 1.1rem; margin-bottom: 0.75rem; }
    .cta-section { background: linear-gradient(135deg, rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.1) 0%, rgba(${intent.category === 'hotel' ? '249, 115, 22' : '168, 85, 247'}, 0.1) 100%); border: 1px solid rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.3); border-radius: 1.5rem; padding: 3rem 2rem; text-align: center; margin: 3rem 0; }
    .cta-section h3 { font-size: 1.5rem; margin-bottom: 1rem; }
    .cta-section p { color: #94a3b8; margin-bottom: 1.5rem; }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: linear-gradient(135deg, ${accentColor} 0%, ${intent.category === 'hotel' ? '#7c3aed' : '#ea580c'} 100%); color: white; font-weight: 600; text-decoration: none; border-radius: 0.75rem; transition: all 0.2s; box-shadow: 0 10px 30px rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.3); }
    .btn:hover { transform: translateY(-2px); }
    footer { padding: 2rem 0; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: #64748b; font-size: 0.875rem; }
    footer a { color: ${accentColor}; text-decoration: none; }
    .related { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); }
    .related h3 { margin-bottom: 1rem; }
    .related-links { display: flex; flex-wrap: wrap; gap: 0.75rem; }
    .related-links a { color: #94a3b8; text-decoration: none; padding: 0.5rem 1rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem; font-size: 0.9rem; transition: all 0.2s; }
    .related-links a:hover { background: rgba(${intent.category === 'hotel' ? '168, 85, 247' : '249, 115, 22'}, 0.2); color: white; }
    @media (max-width: 640px) { h1 { font-size: 1.75rem; } .cta-section { padding: 2rem 1rem; } }
  </style>
</head>
<body>
  <header>
    <div class="container header-inner">
      <a href="/" class="logo"><img src="/logo.png" alt="ChefIApp">ChefI<span>App</span>™</a>
      <a href="/" class="back-link">← Voltar ao site</a>
    </div>
  </header>
  
  <main>
    <section class="hero">
      <div class="container">
        <div class="badge">${categoryEmoji} Guia Completo</div>
        <h1>${intent.title}</h1>
        <p class="subtitle">${intent.description}</p>
      </div>
    </section>
    
    <section class="content">
      <div class="container">
        <article>
          
          <h2>O Desafio</h2>
          <p>Gerir equipes em hospitality é um dos maiores desafios do setor. Alta rotatividade, turnos complexos, comunicação fragmentada e falta de motivação são problemas que afetam restaurantes, bares e hotéis todos os dias.</p>
          <p>A boa notícia? Existe uma solução moderna que resolve todos esses problemas de uma vez.</p>
          
          <h2>A Solução: Tecnologia + Gamificação</h2>
          <p>O <strong>ChefIApp</strong> combina gestão de tarefas, check-in por GPS, checklists e um sistema único de gamificação para transformar a operação diária do seu negócio.</p>
          
          <div class="highlight-box">
            <h4>🎮 O que é Gamificação?</h4>
            <p style="margin-bottom: 0;">Gamificação é usar elementos de jogos (pontos, níveis, rankings) para motivar pessoas. No contexto de restaurantes, isso significa que seus funcionários ganham XP ao completar tarefas, sobem de nível e competem de forma saudável.</p>
          </div>
          
          <h2>Funcionalidades Essenciais</h2>
          
          <h3>1. Check-in GPS</h3>
          <p>Controle de ponto automático por geolocalização. Sem cartão, sem papel, sem fraude. Quando o funcionário chega no local, o sistema registra automaticamente.</p>
          
          <h3>2. Tarefas e Checklists</h3>
          <p>Organize todas as tarefas do dia: abertura, fechamento, limpeza, mise en place. Cada tarefa completada gera XP para o funcionário.</p>
          
          <h3>3. Rankings e Badges</h3>
          <p>Quem está mandando bem? O ranking mostra. Badges especiais para conquistas: "Pontualidade Perfeita", "Mestre do Prep", "Campeão da Semana".</p>
          
          <h3>4. Dashboard em Tempo Real</h3>
          <p>Veja quem está trabalhando, quais tarefas foram feitas e o status da operação — tudo ao vivo.</p>
          
          <h2>Resultados Reais</h2>
          <ul>
            <li><strong>+40%</strong> de engajamento em tarefas diárias</li>
            <li><strong>-35%</strong> de turnover de funcionários</li>
            <li><strong>Setup em 5 minutos</strong> — sem consultoria</li>
            <li><strong>ROI em 30 dias</strong> — resultados visíveis</li>
          </ul>
          
          <h2>Testado em Operação Real</h2>
          <p>O ChefIApp nasceu no <strong>Sofia Gastrobar em Ibiza</strong>, testado diariamente com uma equipe de 15 funcionários. Cada funcionalidade foi validada no calor da operação.</p>
          
          <div class="cta-section">
            <h3>🚀 Pronto para transformar sua operação?</h3>
            <p>Cadastre-se no Early Access e seja um dos primeiros a usar o ChefIApp.</p>
            <a href="/#early-access" class="btn">Quero testar grátis →</a>
          </div>
          
          <div class="related">
            <h3>📚 Leia também</h3>
            <div class="related-links">
              <a href="/guides/gamification-for-restaurants.html">Gamificação para Restaurantes</a>
              <a href="/guides/gps-checkin-restaurants.html">Check-in GPS</a>
              <a href="/guides/restaurant-task-management.html">Gestão de Tarefas</a>
              <a href="/compare/7shifts.html">ChefIApp vs 7shifts</a>
              <a href="/compare/harri.html">ChefIApp vs Harri</a>
            </div>
          </div>
          
        </article>
      </div>
    </section>
  </main>
  
  <footer>
    <div class="container">
      <p>© 2025 <a href="/">ChefIApp™</a> by <a href="https://goldmonkey.studio" target="_blank">goldmonkey.studio</a></p>
      <p style="margin-top: 0.5rem;">🏝️ From Ibiza with Love</p>
    </div>
  </footer>
</body>
</html>`;
}

// ============================================
// GENERATE SITEMAP
// ============================================
function generateSitemap(competitors, intentPages) {
  const baseUrl = 'https://chefiapp.com';
  const today = new Date().toISOString().split('T')[0];
  
  let urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
  ];
  
  // Add comparison pages
  competitors.forEach(c => {
    urls.push({ loc: `/compare/${c.slug}.html`, priority: '0.8', changefreq: 'monthly' });
  });
  
  // Add intent pages
  intentPages.forEach(i => {
    urls.push({ loc: `/guides/${i.slug}.html`, priority: '0.8', changefreq: 'monthly' });
  });
  
  // Add comparativo pages
  urls.push({ loc: '/comparativo/alternativa-7shifts.html', priority: '0.9', changefreq: 'monthly' });
  urls.push({ loc: '/comparativo/alternativa-software-hotelaria.html', priority: '0.9', changefreq: 'monthly' });
  urls.push({ loc: '/comparativo/gestao-equipe-restaurante.html', priority: '0.9', changefreq: 'monthly' });
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
}

// ============================================
// GENERATE ROBOTS.TXT
// ============================================
function generateRobotsTxt() {
  return `# ChefIApp™ — Robots.txt
# https://chefiapp.com

User-agent: *
Allow: /

# Sitemap
Sitemap: https://chefiapp.com/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1
`;
}

// ============================================
// MAIN EXECUTION
// ============================================
function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const compareDir = path.join(publicDir, 'compare');
  const guidesDir = path.join(publicDir, 'guides');
  
  // Ensure directories exist
  if (!fs.existsSync(compareDir)) fs.mkdirSync(compareDir, { recursive: true });
  if (!fs.existsSync(guidesDir)) fs.mkdirSync(guidesDir, { recursive: true });
  
  console.log('🚀 SEO Dominion System™ — Generating pages...\n');
  
  // Generate comparison pages
  console.log('📊 Generating comparison pages...');
  competitors.forEach(c => {
    const html = generateComparisonPage(c);
    const filePath = path.join(compareDir, `${c.slug}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`  ✓ /compare/${c.slug}.html`);
  });
  
  // Generate intent pages
  console.log('\n📝 Generating intent/guide pages...');
  intentPages.forEach(i => {
    const html = generateIntentPage(i);
    const filePath = path.join(guidesDir, `${i.slug}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`  ✓ /guides/${i.slug}.html`);
  });
  
  // Generate sitemap
  console.log('\n🗺️  Generating sitemap.xml...');
  const sitemap = generateSitemap(competitors, intentPages);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('  ✓ /sitemap.xml');
  
  // Generate robots.txt
  console.log('\n🤖 Generating robots.txt...');
  const robots = generateRobotsTxt();
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('  ✓ /robots.txt');
  
  // Summary
  console.log('\n' + '═'.repeat(50));
  console.log('✨ SEO DOMINION SYSTEM™ — COMPLETE!');
  console.log('═'.repeat(50));
  console.log(`📊 Comparison pages: ${competitors.length}`);
  console.log(`📝 Intent pages: ${intentPages.length}`);
  console.log(`🗺️  Sitemap: 1`);
  console.log(`🤖 Robots.txt: 1`);
  console.log(`📄 Total pages: ${competitors.length + intentPages.length + 4}`);
  console.log('═'.repeat(50));
  console.log('\n🏝️  From Ibiza with Love — goldmonkey.studio\n');
}

main();

