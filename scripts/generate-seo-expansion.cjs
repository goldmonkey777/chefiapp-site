/**
 * SEO Dominion System™ — EXPANSION Pack
 * Generates 100+ SEO pages for total market domination
 * 
 * Run: node scripts/generate-seo-expansion.cjs
 */

const fs = require('fs');
const path = require('path');

// ============================================
// EXPANDED COMPETITORS DATA (ALL CATEGORIES)
// ============================================
const allCompetitors = [
  // === WORKFORCE MANAGEMENT (Direct Competitors) ===
  {
    slug: 'humanity',
    name: 'Humanity',
    category: 'workforce',
    focus: 'Scheduling e shift management para empresas médias',
    strengths: ['Interface limpa', 'Bom para escala', 'Preço competitivo'],
    weaknesses: ['Sem gamificação', 'Genérico (não hospitality)', 'Sem GPS avançado'],
    whyChefIApp: 'Humanity é scheduling genérico. ChefIApp foi feito especificamente para a operação de restaurantes e hotéis, com gamificação que motiva a equipe.'
  },
  {
    slug: 'bamboohr',
    name: 'BambooHR',
    category: 'workforce',
    focus: 'HR completo para pequenas e médias empresas',
    strengths: ['HR completo', 'Onboarding', 'Relatórios de RH'],
    weaknesses: ['Não é para hospitality', 'Sem operações diárias', 'Caro para equipes pequenas'],
    whyChefIApp: 'BambooHR é RH corporativo. ChefIApp é operação diária — tarefas, check-in, gamificação para quem trabalha no chão do restaurante.'
  },
  {
    slug: 'factorial',
    name: 'Factorial',
    category: 'workforce',
    focus: 'HR e gestão de pessoas para PMEs europeias',
    strengths: ['Interface moderna', 'Compliance EU', 'Preço acessível'],
    weaknesses: ['Não é específico hospitality', 'Sem gamificação', 'Foco em RH, não operações'],
    whyChefIApp: 'Factorial é ótimo para RH. Mas restaurantes precisam de gestão de operações diárias, tarefas e motivação — é aí que ChefIApp brilha.'
  },
  {
    slug: 'buddypunch',
    name: 'BuddyPunch',
    category: 'workforce',
    focus: 'Time tracking e punch clock digital',
    strengths: ['Simples de usar', 'GPS tracking', 'Preço baixo'],
    weaknesses: ['Só faz time tracking', 'Sem tarefas', 'Sem gamificação'],
    whyChefIApp: 'BuddyPunch é só relógio de ponto. ChefIApp é relógio de ponto + tarefas + gamificação + dashboard completo.'
  },

  // === RESTAURANT POS & MANAGEMENT ===
  {
    slug: 'toast',
    name: 'Toast',
    category: 'restaurant',
    focus: 'POS e gestão completa para restaurantes (EUA)',
    strengths: ['POS robusto', 'Ecossistema completo', 'Hardware dedicado'],
    weaknesses: ['Caro', 'Só EUA', 'Lock-in no hardware', 'Team management básico'],
    whyChefIApp: 'Toast é POS. ChefIApp é gestão de equipe. São complementares — use Toast para vendas e ChefIApp para motivar e organizar sua equipe.'
  },
  {
    slug: 'square-restaurants',
    name: 'Square for Restaurants',
    category: 'restaurant',
    focus: 'POS simples e acessível para restaurantes',
    strengths: ['Fácil setup', 'Hardware acessível', 'Ecossistema Square'],
    weaknesses: ['Team management limitado', 'Menos features enterprise', 'Mais básico'],
    whyChefIApp: 'Square é POS básico. Para gestão de equipe avançada com gamificação, você precisa de ChefIApp.'
  },
  {
    slug: 'lightspeed-restaurant',
    name: 'Lightspeed Restaurant',
    category: 'restaurant',
    focus: 'POS premium para restaurantes e varejo',
    strengths: ['Interface bonita', 'Analytics avançado', 'Integrações'],
    weaknesses: ['Preço alto', 'Team management básico', 'Curva de aprendizado'],
    whyChefIApp: 'Lightspeed é um excelente POS. ChefIApp complementa com gestão de equipe que o Lightspeed não oferece.'
  },
  {
    slug: 'touchbistro',
    name: 'TouchBistro',
    category: 'restaurant',
    focus: 'POS para iPad focado em restaurantes',
    strengths: ['iPad nativo', 'Offline mode', 'Fácil de usar'],
    weaknesses: ['Sem gestão de equipe', 'Só iOS', 'Integrações limitadas'],
    whyChefIApp: 'TouchBistro é POS. ChefIApp é gestão de equipe. Juntos, cobrem todas as necessidades do restaurante.'
  },
  {
    slug: 'revel-systems',
    name: 'Revel Systems',
    category: 'restaurant',
    focus: 'POS enterprise para food service',
    strengths: ['Enterprise-grade', 'Muitas integrações', 'Robusto'],
    weaknesses: ['Muito caro', 'Complexo', 'Team management básico'],
    whyChefIApp: 'Revel é para grandes operações. ChefIApp traz gestão de equipe moderna para qualquer tamanho de restaurante.'
  },
  {
    slug: 'clover-pos',
    name: 'Clover POS',
    category: 'restaurant',
    focus: 'POS versátil para pequenos negócios',
    strengths: ['Hardware bonito', 'App store', 'Fácil setup'],
    weaknesses: ['Fees altos', 'Team management inexistente', 'Lock-in'],
    whyChefIApp: 'Clover não tem gestão de equipe. ChefIApp preenche essa lacuna com gamificação, GPS e tarefas.'
  },
  {
    slug: 'lavu',
    name: 'Lavu',
    category: 'restaurant',
    focus: 'POS para iPad com foco em bares e restaurantes',
    strengths: ['Bom para bares', 'Inventory management', 'Preço médio'],
    weaknesses: ['Interface datada', 'Sem team management', 'Suporte variável'],
    whyChefIApp: 'Lavu é POS para bares. ChefIApp é gestão de equipe para bares — juntos são imbatíveis.'
  },
  {
    slug: 'poster-pos',
    name: 'Poster POS',
    category: 'restaurant',
    focus: 'POS cloud europeu para restaurantes',
    strengths: ['Preço acessível', 'Cloud nativo', 'Fácil de usar'],
    weaknesses: ['Sem gestão de equipe', 'Menos integrações', 'Menor escala'],
    whyChefIApp: 'Poster é POS simples. ChefIApp adiciona a camada de gestão de equipe que falta.'
  },
  {
    slug: 'kounta',
    name: 'Kounta (Lightspeed K)',
    category: 'restaurant',
    focus: 'POS cloud para hospitality (APAC)',
    strengths: ['Cloud puro', 'Bom para APAC', 'Integrações'],
    weaknesses: ['Agora parte de Lightspeed', 'Sem team management', 'Transição de marca'],
    whyChefIApp: 'Kounta é POS. ChefIApp complementa com gestão de equipe gamificada.'
  },
  {
    slug: 'loyverse',
    name: 'Loyverse',
    category: 'restaurant',
    focus: 'POS gratuito para pequenos negócios',
    strengths: ['Gratuito', 'Simples', 'Bom para começar'],
    weaknesses: ['Muito básico', 'Sem team management', 'Features limitadas'],
    whyChefIApp: 'Loyverse é POS grátis básico. ChefIApp traz gestão de equipe profissional que você vai precisar ao crescer.'
  },
  {
    slug: 'thefork-manager',
    name: 'TheFork Manager',
    category: 'restaurant',
    focus: 'Gestão de reservas e relacionamento (TripAdvisor)',
    strengths: ['Base de clientes TheFork', 'Reservas integradas', 'Marketing'],
    weaknesses: ['Só reservas', 'Sem gestão de equipe', 'Dependência de plataforma'],
    whyChefIApp: 'TheFork é reservas. ChefIApp é equipe. Você precisa dos dois para um restaurante de sucesso.'
  },
  {
    slug: 'flipdish',
    name: 'Flipdish',
    category: 'restaurant',
    focus: 'Pedidos online e delivery próprio para restaurantes',
    strengths: ['Delivery próprio', 'Sem comissões altas', 'Marketing integrado'],
    weaknesses: ['Só delivery/pedidos', 'Sem gestão de equipe', 'Foco limitado'],
    whyChefIApp: 'Flipdish é delivery. ChefIApp é equipe. Você precisa dos dois.'
  },
  {
    slug: 'popmenu',
    name: 'Popmenu',
    category: 'restaurant',
    focus: 'Marketing e presença digital para restaurantes',
    strengths: ['Website bonito', 'SEO para restaurantes', 'Pedidos online'],
    weaknesses: ['Foco em marketing', 'Sem gestão de equipe', 'Preço alto'],
    whyChefIApp: 'Popmenu atrai clientes. ChefIApp garante que sua equipe esteja pronta para atendê-los.'
  },
  {
    slug: 'bentobox',
    name: 'BentoBox',
    category: 'restaurant',
    focus: 'Websites e marketing digital para restaurantes',
    strengths: ['Websites premium', 'SEO', 'Integração com POS'],
    weaknesses: ['Só marketing', 'Sem gestão de equipe', 'Caro'],
    whyChefIApp: 'BentoBox é presença digital. ChefIApp é gestão de operações. Complementares.'
  },

  // === HOTEL & HOSPITALITY ===
  {
    slug: 'opera-pms',
    name: 'Opera PMS (Oracle)',
    category: 'hotel',
    focus: 'PMS enterprise para grandes hotéis',
    strengths: ['Enterprise padrão', 'Muito completo', 'Integrações globais'],
    weaknesses: ['Extremamente caro', 'Implementação longa', 'Staff management básico'],
    whyChefIApp: 'Opera é PMS de hotel. ChefIApp é gestão de equipe. Integram perfeitamente.'
  },
  {
    slug: 'cloudbeds',
    name: 'Cloudbeds',
    category: 'hotel',
    focus: 'PMS cloud para hotéis independentes e hostels',
    strengths: ['Cloud moderno', 'Channel manager', 'Preço justo'],
    weaknesses: ['Staff management limitado', 'Foco em reservas', 'Menos operações'],
    whyChefIApp: 'Cloudbeds gerencia reservas. ChefIApp gerencia quem vai atender essas reservas.'
  },
  {
    slug: 'roomraccoon',
    name: 'RoomRaccoon',
    category: 'hotel',
    focus: 'PMS all-in-one para hotéis boutique',
    strengths: ['Automação', 'Fácil de usar', 'Revenue management'],
    weaknesses: ['Sem gestão de equipe', 'Menor para grandes hotéis', 'Menos integrações'],
    whyChefIApp: 'RoomRaccoon automatiza reservas. ChefIApp automatiza gestão de equipe.'
  },
  {
    slug: 'mews',
    name: 'Mews',
    category: 'hotel',
    focus: 'PMS moderno cloud-native para hotéis',
    strengths: ['Interface moderna', 'API-first', 'Inovador'],
    weaknesses: ['Preço alto', 'Sem staff management', 'Mais jovem no mercado'],
    whyChefIApp: 'Mews é PMS inovador. ChefIApp é staff management inovador. Parceria perfeita.'
  },
  {
    slug: 'guesty',
    name: 'Guesty',
    category: 'hotel',
    focus: 'Property management para short-term rentals',
    strengths: ['Multi-channel', 'Automação', 'Airbnb friendly'],
    weaknesses: ['Foco em rentals', 'Sem staff management', 'Preço variável'],
    whyChefIApp: 'Guesty é para Airbnb. ChefIApp é para equipe de limpeza e manutenção dessas propriedades.'
  },
  {
    slug: 'siteminder',
    name: 'SiteMinder',
    category: 'hotel',
    focus: 'Channel manager e distribuição para hotéis',
    strengths: ['Distribuição global', 'Muitos canais', 'Estabelecido'],
    weaknesses: ['Só distribuição', 'Sem operações', 'Preço por reserva'],
    whyChefIApp: 'SiteMinder distribui quartos. ChefIApp gerencia quem prepara esses quartos.'
  },
  {
    slug: 'amenitiz',
    name: 'Amenitiz',
    category: 'hotel',
    focus: 'PMS europeu para hotéis independentes',
    strengths: ['All-in-one', 'Website builder', 'Suporte EU'],
    weaknesses: ['Sem staff management', 'Menor escala', 'Menos integrações'],
    whyChefIApp: 'Amenitiz é PMS europeu. ChefIApp complementa com gestão de equipe.'
  },
  {
    slug: 'hotelogix',
    name: 'Hotelogix',
    category: 'hotel',
    focus: 'PMS cloud para hotéis pequenos/médios',
    strengths: ['Cloud acessível', 'Fácil setup', 'Bom suporte'],
    weaknesses: ['Sem staff management', 'Interface básica', 'Menos features'],
    whyChefIApp: 'Hotelogix gerencia hotel. ChefIApp gerencia equipe. Ambos necessários.'
  },
  {
    slug: 'innroad',
    name: 'InnRoad',
    category: 'hotel',
    focus: 'PMS para hotéis boutique EUA',
    strengths: ['Fácil de usar', 'Suporte EUA', 'Preço justo'],
    weaknesses: ['Principalmente EUA', 'Sem staff management', 'Menos integrações'],
    whyChefIApp: 'InnRoad é PMS boutique. ChefIApp adiciona gestão de equipe que falta.'
  },

  // === DELIVERY & GHOST KITCHENS ===
  {
    slug: 'otter',
    name: 'Otter',
    category: 'delivery',
    focus: 'Agregador de delivery e gestão de pedidos',
    strengths: ['Multi-plataforma', 'Dashboard único', 'Analytics'],
    weaknesses: ['Só delivery', 'Sem gestão de equipe', 'Depende de marketplaces'],
    whyChefIApp: 'Otter gerencia pedidos de delivery. ChefIApp gerencia quem prepara esses pedidos.'
  },
  {
    slug: 'deliverect',
    name: 'Deliverect',
    category: 'delivery',
    focus: 'Integração de delivery com POS',
    strengths: ['Integração robusta', 'Multi-plataforma', 'Europa e global'],
    weaknesses: ['Só delivery', 'Sem equipe', 'Preço por pedido'],
    whyChefIApp: 'Deliverect integra pedidos. ChefIApp integra sua equipe para executá-los.'
  },
  {
    slug: 'chowly',
    name: 'Chowly',
    category: 'delivery',
    focus: 'Integração delivery para POS EUA',
    strengths: ['Bom para EUA', 'Muitas integrações', 'Setup rápido'],
    weaknesses: ['Só delivery', 'Só EUA', 'Sem staff'],
    whyChefIApp: 'Chowly conecta apps de delivery. ChefIApp conecta sua equipe.'
  },

  // === CHECKLIST & OPERATIONS ===
  {
    slug: 'meazureup',
    name: 'MeazureUp',
    category: 'operations',
    focus: 'Auditorias e checklists para food service',
    strengths: ['Compliance focado', 'Auditorias', 'Relatórios'],
    weaknesses: ['Só checklists', 'Sem gamificação', 'Interface datada'],
    whyChefIApp: 'MeazureUp é auditoria. ChefIApp é operação diária gamificada.'
  },
  {
    slug: 'opsanalitica',
    name: 'OpsAnalitica',
    category: 'operations',
    focus: 'Analytics operacional para restaurantes',
    strengths: ['Analytics profundo', 'Insights operacionais', 'Data-driven'],
    weaknesses: ['Complexo', 'Sem tarefas', 'Sem gamificação'],
    whyChefIApp: 'OpsAnalitica analisa. ChefIApp executa e motiva.'
  },
  {
    slug: 'safetyculture',
    name: 'SafetyCulture (iAuditor)',
    category: 'operations',
    focus: 'Inspeções e auditorias de segurança',
    strengths: ['Líder em inspeções', 'Templates', 'Compliance'],
    weaknesses: ['Foco em safety', 'Sem gamificação', 'Não é hospitality'],
    whyChefIApp: 'SafetyCulture é compliance. ChefIApp é operação diária com motivação.'
  },
  {
    slug: 'manifestly',
    name: 'Manifestly Checklists',
    category: 'operations',
    focus: 'Checklists colaborativos para equipes',
    strengths: ['Simples', 'Colaborativo', 'Preço baixo'],
    weaknesses: ['Muito básico', 'Sem gamificação', 'Sem hospitality features'],
    whyChefIApp: 'Manifestly é checklists simples. ChefIApp é checklists + GPS + gamificação + dashboard.'
  },

  // === GAMIFICATION (ChefIApp's unique space) ===
  {
    slug: 'centrical',
    name: 'Centrical',
    category: 'gamification',
    focus: 'Gamificação e performance para contact centers',
    strengths: ['Gamificação avançada', 'Analytics', 'Enterprise'],
    weaknesses: ['Contact centers', 'Não é hospitality', 'Muito caro'],
    whyChefIApp: 'Centrical é para call centers. ChefIApp é gamificação feita para restaurantes e hotéis.'
  },
  {
    slug: 'axonify',
    name: 'Axonify',
    category: 'gamification',
    focus: 'Microlearning e gamificação corporativa',
    strengths: ['Learning focado', 'Gamificação', 'Enterprise'],
    weaknesses: ['Treinamento apenas', 'Não é operacional', 'Caro'],
    whyChefIApp: 'Axonify treina. ChefIApp motiva a execução diária.'
  },
  {
    slug: 'bravon',
    name: 'Bravon',
    category: 'gamification',
    focus: 'Gamificação para vendas e equipes',
    strengths: ['Interface bonita', 'Rankings', 'Badges'],
    weaknesses: ['Foco em vendas', 'Não é hospitality', 'Menos features operacionais'],
    whyChefIApp: 'Bravon é gamificação genérica. ChefIApp é gamificação feita para a realidade do restaurante.'
  }
];

// ============================================
// "ALTERNATIVES" PAGES DATA
// ============================================
const alternativesPages = [
  { slug: '7shifts', name: '7shifts', query: 'alternativa ao 7shifts' },
  { slug: 'deputy', name: 'Deputy', query: 'alternativa ao deputy' },
  { slug: 'planday', name: 'Planday', query: 'alternativa ao planday' },
  { slug: 'harri', name: 'Harri', query: 'alternativa ao harri' },
  { slug: 'hotschedules', name: 'HotSchedules', query: 'alternativa ao hotschedules' },
  { slug: 'when-i-work', name: 'When I Work', query: 'alternativa ao when i work' },
  { slug: 'sling', name: 'Sling', query: 'alternativa ao sling' },
  { slug: 'homebase', name: 'Homebase', query: 'alternativa ao homebase' },
  { slug: 'connecteam', name: 'Connecteam', query: 'alternativa ao connecteam' },
  { slug: 'jolt', name: 'Jolt', query: 'alternativa ao jolt' },
];

// ============================================
// "BEST OF" PAGES DATA
// ============================================
const bestOfPages = [
  {
    slug: 'melhores-apps-restaurantes-2025',
    title: 'Melhores Apps para Restaurantes 2025',
    titleEn: 'Best Restaurant Apps 2025',
    description: 'Lista completa dos melhores aplicativos para gestão de restaurantes em 2025. Comparativo com preços, features e avaliações.',
    keywords: 'melhores apps restaurante 2025, melhor software restaurante, top apps restaurante'
  },
  {
    slug: 'melhores-softwares-gestao-equipe-hospitality',
    title: 'Melhores Softwares de Gestão de Equipe para Hospitality',
    titleEn: 'Best Hospitality Workforce Management Software',
    description: 'Comparativo dos melhores softwares de gestão de equipe para restaurantes, hotéis e hospitality. 7shifts, Harri, Deputy e mais.',
    keywords: 'melhor software gestão equipe, workforce management hospitality, software horeca'
  },
  {
    slug: 'melhores-apps-checklist-cozinha',
    title: 'Melhores Apps de Checklist para Cozinha',
    titleEn: 'Best Kitchen Checklist Apps',
    description: 'Os melhores aplicativos de checklist para cozinha profissional. Abertura, fechamento, HACCP, mise en place.',
    keywords: 'app checklist cozinha, checklist restaurante app, app mise en place'
  },
  {
    slug: 'melhores-apps-controle-ponto-restaurante',
    title: 'Melhores Apps de Controle de Ponto para Restaurantes',
    titleEn: 'Best Time Clock Apps for Restaurants',
    description: 'Comparativo dos melhores apps de controle de ponto e timesheet para restaurantes. GPS, biometria e mais.',
    keywords: 'app controle ponto restaurante, timesheet restaurante, ponto digital restaurante'
  },
  {
    slug: 'melhores-softwares-hotel-2025',
    title: 'Melhores Softwares para Hotéis 2025',
    titleEn: 'Best Hotel Software 2025',
    description: 'Lista dos melhores softwares para gestão de hotéis em 2025. PMS, channel manager, staff management e mais.',
    keywords: 'melhor software hotel 2025, pms hotel, software hotelaria'
  },
  {
    slug: 'melhores-apps-gamificacao-empresas',
    title: 'Melhores Apps de Gamificação para Empresas',
    titleEn: 'Best Gamification Apps for Business',
    description: 'Os melhores apps de gamificação para motivar equipes. Rankings, badges, XP e recompensas.',
    keywords: 'app gamificação empresa, gamification software, motivação equipe app'
  }
];

// ============================================
// HTML TEMPLATE - COMPARISON PAGE
// ============================================
function generateComparisonPage(competitor) {
  const categoryColors = {
    workforce: { accent: '#f97316', rgb: '249, 115, 22' },
    restaurant: { accent: '#22c55e', rgb: '34, 197, 94' },
    hotel: { accent: '#a855f7', rgb: '168, 85, 247' },
    delivery: { accent: '#3b82f6', rgb: '59, 130, 246' },
    operations: { accent: '#eab308', rgb: '234, 179, 8' },
    gamification: { accent: '#ec4899', rgb: '236, 72, 153' }
  };
  
  const colors = categoryColors[competitor.category] || categoryColors.workforce;
  const categoryEmojis = {
    workforce: '👥',
    restaurant: '🍽️',
    hotel: '🏨',
    delivery: '🚚',
    operations: '📋',
    gamification: '🎮'
  };
  const emoji = categoryEmojis[competitor.category] || '💼';
  
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ChefIApp vs ${competitor.name} — Comparativo 2025 | Alternativa</title>
  <meta name="description" content="Comparativo: ChefIApp vs ${competitor.name}. ${competitor.focus}. Descubra qual é melhor para o seu negócio de hospitality." />
  <meta name="keywords" content="alternativa ${competitor.slug}, ${competitor.slug} vs chefiapp, melhor que ${competitor.slug}, ${competitor.name} alternative, comparativo ${competitor.slug}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://chefiapp.com/compare/${competitor.slug}.html" />
  <meta property="og:title" content="ChefIApp vs ${competitor.name} — Qual Escolher?" />
  <meta property="og:description" content="Comparativo entre ChefIApp e ${competitor.name} para gestão de hospitality." />
  <meta property="og:url" content="https://chefiapp.com/compare/${competitor.slug}.html" />
  <meta property="og:image" content="https://chefiapp.com/og-image.png" />
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Article","headline":"ChefIApp vs ${competitor.name}","author":{"@type":"Organization","name":"ChefIApp"},"datePublished":"2025-01-01","dateModified":"2025-12-04"}
  </script>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:linear-gradient(180deg,#020617 0%,#0f172a 100%);color:#e2e8f0;line-height:1.7;min-height:100vh}.container{max-width:900px;margin:0 auto;padding:0 1.5rem}header{padding:1.5rem 0;border-bottom:1px solid rgba(255,255,255,.1);position:sticky;top:0;background:rgba(2,6,23,.95);backdrop-filter:blur(20px);z-index:100}.header-inner{display:flex;align-items:center;justify-content:space-between}.logo{display:flex;align-items:center;gap:.5rem;text-decoration:none;font-weight:700;font-size:1.25rem;color:#fff}.logo img{width:36px;height:36px}.logo span{color:${colors.accent}}.back-link{color:#94a3b8;text-decoration:none;font-size:.875rem}.back-link:hover{color:${colors.accent}}.hero{padding:4rem 0 3rem;text-align:center}.badge{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:rgba(${colors.rgb},.1);border:1px solid rgba(${colors.rgb},.2);border-radius:9999px;font-size:.875rem;color:${colors.accent};margin-bottom:1.5rem}h1{font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#fff;margin-bottom:1rem;line-height:1.2}h1 .hl{color:${colors.accent}}.subtitle{font-size:1.125rem;color:#94a3b8;max-width:600px;margin:0 auto}.content{padding:2rem 0 4rem}h2{font-size:1.75rem;font-weight:700;color:#fff;margin:3rem 0 1.5rem;padding-bottom:.75rem;border-bottom:2px solid rgba(${colors.rgb},.3)}h3{font-size:1.25rem;font-weight:600;color:#fff;margin:2rem 0 1rem}p{margin-bottom:1rem;color:#cbd5e1}.card{background:rgba(15,23,42,.6);border:1px solid rgba(255,255,255,.1);border-radius:1rem;padding:1.5rem;margin:1.5rem 0}.card.green{border-color:rgba(34,197,94,.3);background:rgba(34,197,94,.05)}.card.accent{border-color:rgba(${colors.rgb},.3);background:rgba(${colors.rgb},.05)}.card.red{border-color:rgba(239,68,68,.3);background:rgba(239,68,68,.05)}.card h4{font-size:1.125rem;font-weight:600;margin-bottom:1rem}.card.green h4{color:#4ade80}.card.accent h4{color:${colors.accent}}.card.red h4{color:#f87171}ul{margin:1rem 0 1.5rem 1.5rem;color:#cbd5e1}li{margin-bottom:.5rem}.table-wrapper{overflow-x:auto;margin:2rem 0;border-radius:1rem;border:1px solid rgba(255,255,255,.1)}table{width:100%;border-collapse:collapse;font-size:.9rem}th,td{padding:1rem;text-align:left;border-bottom:1px solid rgba(255,255,255,.1)}th{background:rgba(${colors.rgb},.1);color:#fff;font-weight:600}td{color:#cbd5e1}.check{color:#4ade80;font-weight:700}.partial{color:#fbbf24}.cross{color:#f87171}.cta-section{background:linear-gradient(135deg,rgba(${colors.rgb},.1) 0%,rgba(168,85,247,.1) 100%);border:1px solid rgba(${colors.rgb},.3);border-radius:1.5rem;padding:3rem 2rem;text-align:center;margin:3rem 0}.cta-section h3{font-size:1.5rem;margin-bottom:1rem}.cta-section p{color:#94a3b8;margin-bottom:1.5rem}.btn{display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;background:linear-gradient(135deg,${colors.accent} 0%,#ea580c 100%);color:#fff;font-weight:600;text-decoration:none;border-radius:.75rem;transition:all .2s;box-shadow:0 10px 30px rgba(${colors.rgb},.3)}.btn:hover{transform:translateY(-2px)}footer{padding:2rem 0;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:.875rem}footer a{color:${colors.accent};text-decoration:none}blockquote{border-left:4px solid ${colors.accent};padding-left:1.5rem;margin:2rem 0;font-style:italic;color:#94a3b8}blockquote cite{display:block;margin-top:.5rem;font-style:normal;font-weight:600;color:#fff}.links{margin-top:2rem;display:flex;flex-wrap:wrap;gap:.5rem}.links a{color:#94a3b8;text-decoration:none;padding:.5rem 1rem;background:rgba(255,255,255,.05);border-radius:.5rem;font-size:.875rem}.links a:hover{background:rgba(${colors.rgb},.2);color:#fff}@media(max-width:640px){h1{font-size:1.75rem}.cta-section{padding:2rem 1rem}}
  </style>
</head>
<body>
  <header><div class="container header-inner"><a href="/" class="logo"><img src="/logo.png" alt="ChefIApp">ChefI<span>App</span>™</a><a href="/" class="back-link">← Voltar</a></div></header>
  <main>
    <section class="hero"><div class="container">
      <div class="badge">${emoji} Comparativo 2025</div>
      <h1>ChefIApp vs ${competitor.name}:<br><span class="hl">Qual Escolher?</span></h1>
      <p class="subtitle">${competitor.focus}. Comparativo completo para ajudar sua decisão.</p>
    </div></section>
    <section class="content"><div class="container">
      <h2>🎯 Sobre o ${competitor.name}</h2>
      <p><strong>${competitor.name}</strong> é focado em: <em>${competitor.focus}</em>.</p>
      <div class="card green"><h4>✅ Pontos fortes</h4><ul>${competitor.strengths.map(s=>`<li>${s}</li>`).join('')}</ul></div>
      <div class="card red"><h4>⚠️ Limitações</h4><ul>${competitor.weaknesses.map(w=>`<li>${w}</li>`).join('')}</ul></div>
      <h2>🆚 Tabela Comparativa</h2>
      <div class="table-wrapper"><table><thead><tr><th>Feature</th><th>${competitor.name}</th><th>ChefIApp</th></tr></thead><tbody>
        <tr><td>Gamificação (XP, Níveis)</td><td class="cross">✗</td><td class="check">✓</td></tr>
        <tr><td>Check-in GPS</td><td class="partial">◐</td><td class="check">✓</td></tr>
        <tr><td>Tarefas Diárias</td><td class="partial">◐</td><td class="check">✓</td></tr>
        <tr><td>Rankings e Badges</td><td class="cross">✗</td><td class="check">✓</td></tr>
        <tr><td>Setup em 5 minutos</td><td class="cross">✗</td><td class="check">✓</td></tr>
        <tr><td>Foco Hospitality</td><td class="check">✓</td><td class="check">✓</td></tr>
      </tbody></table></div>
      <h2>💡 Por que ChefIApp?</h2>
      <div class="card accent"><h4>🚀 O Diferencial</h4><p>${competitor.whyChefIApp}</p></div>
      <blockquote>"O ChefIApp mudou a forma como gerimos a equipe. Gamificação e GPS tornaram tudo mais simples."<cite>— Elder Miranda, Sofia Gastrobar Ibiza</cite></blockquote>
      <div class="cta-section"><h3>🚀 Experimente grátis</h3><p>Cadastre-se no Early Access e veja a diferença.</p><a href="/#early-access" class="btn">Testar gratuitamente →</a></div>
      <h2>🔗 Outros Comparativos</h2>
      <div class="links">
        <a href="/compare/7shifts.html">vs 7shifts</a>
        <a href="/compare/harri.html">vs Harri</a>
        <a href="/compare/deputy.html">vs Deputy</a>
        <a href="/compare/toast.html">vs Toast</a>
        <a href="/compare/cloudbeds.html">vs Cloudbeds</a>
        <a href="/melhores/melhores-apps-restaurantes-2025.html">Melhores Apps →</a>
      </div>
    </div></section>
  </main>
  <footer><div class="container"><p>© 2025 <a href="/">ChefIApp™</a> by <a href="https://goldmonkey.studio">goldmonkey.studio</a></p><p style="margin-top:.5rem">🏝️ From Ibiza with Love</p></div></footer>
</body>
</html>`;
}

// ============================================
// HTML TEMPLATE - ALTERNATIVES PAGE
// ============================================
function generateAlternativesPage(alt) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Alternativa ao ${alt.name} — ChefIApp é a Melhor Opção 2025</title>
  <meta name="description" content="Procurando ${alt.query}? ChefIApp é a melhor alternativa com gamificação, GPS e tarefas. Compare e veja por que somos melhores." />
  <meta name="keywords" content="${alt.query}, alternativa ${alt.slug}, substituir ${alt.slug}, melhor que ${alt.slug}, ${alt.name} alternative" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://chefiapp.com/alternativas/${alt.slug}.html" />
  <meta property="og:title" content="Alternativa ao ${alt.name} — ChefIApp 2025" />
  <meta property="og:url" content="https://chefiapp.com/alternativas/${alt.slug}.html" />
  <meta property="og:image" content="https://chefiapp.com/og-image.png" />
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:linear-gradient(180deg,#020617 0%,#0f172a 100%);color:#e2e8f0;line-height:1.7;min-height:100vh}.container{max-width:900px;margin:0 auto;padding:0 1.5rem}header{padding:1.5rem 0;border-bottom:1px solid rgba(255,255,255,.1);position:sticky;top:0;background:rgba(2,6,23,.95);backdrop-filter:blur(20px);z-index:100}.header-inner{display:flex;align-items:center;justify-content:space-between}.logo{display:flex;align-items:center;gap:.5rem;text-decoration:none;font-weight:700;font-size:1.25rem;color:#fff}.logo img{width:36px;height:36px}.logo span{color:#f97316}.back-link{color:#94a3b8;text-decoration:none;font-size:.875rem}.back-link:hover{color:#f97316}.hero{padding:4rem 0 3rem;text-align:center}.badge{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.2);border-radius:9999px;font-size:.875rem;color:#4ade80;margin-bottom:1.5rem}h1{font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#fff;margin-bottom:1rem;line-height:1.2}h1 .hl{color:#f97316}.subtitle{font-size:1.125rem;color:#94a3b8;max-width:600px;margin:0 auto}.content{padding:2rem 0 4rem}h2{font-size:1.75rem;font-weight:700;color:#fff;margin:3rem 0 1.5rem;padding-bottom:.75rem;border-bottom:2px solid rgba(249,115,22,.3)}p{margin-bottom:1rem;color:#cbd5e1}ul{margin:1rem 0 1.5rem 1.5rem;color:#cbd5e1}li{margin-bottom:.5rem}.card{background:rgba(15,23,42,.6);border:1px solid rgba(255,255,255,.1);border-radius:1rem;padding:1.5rem;margin:1.5rem 0}.card.orange{border-color:rgba(249,115,22,.3);background:rgba(249,115,22,.05)}.card h4{font-size:1.125rem;font-weight:600;margin-bottom:1rem;color:#fb923c}.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin:2rem 0}.feature{background:rgba(15,23,42,.6);border:1px solid rgba(255,255,255,.1);border-radius:1rem;padding:1.25rem;text-align:center}.feature .icon{font-size:2rem;margin-bottom:.5rem}.feature h4{color:#fff;font-size:1rem;margin-bottom:.25rem}.feature p{color:#94a3b8;font-size:.875rem;margin:0}.cta-section{background:linear-gradient(135deg,rgba(249,115,22,.1) 0%,rgba(34,197,94,.1) 100%);border:1px solid rgba(249,115,22,.3);border-radius:1.5rem;padding:3rem 2rem;text-align:center;margin:3rem 0}.cta-section h3{font-size:1.5rem;margin-bottom:1rem;color:#fff}.cta-section p{color:#94a3b8;margin-bottom:1.5rem}.btn{display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);color:#fff;font-weight:600;text-decoration:none;border-radius:.75rem;transition:all .2s;box-shadow:0 10px 30px rgba(249,115,22,.3)}.btn:hover{transform:translateY(-2px)}footer{padding:2rem 0;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:.875rem}footer a{color:#f97316;text-decoration:none}@media(max-width:640px){h1{font-size:1.75rem}.cta-section{padding:2rem 1rem}}
  </style>
</head>
<body>
  <header><div class="container header-inner"><a href="/" class="logo"><img src="/logo.png" alt="ChefIApp">ChefI<span>App</span>™</a><a href="/" class="back-link">← Voltar</a></div></header>
  <main>
    <section class="hero"><div class="container">
      <div class="badge">✅ Alternativa #1</div>
      <h1>Procurando uma<br><span class="hl">Alternativa ao ${alt.name}?</span></h1>
      <p class="subtitle">ChefIApp é a alternativa moderna com gamificação, check-in GPS e gestão de tarefas para restaurantes e hotéis.</p>
    </div></section>
    <section class="content"><div class="container">
      <h2>Por que trocar o ${alt.name}?</h2>
      <p>O ${alt.name} é uma boa ferramenta, mas muitos restaurantes e hotéis procuram uma <strong>alternativa</strong> por diversos motivos:</p>
      <ul>
        <li>Falta de gamificação para motivar a equipe</li>
        <li>Check-in GPS limitado ou inexistente</li>
        <li>Interface complexa ou datada</li>
        <li>Preço alto para o que oferece</li>
        <li>Foco genérico, não específico para hospitality</li>
      </ul>
      
      <h2>ChefIApp: A Alternativa Moderna</h2>
      <div class="features">
        <div class="feature"><div class="icon">🎮</div><h4>Gamificação</h4><p>XP, níveis, badges e rankings</p></div>
        <div class="feature"><div class="icon">📍</div><h4>Check-in GPS</h4><p>Controle de ponto por localização</p></div>
        <div class="feature"><div class="icon">✅</div><h4>Tarefas</h4><p>Checklists e tarefas diárias</p></div>
        <div class="feature"><div class="icon">📊</div><h4>Dashboard</h4><p>Métricas em tempo real</p></div>
        <div class="feature"><div class="icon">⚡</div><h4>Setup Rápido</h4><p>5 minutos para começar</p></div>
        <div class="feature"><div class="icon">🌍</div><h4>Multi-idioma</h4><p>PT, EN, ES</p></div>
      </div>
      
      <div class="card orange">
        <h4>🏆 Por que ChefIApp é melhor que ${alt.name}?</h4>
        <p>ChefIApp foi criado especificamente para restaurantes, bares e hotéis. Nasceu dentro de um restaurante real (Sofia Gastrobar em Ibiza) e cada feature foi testada na operação do dia a dia.</p>
        <p>Diferente do ${alt.name}, o ChefIApp foca em <strong>motivar sua equipe</strong> com gamificação, não apenas controlar.</p>
      </div>
      
      <div class="cta-section">
        <h3>🚀 Experimente a Alternativa</h3>
        <p>Cadastre-se no Early Access e veja por que centenas de restaurantes estão migrando para o ChefIApp.</p>
        <a href="/#early-access" class="btn">Testar ChefIApp grátis →</a>
      </div>
    </div></section>
  </main>
  <footer><div class="container"><p>© 2025 <a href="/">ChefIApp™</a> by <a href="https://goldmonkey.studio">goldmonkey.studio</a></p><p style="margin-top:.5rem">🏝️ From Ibiza with Love</p></div></footer>
</body>
</html>`;
}

// ============================================
// HTML TEMPLATE - BEST OF PAGE
// ============================================
function generateBestOfPage(best) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${best.title} | Comparativo Completo</title>
  <meta name="description" content="${best.description}" />
  <meta name="keywords" content="${best.keywords}, chefiapp" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://chefiapp.com/melhores/${best.slug}.html" />
  <meta property="og:title" content="${best.title}" />
  <meta property="og:description" content="${best.description}" />
  <meta property="og:url" content="https://chefiapp.com/melhores/${best.slug}.html" />
  <meta property="og:image" content="https://chefiapp.com/og-image.png" />
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Article","headline":"${best.title}","author":{"@type":"Organization","name":"ChefIApp"},"datePublished":"2025-01-01","dateModified":"2025-12-04"}
  </script>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:linear-gradient(180deg,#020617 0%,#0f172a 100%);color:#e2e8f0;line-height:1.8;min-height:100vh}.container{max-width:900px;margin:0 auto;padding:0 1.5rem}header{padding:1.5rem 0;border-bottom:1px solid rgba(255,255,255,.1);position:sticky;top:0;background:rgba(2,6,23,.95);backdrop-filter:blur(20px);z-index:100}.header-inner{display:flex;align-items:center;justify-content:space-between}.logo{display:flex;align-items:center;gap:.5rem;text-decoration:none;font-weight:700;font-size:1.25rem;color:#fff}.logo img{width:36px;height:36px}.logo span{color:#f97316}.back-link{color:#94a3b8;text-decoration:none;font-size:.875rem}.back-link:hover{color:#f97316}.hero{padding:4rem 0 3rem;text-align:center}.badge{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.2);border-radius:9999px;font-size:.875rem;color:#fb923c;margin-bottom:1.5rem}h1{font-size:clamp(2rem,5vw,2.75rem);font-weight:800;color:#fff;margin-bottom:1rem;line-height:1.2}.subtitle{font-size:1.125rem;color:#94a3b8;max-width:600px;margin:0 auto}.content{padding:2rem 0 4rem}h2{font-size:1.5rem;font-weight:700;color:#fff;margin:2.5rem 0 1rem}h3{font-size:1.25rem;font-weight:600;color:#fff;margin:2rem 0 .75rem}p{margin-bottom:1.25rem;color:#cbd5e1}ul,ol{margin:1rem 0 1.5rem 1.5rem;color:#cbd5e1}li{margin-bottom:.5rem}.app-card{background:rgba(15,23,42,.6);border:1px solid rgba(255,255,255,.1);border-radius:1rem;padding:1.5rem;margin:1.5rem 0;display:flex;gap:1.5rem;align-items:flex-start}.app-card.featured{border-color:rgba(249,115,22,.3);background:rgba(249,115,22,.05)}.app-card .rank{font-size:2rem;font-weight:800;color:#f97316;min-width:50px}.app-card .info h4{color:#fff;font-size:1.125rem;margin-bottom:.5rem}.app-card .info p{margin:0;font-size:.9rem}.app-card .badge-featured{background:#f97316;color:#fff;font-size:.7rem;padding:.25rem .5rem;border-radius:.25rem;margin-left:.5rem}.cta-section{background:linear-gradient(135deg,rgba(249,115,22,.1) 0%,rgba(168,85,247,.1) 100%);border:1px solid rgba(249,115,22,.3);border-radius:1.5rem;padding:3rem 2rem;text-align:center;margin:3rem 0}.cta-section h3{font-size:1.5rem;margin-bottom:1rem;color:#fff}.cta-section p{color:#94a3b8;margin-bottom:1.5rem}.btn{display:inline-flex;align-items:center;gap:.5rem;padding:1rem 2rem;background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);color:#fff;font-weight:600;text-decoration:none;border-radius:.75rem;transition:all .2s;box-shadow:0 10px 30px rgba(249,115,22,.3)}.btn:hover{transform:translateY(-2px)}footer{padding:2rem 0;border-top:1px solid rgba(255,255,255,.1);text-align:center;color:#64748b;font-size:.875rem}footer a{color:#f97316;text-decoration:none}@media(max-width:640px){h1{font-size:1.75rem}.cta-section{padding:2rem 1rem}.app-card{flex-direction:column}.app-card .rank{min-width:auto}}
  </style>
</head>
<body>
  <header><div class="container header-inner"><a href="/" class="logo"><img src="/logo.png" alt="ChefIApp">ChefI<span>App</span>™</a><a href="/" class="back-link">← Voltar</a></div></header>
  <main>
    <section class="hero"><div class="container">
      <div class="badge">🏆 Ranking 2025</div>
      <h1>${best.title}</h1>
      <p class="subtitle">${best.description}</p>
    </div></section>
    <section class="content"><div class="container">
      <h2>O que avaliamos</h2>
      <p>Analisamos dezenas de ferramentas baseados em: <strong>facilidade de uso</strong>, <strong>features para hospitality</strong>, <strong>preço</strong>, <strong>suporte</strong> e <strong>inovação</strong>.</p>
      
      <h2>🏆 Top Recomendações</h2>
      
      <div class="app-card featured">
        <div class="rank">#1</div>
        <div class="info">
          <h4>ChefIApp <span class="badge-featured">Recomendado</span></h4>
          <p>O único com gamificação real + GPS + tarefas diárias para hospitality. Criado dentro de um restaurante em Ibiza.</p>
        </div>
      </div>
      
      <div class="app-card">
        <div class="rank">#2</div>
        <div class="info">
          <h4>7shifts</h4>
          <p>Bom para scheduling e payroll nos EUA/Canadá. Menos features de gamificação e operações diárias.</p>
        </div>
      </div>
      
      <div class="app-card">
        <div class="rank">#3</div>
        <div class="info">
          <h4>Deputy</h4>
          <p>Workforce management genérico com time tracking. Não é específico para hospitality.</p>
        </div>
      </div>
      
      <div class="app-card">
        <div class="rank">#4</div>
        <div class="info">
          <h4>Harri</h4>
          <p>Enterprise HCM para grandes redes. Caro e complexo para restaurantes independentes.</p>
        </div>
      </div>
      
      <div class="app-card">
        <div class="rank">#5</div>
        <div class="info">
          <h4>Planday</h4>
          <p>Scheduling europeu com foco em compliance. Sem gamificação ou features de operação diária.</p>
        </div>
      </div>
      
      <h2>Critérios de Avaliação</h2>
      <ul>
        <li><strong>Gamificação:</strong> XP, níveis, badges, rankings para motivar equipe</li>
        <li><strong>Check-in GPS:</strong> Controle de ponto por geolocalização</li>
        <li><strong>Tarefas:</strong> Checklists e gestão de tarefas diárias</li>
        <li><strong>Preço:</strong> Custo-benefício para equipes pequenas/médias</li>
        <li><strong>Setup:</strong> Tempo de implementação</li>
        <li><strong>Suporte:</strong> Disponibilidade e qualidade do suporte</li>
      </ul>
      
      <div class="cta-section">
        <h3>🚀 Experimente o #1 do Ranking</h3>
        <p>Cadastre-se no Early Access do ChefIApp e veja por que somos a escolha #1 para gestão de equipe em hospitality.</p>
        <a href="/#early-access" class="btn">Testar ChefIApp grátis →</a>
      </div>
    </div></section>
  </main>
  <footer><div class="container"><p>© 2025 <a href="/">ChefIApp™</a> by <a href="https://goldmonkey.studio">goldmonkey.studio</a></p><p style="margin-top:.5rem">🏝️ From Ibiza with Love</p></div></footer>
</body>
</html>`;
}

// ============================================
// UPDATE SITEMAP
// ============================================
function updateSitemap(competitors, alternatives, bestOf) {
  const baseUrl = 'https://chefiapp.com';
  const today = new Date().toISOString().split('T')[0];
  
  let urls = [
    { loc: '/', priority: '1.0' },
    { loc: '/comparativo/alternativa-7shifts.html', priority: '0.9' },
    { loc: '/comparativo/alternativa-software-hotelaria.html', priority: '0.9' },
    { loc: '/comparativo/gestao-equipe-restaurante.html', priority: '0.9' },
  ];
  
  // Existing compare pages
  const existingCompare = ['7shifts','harri','fourth','unifocus','hotschedules','helloshift','stay','wheniwork','deputy','planday','homebase','toast-team','square-shifts','workforce-com','zoho-people','jolt','hotelkit','alice','sling','connecteam'];
  existingCompare.forEach(c => urls.push({ loc: `/compare/${c}.html`, priority: '0.8' }));
  
  // New compare pages
  competitors.forEach(c => urls.push({ loc: `/compare/${c.slug}.html`, priority: '0.8' }));
  
  // Existing guides
  const existingGuides = ['best-app-for-restaurants','restaurant-checklist-app','workforce-management-hospitality','gamification-for-restaurants','gps-checkin-restaurants','team-ranking-hospitality','restaurant-task-management','hotel-staff-management','bar-staff-app','catering-workforce-management','restaurant-employee-scheduling','hospitality-software-comparison','restaurant-operations-software','hotel-task-management','restaurant-team-motivation','reduce-restaurant-turnover','digital-timesheet-restaurants','restaurant-communication-app','kitchen-staff-management','hospitality-employee-engagement'];
  existingGuides.forEach(g => urls.push({ loc: `/guides/${g}.html`, priority: '0.8' }));
  
  // Alternatives pages
  alternatives.forEach(a => urls.push({ loc: `/alternativas/${a.slug}.html`, priority: '0.85' }));
  
  // Best of pages
  bestOf.forEach(b => urls.push({ loc: `/melhores/${b.slug}.html`, priority: '0.85' }));
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
}

// ============================================
// MAIN EXECUTION
// ============================================
function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const compareDir = path.join(publicDir, 'compare');
  const alternativasDir = path.join(publicDir, 'alternativas');
  const melhoresDir = path.join(publicDir, 'melhores');
  
  // Ensure directories exist
  [compareDir, alternativasDir, melhoresDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
  
  console.log('🚀 SEO DOMINION SYSTEM™ — EXPANSION PACK\n');
  console.log('═'.repeat(50));
  
  // Generate new comparison pages
  console.log('\n📊 Generating NEW comparison pages...');
  let compareCount = 0;
  allCompetitors.forEach(c => {
    const existingPath = path.join(compareDir, `${c.slug}.html`);
    if (!fs.existsSync(existingPath)) {
      const html = generateComparisonPage(c);
      fs.writeFileSync(existingPath, html);
      console.log(`  ✓ /compare/${c.slug}.html`);
      compareCount++;
    }
  });
  console.log(`  → ${compareCount} new comparison pages created`);
  
  // Generate alternatives pages
  console.log('\n🔄 Generating ALTERNATIVES pages...');
  alternativesPages.forEach(alt => {
    const html = generateAlternativesPage(alt);
    const filePath = path.join(alternativasDir, `${alt.slug}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`  ✓ /alternativas/${alt.slug}.html`);
  });
  
  // Generate best of pages
  console.log('\n🏆 Generating BEST OF pages...');
  bestOfPages.forEach(best => {
    const html = generateBestOfPage(best);
    const filePath = path.join(melhoresDir, `${best.slug}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`  ✓ /melhores/${best.slug}.html`);
  });
  
  // Update sitemap
  console.log('\n🗺️  Updating sitemap.xml...');
  const sitemap = updateSitemap(allCompetitors, alternativesPages, bestOfPages);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('  ✓ /sitemap.xml updated');
  
  // Summary
  console.log('\n' + '═'.repeat(50));
  console.log('✨ EXPANSION PACK — COMPLETE!');
  console.log('═'.repeat(50));
  console.log(`📊 New comparison pages: ${compareCount}`);
  console.log(`🔄 Alternatives pages: ${alternativesPages.length}`);
  console.log(`🏆 Best of pages: ${bestOfPages.length}`);
  console.log(`📄 Total NEW pages: ${compareCount + alternativesPages.length + bestOfPages.length}`);
  console.log('═'.repeat(50));
  console.log('\n🏝️  From Ibiza with Love — goldmonkey.studio\n');
}

main();

